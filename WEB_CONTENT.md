---
name: Web content — strategy, hubs, workflow, backlog
description: Positioning, 3-layer funnel, hub structure, publish checklist, and remaining posts
type: project
originSessionId: 4872b3f7-93fc-45c3-96d8-a24a5a0a2f65
---
## Positioning hierarchy (do not invert)
1. **Primary:** Pool tracking and diagnostics system — track over time to prevent problems. Outcomes + prevention.
2. **Supporting:** Full LSI calculation (accurate, not simplified). Accuracy + differentiation.
3. **Differentiator:** Time-series tracking and trend detection vs single-point calculators.

**Do NOT frame the app as "an accurate LSI calculator."** That targets too small a technical audience and misses most problem-based search intent. (Positioning corrected 2026-06-03 — do not revert.)

**Homepage is problem/tools-centric (do not re-"app-ify"):** the old embedded **app iframe was removed** so the homepage is about pool problems + calculators, not the app. Homepage JSON-LD is `WebSite` + `Organization` + `FAQPage` only — **no `SoftwareApplication`/`MobileApplication` schema on the homepage** (that lives on `download.html`). The small app CTA + App Store badges + "Try the demo" link at the bottom are intentional and stay.

**FC/CYA numbers — single source of truth:** `blog/fc-cya-chart-chlorine-levels` defines every FC minimum/target/shock value site-wide. Min = CYA×7.5% (×5% SWG); temperate targets 3–5 @ CYA 30, 5–7 @ 50, 7–9 @ 80; shock = CYA×40%. Align any page to this table — don't introduce divergent numbers (whole site aligned 2026-07-07).

## 3-layer content funnel
1. **Traffic (problem-based):** cloudy pool, chlorine not holding, lower alkalinity, FC/CYA charts — what people actually search for
2. **Authority (education):** what is LSI, FC vs TC, full water-balance logic — builds technical credibility
3. **Conversion (product):** tracking over time, trend detection, early warning — bridges to the app

Every traffic-layer post should hook back to the product via **tracking/trends/prevention** — not LSI as a hook. **Litmus test:** does the article answer "why install PoolChem Tracker?"

**Intent consolidation:** Do not create separate pages for keyword variations of the same intent. Prefer adding sections/FAQs to a ranking page over a new article. Page-at-position-15 heuristic: improving a ranking page usually beats writing a new one.

## Content hubs (4 hubs + 1 topical cluster)
All 4 hubs structurally complete (2026-05-22). Series blocks + internal links verified 2026-06-08.

| Hub | Pillar | Homepage callout |
|---|---|---|
| Cloudy & Green | `why-is-my-pool-water-cloudy` | live |
| Pool Chlorine | `pool-chlorine-levels-chart` | live |
| Pool Testing | `how-to-test-pool-water-at-home` | deferred (pending GSC data) |
| Chemistry Basics | `pool-chemistry-beginners` | deferred |

**LSI Authority Cluster** (topical cluster — built 2026-06-04, fully cross-linked):
- Pillar: `what-is-lsi` — **Sep 6: reframed as consequences/damage page** ("What Bad Pool LSI Does to Your Water — Corrosion, Scale, and Equipment Damage") to fix cannibalization with `/explained/lsi` (definition/formula). `explained/lsi` = definition intent; `what-is-lsi` = damage/consequences intent.
- Satellites: `calcium-hardness-in-pools`, `pool-scale-calcium-deposits`, `corrosive-pool-water`, `lsi-saltwater-pools`
- 5 inbound links from: opening-pool-for-summer, what-chemicals-do-i-need-for-a-pool, why-track-pool-chemistry-over-time, pool-startup-chemicals-checklist, how-to-clear-cloudy-pool-fast

**Hub conventions (Cloudy & Green pattern):**
- Pillar label = `(start here)`, NOT `(pillar)`
- Future posts use `.coming-soon` class with badge — never broken links
- Each post: hub breadcrumb, `hub-label` span above H2, featured-snippet lead (~50 words), series-block at bottom, BreadcrumbList JSON-LD, 4–6 "Related reading" cross-links

