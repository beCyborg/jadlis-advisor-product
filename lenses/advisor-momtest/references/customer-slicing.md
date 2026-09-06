# Customer Slicing: Choosing Who to Talk To

Reference file for the Mom Test lens. Load this when the user needs to narrow their customer segment or decide who to interview first.

---

## Why Segmentation Matters

Startups don't starve — they drown. The failure mode is not "no options" but "too many options, too many leads, too many ideas, no clear direction." Fuzzy customer segments are the root cause of this drowning.

A too-broad segment creates three compounding problems:

1. **Overwhelmed by options**: You don't know where to start, because everywhere seems equally valid.
2. **Not moving forward but can't prove yourself wrong**: You keep learning things, but none of them resolve your uncertainty.
3. **Mixed feedback that can't be made sense of**: You have data, but it contradicts itself, so you can't act on it.

The core mistake is treating "20 conversations" as a single body of evidence. If your segment is too broad, you're not having 20 conversations with customers — you're having 1 conversation each with 20 different customer types. You cannot aggregate that signal. You end up with a list of 20 different must-have features and 20 different must-solve problems. Everything you build sort of works. Everything is somewhat promising. You can't prove yourself right or wrong, because any feature debate can be won by "well, those guys would love it," and you can never remove anything because something is always someone's favorite.

The "advertisers" segment illustrates this exactly: mom-and-pop shops wanted a $10/month solution, agencies wanted a $10,000/month solution, and every feature you shipped was mediocre for everyone.

Big companies serve everyone, but they didn't start there. Google started with PhD students searching for academic code. eBay started with Pez collectors. Evernote started with moms saving recipes. They narrowed first, succeeded narrow, then expanded. You have to earn the right to serve everyone by first genuinely serving someone.

---

## Symptoms of a Too-Broad Segment

Diagnose whether the current segment needs slicing by checking for these patterns:

- Twenty conversations produce twenty different lists of must-have features and must-solve problems.
- You can't falsify your hypothesis because every counter-example can be explained by "that's just a different sub-type."
- Feature debates never resolve — someone on the team can always name a customer who would love the contested feature.
- You can't remove anything from scope because some interviewed person cited it as critical.
- You describe your customer as a demographic category with no behavioral or motivational qualifier (e.g., "students," "small businesses," "parents").
- You can't name a specific place where you would go tomorrow to find ten of these people.

If any of these patterns are present, do not continue interviewing. Stop and slice first.

---

## Customer Slicing Algorithm

Move from a broad starting category to a specific, findable who-where pair. Execute this in three phases.

### Phase 1: Demographics to Sub-Groups

Start with the broad segment the user has named.

1. Ask: "Within this group, which type of person would want it most?"
2. Ask: "Would everyone in this group buy or use it, or only some of them?"
3. Ask: "Why do they want it? What is their specific problem or goal?"
4. Ask: "Does everyone in the group have that motivation, or only some?"
5. Ask: "What additional, distinct motivations exist within the broader group?"
6. Ask: "Which other types of people — outside this demographic — share these same motivations?"

The result of Phase 1 is two lists: a list of more specific demographic sub-groups, and a list of motivations that cut across demographics.

### Phase 2: Behaviors to Findability

For each sub-group identified in Phase 1:

7. Ask: "What are these people already doing to achieve their goal or solve their problem — before your product exists?"
8. Ask: "Where can we find people in this demographic category right now?"
9. Ask: "Where can we find people exhibiting the specific workaround behaviors we identified?"

If any group is un-findable — if you cannot name a specific place, event, platform, or channel where these people congregate — go back and slice finer. Un-findable segments cannot be interviewed. An un-findable segment is a fictional segment.

### Phase 3: Selection of a Who-Where Pair

10. Combine each specific demographic sub-group with each specific location or channel where they can be found. Produce explicit who-where pairs.
11. Evaluate each pair against three criteria:
    - **Profitable**: Will these people pay enough to sustain the business?
    - **Easy to reach**: Can you physically or digitally get in front of them within the next week?
    - **Rewarding**: Would you genuinely enjoy building for and talking to these people over the next 12 months?

12. Choose one starting pair. Do not begin with two. Breadth comes later.

The rule: "Good customer segments are a who-where pair. If you don't know where to find your customers, keep slicing."

---

## Worked Example: Public Speaking App

**Starting segment**: "students" — too broad.

Students includes: PhD students in US universities, prep school kids, homeschooling parents' children, self-educators in Indian rural villages, users in Africa relying on feature phones. These groups have almost nothing in common.

**After slicing by demographics:**
- Graduating students nervous about first job interviews (high motivation: high stakes, near-term deadline)
- Similar motivations in non-student demographics: first-time TV and radio guests, wedding speakers, first-time authors on book tour

**After slicing by motivation:**
- Long-term skill improvement: teachers, salespeople, managers
- Fixing non-native speaker quirks: foreign exchange students, non-native PhD students

