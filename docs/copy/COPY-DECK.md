# AI Alchemy: Experience Spine copy deck

Status: DRAFT for owner approval. Nothing here is live. Every line marked NEW or ADAPTED is PROPOSED until the owner approves it. Approved site copy stays locked until then.

Prepared 2026-11-24 on branch `integration/experience-spine-site`.

## How to read this deck

- **EXISTING**: verbatim from the published site or `llms.txt`. Already approved.
- **ADAPTED**: an approved fact, reworded. Needs a quick owner check on wording only.
- **NEW**: new wording or a new fact. Needs owner approval before use.
- **OWNER**: supplied by the owner for this rebuild (the homepage headline, the Products line, the positioning brief).
- Line IDs (for example `CH3-B`) are used in the status table in section 4.
- Apostrophes are typed straight here for readability. The site uses typographic apostrophes (’); keep them when implementing. EXISTING lines were checked against the committed `index.html` at HEAD, not the in-progress working copy.

### Sources used

| Key | Source |
|---|---|
| `llms` | `llms.txt` (worktree root) |
| `PRODUCT` | `PRODUCT.md`. Not present in the worktree; read from the main checkout at `/Users/davidarushanov/Documents/Codex/ai-alchemy-site/PRODUCT.md` (untracked there). |
| `home` | `index.html` (published homepage) |
| `svc` | `services/index.html` |
| `sa` / `csm` / `eai` / `cd` | the four service pages: strategy-architecture, custom-software-modernization, enterprise-ai-automation, cloud-data |
| `ind` | `industries/index.html` |
| `about` | `about/index.html` |
| `contact` | `contact/index.html` |
| `owner-h1` | Owner-supplied homepage headline |
| `owner-pi` | Approved design-gate wording: "Our own products are taking shape. More to share soon." No product named, never implied available. |
| `brief` | Owner's positioning brief for this rebuild |
| `svg` | Foundry master drawing labels (`illustration/svg/master.svg`) |

### Source conflicts found (quoted, for the owner to settle)

1. **What kind of firm.** `llms`: "a technology consulting and implementation firm". `about`: "AI Alchemy is a technology consultancy." `brief`: "an architecture-first technology consulting and engineering company". This deck uses "technology consulting and engineering" in the hero eyebrow and leaves `llms.txt` and About untouched. If approved, `llms.txt` and the About intro should be brought into line later.
2. **Pricing.** `PRODUCT`: "Pricing, engagement models ... are not published anywhere. [open]". `svc` publishes: "At a fixed price or by the hour, depending on the scope ... The first conversation is free." This deck uses only "free first conversation", which also appears on `home` and `contact`.
3. **Industry focus.** `ind`: "The four above are where we focus." `brief`: "without restricting us to a specific industry or company size." These are compatible. The deck keeps the four as examples of focus, not a limit.
4. **Scene titles on the drawing vs service names.** `svg` sheet titles read "Software & Modernization", "AI & Automation", "Cloud & Data Infrastructure". The service pages are "Custom Software & Modernization", "Enterprise AI & Automation", "Cloud & Data". The HTML chapter kickers below use the service names. The artwork owner should decide whether the drawing's sheet titles change to match, or whether the short forms stand as drawing labels.
5. **Placeholder copy in the lab.** `lab/experience-spine/index.html` carries working chapter text ("A common plan.", "Fit the module.", "Activate the core.", "Carry the signal."). It was never approved. This deck replaces it.

---

## 1. Site architecture

### Navigation (PROPOSED)

| Order | Label | Target | Status |
|---|---|---|---|
| 1 | Client Solutions | `/services/` (URL unchanged) | NEW label |
| 2 | Products & Innovation | `/#products-innovation` (homepage section) | NEW |
| 3 | Industries | `/industries/` | EXISTING |
| 4 | About | `/about/` | EXISTING |
| 5 (button) | Start a project brief | `/contact/` | EXISTING |

- The button keeps "Start a project brief" instead of "Contact". It tells the visitor what happens next. "Contact" says less.
- "Client Solutions" is a proper noun here. It matches the existing title "our Client Solutions Lead" on `home`, `about` and `contact`. Do not use the word "solutions" anywhere else in body copy.
- **Products & Innovation** points to a homepage section, not a new page. There is nothing to say yet beyond two sentences, and a near-empty page invites the "is this real?" question. Create `/products/` only when the owner has an approved announcement.
  - Variant: leave it out of the top nav and list it in the footer only until there is news. Trade-off: quieter and more honest about scale, but the division reads as less distinct.
