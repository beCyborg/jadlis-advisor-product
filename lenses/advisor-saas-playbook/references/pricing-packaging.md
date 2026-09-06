# SaaS Pricing & Packaging — The SaaS Playbook Reference

## Source
Rob Walling, "The SaaS Playbook" (2023), разделы Pricing + частично Marketing/Metrics.

---

## Core Principle: Pricing — Главный Рычаг SaaS

"Pricing is the biggest lever in SaaS, and almost no one gets it right out of the gate." [SP:PR]

Pricing определяет не только revenue, но и КАКИЕ маркетинговые каналы доступны. При ARPA $20/мес доступно ~5 каналов. При $500/мес — ~10. При $5000/мес — все.

---

## Decision Algorithm: Структура Ценообразования [SP:PR.1]

### APPLY WHEN:
- Запуск нового SaaS или пересмотр текущего pricing
- Пользователь не знает как структурировать тиры
- ARPA слишком низкий для sustainable growth

### AVOID WHEN:
- Нет product-market fit (сначала PMF, потом pricing optimization)
- Меньше 50 клиентов (недостаточно данных)

### COMBINES WITH:
- `[SP:ER]` Expansion Revenue — pricing должен поддерживать рост внутри клиента
- `[SP:CH]` Churn — правильный pricing снижает churn
- `[SP:MA]` Marketing — price point определяет доступные каналы

### Algorithm:

```
1. Определить сегменты клиентов (по размеру, usage, value)
2. Выбрать value metric ИЛИ feature gating ИЛИ оба
3. Построить 3-4 тира, привязанных к customer segments
4. Enterprise tier = 10-20x стандартного плана
5. Если никто не жалуется на цену → вы слишком дёшевы
```

### Ценовые диапазоны по типу клиента [SP:PR.2]:

| Тип клиента | Минимальный ARPA | Рекомендуемый ARPA | Sales Process |
|-------------|------------------|--------------------|---------------|
| Consumer | $10-15/мес | $15-30/мес | No-touch |
| SMB (no demo) | $50/мес | $50-250/мес | Low-touch |
| SMB (demo) | $250/мес | $250-1000/мес | Medium-touch |
| Enterprise | $1000/мес | $2500+/мес ($30K+ year) | High-touch |

**Пример — SquadCast** [SP:PR.3]: Hobbyist podcaster $10-15/мес, mid-market podcast $50-100/мес, NPR/iHeart Radio — 20x base plan. Тиры отражают scaling usage + features.

---

## SaaS Cheat Code: Expansion Revenue [SP:ER]

"Expansion revenue is when customers pay you more as they get more value from your product." Это один из 4 SaaS Cheat Codes.

### Value Metric [SP:ER.1]

Value metric = единица, по которой измеряется ценность продукта для клиента.

**Decision Tree:**
```
Клиент растёт → usage растёт → auto-upgrade?
  ДА → Value Metric (subscribers, seats, hours, GB)
  НЕТ → Feature Gating
```

Примеры value metrics:
- MailChimp → subscribers
- Salesforce → seats
- Dropbox → GB storage
- SquadCast → recording hours

**Правило для seats:** Seat-based pricing только если 2 пользователя видят РАЗНЫЕ данные при логине. Если одинаковые — люди будут шарить один логин.

### Feature Gating [SP:ER.2]

Ограничение фич по тирам. Менее эффективно чем value metrics, т.к. не привязано к росту бизнеса клиента.

**Когда использовать:** Когда usage не растёт с ростом бизнеса клиента, но потребность в фичах растёт.

**Пример:** Если клиент хочет export в Tableau → значит, у него есть бюджет на дорогой SaaS → premium tier с Tableau integration.

### Комбинация [SP:ER.3]

Можно комбинировать value metric + feature gating. Но осторожно — быстро усложняется. На ранних стадиях — начать с одного механизма.

---

## Freemium vs Free Trial [SP:FT]

### Decision Algorithm — Freemium [SP:FT.1]:

```
IF простой продукт
  AND низкий support burden
  AND есть virality в продукте
  AND per-user cost низкий
  AND cash не tight
THEN → freemium может работать

ELSE → free trial лучше
```

**Freemium работает:** E-signature (SignWell), quick design tools (Snappa) — мгновенная ценность, низкий cost, virality built-in.

**Freemium НЕ работает:** Complex CRM, construction management — высокий onboarding, zero virality.

Статистика: 66% SaaS предлагают free trial, только 17% — freemium.

