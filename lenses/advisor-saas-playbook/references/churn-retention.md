# Churn Analysis & Retention — The SaaS Playbook Reference

## Source
Rob Walling, "The SaaS Playbook" (2023), разделы 80/20 SaaS Metrics + Pricing (expansion revenue).

---

## Core Principle: Churn — Ахиллесова Пята SaaS

"Churn is the death of SaaS. I've seen multimillion-dollar acquisitions fall apart because of high churn." [SP:CH]

Churn определяет потолок роста. Без его контроля любые маркетинговые усилия — вода в дырявом ведре.

---

## Churn Benchmarks [SP:CH.1]

### Gross Revenue Churn (B2B SaaS):

| Churn Rate | Оценка | Комментарий |
|------------|--------|-------------|
| >10% | Catastrophic | Бизнес горит. Срочные меры |
| 8-10% | Not Good | Требует немедленного внимания |
| 6-7% | Meh | Ниже среднего, есть работа |
| 4-5% | Fine | Приемлемо для SMB SaaS |
| 2-3% | Good | Хороший показатель |
| <2% | Great | Отлично, focus on growth |

**Для high-price contracts (>$25K ACV):** Fine = 2-3%, Good = 1-2%, Great = ≤1%.

### Формула расчёта [SP:CH.2]:

```
Gross Revenue Churn = (MRR, потерянный от cancellations в месяце) / (Starting MRR месяца)
```

---

## Plateau Formula — Когда Рост Остановится [SP:CH.3]

**THE CRITICAL FORMULA:**

```
Plateau MRR = New MRR per month / Churn Rate
```

### Примеры:

| New MRR/мес | Churn | Plateau MRR | Plateau ARR |
|-------------|-------|-------------|-------------|
| $5,000 | 10% | $50,000 | $600K |
| $5,000 | 5% | $100,000 | $1.2M |
| $5,000 | 2% | $250,000 | $3M |
| $10,000 | 5% | $200,000 | $2.4M |
| $10,000 | 2% | $500,000 | $6M |

**APPLY WHEN:** Каждый SaaS founder ДОЛЖЕН знать свой plateau number. Рассчитывать в реальном времени.

**Decision Tree:**
```
Plateau number < целевого ARR?
  → Снижать churn ИЛИ увеличивать New MRR
  
  Churn > 5%?
    → Фокус на снижении churn (больший рычаг)
  Churn < 3%?
    → Фокус на увеличении New MRR
  Churn 3-5%?
    → Параллельная работа над обоими
```

---

## Segmenting Churn [SP:CH.4]

"Saying you have a gross churn rate of 8% doesn't give you the right information to work with."

Три способа сегментации:

### 1. По Pricing Tier [SP:CH.4a]

**Пример TinySeed company:**
- Tier $30/мес → net churn 11% (проблема!)
- Tier $100/мес → net churn -4% (net negative churn!)

**Инсайт:** Почти всегда low-paying customers churn быстрее, high-paying — sticky.

**Decision Algorithm:**
```
IF low tier churn >> high tier churn:
  → Рассмотреть: убрать нижний тир?
  → ИЛИ: это pipeline для upgrade? (оценить upgrade rate)
  → IF upgrade rate > 15% → оставить как entry point
  → IF upgrade rate < 5% AND support burden высокий → убрать
```

### 2. По Marketing Channel [SP:CH.4b]

**Пример — AgentMethods:** "Segmenting churn by acquisition channel has been really helpful for us. Learning that the LTV of a pay-per-click lead is way lower than average saved us from wasting a lot of money."

Отслеживать через ChartMogul с custom attributes: UTM data, sales rep, onboarding rep, NPS score.

"It's really interesting to see how metrics like churn and ARPA vary by salesperson."

### 3. По Cohort (Retention Grid) [SP:CH.4c]

Сортировать клиентов по дате начала подписки. Типичный паттерн:
- **Месяцы 1-2:** Высокий churn (extended paid trial effect)
- **Месяц 3+:** Стабилизация

**Если massive churn в первые 60 дней → проблема onboarding/value delivery.**

---

## Почему Клиенты Уходят — Diagnosis Framework [SP:CH.5]

### Причина 1: Долго находят ценность [SP:CH.5a]

**Симптомы:** Churn concentrated в первые 1-2 месяца.

**Решения:**
1. **Onboarding emails** — Val Geisler's Dinner Party Strategy
2. **Customer Success Manager** — для high ACV клиентов
3. **Minimum Path to Awesome (MPA)** — определить момент "wow!" и вести к нему кратчайшим путём

**Пример — Drip:** Построили internal dashboard для tracking trial users по пути к awesome:
- Создали первый email list? ✓
- Установили форму на сайт? ✓
- Активировали форму? ✓
- Получили первого subscriber? ✓

Leading indicator: чем больше шагов пройдено → выше вероятность conversion.

### Причина 2: Продукт не соответствует ожиданиям [SP:CH.5b]

**Симптомы:** Churn после 2-3 месяцев использования.

**Diagnosis questions:**
- Overselling capabilities?
- Привлекаете не тот размер/vertical бизнеса?
- Marketing messaging не соответствует product reality?