## Page template conventions (updated 2026-06-20)
- Logo brand name: always `<span class="logo-name">Pool<span>Chem</span> Tracker</span>` — never `<h1>`
- CSS: `.logo .logo-name` and `.logo .logo-name span` (not `.logo h1`)
- Page title: the single `<h1>` on every internal page — not `<h2>`
- Section headings: `<h2 class="section-title">`, sub-items `<h3>`
- Homepage is the only exception: logo stays span, but hero headline is the H1

## Blog publish checklist (9 steps)
1. Create post HTML in `/blog/` (or `/explained/` for parameter posts)
2. Article schema: set `datePublished` (YYYY-MM-DD), `dateModified` (same as published on new posts, updated on edits), `author` as Person not Organization: `{"@type":"Person","name":"Jeffrey Thompson","url":"https://www.poolchemtracker.com/about"}` — publisher stays as Organization
3. Add visible byline to the article-meta div: `&middot; By <a href="../about" style="color:var(--muted);text-decoration:none;">Jeffrey Thompson</a>`
4. Add card to `/blog/index.html` in the right category
5. Add `<item>` to `/feed.xml` and update `<lastBuildDate>`
6. Add `<url>` to `/sitemap.xml` with today's date
7. Add entry to `/llms.txt`
8. Add reciprocal links from related posts' "Keep reading" sections
9. Update the backlog below (mark published)

After commit + push, request indexing in GSC. (Bing: automatic via Cloudflare Crawler Hints — no manual submission needed.)

## Alkalinity cluster (Sep 6, 2026)

Hub: `/blog/alkalinity/` — 5 satellite articles cross-linked to hub and back:
- `how-to-raise-pool-alkalinity`, `how-to-lower-pool-alkalinity`, `pool-alkalinity-vs-ph`, `baking-soda-vs-soda-ash`, `high-alkalinity-cloudy-pool`

**Sep 6: hub ↔ article internal links wired (both directions) for all 5 satellites.** dateModified updated on all 5.

---

## CYA / Stabilizer cluster (new — 2026-07-23)

Largest topical gap on the site. `fc-cya-chart-chlorine-levels` is already top-performing (10K+ impressions/week) but there is no CYA-specific content to catch upstream searches that feed into it.

**Pillar:** `cya-pool-stabilizer` — what it is, why it matters, ideal ranges, SWG vs liquid-chlorine ranges. Folds in "pool-stabilizer-vs-cya" intent.

**Satellites (roughly priority order):**
1. `best-cya-level-for-liquid-chlorine` — strongest conversion angle; links directly to fc-cya-chart
2. `how-to-lower-cya` — highest traffic potential; drain-and-refill is the only answer → natural tracking/app hook
3. `how-to-raise-cya` — straightforward add-stabilizer guide
4. `high-cya-in-pool` — symptoms + consequences + when to drain
5. `low-cya-in-pool` — underprotection risk + raising guide
6. `how-much-stabilizer-to-add` — calculator companion (pairs with a `cya-calculator` tool if built)
7. `best-cya-level-for-saltwater-pool` — SWG-specific, links to swg/salt content

**Natural internal links to/from:** fc-cya-chart-chlorine-levels, cya-effect-on-lsi, pool-chlorine-levels-chart, chlorine-dose-calculator, explained/salt, lsi-saltwater-pools

**Status:** Pillar published 2026-08-23: `cya-pool-stabilizer`. Submitted GSC + Bing. Check ~Aug 30.

**Note:** `how-to-lower-cya` is the next priority — highest traffic potential; drain-and-refill is the only answer → natural app hook. Then `how-to-raise-cya`.

---

## Blog backlog (remaining — updated 2026-07-09)

**Counts (2026-08-09):** 53 `/blog/` posts | 14 `/explained/` posts | 10 `/tools/` calculators.

**Expand existing pages (not new posts):** ~~both done 2026-07-14~~

