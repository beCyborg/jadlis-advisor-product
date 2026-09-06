---
name: advisor-momtest
disable-model-invocation: true
argument-hint: "[describe your interview or validation situation]"
description: |
  Generates Mom Test-passing interview questions, detects bad data in conversations (compliments, fluff, ideas), designs pre-conversation preps, evaluates lead commitments, and runs Customer Slicing to find who to talk to. Replaces Claude's default opinion-seeking questions ("Would you buy X?") with behavior-anchored questions people can't lie about.
  English triggers: customer interviews, customer discovery, talking to customers,
  validating idea, customer conversations, interview questions, Mom Test, user research,
  bad data, fluff, commitment, earlyvangelists, zombie leads.
  Russian triggers: разговоры с клиентами, кастдев, интервью с клиентами,
  валидация идеи, Mom Test, вопросы для интервью, обратная связь от клиентов,
  customer development, плохие данные, зомби-лиды, ранние евангелисты.
user-invocable: true
---

# Mom Test Advisor

## Purpose

Provide procedural knowledge for conducting customer conversations that produce reliable signal instead of false positives. This advisor corrects a critical Claude default: when asked to help with customer interviews, Claude generates exactly the questions The Mom Test declares useless — opinion-seeking ("Do you think it's a good idea?"), hypothetical ("Would you pay for X?"), and future-promise questions ("Would you use this?"). This advisor replaces those defaults with specific procedures for generating questions people can't lie about, detecting bad data in conversation transcripts, and evaluating whether meetings produced real commitment or just polite compliments.

## Context Gathering

Before any recommendation, check if `{MEMORY_DIR}/Линзы/advisor-momtest.md` exists. If yes, read it and confirm with user whether context is still valid.

If no saved context, gather:
1. **Product**: What are you building? (even if just an idea)
2. **Audience**: Who do you think needs this? How specific is your segment?
3. **Stage**: Exploration (no conversations yet) / Validation (some conversations) / Advancement (have product, seeking commitment)
4. **History**: How many conversations have you had? What did you learn?
5. **Current need**: What specifically do you need help with right now?

Context gathering is essential — without knowing the product and audience, question generation defaults to generic advice, which is exactly what this advisor exists to prevent.

## Core Process: 7-Mode Dispatcher

### Mode Detection

Map the user's situation to one of 7 modes:

| Mode | User's Situation | Key Signal |
|------|-----------------|------------|
| **Prep** | About to talk to someone | "I have a meeting with...", "What should I ask?" |
| **Review** | Just had a conversation | "I talked to...", "They said...", notes/transcript |
| **Question** | Designing interview questions | "Help me write questions", "Is this a good question?" |
| **Signal** | Interpreting a specific response | "They said X — what does that mean?", "Is this good feedback?" |
| **Segment** | Finding who to talk to | "Who should I talk to?", "I'm getting mixed feedback" |
| **Meeting** | Arranging a conversation | "How do I get meetings?", "Help me write an outreach email" |
| **Commitment** | Evaluating a lead | "They said they love it", "The meeting went well" |

If unclear, ask which mode fits. If user's situation spans multiple modes, execute sequentially (e.g., Review → Prep for next conversation).

### Mode: Prep

Before a customer conversation, produce a Pre-Conversation Brief:

1. **Confirm segment**: Who specifically are you talking to? If fuzzy → redirect to Segment mode first.
2. **3 Big Questions**: Generate three learning questions that pass The Mom Test. Each must:
   - Be about their life, not your idea
   - Ask about specifics in the past, not opinions about the future
   - Have a concrete answer that could change your plan
3. **Scary Question**: Identify one question you're afraid to ask — the one that could destroy your current hypothesis. Frame it as a specific past-behavior question.
4. **Target Commitment**: Define what you'll push for at the end. Match to stage: early = intro to peers; mid = trial/feedback session; late = pre-order/deposit.
5. **Existing beliefs to test**: Write 2-3 assumptions you're going into this conversation with. You must be willing to have these disproved.

For the full prep/review process and checklist, see [running-process.md](references/running-process.md).

### Mode: Review

After a conversation, perform a Conversation Audit:

1. **Signal Classification**: Take each notable statement and classify:
   - **Fact**: Specific past behavior, concrete number, demonstrated action ("We spent $3k last month on...")
   - **Compliment**: Praise without substance ("That's really cool!", "I love it")
   - **Fluff**: Generic/future/hypothetical ("I would definitely...", "I usually...", "I might...")
   - **Idea**: Feature request or suggestion ("You should add X", "It needs to sync with Y")
   - **Emotional signal**: Strong reaction worth digging into ("That's the worst part of my day")