**Решение:** Segment новых клиентов по industry + traffic source → найти паттерны несоответствия.

### Причина 3: Проблема с продуктом (no PMF) [SP:CH.5c]

**Симптомы:** Равномерно высокий churn across all segments.

"Throwing churn-reducing tactics at your customers when you haven't built something people want and are willing to pay for can mask your lack of product-market fit."

**Решение:** Вернуться к customer conversations. Понять why, не пытаться gaming churn.

### Как спрашивать [SP:CH.6]

**Пример — Drip:** Automated email через 10 минут после cancellation:
"Hello, I'm one of the founders of Drip, and I'd love to hear why you decided to cancel your account."

Варианты сбора feedback:
- Cancel survey (при отмене)
- Email через 10 мин после cancel
- Личный звонок для high-ACV клиентов

---

## SaaS Cheat Code: Net Negative Churn [SP:NC]

### Определение [SP:NC.1]

Net churn = Gross churn - Expansion Revenue

**Net Negative Churn:** Когда expansion revenue ПРЕВЫШАЕТ revenue lost from churning customers.

```
+4% churn → теряете 4% MRR каждый месяц
-4% churn → НАБИРАЕТЕ 4% дополнительного MRR каждый месяц БЕЗ новых клиентов
```

### Как достичь [SP:NC.2]

1. **Value metric pricing** — клиенты растут → auto-upgrade → expansion revenue [SP:ER.1]
2. **Feature gating** — клиенты нуждаются в большем → manual upgrade [SP:ER.2]
3. **Annual contracts** — снижают gross churn mechanically
4. **Great onboarding** — снижает early churn

### Decision Algorithm [SP:NC.3]:

```
IF gross churn < 5% AND expansion revenue exists:
  → Net negative churn достижим
  → Фокус: увеличить expansion revenue через value metric tuning
  
IF gross churn > 5%:
  → Сначала снизить gross churn до <5%
  → Потом работать над expansion revenue
  
IF no expansion revenue mechanism:
  → Restructure pricing (add value metric)
  → THEN work on churn
```

---

## Pre-PMF vs Post-PMF Churn Strategy [SP:CH.7]

### Pre-PMF (< ~$20K MRR):

**Фокус:** ПОЧЕМУ люди уходят, а не сам churn number.

"Until you have product-market fit, you should worry much more about why people are churning than the actual churn number."

**НЕ делать:**
- Gaming churn (требовать email для cancel, annual-only)
- Churn-reducing tactics поверх отсутствующего PMF
- Фокусироваться на числах при <50 клиентах

**Делать:**
- Разговаривать с каждым churning customer
- Записывать причины, искать паттерны
- Использовать insights для refinement продукта

### Post-PMF (> ~$20K MRR, escape velocity):

**Фокус:** Plateau number + systematic churn reduction.

**Делать:**
- Рассчитать plateau MRR
- Segment churn по tiers, channels, cohorts
- Построить MPA dashboard
- Automate cancel survey + follow-up email
- Hire Customer Success (при достаточном ACV)

---

## Actionable Framework: Churn Reduction Playbook

### Quick Wins (1-2 недели):
- [ ] Рассчитать plateau number
- [ ] Настроить cancel survey
- [ ] Добавить automated email после cancel
- [ ] Определить MPA (minimum path to awesome)

### Medium-term (1-3 месяца):
- [ ] Segment churn по pricing tiers
- [ ] Segment churn по acquisition channel
- [ ] Построить retention grid (cohort analysis)
- [ ] Создать onboarding email sequence
- [ ] Настроить in-app tracking для MPA steps

### Long-term (3-6 месяцев):
- [ ] Restructure pricing для expansion revenue
- [ ] Hire Customer Success (если ACV > $500/мес)
- [ ] Build internal dashboard для trial-to-paid tracking
- [ ] Достичь net negative churn для top tier

---

## 3 High / 3 Low Framework — Churn Context [SP:MT]

Churn — одна из 3 LOW метрик. Все 6 метрик в контексте:

### LOW (минимизировать):
1. **CAC** — Cost to Acquire Customer [SP:MT.1]
   - Bootstrapper payback: 2-6 месяцев (max 7-8 при наличии cash)
   - VC rule of thumb: < 1/3 LTV или < 1 ACV
2. **Sales Effort** [SP:MT.2]
   - Avg days from first demo to close
   - Number of calls to close
3. **Churn** [SP:MT.3]
   - Target: <3% gross для B2B SaaS
   - Segment обязательно!

### HIGH (максимизировать):
4. **ACV** (Annual Contract Value) [SP:MT.4]
   - Более полезна чем LTV для bootstrappers
   - LTV размазана на годы, ACV = this year's reality
5. **Expansion Revenue** [SP:MT.5]
   - Value metric pricing → auto-upgrade path
6. **Referrals** [SP:MT.6]
   - Ask at 60-90 day mark
   - "So much of our business is based on referrals..."

**North Star метрики:** MRR + Month-over-Month Growth Rate. Смотреть еженедельно.
