# Copywriter review: homepage as built

Scope: `index.html` in the `spine` worktree, working copy as of 2026-11-24, read only. Compared with `docs/copy/COPY-DECK.md` and the committed homepage at HEAD. I have not checked screenshots, so I cannot confirm what is visible on a phone. Every After line is PROPOSED.

**Verdict.** The story holds, and the build follows the deck closely. All six problem areas, the method, the outcome note and the brief microcopy are intact. Two things weaken the first impression and the lead offer. The first screen no longer says where the firm works. Two links promise an integration section that does not exist yet.

## 1. Claims on the built page that no source supports

| Line as built | Problem | Basis |
|---|---|---|
| "Products & Innovation is a separate division from our client work." | Unconfirmed. A reader may also ask whether the "one in-house team" is split. | Owner brief asks for a distinct division. `[NEEDS OWNER FACT: what is separate: people, budget or only the work]` |
| Label "Division II" | New structural claim. It is not in the deck. It implies a numbered company structure that nothing else on the page shows: Client Solutions is labelled "Sheet A", not "Division I". | None |
| Stamp "In development" | New. It is close to the approved "taking shape", but it states a status for the drawing it is stamped on. The drawing is the drafting plate also used on the Strategy & Architecture card. | Approved: "Our own products are taking shape. More to share soon." |
| "Every line is lit. The tools you started with now work as one system..." | Reads as a result. It is acceptable only because the outcome note sits directly beneath it. Keep them together in every layout, including the static fallback and "Read overview". | Deck CH6. `PRODUCT` Principle 1 |
| JSON-LD `description`: "Technology consulting and implementation ..." vs plate label "Technology consulting and engineering" | Two descriptions of the firm on one page. The offer catalog also has no integration service, although integration is now the lead. Search engines read the JSON-LD; visitors read the label. | `llms.txt` "implementation firm" vs owner brief "engineering company" |

Nothing else on the page goes beyond the sources. There are no metrics, client names, guarantees, team size or product names. "Forma" does not appear.

## 2. Approved lines changed or lost

Changed on purpose, and acceptable: the hero eyebrow moved into the plate label; CH4 uses the softer fallback; the lead label reads "Our lead service"; the SP-I intro was dropped. Approved homepage copy that is no longer on the page, by impact:

1. **The industry Problem and Fix lines.** All eight are gone, for example "Quotes, stock and shipments sit in spreadsheets, email and portals. That can mean wrong quotes, backorders and no live status." These were the homepage's strongest relevance copy: quotes, backorders, renewals, closings, dispatch, grant deadlines. They still exist on the industry pages.
2. **The Outcomes section.** Gone: "Less manual work", "Information in one place", "Clearer handoffs", "Room to grow" / "Built so the next change doesn't mean starting over." That leaves the page with no picture of the better state beyond CH5 and CH6. The outcome note survives.
3. **The "Why AI Alchemy" trio.** "We don't start by selling you another tool." and the three "Sometimes..." lines are gone. CS-LB paraphrases them ("connect ... modernize ... build only what's missing") and keeps "Another application won't necessarily fix it." This is acceptable.
4. **The problem list.** "Information gets trapped in separate systems." / "Teams repeat work that should happen once." / "Decisions wait on spreadsheets, email and manual handoffs." CH1 now does this job. This is acceptable.
5. **Smaller losses.** "Learn about AI Alchemy" (About is still in the nav). "One operation, not a stack of disconnected tools." The services' second sentences ("We assess your current systems ..."); the Spine chapters cover these. The footer tagline was replaced as the deck proposed.

## 3. Five changes that would most improve clarity and conversion

**1. Put "where" back on the first screen.** Where: hero support line. The eyebrow now sits in the plate label. In the source it comes after all six chapters, so screen readers reach it last, and it may be small or cropped on a phone.
- Before: "We bring disconnected technology together into systems that work. Integration, modernization, custom software and AI, built in-house by one team from strategy to go-live."
- After (PROPOSED): "We bring disconnected technology together into systems that work. Integration, modernization, custom software and AI, built in-house by one team in the Greater Toronto Area, from strategy to go-live."
- Why: local, in-house delivery is a deciding fact for this buyer, and in readable text it now appears only in the footer and the meta. Basis: `llms` "We serve the Greater Toronto Area."