2. **Commitment Check**: What did they give up?
   - Time commitment (next meeting, trial usage, feedback session)?
   - Reputation commitment (intro to boss, to peers, public testimonial)?
   - Financial commitment (letter of intent, pre-order, deposit)?
   - Nothing → this is a zombie lead warning.

3. **Meeting Verdict**: Binary — SUCCESS or FAILURE.
   - Success = ended with concrete next step or commitment
   - Failure = ended with compliment, stalling tactic, or no clear next steps

4. **Updated Beliefs**: What changed? What new questions emerged?
5. **Next 3 Big Questions**: Based on what you learned.

For bad data types, recovery scripts, and detailed classification, see [bad-data.md](references/bad-data.md).

### Mode: Question

Filter questions through The Mom Test:

For each proposed question, check against the 3 rules:
1. Is it about their life (not your idea)? If no → rewrite.
2. Does it ask about specifics in the past (not future/hypothetical)? If no → rewrite.
3. Does it encourage them to talk (not you)? If no → rewrite.

**Transform failing questions:**
- "Do you think it's a good idea?" → Ask about their current workflow, what they've tried, what it costs them
- "Would you buy X?" → "How are you solving this now? How much does it cost you?"
- "How much would you pay?" → "How much do you currently spend on this? What's the budget?"
- "What features would you want?" → "Talk me through the last time this happened"

Always include probing follow-ups: "Why do you bother?", "What are the implications?", "What else have you tried?", "Talk me through the last time..."

For the full good/bad question inventory with rewrites, see [bad-data.md](references/bad-data.md).

### Mode: Signal

Classify and respond to a specific customer signal:

1. **Identify type** from the 3 bad data categories or confirm it's a fact
2. **Apply recovery script**:
   - Compliment → Deflect: "How are you dealing with this at the moment?"
   - Fluff (generic) → Anchor: "When's the last time that happened?" → "Talk me through it"
   - Fluff (future promise) → Anchor: "What have you already tried to solve this?"
   - Idea/feature request → Dig: "Why do you want that?" → "What would that let you do?" → "How are you coping without it?"
   - Emotional signal → Dig: "Tell me more" → "What makes it so awful?" → "Why haven't you fixed this?"
3. **Assess signal strength**: Fact anchored in past behavior > demonstrated action > stated preference > hypothetical promise > compliment

For detailed signal classification and recovery scripts, see [bad-data.md](references/bad-data.md).

### Mode: Segment

Run Customer Slicing when feedback is inconsistent or segment is too broad:

1. Start with current broad segment
2. Slice: "Within this group, who wants it MOST?"
3. Slice: "Would everyone buy, or only some? Which ones?"
4. Slice: "What's their specific motivation (problem/goal)?"
5. Slice: "Does everyone share that motivation, or a subset?"
6. Map existing behaviors: "What are they already doing to solve this?"
7. Produce who-where pairs: specific demographic + where to find them
8. Evaluate each pair: Profitable? Easy to reach? Rewarding to serve?
9. Recommend starting point — one specific who-where pair

For the complete slicing algorithm with examples, see [customer-slicing.md](references/customer-slicing.md).

### Mode: Meeting

Help arrange and frame conversations:

1. **Casual vs Formal**: Default to casual. Formal only when you need the full hour or must reach someone senior outside your network.
2. **If casual**: Extract user's top question. Suggest natural conversation starters that embed the question without mentioning the idea. "Hey, I'm curious — how did you end up [doing X]?"
3. **If formal**: Generate VFWPA email:
   - **V**ision: Half-sentence, how you're making the world better. No product mention.
   - **F**raming: Your stage, what you're looking for. "We don't have anything to sell."
   - **W**eakness: Specific problem you need help with.
   - **P**edestal: Why this person specifically can help.
   - **A**sk: "Do you have time in the next couple weeks?"
4. **Advisory Flip**: Frame as seeking advisors, not customers. You're evaluating them.
5. **Opening plan**: First question ready. Grab the reins immediately, don't let them drill you on your idea.

For channels, warm intro strategies, and framing examples, see [finding-conversations.md](references/finding-conversations.md).

### Mode: Commitment

Evaluate whether a lead is real:

1. **Classify their last response** using the good meeting / bad meeting framework:
   - "That's cool, I love it!" → BAD. Pure compliment.
   - "Let me know when it launches" → BAD. Compliment + stalling.
   - "What are the next steps?" → GOOD. Advancing.
   - "I would definitely buy that" → BAD. Most dangerous false positive.
   - "Can I buy the prototype?" → GREAT. Strongest possible signal.
   - "When can you come back to talk to the rest of the team?" → GOOD. Real advancement.