**Priority 1 — water balance cluster (high-volume, calculator companions):**
- `how-to-lower-ph-without-lowering-alkalinity` — 3 clicks from 0 in Aug 30 Insights report; real user problem (answer: acid lowers both, then aerate to raise pH without raising TA); existing `pool-ph-too-high` and `how-to-lower-pool-alkalinity` cover adjacent ground but not this exact query
- ~~`pool-ph-too-low`~~ — published 2026-08-05, GSC + Bing submitted. Check ~Aug 12
- `how-to-raise-pool-ph` — ⚠️ cannibalization risk with `ideal-pool-ph-level` (just realigned Jul 18, still being watched); hold until that page stabilizes; add as section/FAQ there first
- ~~`how-to-raise-pool-alkalinity`~~ — published 2026-08-05, GSC + Bing submitted. Check ~Aug 12
- `high-calcium-hardness-pool` — covered by `calcium-hardness-in-pools` (Jul 14); no new page needed
- ~~`how-to-lower-calcium-hardness`~~ — published 2026-08-05, GSC + Bing submitted. Check ~Aug 12
- CYA entries (`how-to-lower-cya`, `high-cyanuric-acid-in-pool`, `low-cyanuric-acid-in-pool`) — already captured in CYA cluster section above

**Priority 1 — chlorine cluster (Pool Chlorine hub satellites):**
- ~~`how-to-shock-a-pool`~~ — published 2026-08-04, submitted GSC + Bing. Check ~Aug 11
- ~~`how-long-after-shocking-can-you-swim`~~ — published 2026-08-04, submitted GSC + Bing. Check ~Aug 11
- ~~`why-does-my-pool-smell-like-chlorine`~~ — published 2026-08-04, submitted GSC + Bing. Check ~Aug 11
- ~~`chlorine-lock-myth`~~ — published 2026-08-04, submitted GSC + Bing. Check ~Aug 11
- ~~`pool-chlorine-too-high`~~ — published 2026-08-04, submitted GSC + Bing. Check ~Aug 11
- `combined-chlorine-vs-free-chlorine` — ⚠️ cannibalization risk with `free-chlorine-vs-total-chlorine` (ranking well); CC is a subset of that page — add as a section/FAQ there, not a new page
- `how-much-liquid-chlorine-to-add` — already in Priority 5 below

**Priority 1 — algae cluster: ~~all 4 published 2026-08-05, GSC + Bing submit pending~~**
- ~~`how-to-kill-pool-algae`~~ — pillar; series start-here; algae/ hub created
- ~~`mustard-algae-vs-green-algae`~~ — comparison intent; decontamination angle
- ~~`black-algae-in-pool`~~ — cyanobacteria deep-dive; plaster/concrete only
- ~~`algae-keeps-coming-back`~~ — 5-cause diagnostic; strongest tracking hook

**Algae hub:** `blog/algae/` created with 7 articles (4 new + 3 existing). Blog index "Green Pool" card → replaced with "Algae" (7 guides). Bing submitted 2026-08-05. GSC hit daily limit — submit all 5 URLs tomorrow (2026-08-06). Check impressions ~Aug 12. **Sep 6: hub ↔ article internal links wired (both directions) for all 4 satellite articles.**

**Priority 1 — cloudy water (Cloudy & Green hub additions):**
- ~~`cloudy-pool-after-rain`~~ — published 2026-08-09, GSC + Bing submit pending. Check ~Aug 16
- ~~`cloudy-pool-filter-not-working`~~ — published 2026-08-09, GSC + Bing submit pending. Check ~Aug 16
- ~~`cloudy-pool-after-adding-chemicals`~~ — published 2026-08-09, GSC + Bing submit pending. Check ~Aug 16

**Cloudy Water hub:** now 8 articles (5 original + 3 new). Blog index count updated to 8. Series blocks in all 5 existing cloudy articles updated to include new articles.

