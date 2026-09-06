---
name: adv-product
user-invocable: true
argument-hint: "<ваш вопрос по продуктовому строительству, PMF, pricing, operations>"
allowed-tools:
  - Read
  - Write
  - Bash
  - AskUserQuestion
  - Workflow
model: opus
effort: high
description: |
  Совет 16 AI-советников на основе книг по продуктовому строительству.
  Каждый советник анализирует запрос через призму одной книги, затем validator
  синтезирует единый вердикт с SWOT, картой консенсуса и actionable рекомендациями.
  16 книг: $100M Leads (Hormozi), Traction (Weinberg/Mares), AJTBD v13 (Zamesin),
  MAKE (Levels), The Mom Test (Fitzpatrick), Obviously Awesome (Dunford),
  YC Startup School (YC), Company of One (Jarvis), Deploy Empathy (Hansen),
  Start Small Stay Small (Walling), The Embedded Entrepreneur (Kahl),
  The SaaS Playbook (Walling), Zero to Sold (Kahl), Rework (Fried/DHH),
  Authority (Barry), Million Dollar Weekend (Kagan).
  Invoke via /advisors:adv-product со своим вопросом.
  English triggers: product building, product-market fit, PMF, pricing strategy,
  unit economics, SaaS metrics, churn reduction, retention strategy, niche selection,
  customer interviews, customer development, bootstrapping, exit strategy,
  business model design, MRR, ARR, LTV, CAC, product validation, MVP,
  indie hacking, micro-SaaS, productized service, product council, product advisor,
  info products, course launch, audience monetization, paid newsletter, digital products.
  Russian triggers: продуктовое строительство, product-market fit, ценообразование,
  юнит-экономика, SaaS метрики, снижение оттока, удержание клиентов, выбор ниши,
  кастдев, интервью с клиентами, бутстрэппинг, стратегия выхода, бизнес-модель,
  валидация продукта, MVP, инди-хакинг, микро-SaaS, продуктовый совет,
  совет по продукту, продуктовые советники, инфопродукты, запуск курса,
  монетизация аудитории, платная рассылка, заработок на курсах.
---

# Advisor Council — 16 книг по продуктовому строительству (гибрид Skill + Workflow)

Тяжёлая часть (16 советников → cross-verify claims → синтез вердикта) исполняется
детерминированным workflow **`council-product`**. Скилл делает интерактивный intake
(уточнение + preflight путей) и запись результата. Граница: AskUserQuestion и запись
в файлы живут в главной сессии; fan-out/синтез — в workflow.

## Константы

```
PLUGIN_ROOT = ${CLAUDE_PLUGIN_ROOT}
MEMORY_DIR  = ${user_config.ADVISORS_MEMORY_DIR}
OUTPUT_DIR  = {MEMORY_DIR}/Вердикты/Продукт
PROFILE     = {MEMORY_DIR}/Профили/adv-product.md
RUN_LOG     = {MEMORY_DIR}/Журнал советов.md
WORK_DIR    = {MEMORY_DIR}/_runs/product-{QUERY_SLUG}
```

Внутри протоколов, линз и общих контрактов пути записаны плейсхолдерами `{PLUGIN_ROOT}` и
`{MEMORY_DIR}`: подстановка `${CLAUDE_PLUGIN_ROOT}` и `${user_config.*}` в читаемые файлы не
доходит. Подставляй значения сам; литеральный `{PLUGIN_ROOT}` в Read не отправляй.

## Phase A.0 — гейт памяти (первым, каждый запуск)

1. `MEMORY_DIR` пуст **или** в нём буквально видно `${user_config` → **остановиться**:
   > Не задана папка памяти советов. Открой `/plugin` → advisors → настройки и укажи
   > `ADVISORS_MEMORY_DIR` (например `~/advisors-memory`), либо переустанови плагин с
   > `--config ADVISORS_MEMORY_DIR=<путь>`. Вердикты в текущую рабочую папку совет не пишет.
2. Путь начинается с `~/` → заменить `~` на `$HOME` **до любой записи**.
3. Развернуть скелет — идемпотентно, существующие файлы не трогает; если папка создана
   впервые, сказать об этом и перечислить, что в ней появилось:
   ```bash
   bash "${CLAUDE_PLUGIN_ROOT}/scripts/init-memory.sh" "{MEMORY_DIR}" "${CLAUDE_PLUGIN_ROOT}"
   ```
4. `mkdir -p "{OUTPUT_DIR}"` — подпапка вердиктов этого совета.
5. Ни один шаг скилла не пишет за пределы `{MEMORY_DIR}`.

## Архитектура