**After slicing by behavior (existing workarounds):**
- Some people ignore the problem entirely — not customers.
- Some see therapists for general anxiety — general anxiety product, not public speaking product.
- Some Google tips, read books, or attend Toastmasters — these are the active seekers. Best customers. They are already paying (in time, money, effort) to solve this problem.

**Who-where pair selected:**
- Who: people with public speaking fear who are actively trying to improve
- Where: Toastmasters meetups

**Alternative pair** (if founder is a bibliophile): authors about to go on book tour, found via Amazon's upcoming releases list and Twitter outreach.

Both pairs are valid starting points. The choice depends on which the founder can reach first and would most enjoy serving.

---

## Worked Example: Powdered Condiment

**Starting segment**: "anyone who eats" — not a segment, it's a population.

Bodybuilders want high-protein, low-sodium formulations. Restaurants want bulk pricing and shelf stability. Moms want kid-friendly flavors and clean ingredient lists. These groups require entirely different products, channels, and pricing.

**After slicing**: "moms with young children shopping at health food stores."

**Where**: the health food stores themselves.

**Commitment test**: ask store managers to place the product on the shelf. This costs the store real reputation and shelf space — a meaningful commitment signal. If the product sells, move to in-store tastings to talk directly to the end consumers.

Notice the progression: narrow segment first, then real-world test, then expand the conversation to end users.

---

## Talking to the Wrong People

Three distinct failure modes for finding interviewees:

**Failure mode 1: Too-broad segment.** If the segment is undefined, many people you talk to will inevitably be wrong for your product. The fix is slicing before approaching anyone.

**Failure mode 2: Missing segments in multi-sided markets.** Some products require multiple distinct customer types, all of whom must be understood. A kids' app must be sold to parents (who pay) and used by kids (who engage). A public school product affects teachers, students, administrators, PTA boards, and taxpayers. Missing any of these groups means discovering fatal constraints late.

**Failure mode 3: Missing stakeholders in B2B purchasing.** The person you're talking to may not be the budget holder. IT policy may create veto power over adoption. Legal or procurement teams may control the final decision. Before concluding that a B2B customer is interested, map the full purchasing process and talk to representatives of each role that can block the deal.

Avoid the bias toward talking to the most senior or most impressive people in an organization. They are often least representative of the actual users. The canonical failure: building interactive ads by talking exclusively to brand managers in suits, while never speaking to the teenagers who were the actual users. The brand managers loved the concept. The teenagers found it annoying. The product failed.

Talk to people who are representative of your customers, not people who are impressive to meet.

---

## Multi-Stakeholder Mapping

When the product affects multiple parties, execute this before scheduling interviews:

1. List every stakeholder who could influence purchase, adoption, or continued use.
2. For each stakeholder: what do they care about, and what could cause them to veto adoption?
3. Schedule conversations with representative members of each stakeholder group — not just the most accessible group.
4. Apply the same rigor to important partners (manufacturing, distribution, promotion channels) as to direct customers. Partners have goals and constraints too. Understanding them prevents surprises late in the process.

---

## When to Broaden

The narrow starting segment is a tool to cut through noise and generate clear, actionable signal. It is not a permanent constraint. Broaden when all of the following are true:

- You have confirmed the problem is real and your solution works for the narrow segment.
- You have paying customers in the starting segment.
- You understand the starting segment well enough to recognize patterns that plausibly apply more broadly.
- The natural adjacent segments share enough characteristics with the starting segment that your existing knowledge transfers.

Do not broaden before succeeding narrow. "Before serving everyone, serve someone." Broadening too early reintroduces the noise you narrowed to escape.

---

## Decision Framework: Is This the Right Segment?

Run this check on every proposed segment before committing to interview it:

| Question | Threshold |
|----------|-----------|
| Can I find 10 of these people in the next 7 days? | If no, the segment is not findable enough. Keep slicing. |
| Will they pay enough to build a sustainable business? | If no, the segment is not profitable enough. Find adjacent segments with higher willingness to pay. |
| Will I genuinely enjoy talking to them for the next year? | If no, you will burn out and stop learning. Choose a segment you can sustain. |
| Are their needs consistent enough to build a single product? | If no, the segment contains sub-segments. Slice further. |
| Are they already doing something to solve this problem? | If no, the problem may be a "nice to have," not a "must solve." Reconsider whether this segment has genuine urgency. |

The decisive test: "If you aren't finding consistent problems and goals across your interviews, you don't yet have a specific enough customer segment."

Consistent problems and goals are the signal that you have found a real segment. Inconsistency is not a sign that customers are diverse — it is a sign that you are still talking to multiple different customer types at once.

---

## Quick Reference: Slicing Triggers

Invoke this reference and run the slicing algorithm when:

- The user describes their customer as a broad demographic category with no behavioral qualifier.
- The user reports inconsistent or contradictory feedback across interviews.
- The user cannot name a specific place to find their customers.
- The user is paralyzed by too many competing feature priorities.
- The user's interviews have produced no clear pattern after 5 or more conversations.
- The user is building for "everyone" or "anyone who has this problem."

Do not proceed to interview coaching or question design until the segment is specific enough to produce a findable who-where pair.