- Breadcrumbs on the four service pages change their parent label from "Services" to "Client Solutions". URLs do not change.

### How Systems Integration & Modernization leads (PROPOSED)

**Recommendation: keep the four service URLs. Make `/services/` the Client Solutions page and open it with a Systems Integration & Modernization section (anchor `/services/#integration`). Do not add a fifth service page now.**

1. In the Spine, integration is the line that runs through all four stages, not a fifth stage. It belongs at the top of the index, above the four, not beside them.
2. Every existing URL, canonical, sitemap entry, `llms.txt` link and `?need=` preselect keeps working, and a static GitHub Pages site has no server redirects to maintain.
3. A separate page would repeat Custom Software & Modernization ("We modernize legacy applications") and split one search topic over two URLs. Add a dedicated page later only if the owner wants to target that search term with material of its own.

Opening of `/services/` under this plan:

| ID | Element | Copy | Status |
|---|---|---|---|
| SVC-K | Eyebrow | Client Solutions | NEW |
| SVC-H1 | H1 | Systems integration and modernization | NEW |
| SVC-L | Lead | We bring disconnected technology together into systems that work. We connect what you already run, modernize what holds you back and build what's missing. | NEW (first sentence from `brief`) |
| SVC-CTA | Button | Start a project brief | EXISTING. Link to `/contact/?need=Connect%20our%20systems` (an existing preselect value). |

The six problem areas (section 2.5) and the four service lines (section 2.6) follow on that page.

---

## 2. Homepage, in order

### 2.1 Hero

| ID | Element | Copy | Status |
|---|---|---|---|
| H-K | Eyebrow | Technology consulting and engineering in the Greater Toronto Area | ADAPTED |
| H-H1 | H1 | Your business shouldn't have to adapt to technology. Technology should adapt to your business. | OWNER |
| H-S | Support line | We bring disconnected technology together into systems that work. Integration, modernization, custom software and AI, built in-house by one team from strategy to go-live. | NEW / ADAPTED |
| H-CTA1 | Primary button | Start a project brief | EXISTING |
| H-CTA2 | Secondary link | See how we connect systems | NEW. Scrolls to the Spine (`#spine`). |
| H-M | Microcopy under buttons | Three short steps. No technical spec needed. In-house delivery, no outsourcing. | EXISTING |

Why this order: the owner's H1 states the belief but not what is sold or where. The eyebrow carries "where" and "what kind of firm"; the support line carries "what" and the central idea. A busy reader gets all four from the first screen without the H1 changing.

Variant for H-CTA2: "See Client Solutions", linking to `/services/`. Trade-off: clearer destination, but it skips the Spine, which is the homepage's explanation.

### 2.2 Spine intro

| ID | Element | Copy | Status |
|---|---|---|---|
| SP-I | Intro line | Here is the work, drawn as one system. Follow the line from four disconnected tools to one connected operation. | NEW |
| SP-C | Caption (keep on every Spine view, including the static fallback) | Illustration of the method, not a client project. | EXISTING |

### 2.3 The six Spine chapters

Each chapter: kicker (matches the scene), serif headline (line break shown as ` / `), body, link. Word counts are checked in section 4.

**Chapter 1. Disconnected systems** (spreadsheet stack, email pigeonholes, filing cabinet of paper forms, legacy tape cabinet, each ending in an open plug)

| ID | Element | Copy | Status |
|---|---|---|---|
| CH1-K | Kicker | 01 / 06 · Disconnected systems | ADAPTED |
| CH1-H | Headline | Four systems. / None of them connected. | NEW |
| CH1-B | Body | Spreadsheets, email threads, paper forms and legacy software. Each holds part of the work. Each ends in a plug that goes nowhere, so people carry information between them. | NEW / ADAPTED |
| CH1-L | Link | Start with Systems Integration & Modernization | NEW. Links to `/services/#integration`. |

**Chapter 2. Strategy & Architecture** (survey tripod measures what exists; dashed proposed lines run to a collector; drafting table with the plan and a scale model of the core)

| ID | Element | Copy | Status |
|---|---|---|---|
| CH2-K | Kicker | 02 / 06 · Strategy & Architecture | EXISTING name |
| CH2-H | Headline | Measure what exists. / Then draw the plan. | NEW |
| CH2-B | Body | We survey the systems you have and find the gaps. The dashed lines are proposals: you see the plan and the trade-offs before anything is built. | ADAPTED |
| CH2-L | Link | Learn about Strategy & Architecture | EXISTING |

**Chapter 3. Custom Software & Modernization** (gantry lowers a new module into the rack; legacy core in dashed outline, to be replaced; junction feeds the rack from the main line)

