# Pivot Scoring Reference

Source: Dalton Caldwell, "All About Pivoting" (YC Startup School)

---

## 4-Dimension Idea Quality Scoring System

Score each dimension 1–10. Average all four scores to get an overall quality score. Use the score to compare ideas before and after a pivot.

### Dimension 1: How Big Is the Idea?

Evaluate whether the business could plausibly become a large, publicly traded company.

- **Score 8–10**: Obvious publicly traded comp exists. Business could generate hundreds of millions to billions in net annual revenue within 5–10 years. Clear path to venture scale. Examples: a new bank (fintech comps exist), a new credit card product for a defined market (Square, Stripe comps), a no-code internal tools builder (80% of all software is internal-facing).
- **Score 4–7**: Market exists but scale is uncertain. Could be large with the right execution but not immediately obvious. Example: Venmo-for-UK (Venmo is big, but UK fintech replication has real constraints).
- **Score 1–3**: Business is probably not venture-fundable. Revenue ceiling is low, margins are thin, or growth will be slow by structure. Example: a blood pressure coaching app, a subway franchise, importing and selling on eBay.

Key test: Can you picture this as a publicly traded company? Can revenue growth reach venture scale in under 10 years? Is technology a core component? Are gross margins high (software = 70–80%)?

### Dimension 2: Founder-Market Fit

Evaluate how well the founders' background, skills, and networks match the idea.

- **Score 8–10**: Deep domain expertise directly relevant. Founders can write all the code, have existing relationships in the industry, and have prior success in this exact space. Example: founders who built and sold a fintech company in Brazil pivoting to a startup credit card for companies — they had existing fintech relationships, could ship the product themselves, and had done it before.
- **Score 4–7**: Partial fit. Founders understand the target user (e.g., they are the user) but lack deep technical or industry expertise. Example: student founders building a classroom feedback tool — they understand the audience but aren't experts in education.
- **Score 1–3**: No relevant expertise. Founders are attempting a domain they have no experience in and cannot build the core product themselves. Example: non-hardware founders building a VR headset. Example: founders doing an AI startup with no programming background.

### Dimension 3: How Easy Is It to Get Started?

Evaluate the time and capital required to ship a first version and get it in front of users.

- **Score 8–10**: Can build and launch in days or weeks with existing skills, zero or near-zero capital. Example: Magic built their prototype in a weekend, posted to HackerNews, went viral overnight. Example: Segment open-sourced an analytics tool they built for themselves — the market adopted it before they decided it was a business.
- **Score 4–7**: Can launch within a few weeks to a couple of months. May require hiring one or two people or navigating some regulatory friction. Example: Retool — founders built the first version in two weeks, got first customers quickly, but customers were uncertain about trusting a new startup with internal tooling.
- **Score 1–3**: Requires significant capital, years of R&D, hardware development, or regulatory approval before a prototype exists. Chicken-and-egg problem: you can't start without resources you don't have. Example: VR headset startup required hiring hardware engineers, millions in manufacturing capital, years before a prototype. Rule: if you need to raise $100M before building a prototype, pivot immediately.

### Dimension 4: Early Market Feedback

Evaluate how customers respond when you show them the product or describe it.

- **Score 8–10**: Customers say yes immediately with minimal sales effort. Organic demand, inbound requests, unsolicited usage, or viral spread. Example: Brex — in the YC batch, founders asked other founders "do you have a corporate credit card, do you want one?" The answer was yes with a 3-minute sales process. Example: Segment — developers found the open-source tool on GitHub and begged the founders to make it a commercial product.
- **Score 4–7**: Some genuine interest, but customers are hesitant or slow to commit. Interest exists but there are real objections (trust, pricing, feature gaps). Example: Retool scored a 5 here — people were interested but not sure they could trust a new startup with internal tooling infrastructure.
- **Score 1–3**: Customers are polite but never convert. No one uses the product without prompting. Usage data is bad even when people say positive things. Classic pattern: "Come back when you add feature X" repeated indefinitely. Example: Blood pressure app — early market feedback was universally polite, usage was near zero.

---

## Case Studies with Full Scores

### Brex — YC W17