```
Phase A (INTAKE, главная сессия) → Phase B (Workflow council-product) → Phase C (WRITE)
```

## Phase A — INTAKE

1. **Запрос.** Если `$ARGUMENTS` пуст → AskUserQuestion: «Какой вопрос задать совету
   16 экспертов по продуктовому строительству?». Иначе — `RAW_QUERY = $ARGUMENTS`.
2. **Память.** Прочитай `{PROFILE}` (если есть) → собери `USER_CONTEXT` (продукт,
   бизнес-модель, стадия, метрики — MRR, пользователи, отток, LTV — core challenge). Секция `## Profile`
   курируется пользователем: читать целиком, не переписывать.
3. **Preflight ростера.** Для каждого советника проверь `test -d "{skillPath}/references"`.
   Путь не найден → **исключи** советника с warning (он уйдёт в знаменатель кворума).
4. **Сборка SCOPE.** Вычисли `QUERY_SLUG` (lowercase, спецсимволы→дефис, ≤50 симв) — ТОЛЬКО
   для WORK_DIR. `FILE_NAME` — имя файла вердикта: короткое **русское** название темы
   (3–7 слов), без символов `/ \ : # ^ [ ] |`; перед записью проверь коллизию имён
   `ls "{OUTPUT_DIR}"`, имя занято → суффикс « (2)».
   `OUTPUT_DIR` и `WORK_DIR` — из блока «Константы»; создай их:
   `mkdir -p "{OUTPUT_DIR}" "{WORK_DIR}"`. Артефакты прогона живут в `{MEMORY_DIR}/_runs/`
   и удаляются в Phase C.
   Собери массив `advisors` (см. таблицу, минус исключённые на preflight). У советников
   с ролью-модификатором передавай поле `role` (текст из колонки Role); у ядра (Role = «—»)
   поле опускается.
5. **Интервью (обязательно).** По протоколу `${CLAUDE_PLUGIN_ROOT}/shared/council-interview-protocol.md`
   (Read по требованию — файл НЕ в контексте). Кратко: KNOWN_MAP из запроса+памяти →
   `Workflow(scriptPath:"${CLAUDE_PLUGIN_ROOT}/workflows/council-question-harvest.js",
   args:{query: RAW_QUERY, userContext: USER_CONTEXT,
   roster: advisors→{slug, name: "{book} ({author})", skillPath}, councilType: "product",
   maxQuestionsPerAdvisor: 3, workDir: WORK_DIR, pluginRoot: PLUGIN_ROOT})` →
   фильтр кластеров против известного →
   AskUserQuestion до 2 батчей × 4 → CONTEXT_DOSSIER. Итоги:
   `REFINED_QUERY` = RAW_QUERY, уточнённый ответами интервью;
   `USER_CONTEXT` = контекст из памяти + CONTEXT_DOSSIER (досье в конце).
   Harvest пуст/упал → совет не блокируется (деградация — в протоколе).

### Advisor Table (16 советников)