**Priority 1 — problem-based (high search intent, no existing page):**
- ~~White flakes coming from pool returns~~ — published Jul 9 (commit ebae652), submitted GSC. Check ~Jul 16
- ~~Scale inside a salt cell~~ — published Jul 9 (commit e29fd10), submitted GSC. Check ~Jul 16
- Brown stains vs. calcium stains
- Cloudy water with perfect chlorine (target "chlorine is fine, still cloudy" searchers — distinct from dead-algae/post-shock cloudy posts)
- Rough pool walls after winter
- ~~Pool chemistry during a heat wave~~ — published Jul 14, submitted GSC + Bing. Check ~Jul 21

**Priority 2 — conversion / comparison (high buying intent):**
- PoolChem Tracker vs PoolMath
- PoolChem Tracker vs pool store testing
- Manual pool calculations vs automated balancing
- Pool chemistry after a water refill (strong tracking hook → app)
- Pool maintenance log template (free)
- How to keep pool chemistry balanced automatically

**Priority 3 — seasonal (write for fall 2026):**
- ~~Closing your pool for winter: step-by-step~~ — published 2026-08-16 as `how-to-close-a-pool-for-winter`. Calculator companion; covers physical steps (blowing lines, equipment draining, cover) the calculator doesn't. Submit GSC + Bing. Check ~Aug 23.
- Pool maintenance schedule by season
- `how-to-open-a-green-pool` — problem-based variant of `opening-pool-for-summer` (different intent); algae + cloudy hook; safe to create
- `winter-pool-maintenance` — CLOSED: covered sufficiently as sections within `how-to-close-a-pool-for-winter`; no separate page needed

**Priority 3 — salt pool cluster:**
- `salt-cell-not-producing-chlorine` — diagnostic/broader than `salt-cell-calcium-scale` (Jul 9); no overlap
- `ideal-salt-level-pool` — ⚠️ check `explained/salt` (Jul 14) first; may be a section there
- `how-much-salt-to-add-to-pool` — already captured in Priority 5 as salt calculator companion

**Priority 4 — authority / backlinks:**
- How commercial pools manage LSI
- Why your heater gets calcium buildup (equipment protection + LSI tie-in)

**Priority 5 — calculator companions:**
- How much liquid chlorine should I add? (companion to `chlorine-dose-calculator`)
- Salt calculator guide (companion to `saltwater-pool-salt-calculator`)
- Calcium chloride calculator explained

**Lower priority:**
- Salt pool chemistry chart
- First-time pool owner guide

**Explained — 2 remaining:** TDS, borates (salt published 2026-07-14, submit GSC ~Jul 21)

**Explained — future chemistry reference expansion:**
High-value (companion to existing top calculators):
- `muriatic-acid` — strong companion to muriatic-acid-calculator (top performer)
- `liquid-chlorine` — companion to chlorine-dose-calculator
- `calcium-hypochlorite` — cal-hypo shock; pairs with pool-shock-calculator
- `sodium-bicarbonate` — baking soda; companion to baking-soda-calculator
- `soda-ash` — sodium carbonate; companion to pH calculator

Medium value:
- `trichlor` — tablet chlorine; CYA-buildup warning angle (app-relevant)
- `dichlor` — granular chlorine; similar to trichlor

Check for overlap before creating:
- `salt-water-chlorine-generator` — ⚠️ check `explained/salt` (Jul 14) for overlap
- `calcium-saturation-index` / `saturation-index` — ⚠️ these ARE LSI; `what-is-lsi` already exists; do not create; redirect if needed

Lower priority / niche:
- `orp` — advanced parameter, small audience
- `turbidity` — very niche

**Calculator opportunities (new tools):**
High value:
- `drain-refill-calculator` — directly pairs with CYA cluster; "how much to drain to lower CYA" is the most common use case; build when CYA cluster launches
- `soda-ash-calculator` — sodium carbonate for raising pH; different from baking-soda-calculator; companion to pH calculator

Medium value:
- `alkalinity-calculator` — ⚠️ check if `baking-soda-calculator` already handles this; a broader tool (raise + lower) would be distinct
- `calcium-increase-calculator` — ⚠️ likely what `calcium-hardness-calculator` already is; verify before building