| ID | Element | Copy | Status |
|---|---|---|---|
| CH3-K | Kicker | 03 / 06 · Custom Software & Modernization | EXISTING name |
| CH3-H | Headline | Replace what holds you back. / Keep what works. | NEW |
| CH3-B | Body | A new module goes into the rack. The old core waits to be replaced. We build in stages, so you don't have to replace everything at once. | ADAPTED |
| CH3-L | Link | Learn about Custom Software & Modernization | EXISTING |

**Chapter 4. Enterprise AI & Automation** (the core in its glass vessel works through documents on a conveyor; a striped approval barrier and a manager's lever control what moves forward)

| ID | Element | Copy | Status |
|---|---|---|---|
| CH4-K | Kicker | 04 / 06 · Enterprise AI & Automation | EXISTING name |
| CH4-H | Headline | AI takes on the routine. / Your people decide. | ADAPTED |
| CH4-B | Body | The core works through documents as they come down the line. At the barrier, a manager decides what moves forward. Your managers keep approval over technical, pricing, safety and production actions. | ADAPTED |
| CH4-L | Link | Learn about Enterprise AI & Automation | EXISTING |

**Chapter 5. Cloud & Data** (the line runs under a raised floor of server racks and data stores and ends at one terminal)

| ID | Element | Copy | Status |
|---|---|---|---|
| CH5-K | Kicker | 05 / 06 · Cloud & Data | EXISTING name |
| CH5-H | Headline | A shared foundation. / One current version. | NEW |
| CH5-B | Body | The line runs under the racks and data stores and comes up at one terminal. Teams work from shared information, not their own copies. | ADAPTED |
| CH5-L | Link | Learn about Cloud & Data | EXISTING |

**Chapter 6. One connected operation** (camera pulls back to the whole system, every line lit)

| ID | Element | Copy | Status |
|---|---|---|---|
| CH6-K | Kicker | 06 / 06 · The whole system | NEW |
| CH6-H | Headline | One connected operation. | EXISTING phrase |
| CH6-B | Body | Every line is lit. The tools you started with now work as one system: planned and built by one in-house team, approved by yours. | NEW / ADAPTED |
| CH6-N | Small print under the body | Outcomes depend on your systems, data and processes. We agree goals with you before work starts. | EXISTING |
| CH6-L | Link | Start a project brief | EXISTING. Links to `/contact/`. |

Chapter variants (one each, where a real choice exists):

- CH1-H: "Work starts in four places. / And stops there." Trade-off: more voice, but less literal about what is on screen.
- CH4-H: "AI does the routine work. / People keep control." Trade-off: echoes the existing "People stay in control." more closely; loses the direct "your".
- CH5-H: "Information in one place. / One place to look." Trade-off: plainer and an EXISTING outcome heading, but repeats "one place".

### 2.4 Client Solutions: section opener and lead offer

| ID | Element | Copy | Status |
|---|---|---|---|
| CS-K | Eyebrow | Client Solutions | NEW |
| CS-H | H2 | Architecture first. Then the build. | NEW |
| CS-I | Intro | We design how your systems should fit together before anyone writes code. Then the same team builds it. | ADAPTED |
| CS-LK | Lead label | Where most projects start | NEW. See self-review: this implies a pattern; fallback is "Our lead service". |
| CS-LH | Lead heading | Systems Integration & Modernization | NEW (name from `brief`) |
| CS-LB | Lead body | Another application won't necessarily fix it. We connect the systems you already run, modernize the ones holding you back and build only what's missing. | ADAPTED |
| CS-LC | Lead button | Start a project brief | EXISTING. Link to `/contact/?need=Connect%20our%20systems`. |
| CS-LL | Lead link | Learn about integration and modernization | NEW. Links to `/services/#integration`. |

If CS-LK is not approved, drop the label rather than replace it with a claim.

### 2.5 The six problem areas (one heading, one sentence each)

| ID | Heading | Sentence | Status |
|---|---|---|---|
| P1 | Disconnected systems and workflows | We connect the applications you already use, so information is entered once and reaches the person who handles it next. | ADAPTED |
| P2 | CRM and ERP integrations and migrations | When customer records sit in one system and orders sit in another, we connect them or move you to one that fits, in stages. | NEW (heading from `brief`) |
| P3 | Legacy modernization | When older software holds the records but not the way you work now, we bring it up to date and connect it to the rest of the business. | ADAPTED |
| P4 | Custom software and engineering | When nothing off the shelf fits, we build software around your real operations. | EXISTING sentence; heading from `brief` |
| P5 | AI automation and intelligent workflows | We find the steps your teams repeat and add AI-assisted steps where they fit, with people keeping oversight. | ADAPTED |
| P6 | Technology architecture and planning | Before you commit to development, we assess your systems, find the gaps and set the order of work against your business priorities. | ADAPTED. Heading changes the `brief` term "transformation"; see self-review. |

### 2.6 The four services (index lines)

| ID | Element | Copy | Status |
|---|---|---|---|
| SV-H | H2 | Four kinds of work. One team. | NEW |
| SV-I | Intro | One team carries each from the first conversation to a working system. | EXISTING |
| SV1 | Strategy & Architecture | A practical roadmap, with priorities and trade-offs, before you build. | EXISTING |
| SV2 | Custom Software & Modernization | Stop working around outdated software. | EXISTING |
| SV3 | Enterprise AI & Automation | Put AI where it can do useful work. | EXISTING |
| SV4 | Cloud & Data | Make your information easier to reach, manage and use. | EXISTING |
| SV-L1 to SV-L4 | Links | Learn about Strategy & Architecture / Learn about Custom Software & Modernization / Learn about Enterprise AI & Automation / Learn about Cloud & Data | EXISTING |
| SV-A | Index link | See all four services | EXISTING |

Design note: the Spine chapters 2 to 5 already explain these four services. Keep this block compact (name, one line, link) so it reads as an index, not a second explanation.

### 2.7 How we work (method)

| ID | Element | Copy | Status |
|---|---|---|---|
| M-H | H2 | Understand the business. Design the system. Build it properly. | EXISTING |
| M-I | Intro | Projects shouldn't start with a feature list. They start with how your business works. | EXISTING |
| M1 | Discover | We learn how your business runs today: your systems, data and handoffs. | EXISTING |
| M2 | Architect | You see the plan and the trade-offs before anything is built. | EXISTING |
| M3 | Build | We build in stages and connect to what already works. | EXISTING |
| M4 | Validate | Your team tests it on real scenarios. Your people review and approve before anything goes live. | EXISTING |
| M-N | Note | Outcomes depend on your systems, data and processes. We agree goals with you before work starts. | EXISTING |

### 2.8 Who we work with

| ID | Element | Copy | Status |
|---|---|---|---|
| W-K | Eyebrow | Who we work with | NEW |
| W-H | H2 | Built for established businesses with complex operations. | ADAPTED |
| W-B | Body | We work with mid-market organizations across the Greater Toronto Area. We focus on the industries below, but we don't limit our work to them. | NEW / ADAPTED |
| W-B2 | Second line | Each industry has its own problems. The need underneath is often the same: reliable systems, clear processes, and information that moves. | EXISTING |
| W1 | Manufacturing, Wholesale & Logistics | Production, inventory, orders and operations. For fabricators, distributors and logistics teams. | EXISTING |
| W2 | Mortgage & Insurance | Information flow, documents and workflows, with review and accountability intact. | EXISTING |
| W3 | HVAC, Energy & Home Improvement | Field operations, customer records, scheduling and admin, connected. | EXISTING |
| W4 | Financial, Professional Services & Non-Profits | Internal systems, records, reporting and coordination. | EXISTING |
| W-X | Not listed | Your industry isn't listed? If your operation runs on scattered tools and manual handoffs, send us a brief and we'll tell you honestly whether we're a fit. | ADAPTED (EXISTING sentence, "The four above are where we focus." removed) |
| W-L | Link | See all the industries we serve | EXISTING |

### 2.9 Products & Innovation (`#products-innovation`)

| ID | Element | Copy | Status |
|---|---|---|---|
| PI-K | Eyebrow | Products & Innovation | NEW (name from `brief`) |
| PI-H | H2 | Our own products. | NEW |
| PI-B1 | Body | Products & Innovation is a separate division from our client work. | NEW. Confirm with owner; see self-review. |
| PI-B2 | Body | Our own products are taking shape. More to share soon. | OWNER |

- No button, no sign-up, no "learn more". There is no list, no waitlist and no product page, so any call to action would promise something that does not exist.
- Do not name a product, show a product screenshot or mock-up, or use "launch", "available", "beta" or "coming in [date]".
- Visual treatment should set this apart from Client Solutions (its own band), without suggesting a different company.

### 2.10 Final call to action

| ID | Element | Copy | Status |
|---|---|---|---|
| F-K | Eyebrow | Project brief | EXISTING |
| F-H | H2 | Tell us what's holding your business back. | EXISTING |
| F-B1 | Body | You don't need a technical spec to start. | EXISTING |
| F-B2 | Body | Tell us what you want to improve and where your systems fall short. We reply within one business day. | EXISTING |
| F-CTA | Button | Start a project brief | EXISTING |
| F-M | Microcopy | Three short steps. Your brief opens as an email you send. | EXISTING |
| F-E | Email fallback | Prefer email? Write to hello@ai-alchemy.ca. | EXISTING |
| F-T1 | Reassurance 1 (heading / line) | Built in-house in the GTA / Our team is based in the GTA and does the work itself. No outsourcing. | EXISTING |
| F-T2 | Reassurance 2 | A reply within one business day / Then, if you'd like, a free first conversation with David Arushanov, our Client Solutions Lead, by phone, video call or in person. | EXISTING |
| F-T3 | Reassurance 3 | You keep approval / In the systems we build, your managers approve technical, pricing, safety and production actions. | EXISTING |

The three reassurances answer the three main objections (outsourcing, waiting, losing control to AI) right beside the button. Keep them here even if they are removed elsewhere on the page.

Variant for F-H: "Tell us which systems don't talk to each other." (NEW). Trade-off: ties back to Chapter 1, but narrower than the approved line, which also covers modernization and AI.

### 2.11 Footer

| ID | Element | Copy | Status |
|---|---|---|---|
| FT-T | Tagline | We bring disconnected technology together into systems that work. | NEW (from `brief`) |
| FT-T2 | Second line | Built in-house by one team. Serving the Greater Toronto Area. | ADAPTED |
| FT-E | Contact | hello@ai-alchemy.ca | EXISTING |
| FT-N | Column headings | Client Solutions / Industries / Company | NEW / EXISTING / EXISTING |
| FT-N2 | Company column additions | Products & Innovation (to `/#products-innovation`) | NEW |

Variant: keep the existing tagline "Custom software, AI and data, built in-house by one team." Trade-off: already approved, but it describes the old lead (custom software), not integration.

---

## 3. Metadata (PROPOSED)

| Page | Field | Copy | Characters | Status |
|---|---|---|---|---|
| Home | Title | Systems Integration, Software & AI in the GTA \| AI Alchemy | 58 | NEW |
| Home | Description | We bring disconnected technology together into systems that work: integration, modernization, custom software and AI. One in-house team in the GTA. | 147 | NEW |
| `/services/` | Title | Systems Integration & Modernization in the GTA \| AI Alchemy | 59 | NEW |
| `/services/` | Description | Systems integration and modernization, strategy, custom software, AI automation, cloud and data. One in-house team in the GTA, from strategy to go-live. | 152 | NEW |

- Use the same title and description for `og:title`, `og:description` and the Twitter card, as the site does now.
- Variant `/services/` title: "Client Solutions: Integration & Modernization \| AI Alchemy" (58). Trade-off: matches the nav label, but people do not search for "Client Solutions" and it drops "GTA".
- Current values for comparison (EXISTING): Home "Custom Software and AI for GTA Businesses \| AI Alchemy" (54); `/services/` "Technology Services for GTA Businesses \| AI Alchemy" (51).
- If approved, update `llms.txt` to match ("Services overview" label, the lead offer, and the firm description). That is a separate, owner-approved change.

---

## 4. Status table: every line, with its source

Word counts for Spine chapters: headline words per line / body words (limits: 2 lines, 2 to 6 words per line; body 32 words max).

| ID | Line | Status | Source / basis |
|---|---|---|---|
| NAV-1 | Client Solutions | NEW | `brief` ("Lead with Client Solutions"); "Client Solutions Lead" on `home`, `about`, `contact` |
| NAV-2 | Products & Innovation | NEW | `brief` |
| NAV-3 | Industries | EXISTING | `home` nav |
| NAV-4 | About | EXISTING | `home` nav |
| NAV-5 | Start a project brief | EXISTING | `home` nav |
| SVC-K | Client Solutions | NEW | `brief` |
| SVC-H1 | Systems integration and modernization | NEW | `brief`; `home` hero tags "Integrations"; `contact` need "Connect our systems" |
| SVC-L | We bring disconnected technology together into systems that work. We connect what you already run, modernize what holds you back and build what's missing. | NEW | `brief` central idea; `about` "Sometimes it's to improve ... connect ... built for it" |
| SVC-CTA | Start a project brief | EXISTING | `sa` button with `?need=Connect%20our%20systems` |
| H-K | Technology consulting and engineering in the Greater Toronto Area | ADAPTED | `home` "Technology consulting in the Greater Toronto Area"; "engineering" from `brief` (see conflict 1) |
| H-H1 | Your business shouldn't have to adapt to technology. Technology should adapt to your business. | OWNER | `owner-h1`; echoes `about` "Technology should fit the business. Not the other way around." |
| H-S | We bring disconnected technology together into systems that work. Integration, modernization, custom software and AI, built in-house by one team from strategy to go-live. | NEW / ADAPTED | `brief` central idea; `llms` "Built in-house", "One team, from strategy to go-live" |
| H-CTA1 | Start a project brief | EXISTING | `home` |
| H-CTA2 | See how we connect systems | NEW | `llms` "We design, build and connect" |
| H-M | Three short steps. No technical spec needed. In-house delivery, no outsourcing. | EXISTING | `home` |
| SP-I | Here is the work, drawn as one system. Follow the line from four disconnected tools to one connected operation. | NEW | `PRODUCT` principle 4 "scattered tools become one system"; `home` "From scattered tools toward one connected operation." |
| SP-C | Illustration of the method, not a client project. | EXISTING | `home`, `PRODUCT` Evidence |
| CH1-K | 01 / 06 · Disconnected systems | ADAPTED | `svg` "Disconnected business systems"; `home` "Disconnected systems." |
| CH1-H | Four systems. / None of them connected. (2 / 4) | NEW | `svg` four plinths, "Open end" |
| CH1-B | Spreadsheets, email threads, paper forms and legacy software. Each holds part of the work. Each ends in a plug that goes nowhere, so people carry information between them. (28) | NEW / ADAPTED | `svg` labels "Spreadsheets", "Email threads", "Paper forms", "Legacy software"; `home` "Information gets trapped in separate systems.", "Teams repeat work that should happen once." |
| CH1-L | Start with Systems Integration & Modernization | NEW | `brief` |
| CH2-K | 02 / 06 · Strategy & Architecture | EXISTING | `sa` |
| CH2-H | Measure what exists. / Then draw the plan. (3 / 4) | NEW | `svg` "Survey of current systems", "Target architecture"; `sa` "We assess your current systems" |
| CH2-B | We survey the systems you have and find the gaps. The dashed lines are proposals: you see the plan and the trade-offs before anything is built. (26) | ADAPTED | `llms` "We assess your current systems, find the gaps"; `home` Architect step "You see the plan and the trade-offs before anything is built." |
| CH2-L | Learn about Strategy & Architecture | EXISTING | `home` |
| CH3-K | 03 / 06 · Custom Software & Modernization | EXISTING | `csm` |
| CH3-H | Replace what holds you back. / Keep what works. (5 / 3) | NEW | `home` Build "connect to what already works"; `csm` "Modernize legacy applications" |
| CH3-B | A new module goes into the rack. The old core waits to be replaced. We build in stages, so you don't have to replace everything at once. (27) | ADAPTED | `svg` "New module", "Legacy core / To be replaced"; `csm` Build "We build in stages, so you don't have to replace everything at once." |
| CH3-L | Learn about Custom Software & Modernization | EXISTING | `home` |
| CH4-K | 04 / 06 · Enterprise AI & Automation | EXISTING | `eai` |
| CH4-H | AI takes on the routine. / Your people decide. (5 / 3) | ADAPTED | `eai` "AI should take on routine work, not the decisions." |
| CH4-B | The core works through documents as they come down the line. At the barrier, a manager decides what moves forward. Your managers keep approval over technical, pricing, safety and production actions. (31) | ADAPTED | `svg` "Reader", "Automated steps", "Manager approval"; `eai` Validate step (approval sentence verbatim); `eai` "better document handling with review and accountability intact" |
| CH4-L | Learn about Enterprise AI & Automation | EXISTING | `home` |
| CH5-K | 05 / 06 · Cloud & Data | EXISTING | `cd` |
| CH5-H | A shared foundation. / One current version. (3 / 3) | NEW | `cd` "We design the foundation your systems share.", "Finding the current version is the hard part." |
| CH5-B | The line runs under the racks and data stores and comes up at one terminal. Teams work from shared information, not their own copies. (24) | ADAPTED | `svg` "Cloud infrastructure", "Data stores"; `cd` "So teams work from shared information, not their own copies." |
| CH5-L | Learn about Cloud & Data | EXISTING | `home` |
| CH6-K | 06 / 06 · The whole system | NEW | Spine storyboard |
| CH6-H | One connected operation. (3) | EXISTING | `home` hero tag "Aim: one connected operation"; `svg` |
| CH6-B | Every line is lit. The tools you started with now work as one system: planned and built by one in-house team, approved by yours. (24) | NEW / ADAPTED | `llms` "One team, from strategy to go-live"; `home` Validate "Your people review and approve before anything goes live." |
| CH6-N | Outcomes depend on your systems, data and processes. We agree goals with you before work starts. | EXISTING | `home` |
| CH6-L | Start a project brief | EXISTING | `home` |
| CS-K | Client Solutions | NEW | `brief` |
| CS-H | Architecture first. Then the build. | NEW | `brief` "architecture-first"; `sa` "We design the system before we build it" |
| CS-I | We design how your systems should fit together before anyone writes code. Then the same team builds it. | ADAPTED | `sa` "We design the system before we build it"; `sa` Build "The same team builds it" |
| CS-LK | Where most projects start | NEW | None. Implies a pattern across projects. `[NEEDS OWNER FACT: that most engagements do start with integration or modernization]` |
| CS-LH | Systems Integration & Modernization | NEW | `brief` |
| CS-LB | Another application won't necessarily fix it. We connect the systems you already run, modernize the ones holding you back and build only what's missing. | ADAPTED | `home` "Another application won't necessarily fix it." (EXISTING); `about` improve / connect / build |
| CS-LC | Start a project brief | EXISTING | `sa` `?need=Connect%20our%20systems` |
| CS-LL | Learn about integration and modernization | NEW | follows site link pattern |
| P1-H / P1-S | Disconnected systems and workflows / We connect the applications you already use, so information is entered once and reaches the person who handles it next. | ADAPTED | `brief` heading; `eai` "Enter information once. Let systems handle more of the routine steps and pass work to whoever handles it next." |
| P2-H / P2-S | CRM and ERP integrations and migrations / When customer records sit in one system and orders sit in another, we connect them or move you to one that fits, in stages. | NEW | `brief` (CRM, ERP, migrations); `home` hero tag "Custom CRM"; "in stages" from `home` Build. "ERP" does not appear anywhere on the live site. |
| P3-H / P3-S | Legacy modernization / When older software holds the records but not the way you work now, we bring it up to date and connect it to the rest of the business. | ADAPTED | `csm` "Older applications hold the records, but not the way you work now."; "We bring older systems up to date and connect them to the rest of the business." |
| P4-H / P4-S | Custom software and engineering / When nothing off the shelf fits, we build software around your real operations. | EXISTING sentence | `csm` |
| P5-H / P5-S | AI automation and intelligent workflows / We find the steps your teams repeat and add AI-assisted steps where they fit, with people keeping oversight. | ADAPTED | `llms` "We find repetitive tasks ... add AI-assisted steps. People keep oversight."; `eai` "AI helps where it fits" |
| P6-H / P6-S | Technology architecture and planning / Before you commit to development, we assess your systems, find the gaps and set the order of work against your business priorities. | ADAPTED | `llms` "Make the right technology decisions before you commit to development."; `home` "help you set the order of work against business priorities" |
| SV-H | Four kinds of work. One team. | NEW | `home` "Four kinds of work. One team carries each ..." |
| SV-I | One team carries each from the first conversation to a working system. | EXISTING | `home`, `svc` |
| SV1 to SV4 | (four lines as listed in 2.6) | EXISTING | `home` |
| SV-L1 to SV-L4, SV-A | (link labels as listed in 2.6) | EXISTING | `home` |
| M-H, M-I, M1 to M4, M-N | (as listed in 2.7) | EXISTING | `home` |
| W-K | Who we work with | NEW | `brief` |
| W-H | Built for established businesses with complex operations. | ADAPTED | `home` "Built for businesses with complex operations."; "established" from `brief` |
| W-B | We work with mid-market organizations across the Greater Toronto Area. We focus on the industries below, but we don't limit our work to them. | NEW / ADAPTED | `PRODUCT` Users (mid-market, GTA); `brief` "without restricting us to a specific industry or company size" |
| W-B2 | Each industry has its own problems. The need underneath is often the same ... | EXISTING | `home` |
| W1 to W4 | (four industry lines as listed in 2.8) | EXISTING | `home`, `ind` |
| W-X | Your industry isn't listed? If your operation runs on scattered tools ... whether we're a fit. | ADAPTED | `ind` (one sentence dropped) |
| W-L | See all the industries we serve | EXISTING | `home` |
| PI-K | Products & Innovation | NEW | `brief` |
| PI-H | Our own products. | NEW | `owner-pi` |
| PI-B1 | Products & Innovation is a separate division from our client work. | NEW | `brief` "distinct business division, separate from client consulting". `[NEEDS OWNER FACT: whether the division has separate people or only separate work]` |
| PI-B2 | Our own products are taking shape. More to share soon. | OWNER | `owner-pi` |
| F-K, F-H, F-B1, F-B2, F-CTA, F-M, F-E | (as listed in 2.10) | EXISTING | `home`, `contact` |
| F-T1 | Built in-house in the GTA / Our team is based in the GTA and does the work itself. No outsourcing. | EXISTING | `home` |
| F-T2 | A reply within one business day / Then, if you'd like, a free first conversation with David Arushanov, our Client Solutions Lead, by phone, video call or in person. | EXISTING | `home`, `contact` |
| F-T3 | You keep approval / In the systems we build, your managers approve technical, pricing, safety and production actions. | EXISTING | `home`, `contact` |
| FT-T | We bring disconnected technology together into systems that work. | NEW | `brief` |
| FT-T2 | Built in-house by one team. Serving the Greater Toronto Area. | ADAPTED | `home` footer "built in-house by one team", "Serving the Greater Toronto Area" |
| FT-E | hello@ai-alchemy.ca | EXISTING | `home` |
| FT-N, FT-N2 | Client Solutions / Industries / Company; Products & Innovation | NEW / EXISTING | `brief`, `home` |
| META-H-T | Systems Integration, Software & AI in the GTA \| AI Alchemy (58) | NEW | `brief` |
| META-H-D | We bring disconnected technology together into systems that work: integration, modernization, custom software and AI. One in-house team in the GTA. (147) | NEW | `brief`; `llms` |
| META-S-T | Systems Integration & Modernization in the GTA \| AI Alchemy (59) | NEW | `brief` |
| META-S-D | Systems integration and modernization, strategy, custom software, AI automation, cloud and data. One in-house team in the GTA, from strategy to go-live. (152) | NEW | `svc` description (ADAPTED); `brief` |

Every chapter headline is within 2 lines and 2 to 6 words per line, except CH6-H, which is one line of 3 words. Every chapter body is 32 words or fewer.

---

## 5. Self-review: the lines I am least sure of

1. **H-H1 (owner headline).** It is 15 words and says nothing about what is sold or where. On a phone it will run to five or six lines and push the support line and button below the fold. It also repeats the About H2 almost word for word. I kept it because the owner approved it; the eyebrow and support line do the "what, for whom, where" work. Test the mobile first screen before signing off.
2. **CS-LK "Where most projects start".** This is a claim about the firm's project history that no source supports. Approve only if true; otherwise drop the label.
3. **PI-B1 "a separate division from our client work".** The owner asked for a distinct division, but "separate" could make a buyer wonder whether the "one in-house team" is split. Confirm what is actually separate (people, budget, or only the work) before publishing. If unsure, cut PI-B1 and let the eyebrow and band carry the distinction.
4. **CH4-B "The core works through documents".** It describes the drawing, but a reader may read it as a promised document-processing capability. The closest approved basis is "better document handling with review and accountability intact" (`eai`). If the owner wants to avoid that reading, use: "The core handles the repeatable steps as work comes down the line."
5. **CH6-B "now work as one system".** It is the end state of an illustration, not a result. The caption "Illustration of the method, not a client project." and the outcome note directly below it carry the honesty. Do not separate CH6-B from CH6-N in any layout, including the reduced-motion and static versions.
6. **P2 "ERP" and "migrations".** These come from the owner's brief, but "ERP" appears nowhere on the live site. Name system categories only. Never name vendors (no specific CRM or ERP brands) unless the owner confirms hands-on work with them.
7. **P6 heading.** The brief says "Technology architecture and transformation". I changed it to "planning" because "transformation" sits next to the banned "transform your business" and promises scale. If the owner prefers the original term, it is defensible as a category label, but not in a sentence.
8. **"Engineering" in H-K.** It follows the brief, but conflicts with "implementation firm" (`llms`) and "consultancy" (`about`). One description should win across the site.
9. **"Established" and "mid-market" (W-H, W-B).** Neither is defined (`PRODUCT`: "[open]"). Leave them undefined; do not add revenue or headcount bands.
10. **Repetition.** The Spine chapters, the six problem areas and the four service lines all describe the same work from different angles. The page is long. If it reads as repetitive in the built page, cut the four service lines (2.6) to a single "See all four services" link first, because the chapters already link to each service.

What should not be touched: the outcome note, "Illustration of the method, not a client project.", the brief microcopy ("Three short steps. Your brief opens as an email you send."), the approval sentence, and the three reassurances beside the final button. They are the site's proof, and they cost nothing to keep.
