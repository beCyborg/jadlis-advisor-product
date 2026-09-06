# Product, Launch & Outsourcing — Start Small, Stay Small Reference

## Source
Rob Walling, "Start Small, Stay Small" (2010), Chapters 1, 3, 6-7.

---

## Core Principle: Product Success Triangle [SSSS:PD.3]

```
Product Success = Product + Market + Execution
```

Продукт — только 1/3 уравнения. "A mediocre product with brilliant marketing and execution will make you money. A brilliant product with no market or execution is dead."

Фокус разработчиков: 99% внимания на продукт. Правильный фокус: Market + Execution первично, Product улучшать по мере роста.

---

## Product Types & When to Use [SSSS:PD.1]

### Type 1: Hosted Web Application (SaaS) — РЕКОМЕНДУЕМЫЙ
- **Pricing:** Monthly/annual recurring
- **Benefits:** Steady revenue, easy support (single version), incremental updates
- **Downside:** Tech complexity, browser compatibility, 24/7 uptime requirement
- **When:** Default choice для бизнес-приложений. Joel Spolsky: "If I were starting today, would not build downloadable version."
- **When NOT:** Enterprise requiring data on-premises, complex UI, direct hardware access

### Type 2: Downloadable Web App
- **Pricing:** One-time + 20% annual support
- **When:** Enterprise clients wanting data control

### Type 3: Desktop Application
- **Pricing:** One-time + annual support
- **When:** Complex UI beyond web capabilities, direct hardware/peripheral access

### Type 4: Mobile Application
- **Pricing:** One-time or recurring (tied to service)
- **When:** Extend existing app or target mobile-specific use case

### Type 5: Third-Party Plugins
- **Pricing:** Free (monetized elsewhere) or recurring
- **When:** WordPress, Shopify, Salesforce ecosystems. High adoption, accidental discovery.
- **Warning:** Vendor may incorporate your functionality into main product

### Type 6: Community Websites
- **Pricing:** Ad-supported or paid membership
- **When:** Network effect, fun factor. Needs millions of pageviews to be viable.

---

## Pricing — 12-Step Process [SSSS:PRC.1]

### General Price Guidelines [SSSS:PRC.2]:

| Customer Type | Max One-Time | Max Monthly |
|---------------|-------------|-------------|
| Consumer (hobby) | $29 | $14 |
| Consumer (makes/saves money) | $49 | $19 |
| Small Business | $400 | $99 |
| Larger Business | $1,000 | $199 |

### 12 Steps to Find Your Price:

1. **Know your market** — Use general guidelines above + how buyers typically pay
2. **Ask yourself** — What would I pay? What numbers feel right? (37Signals approach)
3. **Look at competition** — If little competition, compare to similar markets
4. **Determine product value** — If saves 5 hrs/мес at $25/hr = $125/мес ceiling
5. **Combine** — Price range from steps 2-4, high end = 4x low end
6. **Lean towards higher pricing** — "Developers tend to undervalue their software"
7. **Use three tiers** — Low = bottom of range, Middle = 2x Low, Top = 2x Middle
8. **End in 7, 8 or 9** — All tiers same ending digit
9. **Determine tier benefits** — Value metric that doubles+ with each tier
10. **Add Support** — 20% annual fee for support/upgrades (for one-time products)
11. **Recurring alternative** — Fixed-price ÷ 12 = highest tier monthly price
12. **Test** — Use testing techniques below

### Price Testing [SSSS:PRC.3]:

**Short sales cycle (<1 week):**
- Change price without announcement
- Run 1-2 weeks
- Compare results

**Long sales cycle (>1 week):**
- Raise price with new version + 7-day old-price deal for mailing list
- OR lower price temporarily, watch revenue
- Roll back if no improvement

---

## Build vs Hire Out Development [SSSS:PD.2]

### Building It Yourself:

**Time Estimate:**
```
Pages/screens → 4-12 hrs each
+ DB design: 10-20 hrs
+ Backend (payments, integrations): 10-40 hrs each
= 200-400 hours for v1.0

Sales site + docs + marketing: 100-200 hours
Total: 300-600 hours
```

**At 15 hrs/week spare time:**
- 300 hrs = 20 weeks (4.5 months)
- 550 hrs = 37 weeks (8.5 months)

**Rule of thumb:** If <200 hours → check if enough functionality. If >400 hours → eliminate features.

### Hiring Out:

"You have to get over your desire to write the software yourself."

**Cost estimates:**
| Component | US | Offshore |
|-----------|-----|---------|
| Design + HTML | $2,000-6,000 | $500-1,500 |
| 2 months development | $12K-20K | ~$6K |
| **Total** | **$14K-26K** | **$6.5K-7.5K** |

**Benefit:** Frees you to focus on marketing, sales, SEO, partnerships — the HARDER skills to find.

"A lot of people can build a good invoicing application. But how many can work the necessary marketing angles, form partnerships, create a profitable PPC campaign, and build a compelling sales site?"

### Decision:
```
IF no money + lots of time → Build it yourself
IF $7K+ available → Strongly consider hiring out
IF perfectionist about code → "Get over it" — code quality is 4th priority
```

---

## Outsourcing & Virtual Assistants [SSSS:OS]

### Drip Outsourcing [SSSS:OS.2]