Lower priority / niche:
- `borax-calculator` — raises pH; less common than soda ash
- `borate-calculator` — borates as additive; niche audience
- `chemical-cost-calculator` — complex (requires live pricing); deprioritize
- `swimming-pool-turnover-calculator` — technical/niche

**Desert pool cluster (new — 2026-07-23):**

Major strategic opportunity: generic pool sites have no desert-specific content. Large pool-owning population in AZ, NV, CA, TX. App already has desert/tropical climate offset built in — natural product hook.

**Status:** Backbone built Jul 23 — 7 pages live (3 original + 4 new). Submit GSC + Bing.

**Sequencing for next phase:** Water balance + CYA clusters take priority. Return to desert cluster after those are underway.

**Pillar:** `/desert-pool-chemistry/` — parent page linking to everything below. Branded as "Southwest Desert Pool Series" (~15–20 tightly linked articles).

**Highest-priority sub-clusters (in order):**

1. **Hard water / calcium creep** — the strongest pillar; most uniquely desert problem; underserved everywhere
   - `why-arizona-pools-have-high-calcium`
   - `calcium-creep-explained`
   - `how-fill-water-affects-pool-chemistry`
   - `when-to-drain-a-desert-pool`
   - `reverse-osmosis-vs-draining-a-pool`
   - `hard-water-vs-soft-water-for-pools`
   - `annual-water-replacement-guide`
   Connects to: LSI cluster, calcium-hardness-calculator, drain-refill-calculator, app tracking

2. **Evaporation** — water conservation angle enables municipal citations (authoritative, rare in pool content)
   - `how-much-water-should-a-pool-lose-to-evaporation`
   - `evaporation-vs-pool-leak`
   - `desert-pool-autofill-guide`
   - `does-topping-off-a-pool-cause-scale`
   - `should-you-use-a-pool-cover-in-arizona`
   Connects to: LSI, calcium creep, drain-refill-calculator, municipal water authority links

3. **Climate & environment**
   - `why-desert-pools-scale-faster`
   - `why-ph-rises-faster-in-desert-pools`
   - `high-uv-and-pool-chlorine` / `why-desert-pools-need-more-chlorine`
   - `how-hot-water-affects-pool-chemistry`
   Connects to: chlorine cluster, FC climate offset in app

4. **Seasonal (Southwest-specific — not generic seasons)**
   - `monsoon-season-pool-care`
   - `arizona-summer-pool-maintenance`
   - `desert-pool-maintenance-calendar`
   - Winter pool care in warm climates
   - Holiday/vacation pool preparation

5. **Regional articles** (thin variants of pillar — write last, after core cluster is built)
   - `arizona-pool-chemistry-guide`
   - `phoenix-hard-water-pools`
   - `las-vegas-pool-chemistry`
   - `southern-california-pool-chemistry`
   - `palm-springs-pool-maintenance`
   - `tucson-pool-chemistry`

6. **Troubleshooting library** (desert-specific problems)
   - White scale on tile
   - Constant pH rise
   - Constant calcium increase
   - High TDS after summer
   - Waterline deposits
   - High CYA after long summer

7. **Desert-specific calculators** (dev work — build alongside the cluster)
   - Desert evaporation estimator
   - Calcium accumulation calculator
   - Drain percentage calculator based on fill-water CH
   - Annual water replacement planner
   Note: `drain-refill-calculator` (already in calculator backlog) is the first to build — serves both this cluster and the CYA cluster.

**Equipment and advanced chemistry** (lower priority — write after core cluster establishes authority):
- Heat and salt cells, pump runtime at 110°F, cartridge filters in dusty climates, sandstorms, UV degradation
- Why LSI matters more in Arizona, tracking evaporation with LSI, why refill water isn't a "reset"

**Future tool (dev work, not an article):**
- "What Changed My LSI?" — user enters two water tests; tool shows which parameters moved LSI and by how much. Unique, linkable, reinforces educational positioning.
