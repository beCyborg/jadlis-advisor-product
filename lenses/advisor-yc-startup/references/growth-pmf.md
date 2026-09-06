# Growth & PMF: Procedures and Diagnostics

Source: Gustaf Alstromer "Growth for Startups" (YC) + Divya "Setting KPIs and Goals" (YC)

---

## 1. Retention Curve: The Binary PMF Test

**The core diagnostic.** Plot retention over time using cohort analysis. The shape of the curve is the verdict.

**How to calculate:**
- Define your core value metric: the one action that represents value delivery (not search, not visits — booking, payroll run, ride taken)
- Define the correct time window for that metric (daily for Instagram, weekly/monthly for Lyft, annually for Airbnb)
- For each cohort (users who started in week/month N), track what % return in week/month N+1, N+2, etc.
- Plot each cohort separately — never average across cohorts, averaging masks divergent behavior

**Reading the curve:**
- **Declining to zero**: The curve never flattens. Every week fewer users come back. No PMF. Stop growth work entirely. Fix retention first.
- **Flattening**: The curve levels off at some non-zero value and holds. PMF confirmed for those users.

**Specific benchmarks:**
- DoorDash: 20% monthly retention at month 20 (nearly two years of sustained retention)
- GitHub: 80% monthly retention at month 1, 30% monthly retention at month 60 (five years out)
- These are real companies with confirmed PMF — use as calibration points

**What flat retention tells investors:** Investors ask for this graph above any other metric. It proves repeat usage, which is the most unbiased signal that people actually want the product.

**Critical mistake to avoid:** Do not average cohorts together. If early cohorts are retaining and later cohorts are churning, averaging hides the churn. Look at each cohort line individually.

---

## 2. Bad Metrics (Vanity Metrics) — What Each One Hides

Do not use these as primary signals. Do not surface these to investors as evidence of PMF.

**Registered users**
- What it hides: someone who signed up and never returned counts the same as a daily active user
- The number goes up every day regardless of whether the product is working
- Track instead: active users (users who completed the core value action in the last time window)

**Total visitors / pageviews**
- What it hides: bots, bounce traffic, users who landed and left in under 5 seconds
- A viral tweet can spike visitors 100x with zero retention impact
- Track instead: returning visitors, funnel conversion at each step

**Conversion rate as primary metric**
- What it hides: you can game conversion rate by filtering traffic to only high-intent sources, making the funnel look better while the business shrinks
- It says nothing about who you're converting or whether they will stay
- Track instead: conversion rate as a secondary lever to optimize after defining what you're converting to

**Downloads / installs without activation**
- What it hides: the critical step — did the user actually do the thing the product is for?
- App stores inflate install counts with users who tap once and never open again
- Track instead: activation rate (users who completed the first meaningful action within N days)

**Free users (for a paid product)**
- Paying and non-paying users have categorically different expectations and feedback
- If you plan to charge, free users give you wrong signal about willingness to pay
- Example: Scribd spent four years growing millions of free users. When they started charging, 90%+ churned — the free growth was measuring nothing about the actual business

**Net Promoter Score**
- Companies with objectively excellent products (iPhone, Apple) have bad NPS
- NPS correlates with perception and brand sentiment, not product quality or retention
- It is biased by survey design and response selection

**The one acceptable survey question:** "How would you feel if you could no longer use this product?" This can give a directional signal but is not a substitute for measuring retention directly.

---

## 3. Growth Channels — When to Use Each

**Do not work on any of these until retention curve has flattened.** If users churn after one use, acquiring more users accelerates the loss, not the business.

