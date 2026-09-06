# MVP and Iteration: Build, Ship, Learn Protocol

Source: "How to Build an MVP" — Michael Seibel, YC CEO (YC Startup School)

---

## Core Principle

The goal of the MVP phase is not to build a good product. The goal is to start a conversation with real users as fast as possible. You only begin learning what users actually need when you put a product in front of them. Every week you spend building without user contact is a week of learning you will never recover.

The simplest, fastest, smartest path: build something small that probably will not work perfectly → ship it to real users → learn → iterate. Then repeat until you have product-market fit.

---

## The "Hair on Fire" Principle

Do not build for average users. Build for the most desperate users first.

The metaphor: imagine your hair is currently on fire. Someone offers you a bucket of water — that is the ideal product, the iPhone equivalent. But the founder only has an MVP. What they are offering is a brick. Would you buy the brick?

If your hair is genuinely on fire: yes. You would buy the brick and hit yourself on the head to smother the flames. It is not the right solution. But you are in so much pain that a non-perfect solution is still worth using.

That is your target early customer: someone in enough pain that they will use a non-perfect solution. Someone who is not in that much pain will wait for the perfect solution — and you cannot learn from someone who will not use your product.

**Diagnostic question**: When you show a user your MVP and they say "this is interesting, maybe I'll try it sometime" — that user's hair is not on fire. Find the user who says "when can I start using this? Can I pay now?" That is the hair-on-fire customer.

**Implication for customer selection**: Do not try to address all potential customers at launch. Find the most desperate subset. Solve their problem completely. The less desperate customers can wait until you have learned enough from the desperate ones.

---

## The Fake Steve Jobs Anti-Pattern

A persistent anti-pattern among technically strong founders: "I know exactly what users need. I just need to build it properly. I do not need to talk to anyone until it is ready."

This is called being a Fake Steve Jobs. It is a massive misconception of how great product people actually work.

Steve Jobs is cited as the archetype of visionary product intuition. But:

- The first iPhone had no App Store
- The first iPhone could not take video
- The first iPhone only had 2G data — effectively unusable internet
- The first iPod had a physical scroll wheel that regularly got sand stuck in it and broke

The iPhone that people remember — the product that defined the category — was the third or fourth iteration, not the first. Even Steve Jobs needed multiple versions to get his most celebrated products right.

If Steve Jobs, with massive resources and experience, needed multiple iterations to get his products right, you need them too. The difference between Jobs and a Fake Steve Jobs: Jobs shipped the first version, learned from users, and iterated. Fake Steve Jobs is still building version one.

When you catch yourself thinking "I just need more time to build it correctly before I show anyone" — you are acting as a Fake Steve Jobs. Ship what you have.

---

## Early Adopter Psychology

A common fear: "If I show users a broken MVP, they will never work with us again."

This fear misidentifies who early adopters are. Early adopters are people who:
- Have a real, urgent problem
- Are open to using software that does not yet work perfectly
- Regularly try new products (this is their pattern)
- Will not run away because a product has rough edges — they expect rough edges

The people who would run away after a broken demo are not early adopters. They never would have tried your product in the first place. You never had them, so you are not losing them.

The pitch that works for early adopters: "I cannot promise it will be perfect from day one, but if you keep working with me, I will keep making it better and make sure it works for you." Early adopters respond to this because they have been through it with other products and they know this is how new products are built.

The worst-case scenario analysis: You demo to a user and they do not want to use it. You wake up the next day. Can you reach out to someone else? Yes. Can you reach back out to that user a week later once you have made the product better? Usually yes. Is your startup dead? No. The fear of user rejection is non-specific and catastrophizing — it is not grounded in realistic consequences.

---

## What a Valid MVP Is

A valid MVP does something useful. It is not:

- An email signup landing page
- A "coming soon" page
- A brochure site explaining what you plan to build
- A survey
- A prototype that requires extensive explanation before the user can understand it

A valid MVP:
1. Does something — performs an actual function, not just describes one
2. Has one core workflow that runs end to end without breaking
3. Can be used by a real user without you standing next to them explaining every step (mostly)
4. Enables you to measure whether it solved the user's problem

**The MVP is not disposable because it is bad. It is disposable because you will learn from it and build something better.** Do not fall in love with the MVP. It will change dramatically. Fall in love with the users and their problem, not the initial solution.

---

## Historical MVP Examples

These examples establish the minimum viable threshold — what "minimum" actually means in practice.

### Airbnb

First version constraints:
- No payment processing — users had to arrange payment separately
- No map view — no way to see where listings were located in the city
- Guests had to stay on an air mattress, not rent rooms or full apartments
- Only functional during conferences — spun up when a conference came to a city, shut down after

Airbnb's first MVP was not a vacation rental marketplace. It was an air mattress lodging service for conference attendees, with manual payments and no map. That was enough to start learning.

### Twitch (started as Justin.tv)

First version constraints:
- One page
- One streamer (the founder, Justin, wearing a camera 24/7)
- No video games category — just a person streaming their life
- CDN costs were enormous because they had not built their own video infrastructure

Twitch started as a single-person lifecast with no niche, no categories, and no infrastructure. It was barely functional. That was enough.

### Stripe (started as /dev/payments)

