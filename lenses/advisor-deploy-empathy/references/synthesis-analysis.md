# Synthesis & Analysis — Pattern Finding, JTBD Integration, Decision Frameworks

Source: Deploy Empathy (Michele Hansen, 2021), Parts II, VIII, IX
Citation prefix: `[DE:SL]`

## Core Principle: Everything Is a Process

Каждая задача — процесс с шагами. Каждый шаг имеет functional, social, emotional измерения. Продукт = решение одного или нескольких шагов в процессе. `[DE:CF.1]`

> "Laundry detergent pods eliminate the relatively trivial step of measuring out laundry detergent. That trivial step is now a nine billion dollar annual global market."

---

## 7 Core Questions `[DE:CF.CQ]`

Каждое интервью стремится ответить на эти вопросы:

1. **What are they trying to do overall?** (Compelling Context — big goal)
2. **What are all of the steps in that process?**
3. **Where are they now?** (current situation)
4. **Where does the problem you're solving fit in that process?**
5. **Where do they spend a lot of time or money?** (pain indicators)
6. **How often do they experience this problem?** (frequency)
7. **What have they already tried?** (alternatives, manual solutions)

### Task → Activity → Goal Hierarchy

- **Task:** Grinding coffee beans (single action)
- **Activity:** Making a cup of coffee (collection of tasks)
- **Goal:** Being able to focus on work (compelling context)

Product = one or two steps. Products solving multiple steps → higher satisfaction, higher LTV, more word-of-mouth.

---

## Functional, Social, Emotional `[DE:CF.FSE]`

### Three Dimensions Framework

Каждый процесс и каждое решение имеет три измерения:

| Dimension | Definition | Interview Probe | Example (Coffee) |
|-----------|-----------|-----------------|-------------------|
| **Functional** | Literal problem/task | "What are the steps?" | Specific grind texture needed |
| **Emotional** | How it makes them feel | "How did that make you feel?" | "Work I put in = more enjoyable coffee" |
| **Social** | Other people involved | "Who else was involved?" | "I like sharing with coworkers" |

### Same Goal, Different Dimensions → Different Products

| Person | Goal | Functional | Emotional | Social | Product Choice |
|--------|------|-----------|-----------|--------|----------------|
| Person A | Energized at work | Specific grind | Pride in craft | Sharing ritual | Pour-over set |
| Person B | Energized at work | Quick, simple | Stressed morning | Kids needing breakfast | Pod machine |
| Same person! | Energized at work | Depends on day | Weekend = relaxed, Weekday = rushed | Context changes | Both! |

**Key insight:** Context, preferences, and constraints ALL matter. Same person may use different products for same goal depending on context.

### Luxury Products Too

Designer watch: "lifetime guarantee" (functional) + "impress others" (social) + "I deserve it" (emotional). All three drive purchase even for "purely functional" products.

---

## Valuable, Usable, Viable, Feasible `[DE:CF.VUVF]`

### Marty Cagan Framework (adapted)

| Filter | Question | When Applied |
|--------|----------|--------------|
| **Valuable** | Does customer need it? Won't buy if no | DURING interview: listen for value signals |
| **Usable** | Can they figure out how to use it? | AFTER interview: evaluate UX implications |
| **Viable** | Makes money for the company? | AFTER interview: business model check |
| **Feasible** | Can we build it? | AFTER interview: technical assessment |

**CRITICAL:** Customer can't know your capabilities, resources, constraints. Filter through VUVF AFTER interview, not during. During = sponge mode.

**Segway vs Scooters:** Same problem (faster than walking, no sweat). Segway = wrong VUVF combination. Scooters = better business model (viability) + form factor (usability).

---

## Research Loops `[DE:SL.1]`

### Decision Algorithm

**APPLY WHEN:** Broad scope, hearing different things from each person, early exploratory stage.

**Process:**
1. Interview 5 people → Analyze → Identify directionally interesting problems
2. Filter: Frequent + Painful + Underserved + Commercially viable + Feasible for you
3. Narrow to 1-3 problem areas
4. Interview another 5 people with narrower scope
5. Analyze → Narrow further
6. Prototype → Interactive interviews → Card sorting
7. Repeat until confident enough to build

### "Stop when you start hearing the same things over and over again"

- Griffin & Hauser (1993): 20-30 people → 90-95% customer needs; 12 people → 80%
- Nielsen Norman Group: 5 interviews → 80% of needs
- Jim Kalbach: minimum 5, maximum 15-20
- Hansen rule of thumb: 5 per discrete problem, research loops для complex problems

---

## Pain & Frequency Matrix `[DE:SL.PF]`

### Analysis Tool

After interviews, plot discovered problems on 2x2 matrix:

```
         HIGH FREQUENCY
              |
    [Sweet    |  [GOLD MINE]
     Spot]    |   High Pain +
              |   High Frequency
    ----------+----------
              |
    [Low      |  [Possible if]
     priority]|   High Pain +
              |   Low Frequency
              |
         LOW FREQUENCY
    
    LOW PAIN ----------- HIGH PAIN
```