### Credit Card Upfront [SP:FT.2]

**Default рекомендация: требовать credit card.**

Без CC → 10x больше trials, но:
- Больше tire kickers
- Больше support burden
- Unfocused feedback
- Шум от не-целевых пользователей

**Когда убрать CC:**
- >$20K MRR
- Знаешь метрики наизусть (conversion, churn, LTV)
- Продукт часто adopts сотрудниками без корпоративной карты (Slack, Trello)
- Есть ресурсы на influx trials

**Пример — Castos** [SP:FT.3]: Убрал CC requirement. Не увидел значительного роста conversion rate, но положительный эффект: более крупные организации стали пробовать. Понял новые числа через ~2 месяца.

**Golden rule:** Менять только ОДНУ переменную за раз. Не убирать CC И менять цены одновременно.

### Trial Length [SP:FT.4]

Короче = быстрее эксперименты. 7-day trial → 4 когорты за месяц vs 1 когорта при 30-day. Не каждый продукт подходит для 7 дней, но стремиться к короткому.

---

## Когда и Как Поднимать Цены [SP:PI]

### Когда [SP:PI.1]

"I recommend revisiting your pricing every six to 12 months because if you're like most founders, you're probably charging too little."

Два эффекта повышения цен:
1. **Прямой:** Больше revenue
2. **Второго порядка:** Больше маркетинговых каналов доступно (main insight!)

### Rob's Rule of 10 [SP:PI.3]

"If raising prices for existing customers will not grow MRR by at least 10% (ideally more), it's rarely worth considering."

Headache + support burden + brand damage + potential churn → только если прирост MRR >= 10%.

### Как поднимать [SP:PI.2]

**Тактики (от мягкой к жёсткой):**

1. **Уменьшить value metric** при той же цене (3000 subscribers за $49 → 2500)
2. **Скрыть нижний тир** на pricing page
3. **Поднять цены across the board** для новых клиентов
4. **10x pricing** для перехода в другой сегмент (Gather: $29 → $290)

**Шаблон email при повышении:**
1. Установить контекст ценности продукта
2. "Мы меняем pricing"
3. High-level обоснование
4. (Опционально) Детали: кого затрагивает, когда
5. (Опционально) Дополнительное обоснование
6. "Обращайтесь с вопросами"

### Grandfathering [SP:PI.4]

- Никогда НЕ обещать grandfather "навсегда"
- Enterprise клиенты ожидают 5-10% повышение в год — включать в контракт
- Если повышаешь — дать 2-4 месяца между объявлением и внедрением
- Никогда не повышать без уведомления

### Aspirational Pricing [SP:PI.5]

"Instead of dropping your price, figure out what you need to build to make your tool worth what you are charging."

Пример — Drip: Запустился за $49/мес, получал feedback "слишком дорого." Не снизил цену. Вместо этого строил продукт, пока он не стал стоить $49.

### Experiment vs Certainty [SP:PI.6]

- **Certainty:** Знаешь что надо поднять → делай marketable event, announce заранее, grandfather old users
- **Experiment:** Не уверен → "poor person's split test", мониторь cohorts 2-4 недели, будь готов откатить

**Пример — Gymdesk** [SP:PI.7]: Поднял цены >50%. Большинство клиентов отреагировали позитивно ("Congrats, you deserve a raise"). Ушли единицы из 600+. MRR +25%, MRR growth +70%. С доп. revenue нанял 4 человека.

---

## Enterprise Pricing [SP:PR.4]

"One big mistake founders make is not charging enough for their most valuable customers."

**Rule of thumb:** Enterprise tier = 10-20x стандартного плана.

Если enterprise tier только 2-3x base → не сможешь нанять customer success person / salesperson для high-touch process, не покроешь cost of acquisition.

Enterprise клиенты:
- Требуют procurement process
- Могут нуждаться в custom integrations
- Имеют SOC 2 requirements
- Готовы платить $30K+/year

---

## Actionable Checklist: Pricing Health Check

- [ ] ARPA достаточно высокий для доступа к нужным marketing channels?
- [ ] Есть expansion revenue mechanism (value metric или feature gating)?
- [ ] Enterprise tier существует и стоит 10-20x base?
- [ ] Пересматривали pricing в последние 6-12 месяцев?
- [ ] Есть жалобы на цену? (Если нет → слишком дёшево)
- [ ] Каждый tier привязан к конкретному customer segment?
- [ ] Golden rule: одна переменная за раз при экспериментах?