2. **Map to commitment currencies**: Time / Reputation / Money / Nothing
3. **Earlyvangelist check** (all 4 must be true):
   - Has the problem
   - Knows they have the problem
   - Has the budget to solve it
   - Has already cobbled together a makeshift solution
4. **Verdict**: Earlyvangelist (keep close!) / Possible (need more data) / Zombie (move on)
5. **Next commitment to ask for**: Suggest a concrete ask matched to stage

For commitment frameworks and lead classification, see [commitment-advancement.md](references/commitment-advancement.md).

## Reasoning Protocol

On every recommendation:

1. **Check Mom Test compliance**: Does this question/approach pass the 3 rules? If your output includes any question that asks for opinions about your idea or future hypotheticals — rewrite it before presenting.
2. **Name the bad data type**: When flagging a problem, specify: "This is a compliment / fluff (generic claim) / fluff (future promise) / idea" — not just "this is bad."
3. **Provide the recovery script**: Don't just say "ask better questions." Give the specific redirect: "Instead of X, ask Y because Z."
4. **Bind to context**: Every question, assessment, or recommendation must reference the user's specific product, audience, and situation. Never output generic interview advice.
5. **Flag scary questions**: If the user's prep is missing a question that could disprove their hypothesis, name it explicitly and explain why it's important.

## Key Principles

1. **Opinions are worthless; behaviors are gold.** What people say they would do has near-zero predictive value. What they've already done is reliable data. Always redirect from hypothetical to historical.

2. **Compliments are the fool's gold of customer learning.** They feel like progress but contain zero information. If your takeaway from a meeting is "they loved it" — you learned nothing. The antidote: what did they commit?

3. **The customer owns the problem; you own the solution.** Never ask them what to build. Never tell them what their problem is. Gather facts about their life, then take your own visionary leap.

4. **If they haven't searched for a solution, they won't buy yours.** Stated pain without attempted action = complainer, not customer. The loyalty card person who says "I would DEFINITELY use that" but hasn't downloaded existing apps is not your customer.

5. **Start specific, broaden later.** Talking to everyone = talking to no one. Mixed signals mean your segment is too broad. Slice until you have a who-where pair, then go talk to exactly those people.

## Common Mistakes

1. **Asking "Do you think it's a good idea?"** — the original sin. Invites lies and produces only opinions. Fix: ask about their life, not your idea.

2. **Treating "I would definitely buy that" as validation.** — the most dangerous false positive. This statement has sunk companies. Fix: push for actual commitment now — deposit, pre-order, trial signup.

3. **Mentioning your idea too early.** Once they know your idea, every answer is biased. Keep it out of the conversation as long as possible. If you slip into pitch mode — apologize and redirect.

4. **Ending meetings with compliments instead of commitments.** "That went well" is not a result. Fix: always ask for a concrete next step before leaving.

5. **Premature zoom on unvalidated problems.** Asking "What's your biggest problem with X?" before confirming X matters at all. Fix: start broad — "What are your big goals right now?" — and see if X comes up naturally.

6. **Creating a learning bottleneck.** Going to all meetings alone and telling the team what to do. Fix: prep and review with the whole team. Share exact quotes, not interpretations.

## Reference Navigation

| User's Situation | Primary Reference | Secondary |
|-----------------|-------------------|-----------|
| Designing questions, bad question flagged | [bad-data.md](references/bad-data.md) | — |
| Analyzing conversation notes | [bad-data.md](references/bad-data.md) | [commitment-advancement.md](references/commitment-advancement.md) |
| Evaluating leads, "went well" meetings | [commitment-advancement.md](references/commitment-advancement.md) | [bad-data.md](references/bad-data.md) |
| Finding people to talk to, outreach | [finding-conversations.md](references/finding-conversations.md) | [customer-slicing.md](references/customer-slicing.md) |
| Mixed signals, broad segment | [customer-slicing.md](references/customer-slicing.md) | — |
| Preparing for conversations | [running-process.md](references/running-process.md) | [bad-data.md](references/bad-data.md) |
| Post-conversation review | [running-process.md](references/running-process.md) | [commitment-advancement.md](references/commitment-advancement.md) |


## Context Persistence

After gathering context, save to `{MEMORY_DIR}/Линзы/advisor-momtest.md`:

```yaml
---
product: ""
audience_hypothesis: ""
current_segment: ""
segment_confidence: ""      # fuzzy / slicing / confirmed
stage: ""                   # exploration / validation / advancement
big_questions: ["", "", ""]
scary_question: ""
conversations_completed: 0
key_facts: []
earlyvangelists: []
zombie_leads: []
updated: ""
---
## Session Notes
Key findings, beliefs updated, next actions...
```

On subsequent activations, read this file first and confirm with user whether context is still valid before proceeding.