**Before pivot: Corporate VR headset for work**
| Dimension | Score | Reasoning |
|---|---|---|
| Market size | 5 | VR headsets seem like the future but no publicly traded pure-play comps |
| Founder-market fit | 1 | Founders were fintech software engineers with zero hardware, optics, or manufacturing experience |
| Ease of start | 2 | Required hiring hardware engineers, millions in capital, years before prototype |
| Early feedback | 2 | Talked to potential users — nobody wanted it |
| **Total** | **2.5** | |

**After pivot: Corporate credit card for startups**
| Dimension | Score | Reasoning |
|---|---|---|
| Market size | 10 | Fintech has abundant publicly traded comps (Square, Stripe, traditional banks) |
| Founder-market fit | 10 | Founders had built and sold a fintech company in Brazil, had existing relationships, could ship themselves |
| Ease of start | 3 | Hard to launch a new credit card product — regulatory, banking partnerships. Only workable because of exceptional founder-market fit |
| Early feedback | 8 | In-batch testing: asked YC companies if they wanted a corporate card, got near-instant yes answers with a 3-minute sales process |
| **Total** | **7.75** | |

Score delta: +5.25. This is what a good pivot looks like numerically.

### Retool — YC W17

**Before pivot: Venmo for UK**
| Dimension | Score | Reasoning |
|---|---|---|
| Market size | 7 | Venmo is big; UK market is real |
| Founder-market fit | 3 | Limited fintech expertise; managed to launch but without deep domain knowledge |
| Ease of start | 7 | Already had launched, already had users — high score because they had running product |
| Early feedback | 3 | No one wanted to pay; losing money on every transaction; no path to unit economics |
| **Total** | **5.0** | |

Note: Retool illustrates the "insidious traction" trap — they had real users, making the decision to pivot much harder than it should have been.

**After pivot: No-code internal tools builder**
| Dimension | Score | Reasoning |
|---|---|---|
| Market size | 10 | 80% of all software is built for internal consumption, not external products |
| Founder-market fit | 10 | One founder had built a similar tool during a college internship; deep understanding of the product shape |
| Ease of start | 8 | Built first version in two weeks, got first paying customers immediately |
| Early feedback | 5 | People were interested but reluctant to trust a new startup with critical internal infrastructure |
| **Total** | **8.75** | |

### Magic — YC W15

**Before pivot: Blood pressure coaching app**
| Dimension | Score | Reasoning |
|---|---|---|
| Market size | 2 | Limited ceiling for a single-condition consumer health app |
| Founder-market fit | 2 | No health background |
| Ease of start | 8 | Built quickly, got users quickly |
| Early feedback | 2 | Usage was near zero; everyone was polite, nobody used it |
| **Total** | **3.5** | |

**After pivot: Text-any-request concierge (Magic)**
- Built the prototype in one weekend
- Posted to HackerNews: reached #1, 2,000+ upvotes, went viral overnight
- Directly inspired the chatbot category that followed
- Scored high on ease-of-start and early feedback; founder-market fit was not exceptional but irrelevant given the other scores

### Segment — YC S11

**Before pivot: Classroom feedback tool (confused → not confused button)**
| Dimension | Score | Reasoning |
|---|---|---|
| Market size | 4 | Education tools market exists but not obviously venture-scale |
| Founder-market fit | 5 | Founders were students; understood the audience but not domain experts |
| Ease of start | 7 | Built fast |
| Early feedback | 6 | Professors liked it; got schools to adopt; sales were actually successful |
| **Total** | **5.5** | |

Note: Segment illustrates that good early feedback doesn't guarantee the right idea. They stayed on this idea for years before discarding it.

**After pivot: JavaScript analytics collection tool (Segment)**
- Founders built the tool for themselves and open-sourced it without thinking it was a company
- Developers on GitHub begged them to support it commercially — the market asked for the product to exist
- Founder-market fit was exceptional: "world experts on analytics"
- Ease of start was maximal: already built, already used
- Market begging for a product you don't think is important = very strong positive signal

---

## Uncanny Valley of Product Market Fit

The uncanny valley of PMF is the state where a startup has enough traction to prevent founders from pivoting, but not enough traction to actually work. It is more dangerous than having zero traction.