**GOLD MINE (top-right):** Frequent AND painful = highest willingness to pay
**Sweet Spot (top-left):** Frequent but lower pain = volume play, lower price
**Possible (bottom-right):** Painful but rare = premium for niche
**Low priority (bottom-left):** Infrequent and low pain = probably not viable

### What to Listen For

| Signal | Implies | Quadrant |
|--------|---------|----------|
| "I do this every day/week" | High frequency | Top half |
| "It takes me hours" | High pain (time) | Right half |
| "I pay $X/month for [tool]" | High pain (money) | Right half |
| "I use spreadsheet/manual process" | Underserved problem | Right half |
| Multiple tools for one task | Pain from fragmentation | Right half |
| "I tried [X, Y, Z]" | Problem is real, solutions inadequate | Right half |
| Emotional tone (frustration, sighing) | High pain (emotional) | Right half |

---

## Customer Journey Map (Simplified) `[DE:SL.CJ]`

### How to Build After Interviews

1. List overall goal (compelling context)
2. Map out ALL steps in the process (from interview data)
3. For each step, note:
   - Time spent
   - Money spent
   - Tools used
   - People involved
   - Emotional state
4. Identify where YOUR product fits (or could fit)
5. Identify adjacent steps (expansion opportunities)

### Quick Analysis Template `[DE:SL.QA]`

After each interview, capture:

**Immediate (same day):**
- What is their overall goal?
- What did they use before?
- How frequent is the problem?
- How difficult is it to solve?
- What are the costs of getting it wrong?
- Steps of their decision-making process
- Functional / Emotional / Social factors

**Longer-term (after 5 interviews):**
- Patterns across interviews
- Divergences (different segments?)
- Pain-Frequency positioning
- Product/marketing implications

---

## Asking About Price / Willingness to Pay `[DE:SL.WTP]`

### Van Westendorp Price Sensitivity Questions

**The questions to ask (in this order):**
1. At what price would you consider this product to be so expensive that you would NOT buy it?
2. At what price would you consider this product to be priced so low that you'd feel quality is poor?
3. At what price would you start to think it's getting expensive, but you'd still consider buying it?
4. At what price would you consider this product to be a great deal?

**Analysis:** Plot responses on chart. Intersection points reveal optimal price range.

### Behavioral Alternative (Hansen preference)

Instead of asking directly about price, ask about CURRENT spending:
- "How much do you currently pay to solve this?"
- "How long does it take you?" (time = money proxy)
- "What tools do you use? How much are they?"

Current spending = strongest signal of willingness to pay.

---

## The "Reaching for the Door" Question `[DE:SL.RD]`

At end of interview, as if reaching for the door: "Is there anything else I should have asked you about?"

This often elicits the MOST valuable response. Person feels interview is wrapping up, guard drops, shares what's been on their mind the whole time.

---

## Switch Interview Deep-Dive `[DE:SL.SW]`

### Four Forces (JTBD)

When someone switches products, four forces are at play simultaneously:

| Force | Direction | Example |
|-------|-----------|---------|
| **Push of current** | Away from old | "Firebase Storage didn't work as easily as supposed to" |
| **Pull of new** | Toward new | "Geocodio solved it in two clicks" |
| **Anxiety of new** | Against switching | "Wasn't sure paywall product would pay itself back" |
| **Inertia of current** | Stay with old | "Didn't want to invest in new infrastructure" |

**Interview goal:** Uncover all four forces. Marketing should amplify push + pull, reduce anxiety + inertia.

### Key Switch Questions

- "What did you use before?"
- "What led you to start looking for something new?"
- "Were there things that made you hesitate about switching?"
- "What was it like when you first started using [new product]?"
- "Did it do what you were hoping?"

---

## One-Question Survey Strategy `[DE:SL.SQ]`

### High-Value, Easy-to-Answer Questions

Hansen's Geocodio experience: "What could we do better?" → 80% left blank (garbage question).

Changed to: "What did you use before you found Geocodio?" → much higher response rate → springboard to deeper conversations.

**Best one-question survey options:**
- "What did you use before you used [product]?"
- "How did you come across [product]?"

**NOT recommended:** "If you could change anything with a magic wand, what would it be?" (too many "make it free" responses in survey format; works better in live interview with follow-up)

### Follow-up Template (to survey responses)

When someone says "nothing" used before:
> "Thank you for telling us that you didn't use anything before you used [product]. I'm curious --- would you be able to tell me more about what led you to need [thing product does] in the first place? I'm particularly interested in hearing what it is you're doing overall and how you found us."

Result: often several paragraphs back. Sometimes testimonials and sales inquiries.

---

## Interviews or Numbers? `[DE:SL.IN]`

### Decision Framework

| Question | Best Tool |
|----------|-----------|
| WHAT is happening? (metrics, volumes, trends) | Quantitative data (analytics) |
| WHY is it happening? (motivations, context, decisions) | Qualitative interviews |
| HOW MANY people do X? | Quantitative |
| WHY do people do X? | Qualitative |

> "A spreadsheet of data can tell you what is happening, but it will never tell you why."

**Answer:** Do both. Not either/or.

### Stripe Model for Combining

1. Align on problem to solve
2. Determine if interviews are right tool (vs analytics, surveys, etc.)
3. If yes, make sure questions will solve the identified problem
4. Combine with industry research and data analysis