### SEO (Search Engine Optimization)
**Use when:** Product maps to high-intent search behavior — things people search for specifically when they have a rare need (insurance, finding a doctor, travel, specific software)
**How it works:**
- On-page: page titles, readable content, correct keyword targeting, no errors
- Off-page: inbound links from authoritative sites (press, relevant communities) — builds domain authority
- Start with keyword research (what do people actually search for?) before building content
- Zero-sum: you compete against existing pages; new categories (new keywords that didn't exist before) are easier to win
**Time to results:** Months to a year; not a short-term lever
**Do not use when:** Product requires behavioral explanation before value is clear; no established search intent yet; you need growth in weeks not quarters
**Examples:** TripAdvisor and Pinterest grew almost entirely via SEO — they own search result real estate for millions of queries

### Referrals / Virality
**Use when:** Your product already has word-of-mouth ("did you hear about X?"); product improves with more users (networks, marketplaces); you can instrument a sharing flow
**Referral mechanics (Airbnb anatomy):**
- The referral email: sender shown as person (not brand), clear value at top ("Gustaf sent you $40 for your first trip"), deadline for urgency, exclusive-sounding CTA ("Accept my invitation"), social proof about sender
- Measure each step in the funnel: referral offer page → invites sent → invites clicked → signups from invite → bookings from signups
- Each step is a conversion rate to optimize independently
**K-factor:** If each new user brings in more than 1 additional user on average, growth is self-sustaining
**Do not use when:** Product has no social element; word of mouth does not naturally happen; offering financial incentives to people who don't believe in the product just accelerates churn

### Paid Acquisition
**Use when:** Product has confirmed PMF, revenue per user is known, CAC can be measured and compared to LTV
**The core constraint:** LTV (or predicted revenue from user) must exceed CAC. If you spend $50 to acquire a user who pays $30 lifetime, you are destroying money at scale.
**CAC payback period:** For early-stage, require payback within 1-3 months, not 8 months. If payback requires 8 months of assumed behavior, you do not have certainty. Lower your CAC target instead.
**Main channels:** Google (search intent), Facebook/Instagram (interest/demographic targeting)
**The most common founder mistake:** Running paid ads before having revenue. Money spent before LTV is known is pure waste with no feedback signal.
**Do not use when:** No revenue, no confirmed unit economics, no known LTV

### Sales
**Use when:** You can make a finite list of all potential customers. If the total addressable list fits in a spreadsheet, do sales before any of the above channels.
**The sequence:** Make the list. Find decision-makers. Get contact info. Email/call.
**When to hire first salesperson:** After founders have personally closed enough customers to understand the sales motion — what objections come up, what pitch works, what customer profile converts. Hire to replicate a proven motion, not to discover one.
**Enterprise motion:** If customers require long sales cycles, track pipeline stages and LOIs as leading indicators rather than revenue

### The Rule of One or Two Channels
Most companies that become large used one or two channels almost exclusively. TripAdvisor: SEO. Pinterest: SEO. Airbnb: referrals + paid. Do not try to build all channels in parallel. Go deep on the one with signal, then expand.

---

## 4. The 5-7% Week-over-Week Growth Benchmark

**Source:** Paul Graham essay on growth; reinforced in YC KPI talk.

**The benchmark:** 5-7% week-over-week growth is "good" for a YC company. 10% week-over-week is exceptional.

**Why weekly, not monthly:**
- Weekly forces a feedback loop short enough to diagnose and act
- Monthly hides two weeks of inaction behind a single data point
- Founders who track monthly can lose three months before realizing there is a problem

**What this compounds to:**
- 5% per week × 52 weeks = ~12.6x annual growth (1.05^52)
- 7% per week × 52 weeks = ~33x annual growth (1.07^52)
- 10% per week × 52 weeks = ~142x annual growth (1.10^52)
- This compounding is why early growth matters more than late growth — the same % earlier multiplies more times

**Airbnb implementation:** Founders wrote their weekly KPI goal on the bathroom mirror. Visibility multiple times per day maintains urgency.

**If you are below 5% week-over-week, diagnose:**
1. Is retention poor? (curve declining) → fix product before acquiring more users
2. Is acquisition poor but retention good? (flat curve but low absolute numbers) → work on growth channels
3. If both are poor → you have no PMF and no channel; talk to users, find who the product works for

---

## 5. KPI Hierarchy

### Primary KPI: Revenue Growth Rate
For the vast majority of startups, this is the correct primary KPI. Use weekly growth rate (%) not absolute revenue.

**Exceptions (rare):**
- Marketplace: GMV or signups if no revenue generated yet and network effects require volume (Uber needed drivers before it could charge riders a premium)
- Enterprise with long sales cycle: LOIs or pipeline stages as leading indicator
- Hardware/biotech: technical milestones, but audit them frequently for whether they actually map to future revenue

**The Scribd warning:** Scribd grew millions of free users over 4 years. When they charged, 90%+ churned. Free growth was not a valid proxy for a business. Revenue grew from zero to meaningful the moment they charged.

### Secondary KPIs (3-5 max)
- **Retention/churn rate**: the root cause that determines whether revenue growth is sustainable
- **Unit economics**: are you making money per user? For early stage, simplify to payback period — how many months until a customer's payments cover their acquisition cost. Target: payback period as close to zero as possible (customers profitable on day 1)
- **CAC**: track even if not yet optimizing. Know whether you're making or losing money per customer acquired
- **Activation rate**: what % of new users reach the moment of first value delivery

### Never track as primary
All metrics in Section 2 above. If these appear as the primary metric in your internal reviews, you are optimizing the wrong thing.

### Goal-setting mechanics
**Top-down:** Set a milestone (e.g., $5,000 MRR by end of program). Back-calculate the weekly growth rate required. Post it visibly.
**Bottom-up:** What can realistically be achieved next week? Project forward. Compare to top-down. Set goal between the two.
**Rule:** Primary KPI goal for the week must be set every week. If it is not set, the team has no directional constraint.

---

## 6. Mental Traps That Kill Growth

These are systematic cognitive errors. Each one produces the feeling of productivity while reducing actual progress.

### Low-Leverage Satisfaction (Fake Progress)
**What it is:** Completing tasks that are well-defined, satisfying to check off, but do not move the primary KPI.
**Examples:** Optimizing incorporation paperwork, redesigning the landing page for a product with no retention, picking the perfect legal firm, attending conferences, building Android app when no users have requested it.
**Why it happens:** Tasks with clear completion criteria reduce anxiety; startup success is uncertain; the brain rewards checklist completion.
**Detection:** Ask — "Does completing this task have a direct path to revenue growth?" If you have to invent more than one connection to get there, it is fake progress.
**What to do instead:** For every candidate task, rank by (probability of success) × (speed of feedback). Work only on the top 1-2 items.

### Fooling Yourself (Selective Metric Reading)
**What it is:** Cherry-picking the metric that looks best this week while ignoring the ones that are declining.
**Examples:** Reporting total signups when retention is falling; reporting conversion rate when top-of-funnel is shrinking; reporting page views when active users are flat.
**Why it happens:** Admitting bad numbers to yourself, co-founders, and investors feels like failure. Slow growth is deceptive — it can look like progress when it is stagnation.
**Detection:** Distinguish between "slow but real growth" and "PMF" — they feel different. At a company with clear PMF, growth is unmistakably happening; at a company without, it requires effort to find positive signals.
**What to do instead:** Define your primary and secondary KPIs in advance. Report all of them every week. Do not swap KPIs when results are bad.

### Perfectionism (Polishing Instead of Shipping)
**What it is:** Making decisions feel higher-stakes than they are; spending disproportionate time on features nobody is using yet.
**Examples:** Polishing a feature before any users have validated it; spending weeks on UI before finding a use case; waiting for "the right time" to launch.
**Why it happens:** When nothing seems to be working, every decision feels like it could be the one that breaks things. Perfectionism is also a delay tactic — if it is not shipped, it cannot be rejected.
**Detection:** How long has this been on the list without a user having seen it?
**What to do instead:** Make good decisions quickly. For most decisions, wrong-then-fixed is faster than perfect-on-first-try. The best case (right decision instantly every time) is impossible. Aim for: good decision quickly, then correct rapidly.

### Downside Protection Instead of Upside Chasing
**What it is:** Spending time fixing small problems instead of finding what makes users come back every day instead of every week.
**Examples:** Getting ops off spreadsheets before spreadsheets are breaking; fixing minor bugs before validating the core use case; negotiating marginally better vendor terms.
**Why it happens:** Downside protection is concrete and satisfying. Chasing upside requires risk-taking, creativity, and tolerance of false starts.
**Detection:** Is this task fixing something that is actually broken, or something that could theoretically break?
**What to do instead:** Spreadsheets are fine until they are not. Stick with what works until it breaks. Spend saved time finding what would make users use the product daily instead of weekly.

### Chipping at Small Problems While an Existential One Looms
**What it is:** Focusing on feature requests from 150 users while the underlying problem (150 users total, flat for 3 months, churning) is not being addressed.
**Examples:** Building one-click ordering for 150 users when the real problem is no new users signing up; optimizing CAC when there is no retention.
**Why it happens:** Small problems are tractable and feel respectable. The existential problem is uncomfortable to face — it might mean the current approach is wrong.
**Detection:** What is the biggest blocker to your primary KPI right now? Is the thing you are working on today related to that blocker?
**What to do instead:** Name the existential problem explicitly. Make it the first item on the weekly task list. Only move to secondary tasks after meaningful progress on the primary blocker.

---

## 7. A/B Testing Protocol

**When A/B testing is appropriate:**
- After PMF is confirmed (flat retention curve)
- Sufficient traffic to reach statistical significance in a reasonable time frame
- Check statistical significance requirements before starting: use an A/B testing calculator (Google "AB testing calculator"), input your current conversion rate and traffic volume, and determine whether your test will have detectable results within your timeframe
- For most early-stage startups: not yet. Do not run A/B tests when you have < 1,000 users per variant per week

**The core use case:** You want to change something (new design, new flow, new copy). Without A/B test, you cannot distinguish the effect of the change from normal variance. With A/B test, you have two parallel universes simultaneously — old and new — measured on the same metric.

**Airbnb examples (calibration):**
- Native iOS share sheet vs. custom share sheet: custom was 40% better at number of shares. Product instincts of the entire room were wrong.
- No signup wall vs. optional signup wall vs. hard signup wall: hard signup wall produced 2.6% more iOS bookings, despite most people predicting it would hurt conversion. Counterintuitive results are why A/B testing exists.

**The lesson:** Even experienced product thinkers with good instincts are wrong on A/B tests at high rates. Do not let the loudest voice in the room decide. Use data.

**Common mistake:** Shipping a change and then watching metrics over time. This conflates the effect of the change with organic trends, seasonality, and external events. Always test against a simultaneous control.

---

## 8. Conversion Rate Optimization (Funnel Work)

**Define the funnel first.** Map every step from first touch to first value delivery. Each step has a conversion rate. Example (Airbnb): P1 (homepage) → P2 (search results) → P3 (listing page) → P4 (booking). Overall P1-to-P4 conversion: ~1-2%.

**Priority rule:** Fix the biggest drop-off first. Calculate the absolute number of users lost at each step. Start with the step that loses the most users, not the step that is easiest to fix.

**Common high-impact interventions:**
- **Authentication flow**: simplify signup/login to minimum friction. Users are vulnerable here — any friction sends them to the next website. Copy what high-traffic products (Pinterest, Airbnb) have done; they have teams that optimized this.
- **Onboarding**: for products requiring user setup, the more questions answered during onboarding that improve the experience, the higher activation and retention. Each question must earn its friction.
- **Internationalization**: if any international traffic exists, translating to key languages has outsized retention impact. Demonstrated at Airbnb, Facebook, and many others.
- **Purchase conversion**: urgency, scarcity, minimum steps between intent and completion.

**The Super Daily example:** High-intent users were dropping at the bottom of the funnel. Investigation revealed: they wanted a specific milk brand the product did not carry. The fix was adding that brand, not improving UX. A 50% conversion rate increase resulted. Identify whether the drop-off is a UX problem or a product/inventory problem before optimizing the UI.
