export const meta = {
  name: 'council-product',
  description: 'Совет 16 книжных советников по продуктовому строительству: fan-out → cross-verify claims → validator-синтез',
  phases: [
    { title: 'Fan-out', detail: '16 советников читают свою книгу и дают принципы (параллельно)' },
    { title: 'Cross-verify', detail: 'curator выделяет consensus/conflict-claims → 3 скептика на claim, мажоритарное голосование' },
    { title: 'Synthesize', detail: 'validator взвешивает советы, пишет единый вердикт в workDir' },
  ],
}

// args может прийти JSON-строкой (харнесс не парсит нетипизированный параметр) — шим как в full-research-core.js
const A = (() => { try { return typeof args === 'string' ? JSON.parse(args) : (args || {}) } catch (e) { return {} } })()
// Корень плагина: ${CLAUDE_PLUGIN_ROOT} в JS не подставляется — скилл передаёт значением.
const PLUGIN_ROOT = A.pluginRoot || '.'
const QUERY = A.query || 'Как выбрать нишу и дойти до первых платящих клиентов для микро-SaaS?'
const USER_CONTEXT = A.userContext || 'Контекст не задан (dry-run).'
const QUORUM = A.quorum || 11
const WORK_DIR = A.workDir || 'adv-product/.tmp-council-dryrun'
const SKEPTICS = 3
const MAX_CLAIMS = 12

// Воркер: пиннинг Opus 5 + effort xhigh через субагента advisor-opus-xhigh.
// Реестр агентов кэшируется на старте сессии — если субагент создан в текущей сессии,
// оркестратор может передать workerOpts: { model: 'opus' } как фоллбэк.
const WORKER_OPTS = A.workerOpts || { agentType: 'advisors:advisor-opus-xhigh' }
const w = extra => Object.assign({}, WORKER_OPTS, extra)

// Хвост ролевого промпта для headless-исполнения (нет StructuredOutput — финал печатается JSON-блоком)

// 16 советников. Skill резолвит plugin-пути с preflight и передаёт уже конкретный список.
// role — роль-модификатор (инъецируется в промпт советника); у ядра поле отсутствует.
// Канонический реестр советников живёт в SKILL.md скилла `adv-product` — он резолвит
// plugin-пути с preflight и передаёт готовый список в args.advisors. Второй копии здесь
// нет намеренно: дублированный реестр расходился с каноном при каждом version bump.
const ADVISORS = A.advisors
if (!Array.isArray(ADVISORS) || !ADVISORS.length) {
  throw new Error('args.advisors пуст: реестр советников передаёт скилл adv-product, workflow своего списка не держит')
}

// ── Схемы ──
const ADVISOR_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    slug: { type: 'string' },
    book: { type: 'string' },
    principles: {
      type: 'array',
      description: '3-5 самых релевантных принципов из этой книги',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          tag: { type: 'string', description: 'citation tag, напр. [MT:R1]' },
          recommendation: { type: 'string', description: 'что конкретно делать' },
          example: { type: 'string', description: 'кейс/пример из книги' },
          risk: { type: 'string', description: 'что может пойти не так' },
        },
        required: ['tag', 'recommendation', 'example', 'risk'],
      },
    },
    assessment: { type: 'string', description: '1-2 абзаца: как эта книга видит ситуацию' },
    confidence: { type: 'string', enum: ['HIGH', 'MEDIUM', 'LOW'] },
    fileWritten: { type: 'string', description: 'путь к записанному .md файлу' },
  },
  required: ['slug', 'book', 'principles', 'assessment', 'confidence', 'fileWritten'],
}