| Slug | Книга | Author | Prefix | Role | SKILL_PATH (абсолютный) |
|------|-------|--------|--------|------|--------------------------|
| hormozi | $100M Leads | Hormozi | 100ML | узкий специалист lead-gen; флаг: воронка автора — high-ticket/Skool | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-hormozi` |
| traction | Traction | Weinberg & Mares | TRC | узкий специалист каналов: Bullseye как принцип, конкретика каналов 2015 мертва | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-traction` |
| ajtbd | AJTBD v13 | Zamesin | AJTBD | — | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-ajtbd` |
| make | MAKE | Pieter Levels | MK | — | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-make` |
| momtest | The Mom Test | Fitzpatrick | MT | — | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-momtest` |
| positioning | Obviously Awesome | Dunford | OA | — | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-positioning` |
| yc-startup | YC Startup School | YC | YC | venture-линза: контр-перспектива, флаг расхождения с no-VC фокусом совета | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-yc-startup` |
| company-one | Company of One | Paul Jarvis | CO1 | философский якорь против культа роста; тактику роста — через Walling/Kahl | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-company-one` |
| deploy-empathy | Deploy Empathy | Michele Hansen | DE | — | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-deploy-empathy` |
| start-small | Start Small, Stay Small | Rob Walling | SSSS | флаг возраста — 2010: принципы (stairstep) живы, инструменты/расчёты мертвы | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-start-small` |
| embedded | The Embedded Entrepreneur | Arvid Kahl | EE | + правило BIP-2026: «делись „что и зачем“, скрывай „как“» (AI-клонирование) | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-embedded` |
| saas-playbook | The SaaS Playbook | Rob Walling | SP | — | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-saas-playbook` |
| zero-to-sold | Zero to Sold | Arvid Kahl | ZTS | — | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-zero-to-sold` |
| rework | Rework | Fried & DHH | RW | анти-VC манифест, revenue-funded эталон (37signals) | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-rework` |
| authority | Authority | Nathan Barry | AUTH | инфопродуктовая линза: монетизация экспертизы (книги, курсы, платные рассылки), кейс ConvertKit | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-authority` |
| mdw | Million Dollar Weekend | Noah Kagan | MDW | bias-to-action стартер: первая продажа / pre-sell / 48-h валидация; дисклеймеры — survivorship bias, «I'd pay» ≠ валидация (глубина — Mom Test), self-promo автора | `${CLAUDE_PLUGIN_ROOT}/lenses/advisor-mdw` |

## Phase B — INVOKE

Вызови workflow (он спавнит советников, делает cross-verify и синтез в фоне):

```
Workflow({
  scriptPath: "${CLAUDE_PLUGIN_ROOT}/workflows/council-product.js",
  args: {
    query: REFINED_QUERY,
    userContext: USER_CONTEXT,   // = память + CONTEXT_DOSSIER из интервью (Phase A.5)
    advisors: <массив {slug, book, author, prefix, skillPath, role?} из Phase A>,
    quorum: 11,
    workDir: WORK_DIR,
    pluginRoot: PLUGIN_ROOT      // ${CLAUDE_PLUGIN_ROOT} в JS НЕ подставляется — передаём значением
  }
})
```

Workflow стартует в фоне и возвращает task ID. **Дождись `<task-notification>` о завершении**,
затем используй возвращённый объект (`{workDir, status, advisorsAnswered, reportPath, claimLedger, verdictMeta}`).
Прогресс виден в `/workflows`.

Советники, скептики и validator работают одним типом воркера — субагентом
`advisors:advisor-opus-xhigh` (Opus, effort xhigh). Переопределить:
`workerOpts: { model: 'opus' }` в args.

## Phase C — WRITE

Читай артефакты из `WORK_DIR` (file-mediated — не зависит от того, как пришёл объект):

- **`status: "low-quorum"`** (ответило <11): прочитай доступные `{WORK_DIR}/*.md` (кроме
  `council-verdict.md`) и покажи их напрямую с предупреждением: «Только {N}/16 советников ответили.
  Показываю доступные ответы без полного синтеза.»
- **`status: "ok"`:**
  1. Скопируй `{WORK_DIR}/council-verdict.md` → `{OUTPUT_DIR}/{FILE_NAME}.md` (Bash `cp`).
  2. Прочитай и покажи пользователю полный вердикт (без сокращений). Кратко отметь ledger:
     SUPPORTED/CONTESTED/REFUTED (из `verdictMeta.ledgerSummary`) — что отсеяла перекрёстная проверка.
  3. Сообщи путь: «Вердикт сохранён: `{OUTPUT_DIR}/{FILE_NAME}.md`».
  4. `rm -rf "{WORK_DIR}"`.
  5. Пост-write (контракт `${CLAUDE_PLUGIN_ROOT}/shared/memory-write-contract.md`): допиши одну
     строку в `{RUN_LOG}` — `- YYYY-MM-DD · adv-product · {FILE_NAME} — {итог одной строкой}`.
- **Память.** Обнови `{PROFILE}`: добавь запись сессии (date, краткий query, key_insights,
  обновлённый контекст) в конец журнала сессий. Секцию `## Profile` не переписывать.
- **Follow-up.** Предложи: «Детальнее по конкретной книге/принципу?» / «Следующий вопрос совету?»

## Ключевые принципы

1. **Каждый агент = 1 книга** (обеспечивает workflow). Синтез — только в validator.
2. **Min 11/16 для вердикта.** Меньше → ответы напрямую с warning (11 ≈ 69%; критерии
   ростера и правило пересчёта кворума — в `references/roster-criteria.md`).
3. **Per-claim cross-verify.** Workflow добавляет голосование скептиков по consensus/conflict-claims;
   REFUTED не попадает в «Что делать». Это усиление против старого «один валидатор без проверки».
4. **Citations обязательны** (тег у каждой рекомендации).
5. **Интервью-харвест перед делиберацией.** Советники сдают уточняющие вопросы
   (workflow `council-question-harvest`), главная сессия дедуплицирует и интервьюирует
   пользователя один раз; все советники получают общий CONTEXT_DOSSIER, зоны «неизвестно»
   идут в вердикт секцией «Слепые зоны».

## Response Language

Язык ответа = язык запроса. Citation tags остаются на английском.