First version constraints:
- No direct bank APIs — had to call the bank manually and file paperwork every night
- Almost no features in the API
- So basic that Twitch (at the time) could not use it because it lacked necessary functionality

The first version of Stripe could only handle simple credit card payments for early-stage YC startups — and it had to be set up manually, overnight, by the founders calling a bank. That was enough to start learning what Stripe actually needed to be.

**Pattern across all three examples**: Fast to build. Very limited functionality. Appealed to a small, specific set of desperate users — not all potential users. Founders chose to make something that a small group loved, rather than something that addressed all potential users partially.

---

## Why Surveys Cannot Replace MVPs

You can learn about the pain users experience through surveys and interviews. You cannot learn how to solve that pain through surveys and interviews. The problem-solution conversation only begins when you put a product in front of a user.

Users are experts in their problem. They are not experts in the solution. They do not know what will work until they try something. The only way to find out whether your solution addresses their problem is to give them the solution and observe.

Surveys might give you problem confirmation. They will never give you product validation. There is no shortcut to this step.

---

## MVP Scoping Rules

### Time box: 2-4 weeks maximum to first MVP

If your first MVP will take longer than 4 weeks to build, it is not an MVP — it is a v1.0. Cut scope until it fits in 2-4 weeks. The constraint is not arbitrary: it forces ruthless prioritization and prevents scope creep.

### Write the spec, then cut 50%

Process:
1. Write down every feature you think is required to launch
2. Go through each feature and ask: "Does a truly desperate user need this feature to get value from the core workflow?"
3. Remove everything that is not necessary for the core workflow
4. Build what remains

You will be surprised how many features can be deferred to the second, third, or fourth version. Most founders dramatically overestimate the minimum viable feature set.

### Solve one problem completely rather than many problems partially

"It is far better to have 100 people love your product than 100,000 who kind of like it."

A product that completely solves one problem for a small group creates passionate users, word of mouth, and learning about a real use case. A product that partially solves many problems for many groups creates no passionate users and teaches you nothing about what to build next.

### Give yourself a specific deadline

It is far easier to build an MVP in 2 weeks or 4 weeks than with no deadline at all. Without a deadline, the spec expands indefinitely. Set the deadline first, then scope to fit.

---

## The 2-Week Iteration Cycle

After the initial MVP ships, operate in 2-week cycles indefinitely. Each cycle:

**Week 1: Talk to users and spec**
- Talk to current users: what works, what does not, what they are trying to do that the product does not support
- Talk to churned users: why did they stop using it? What was missing?
- Write the spec for the next cycle based on what you learned
- Cut 50% of what you initially planned to include

**Week 2: Build and ship**
- Build the scoped spec
- Ship to users by end of week 2 — not "mostly done," shipped
- Do not delay shipment for polish unless there is a functional blocker

Do not fall in love with a version. Three, four, five, six iterations in, the product will be very different from the MVP. That is the correct outcome. You want the product to change dramatically because that means you are learning.

---

## Iteration Protocol After Launch

### Measure retention first

The first question after launch: are users coming back? Are they returning on their own, without prompting?

- If yes: you have early evidence of product value. Identify what users are returning for and build more of it.
- If no: you have a retention problem. Identify why before adding any new features.

### When retention is bad: talk to churned users

Contact users who signed up and stopped using the product. Ask:
- "What were you trying to do when you first signed up?"
- "What happened when you tried to do that?"
- "What did you do instead?"

Do not ask "why did you leave" — it produces defensive answers. Ask about the workflow they were trying to accomplish. The gap between what they were trying to do and what the product let them do is your most actionable signal.

### When retention is good: add adjacent features one at a time

Do not add multiple features simultaneously. You will not be able to isolate which feature drove any change in behavior. Add one feature per cycle, measure whether it moves retention or usage, then decide whether to keep it.

### Keep the 2-week cycle regardless of stage

The 2-week cycle is not only for early-stage startups. Enterprise software companies, products with paying customers, products in growth — the cadence of ship → learn → iterate does not stop. The scope of each cycle grows as the team grows, but the cycle itself continues.

---

## The "Do Things That Don't Scale" Principle in MVP Context

During the MVP phase, recruit your initial customers one at a time. Do not wait for scalable growth channels. Call people, email people, show up at events. If you care about these customers and engage with them directly, they will talk to you, work with you, and help you figure out how to solve their problems.

The Airbnb founders went door to door photographing listings. Stripe's founders manually set up accounts overnight. These are not failure modes — they are the correct approach for learning what the product needs to be.

Scalable growth comes after you know what to grow. During the MVP phase, your job is to learn, not to scale.

---

## Decision Framework: When Is the MVP Ready to Ship?

Ship the MVP when all four conditions are true:

1. **It does something**: There is one core workflow that performs a real function (not an email signup or a mockup)
2. **It runs end to end**: The core workflow completes without manual intervention from you
3. **A real user can use it**: You can hand it to someone and they can derive value from it, even if the experience is rough
4. **You can measure it**: You have a way to determine whether the user's problem was solved — not just whether they said it was good

Do not ship before condition 1 and 2 are met. Ship even if condition 3 and 4 are imperfect — you can improve measurement and UX in the next cycle.

The decision to ship is almost always the right decision if conditions 1 and 2 are met. The cost of delaying shipment is always paid in lost learning.