const CURATOR_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    advisorsRead: { type: 'integer', description: 'сколько файлов советников прочитано' },
    claims: {
      type: 'array',
      description: 'самые решающие consensus/conflict-claims (до 12), которые стоит проверить скептиками',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string', description: 'короткий kebab-id, напр. price-anchor-high' },
          statement: { type: 'string', description: 'утверждение-рекомендация в одну фразу' },
          category: { type: 'string', description: 'продуктовая категория (PMF, Pricing, Growth, ...)' },
          type: { type: 'string', enum: ['consensus', 'conflict', 'unique'] },
          supportingBooks: { type: 'array', items: { type: 'string' }, description: 'теги/книги ЗА' },
          opposingBooks: { type: 'array', items: { type: 'string' }, description: 'теги/книги ПРОТИВ (для conflict)' },
        },
        required: ['id', 'statement', 'category', 'type', 'supportingBooks', 'opposingBooks'],
      },
    },
  },
  required: ['advisorsRead', 'claims'],
}

const VOTE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    claimId: { type: 'string' },
    refuted: { type: 'boolean', description: 'true = claim не выдерживает критики' },
    reason: { type: 'string', description: 'одна фраза почему' },
  },
  required: ['claimId', 'refuted', 'reason'],
}

const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    reportPath: { type: 'string', description: 'путь к council-verdict.md' },
    mainThesis: { type: 'string', description: 'главная мысль вердикта (1 абзац)' },
    topActions: { type: 'array', items: { type: 'string' }, description: '2-4 ключевых действия' },
    advisorsSynthesized: { type: 'integer' },
  },
  required: ['reportPath', 'mainThesis', 'topActions', 'advisorsSynthesized'],
}

// ── Промпт советника (порт protocols/advisor-prompt.md) ──
function advisorPrompt(a) {
  const roleBlock = a.role ? `
## Роль в совете
${a.role}
Учитывай эту роль в каждом принципе и в assessment — она ограничивает и фокусирует твой вклад.
` : ''
  return `Ты — советник на основе книги **${a.book}** (${a.author}).
${roleBlock}
## Фильтр совета
Фокус совета: операционно прибыльные онлайн-продукты И инфопродукты без VC.
Бери тактики книги — не копируй модель дохода её автора.

## Запрос пользователя
${QUERY}

## Контекст пользователя
${USER_CONTEXT}

## Инструкции
1. Прочитай \`${a.skillPath}/SKILL.md\` (tool Read, абсолютный путь).
2. Следуя Reference Navigation из SKILL.md, прочитай ВСЕ reference files в \`${a.skillPath}/references/\`.
3. Проанализируй запрос через призму ЭТОЙ книги. Фокус — применимость к конкретному продукту, метрикам и unit-экономике.
4. Выбери 3-5 самых релевантных принципов. Для каждого: citation tag \`[${a.prefix}:CODE]\`, конкретная рекомендация, пример из книги, risk.

## Правила
- Отвечай ТОЛЬКО от лица этой книги — не привлекай знания из других книг.
- НЕ спавни саб-агентов. НЕ вызывай skills.
- Язык = язык запроса пользователя.

## Сохранение
Через Write сохрани полный совет в файл \`${WORK_DIR}/${a.slug}.md\` в формате:

# ${a.book} (${a.author}) — совет
## Ключевые принципы
### [${a.prefix}:CODE] {Principle Name}
**Рекомендация:** ...
**Пример из книги:** ...
**Риск:** ...
## Общая оценка ситуации
{1-2 абзаца}
## Confidence: HIGH/MEDIUM/LOW

После записи файла верни структурированный итог (schema): slug="${a.slug}", book, принципы, assessment, confidence, fileWritten="${WORK_DIR}/${a.slug}.md".
Если reference-директория недоступна — всё равно дай совет по SKILL.md и отметь это в assessment.`
}