**Characteristics:**
- A few users or one customer
- Initial spike in usage that doesn't sustain
- Politeness from contacts masquerading as validation
- Founders interpret "come back with more features" as encouragement
- Retention is poor but absolute user count creates psychological lock-in

**Why it is dangerous:** A startup with zero traction allows founders to immediately "declare bankruptcy" on the idea and pivot without second-guessing. A startup in the uncanny valley creates loss aversion — founders feel they have too much invested to abandon the idea. They spend months or years optimizing a product that will never achieve real PMF.

**How to identify:**
- Initial spike in signups or usage followed by declining retention
- Growth requires constant active effort; stops when effort stops
- When you map users over time, cohort retention curves slope to zero
- You have to push users to use the product; they don't return on their own
- Customers say kind things but don't recommend the product to others

**What to do:** Accept that you are in the uncanny valley. The polite feedback you are receiving is not traction. Run the opportunity cost calculation: if the potential of something else exceeds (how well this is working) / (months of concerted effort), pivot.

---

## Pivot Decision Framework

### When to Pivot

Pivot when any of these conditions are true:
- You have launched and tried to get users for weeks or months and feel genuinely hopeless
- The idea requires resources (funding, partnerships, regulatory approval) you cannot access before proving the concept
- You know in your heart it is not working but are maintaining the appearance that it is
- You have run out of ideas for how to make the current idea work
- You are completely dependent on an external factor outside your control (e.g., mass VR adoption, cryptocurrency mainstream adoption)
- You are not a good fit for this idea and are learning that more clearly over time

### When Not to Pivot

Do not pivot when:
- You are avoiding doing hard work (e.g., pivoting right before the sales phase)
- You chronically change ideas and have not followed any idea through to a real conclusion
- You are reacting to a TechCrunch article about a hot new category

### Opportunity Cost Formula

The pivot decision reduces to: if (how well things are working / months of full-time effort) is less than (excitement about a new direction + confidence you can find something better), pivot.

The months variable dominates. Months of concerted effort on something not working is the strongest signal to pivot.

### Signs of Real PMF (Do Not Pivot)

- Users are upset or contact you when the product breaks or goes down
- Users recommend the product to others without being asked
- Users use the product more than you expected, in ways you did not anticipate
- Growth happens even when you stop pushing it
- Customers ask when the next feature is coming

### Signs of False PMF (Pivot)

- Users say positive things but do not return
- Growth stops the moment outbound effort stops
- You have to constantly remind customers to use the product
- Customers suggest features but do not prioritize using what already exists
- Retention curves slope to zero for every cohort

---

## Pivot Mechanics

### How to Execute

1. Determine your current idea's score on all four dimensions. Be honest.
2. Generate alternative ideas. Score each one before committing.
3. Select the idea with the highest score that you are genuinely excited about. Choosing a harder, more exciting idea often outperforms a safe, boring one.
4. Find an idea where you can build and validate fast — measured in days or weeks, not months.
5. Commit. Build the minimum version, get it in front of real users, observe real behavior (not stated preference).

### What to Keep

- Co-founders (do not add people during a pivot; do not fire people until you know the new idea is working)
- Domain expertise and relationships that transfer to the new idea
- Lessons about what early market feedback actually looks like

### What to Change

- The product
- The customer segment
- Sometimes the market entirely

### Pivot Cadence

- Too fast: pivoting once a week or once a month causes whiplash. Whiplash causes founders to give up. Giving up kills the company faster than a bad idea.
- Too slow: working on the same broken idea for years out of loss aversion or stubbornness.
- Right: complete a full iteration cycle (build, ship, get to real users, observe real behavior, decide) before declaring the idea dead. Each full cycle earns you the right to make a data-based pivot decision.

### Team and Pivot

- Do not have employees during early pivoting. It slows pivots and damages morale.
- Scale team only after confirming the idea is working and you have confidence.

### Multiple Shots on Goal

Each complete pivot attempt is a shot on goal. The odds of hitting PMF increase with the number of high-quality shots. A founder who completes six full build-ship-learn cycles has dramatically higher odds than a founder who bets everything on one idea and stays with it regardless of evidence.