**2. Stop pointing at a section that does not exist.** Where: CH1 link and the lead offer's second link. Both go to `/services/#integration`. `services/index.html` has no such id. Its H1 is still "Technology services for businesses in the GTA", and it has no integration section.
- Before: "Start with Systems Integration & Modernization" → `/services/#integration`; "Learn about integration and modernization" → `/services/#integration`
- After (PROPOSED), until the services page is rebuilt: CH1 → "See how we connect your systems" → `#solutions`. Remove the lead's second link, and keep its "Start a project brief" button.
- Why: a link that lands somewhere else breaks trust at the lead offer, the exact point the owner wants to lead with. Basis: the files as they stand.

**3. Bring the industry problems back.** Where: Who we work with, the four industry rows.
- Before: "Production, inventory, orders and operations. For fabricators, distributors and logistics teams." (and the three equivalents)
- After (EXISTING, approved): "Quotes, stock and shipments sit in spreadsheets, email and portals. That can mean wrong quotes, backorders and no live status." Likewise for Mortgage & Insurance ("Documents, deadlines and renewals are tracked by hand..."), HVAC ("Schedules, onsite estimates and service contracts live on paper..."), and Financial, Professional Services & Non-Profits ("Client and donor records are split across teams...").
- Why: an owner recognizes their own operation in "backorders" and "dispatch", not in "operations". It costs no new approval. Basis: approved homepage at HEAD and the industry pages.

**4. Show the better state in one line.** Where: under the method's outcome note, or as a single line after CH6. The Outcomes section is gone.
- Before: (absent)
- After (EXISTING headings, compacted, PROPOSED placement): "What we design for: less manual work, information in one place, clearer handoffs and room to grow."
- Why: the page names the cost of the current state and never states the goal. One line restores motivation without a new section. Basis: approved Outcomes section at HEAD; "What we design for" is the approved framing.

**5. Say "Products & Innovation" once.** Where: Products & Innovation. As built, the label says "Division II · Products & Innovation", the H2 says "Products & Innovation. Our own products." and the body opens "Products & Innovation is ...". That is three uses in three lines.
- Before: H2 "Products & Innovation. Our own products." / "Products & Innovation is a separate division from our client work. Our own products are taking shape. More to share soon." / stamp "In development" / label "Division II"
- After (PROPOSED): H2 "Our own products." / body "Separate from our client work. Our own products are taking shape. More to share soon." / stamp "Taking shape" / label "Products & Innovation" (drop "Division II")
- Why: less repetition, and the stamp reuses approved words instead of stating a status. "Separate" still needs the owner fact in section 1; if it is unconfirmed, cut that sentence.

Also worth doing, smaller:
- "Start a project brief" appears six times. The lead offer button already preselects "Connect our systems". Label it "Start a brief about connecting systems" so the visitor knows the brief will open on that need.
- The hero's secondary link targets `#shot-1`, which only the Spine script creates. Without JavaScript, or before the engine loads, it goes nowhere. Point it at `#experience`.

## 4. Do the page and the Spine tell one story?

Yes, mostly. The hero states the belief and the central idea. The hero sits inside the Spine's first article, so the drawing starts as the reading starts. CH1 names the visitor's tools. CH2 to CH5 each explain one service by what is drawn and link to it. CH6 lands on "One connected operation" with the outcome note beneath. Client Solutions then restates the same idea as an offer: architecture first, integration as the lead. The method repeats the Spine's order: survey and plan, build in stages, people approve.

Three seams break the story:
- The lead offer, Systems Integration & Modernization, has no chapter of its own and no working destination (change 2). Integration is the line through the whole drawing; CH1's link is the only place that says so. Adding the phrase "the line" to the lead body would tie them: "Integration is the line through all of it." (PROPOSED, NEW, needs approval).
- After the Spine, the page names a cost but never states the goal (change 4).
- Products & Innovation is in the same drawing language, with sheet labels and a drafting plate. That fits a division of the same firm, but the "Division II" label adds a second numbering scheme next to the "Sheet A to E" labels. One scheme would read cleaner.

Keep as is: the hero H1, CH1 to CH6, "Illustration of the method, not a client project.", the outcome note in both places, "Three short steps. Your brief opens as an email you send.", the three reassurances by the final button, and the meta title and description.