"Outsourcing small tasks as I perform my daily work." Before any task, ask: "Could one of my contractors possibly do this?"

**Пример:**
- 45 images to download: Sent to VA, 90 seconds to assign, done in 24 hrs, $2 cost → saved 20 min
- Website image + CSS change: Sent to designer, 10 min to write up → saved 2 hrs 50 min
- Monthly savings: 20-60 hours initially, up to 60-100 hours with practice

### 37 Tasks to Launch (partial list) [SSSS:OS.3]

Stars (★) = easiest to outsource:
- Graphic Design ★
- HTML/CSS ★
- UI Development ★
- Business Tier Development ★
- Unit/UI Tests ★
- Sales Website Copywriting ★
- Sales Website Design ★
- Payment Integration ★
- Launch Press Release ★
- Social Media Marketing ★

Keep for yourself: Niche selection, product architecture, functional design, marketing STRATEGY.

### Virtual Assistants (VA) [SSSS:VA.1]

**Rates:** ~$6/hr offshore, $10-20/hr US

**Getting started:**
1. Start with non-critical tasks
2. Be VERY specific in instructions
3. "At first it will seem like you could do the tasks faster"
4. As relationship builds → saves massive time
5. If it doesn't → find new resource

**Good first tasks for VA:**
- Research (finding blogs, contacts, competitors)
- Data entry, list compilation
- Simple image/CSS tasks
- Email management
- Social media scheduling

### Design Outsourcing [SSSS:OS.4]
- Easier than code outsourcing (visual = "what you see is what you get")
- Elance (now Upwork) + asking around
- Start here if nervous about outsourcing

---

## Grow It or Start Over [SSSS:PD.4]

After launch, critical decision:

### When to Grow:
- Revenue trending up (even slowly)
- Positive customer feedback
- Clear path to $500/мес+
- Marketing channels showing promise

### When to Start Over:
- No revenue after 3-6 months of marketing effort
- Negative/zero feedback from market
- Market too small (keyword research was wrong)
- Better opportunity identified

### If Growing — Focus Areas:
1. **Reduce support burden** → Outsource, build FAQ, automate
2. **Increase traffic** → Double down on working channel
3. **Improve conversion** → Test pricing, copy, design
4. **Build email list** → The compounding asset

---

## Goals & Accountability Framework [SSSS:MS.1]

### Dominican University Study:
1. **Written goals** → "significantly more accomplished"
2. **Public commitment** → "significantly more than those who wrote goals"
3. **Accountability** → "weekly progress reports → significantly more"

### First Goal:

"Strive to build a startup that generates $500 per month in profit." [SSSS:MS.2]

"May sound easy but will require more work than you can fathom at this point."

Once achieved → enormous experience. "You won't believe how much you know."

---

## Micropreneur vs Bootstrapper [SSSS:PD.5]

### Micropreneur:
- Solo, no employees ever
- May own multiple products
- Specific lifestyle is the goal
- Location/time independence
- Target: replace day job income with product portfolio

### Bootstrapper:
- Vision of something larger (5-10+ employees)
- Execute and grow to survive
- Building equity/value for potential exit
- Willing to sacrifice short-term for growth

**90% of knowledge is identical.** Finding niche, product, building, launching, marketing = same process.

---

## Mindset: The Dip [SSSS:MS.5]

After launch euphoria → reality:
- Support is brutal (5-10 hrs/week growing with customer base)
- Legacy code slows development
- Feature requests overwhelm
- Revenue grows slowly ($100 first month if lucky)

**What gets you through:** Written goals, accountability, community.

**The upside:** Once past critical mass → exponential leverage of software kicks in. "Recurring revenue stream that can grow far beyond consulting, all while creating balance sheet value."

**Key:** "If you can get through it once, it's more likely you'll be able to get through it with your next product."

---

## Process Documentation [SSSS:OS.5]

"Creating processes will bring you freedom through the ability to easily automate and outsource tasks."

### Why Critical:
- Impossible to delegate without processes
- Difficult to bring on business partner
- Easy to make mistakes without them
- Easier to sell product if/when you want to exit

### Approach:
For anything done more than once → document step by step → ready to hand off to VA/contractor.

---

## Actionable Checklist: Product & Launch

### Pre-Build:
- [ ] Product type selected (SaaS recommended)
- [ ] Build vs hire decision made
- [ ] Time/cost estimate completed (200-400 hrs dev target)
- [ ] 3-tier pricing structure defined
- [ ] Price testing plan ready

### Pre-Launch (6 months out):
- [ ] Landing page live with email capture
- [ ] Email list building started
- [ ] Blog launched for SEO
- [ ] VA hired for routine tasks
- [ ] Autoresponder series created (5+ emails)
- [ ] Beta testers identified (for testimonials)

### Launch Week:
- [ ] 5 core pages live and polished
- [ ] Testimonials collected (minimum 3-5)
- [ ] Pre-launch email sent (1 week before)
- [ ] Launch day email ready with special pricing
- [ ] Follow-up email scheduled (36 hours after)
- [ ] Google Analytics goals configured
- [ ] PPC campaign ready for post-launch boost

### Post-Launch:
- [ ] Cancel survey / feedback mechanism live
- [ ] Support process documented
- [ ] Weekly progress reports (accountability)
- [ ] First month: track toward $500/мес goal
- [ ] Decision point: grow or start over?