// ── Промпт куратора claims ──
function curatorPrompt(files) {
  return `Ты — куратор кросс-книжного синтеза продуктового совета. Прочитай ВСЕ файлы советников и выдели самые РЕШАЮЩИЕ claims для проверки скептиками.

## Запрос
${QUERY}

## Контекст
${USER_CONTEXT}

## Файлы советников (прочитай каждый через Read)
${files.map(f => `- ${f}`).join('\n')}

## Задача
1. Прочитай все файлы.
2. Выдели до ${MAX_CLAIMS} самых важных claims, относящихся к решению пользователя.
3. Классифицируй каждый: type="consensus" (повторяется у 3+ книг), "conflict" (книги противоречат), "unique" (одна книга, но ценно).
4. Приоритет — consensus и conflict claims (именно их будут оспаривать скептики). unique включай только если он критичен.
5. Для каждого claim укажи supportingBooks (теги/названия ЗА) и opposingBooks (для conflict — теги ПРОТИВ).

Каждый claim — конкретное проверяемое утверждение-рекомендация, не общая тема. Язык = язык запроса.
Верни строго по схеме.`
}

// ── Промпт скептика ──
function skepticPrompt(claim, idx) {
  return `Ты — скептик-рефутатор №${idx + 1} в продуктовом совете. Твоя задача — попытаться ОПРОВЕРГНУТЬ claim. Не балансируй — атакуй. По умолчанию ставь refuted=true, если есть серьёзные сомнения.

## Claim для проверки
"${claim.statement}"
(категория: ${claim.category}; тип: ${claim.type}; ЗА: ${(claim.supportingBooks || []).join(', ') || '—'}; ПРОТИВ: ${(claim.opposingBooks || []).join(', ') || '—'})

## Контекст решения
Запрос: ${QUERY}
Контекст: ${USER_CONTEXT}

## Как атаковать
- Есть ли условия, при которых эта рекомендация навредит именно в этой ситуации?
- Это эмпирически подтверждённый принцип или вера/vibe? Подтверждается ли несколькими независимыми источниками или одной книгой-евангелистом?
- Есть ли прямое противоречие с другой школой мысли?
- Применима ли она к стадии/модели пользователя, или это карго-культ?

Будь конкретным, не общим. Верни вердикт по схеме: refuted (bool) + reason (одна фраза). claimId="${claim.id}".
НЕ спавни саб-агентов, НЕ вызывай skills.`
}

// ── Промпт валидатора: читает канонический validator-protocol.md (источник истины) + учитывает ledger ──
const VALIDATOR_PROTOCOL = `${PLUGIN_ROOT}/skills/adv-product/protocols/validator-protocol.md`
function validatorPrompt(files, ledger) {
  return `Ты — синтезатор-валидатор Совета Продуктовых Советников. Ты — ЕДИНСТВЕННЫЙ синтезатор.

## Твой протокол (источник истины)
Прочитай \`${VALIDATOR_PROTOCOL}\` (Read tool) и следуй ему ПОЛНОСТЬЮ: формула взвешивания (Relevance×3 + Specificity×2 + Agreement×2 + Confidence×1)/8, группировка по продуктовым категориям, SWOT, карта консенсуса, рейтинг советников, формат вердикта. Если файл недоступен — используй формулу и формат из памяти.

## Входные данные
- WORK_DIR: \`${WORK_DIR}\`
- REFINED_QUERY: ${QUERY}
- USER_CONTEXT: ${USER_CONTEXT}
- Файлы советников (Read каждый): ${files.map(f => `\`${f}\``).join(', ')}

## Cross-verification ledger (ДОПОЛНЕНИЕ к протоколу)
${JSON.stringify(ledger, null, 2)}

Учти ledger поверх протокола: claim с verdict=REFUTED НЕ попадает в «Что делать» и не считается консенсусом; CONTESTED уходит в «Против» и помечается SPLIT в карте консенсуса. Добавь в карту консенсуса колонку Ledger (SUPPORTED/CONTESTED/REFUTED).

## Запись
Сохрани вердикт через Write в \`${WORK_DIR}/council-verdict.md\` (формат — из протокола). Читай только файлы в ${WORK_DIR}. НЕ спавни саб-агентов, НЕ вызывай skills. Язык = язык файлов советников.
После записи верни по схеме: reportPath="${WORK_DIR}/council-verdict.md", mainThesis, topActions, advisorsSynthesized.`
}

// ═══ Phase 1 — Fan-out ═══
phase('Fan-out')
log(`Запускаю ${ADVISORS.length} советников по продуктовому строительству...`)

const advisorResults = (await parallel(ADVISORS.map(a => () =>
  agent(advisorPrompt(a), w({ label: a.slug, phase: 'Fan-out', schema: ADVISOR_SCHEMA }))
))).filter(Boolean)

const files = advisorResults.map(r => r.fileWritten).filter(Boolean)
log(`Ответило советников: ${advisorResults.length}/${ADVISORS.length}`)

// Кворум-гейт
if (advisorResults.length < QUORUM) {
  log(`Кворум не набран (${advisorResults.length} < ${QUORUM}) — возвращаю частичные ответы без синтеза.`)
  return {
    workDir: WORK_DIR,
    status: 'low-quorum',
    advisorsAnswered: advisorResults.length,
    files,
    advisorResults,
    claimLedger: [],
  }
}

// ═══ Phase 2 — Cross-verify ═══
phase('Cross-verify')

const curated = await agent(curatorPrompt(files), w({ label: 'curator', phase: 'Cross-verify', schema: CURATOR_SCHEMA }))
const claimsToTest = (curated.claims || [])
  .filter(c => c.type === 'consensus' || c.type === 'conflict')
  .slice(0, MAX_CLAIMS)
log(`Куратор выделил ${(curated.claims || []).length} claims, на проверку идёт ${claimsToTest.length} (consensus/conflict).`)

const claimLedger = (await parallel(claimsToTest.map(c => () =>
  parallel(Array.from({ length: SKEPTICS }, (_, i) => () =>
    agent(skepticPrompt(c, i), w({ label: `refute:${c.id}#${i + 1}`, phase: 'Cross-verify', schema: VOTE_SCHEMA }))
  )).then(votes => {
    const v = votes.filter(Boolean)
    const refutes = v.filter(x => x.refuted).length
    const verdict = refutes >= Math.ceil(SKEPTICS / 2 + 0.5) ? 'REFUTED' : (refutes > 0 ? 'CONTESTED' : 'SUPPORTED')
    return { ...c, verdict, refuteVotes: refutes, totalVotes: v.length, reasons: v.map(x => x.reason) }
  })
))).filter(Boolean)

const supported = claimLedger.filter(c => c.verdict === 'SUPPORTED').length
const contested = claimLedger.filter(c => c.verdict === 'CONTESTED').length
const refuted = claimLedger.filter(c => c.verdict === 'REFUTED').length
log(`Ledger: SUPPORTED=${supported}, CONTESTED=${contested}, REFUTED=${refuted}`)

// ═══ Phase 3 — Synthesize ═══
phase('Synthesize')

// validator пишет вердикт в файл ДО structured-возврата — отказ возврата (retry cap) не должен ронять прогон
const VERDICT_FIELDS = 'reportPath (строка), mainThesis (строка), topActions (массив строк), advisorsSynthesized (целое число)'
const validatorCall = agent(validatorPrompt(files, claimLedger), w({ label: 'validator', phase: 'Synthesize', schema: VERDICT_SCHEMA }))
const verdict = (await validatorCall.catch(e => {
  log(`validator structured-return не удался (${e && e.message ? e.message : e}) — вердикт читай из файла`)
  return null
})) || {}

return {
  workDir: WORK_DIR,
  status: 'ok',
  advisorsAnswered: advisorResults.length,
  files,
  claimLedger,
  reportPath: verdict.reportPath || `${WORK_DIR}/council-verdict.md`,
  verdictMeta: {
    mainThesis: verdict.mainThesis,
    topActions: verdict.topActions,
    advisorsSynthesized: verdict.advisorsSynthesized,
    ledgerSummary: { supported, contested, refuted },
  },
}
