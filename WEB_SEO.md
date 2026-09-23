---
name: seo-priorities-and-status
description: "Sep 20: Week 7 of collapse, floor holding (51–124 impr/day), no recovery. Trust-line experiment (16 pages) on HOLD to Oct 15; indexing confirmed Sep 20. Sep 20 later: sourcing fixes + methodology sources/link rollout to explained/ and tools/ (commits 22590ec, 5b53f18, 88a180b); homepage trust strip (ff2e446); chlorine-levels-chart + beginners fixes, methodology sources (5d6576d); Sep 21: CDC fecal-guidance fixes + dead-link cleanup (791a92b); spa CYA guidance aligned to CDC (2017bd7); MAHC cited on fc-cya-chart (f72e437); hot-tub water-change page sourced to CDC/MAHC (d243524). See Sep 20 Update."
metadata: 
  node_type: memory
  type: project
  originSessionId: bd1d6a59-8e37-44b3-bfed-b4c7f6898573
---

## Sep 20 Update — Post-audit sourcing + methodology linking (after trust-line batch 2)

**Commits (all pushed to main):** `22590ec` (sourcing + methodology sources), `5b53f18` (methodology links in related blocks), `88a180b` (reverted the link on the 4 on-hold calculators), `ff2e446` (homepage trust strip), `5d6576d` (sourcing/accuracy fixes on pool-chlorine-levels-chart + pool-chemistry-beginners, methodology sources, broadened trust wording), `791a92b` (Sep 21: CDC fecal-incident guidance corrected on the shock pages + llms.txt, dead CDC links replaced), `2017bd7` (Sep 21: spa CYA guidance aligned to the CDC; CDC cited on methodology), `f72e437` (Sep 21: MAHC cited on fc-cya-chart), `d243524` (Sep 21: how-often-to-change-hot-tub-water sourced to CDC/MAHC), `7e4ae07` (Sep 21: CLAUDE.md repo-path fix to /Users/jeffreythompson/PoolChem-Web — no site impact). Audit file `seo-audit-2026-09-19.md` was committed in `fce9274` and predates that batch — its items 1, 2, 5, 6, 7 were already done; item 4 (/explained/combined-chlorine, /explained/chloramines) — pages exist, closed.

**Sourcing findings (verified against the sources, not assumed):**
- **CDC home-pool/hot-tub page** gives *minimums only*: pH 7.0–7.8; FC ≥1 ppm (≥2 ppm with CYA); hot tub ≥3 ppm. It gives **no post-shock wait time and no swim-safe maximum**. The audit's assumption that the re-entry threshold "comes from CDC MAHC" was wrong — do not cite CDC for the swim-safe table.
- **MAHC 5th Ed (PDF read directly), §6.6.3.1A(3):** FC above 10 ppm with bathers present = imminent health hazard requiring closure (public-pool code, not a home-pool legal limit). Also §6.6.3.1A(4): CYA:FC ratio above 45:1 (venues using stabilizer) is an imminent hazard — not yet cited anywhere; site's targets (~9:1 at CYA 80) are far below it.
- **7.5% minimum FC/CYA source:** IPSSA newsletter, June 2025, "How to Kill and Prevent Algae Without Using Algaecide" by Terry Arko (HASA) — verified in the PDF: "the free chlorine must be kept at 7.5% of the CYA ppm level" (CYA 30 → 2.25 ppm; CYA 100 → 7.5 ppm); also 11.5% ratio at pH 7.5 for algae control. It is a byline trade article, not an IPSSA standard. The "50 ppm → 3.75 ppm" example is NOT in it (that's our own arithmetic).
- **ANSI/APSP/ICC-11:** do NOT claim it establishes the 7.5% formula (passage not located). It documents the underlying chlorine/CYA chemistry only.
- **No formal published standard for the 40% shock multiplier or the 5% SWG minimum ratio** (methodology: minimum FC = CYA × 7.5%, × 5% for saltwater/SWG). The IPSSA article never mentions salt/SWG — it supports the 7.5% only. Jeff confirms the app follows 7.5% (regular) / 5% (SWG); his rationale for 5%: the SWG injects chlorine regularly, so a lower ratio suffices. Since 5d6576d the methodology page presents both as a widely used convention (see "Other reputable pool chemistry sources" entry) — 7.5% and 40% verified in a supplier guide; 5% verified only in the community wiki.

**Edits made:**
- `how-long-after-shocking-can-you-swim` (22590ec): added MAHC §6.6.3.1A paragraph, a Sources block (CDC home-pool page + MAHC 5th Ed), and reworded the swim-safe-table sentence to point at /methodology instead of implying CDC backing. **Edited after the first Sep 20 GSC/Bing submission — resubmitted to GSC + Bing Sep 20 (after 22590ec deployed).**
- `/methodology` (22590ec): added IPSSA source entry (7.5% minimum, 11.5% at pH 7.5, notes it doesn't cover the shock multiplier); linked the ANSI/APSP/ICC-11 entry (PHTA Issuu copy) and the MAHC entry (5th Ed PDF). dateModified + sitemap lastmod → 2026-09-20. **Resubmitted GSC + Bing Sep 20.**
- `sitemap.xml` (22590ec) also carried previously-uncommitted lastmod bumps for what-is-lsi (09-08), pool-scale-calcium-deposits (09-12), does-liquid-chlorine-raise-cya (09-15), muriatic-acid-calculator (09-12), baking-soda-calculator (09-15).
- **Internal linking (5b53f18, amended by 88a180b):** added "Methodology & sources" link to the *Related concepts* block on 13 `explained/` pages (2nd item; all except index) and the *More pool calculators & guides* block on **13** `tools/` pages (1st item). Tools excluded: index, pool-volume-calculator, and the 4 on-hold calculators (muriatic-acid, chlorine-dose, baking-soda, pool-ph) — the link was added to those 4 in 5b53f18 and reverted in 88a180b, so they are back to their pre-link state. Navigation-only: NO dateModified or sitemap lastmod change. Blog "Related reading" (54) / "Keep reading" (30) blocks deliberately NOT touched — held for Oct 15.

- **Homepage (ff2e446):** added a "Where our numbers come from" trust strip between the FAQ and the app section — text says numbers are based on published standards (ANSI/APSP/ICC-11 and CDC guidance), "written by a pool owner, not a chemist"; links to /methodology and /about. Homepage sitemap lastmod 2026-08-10 → 2026-09-20 (visible content change; old date was stale after Sep 6). Homepage previously had no methodology link, author name, or trust signal. It is not a trust-line treatment page and not a control page. **Homepage submitted to GSC + Bing (reported Sep 21).**

- **Chlorine-levels chart + beginners guide (5d6576d):** reviewed the two pillar pages the audit flagged. `pool-chlorine-levels-chart`: fixed the CDC box (CDC says pH 7.0–7.8 and FC ≥1 ppm, ≥2 ppm with CYA — page said 7.2–7.8); cited MAHC §6.6.3.1A for the 10 ppm ceiling (replaced unsourced "most authorities") and added MAHC to Sources; labeled the 5 ppm / 8 ppm swim thresholds as our comfort guidance (not CDC); replaced "unsafe-low"/"dangerously low" with "below the recommended minimum" (the 7.5% ratio is an algae-prevention rule, not a health threshold; the "Dangerously low" table label at FC 0.1–0.9 stays — that range is below CDC's 1 ppm). `pool-chemistry-beginners`: FC card + FAQ now say 2–4 ppm applies with no CYA and the minimum is 7.5% of CYA (5% SWG) — the old 2–4 ppm beside CYA 30–50 sat below the site's own minimum; fixed FAQ JSON-LD to match visible text (pH 7.4–7.8 not 7.2–7.8; TA 60–90 not 80–120). Both: trust line added, visible date + dateModified → 2026-09-20, sitemap lastmod → 2026-09-20. **Both now in the trust-line treatment group (16 total). Submitted to GSC + Bing (reported Sep 21).**
- **Trust wording (5d6576d):** the homepage strip and the trust line on these two pages now read "published standards and other reputable pool chemistry sources — including ANSI/APSP/ICC-11 and CDC guidance" (the old "ANSI/APSP/ICC-11 and CDC guidance" overclaimed for the FC/CYA numbers). The other 14 treatment pages keep the old wording until after the Oct 15 read so the experiment compares like with like. **Copy rule: never name the community wiki (TFP) in page copy.** For reference: that wiki states 7.5% min / 5% SWG / 40% shock / 11.5% target and cites O'Brien et al. 1974 equilibrium research (reference unverified); a supplier guide (Benchmark Pool Supply) states 7.5% and 40%; IPSSA states 7.5% and 11.5% at pH 7.5.
- **Methodology (5d6576d):** new source entry "Other reputable pool chemistry sources"; IPSSA entry now says it doesn't cover the shock or SWG ratios; new paragraph "Why saltwater pools use 5%" (salt cell adds chlorine continuously → less buffer needed; stated as a convention, not a formal standard). **/methodology resubmitted to GSC + Bing after 5d6576d (reported Sep 21).**
- **Sep 21 — shock/spa body-claim check + CDC fixes (791a92b):** `how-to-shock-a-hot-tub` said a fecal incident needs "FC 20 ppm, hold 30 min at pH ≤7.5 per CDC; bromine 20 ppm; vomit same protocol" — the CDC's hot tub response (stool of either type) is FC ≥3 ppm, pH 7.0–7.8, held 30 minutes, then drain the tub, scrub all accessible surfaces, refill; the CDC page has no vomit, blood, or bromine guidance (the 20 ppm looks like the public-pool diarrheal protocol, which runs for hours). Rewritten to the CDC numbers; vomit/blood/bromine now say the CDC doesn't cover them and suggest draining as the cautious route (our advice, labeled). `how-to-shock-a-pool` said "any fecal or vomit incident requires an immediate shock treatment per CDC" — the CDC's backyard-pool response is FC 2 ppm, pH ≤7.5, 30 minutes for both stool types (the high-chlorine-for-hours protocol is public pools only; no vomit guidance) — reworded. The same wrong "20 ppm per CDC" line was in `llms.txt` (public, LLM-read) — fixed. Also fixed the hot-tub shock-vs-drain table row and the "after any contamination incident" bullet. **Dead CDC links (404) replaced:** `data-research/fecal-incident-response-recommendations.html` (on both shock pages) → `response/what-to-do-when-there-is-poop-in-the-pool.html`; `data-research/model-aquatic-health-code.html` (why-does-my-pool-smell-like-chlorine) → MAHC 5th Ed PDF. All 5 remaining distinct CDC URLs on the site resolved on Sep 21. dateModified/visible date/lastmod → 2026-09-21 on how-to-shock-a-pool, how-to-shock-a-hot-tub, /methodology (lastmod only for methodology). **These three pages submitted to GSC + Bing (reported Sep 21).**
- **Spa CYA aligned to the CDC (2017bd7, Sep 21):** the spa pages had allowed some CYA — spa-chemistry-basics ("CYA 0–30 ppm max" in chlorine spas), llms.txt (same), hot-tub-chlorine-vs-bromine (dichlor "sparingly", CYA "needed for outdoor UV", 30 ppm as the efficiency limit) — while their own cited CDC page says NOT to use cyanuric acid or chlorine products with cyanuric acid (dichlor/trichlor) in hot tubs. Fixed on spa-chemistry-basics (table, sanitizer section, "CYA in a hot tub" section, testing checklist, FAQ JSON-LD), hot-tub-chlorine-vs-bromine (comparison row, dichlor callout, closing paragraph), how-to-shock-a-hot-tub (dichlor row → "avoid in stand-alone spas") and llms.txt. dateModified/visible date/lastmod → 2026-09-21 on the two spa pages. **Scope:** the site applies the CDC's rule to STAND-ALONE spas; a spa attached to a pool shares the pool's water and CYA, so it follows pool chemistry (links to the FC/CYA chart, no separate numbers). The CDC page itself does NOT distinguish stand-alone vs attached — the qualifier is our application (Jeff's domain knowledge); never attribute it to the CDC. **CDC on CYA (verbatim, home-pool/hot-tub page):** "Disinfection times are longer in the presence of cyanuric acid"; pools with CYA need at least 2 ppm chlorine (1 ppm without); "CDC recommends not using cyanuric acid or chlorine products with cyanuric acid in hot tubs"; no CYA concentration limit or ratio given. Methodology's "chlorine/cyanuric-acid equilibrium" entry now cites this as directional support only (our 7.5% / 5% / 40% are not CDC numbers). Context: Jeff owns no spa and the app's chemistry engine is pool-first; spa content is learned as he goes. Left as-is (describe consequences, mildly imply some CYA is normal): the spa hub ("CYA management is critical") — optional softening (the how-often-to-change-hot-tub-water CYA bullet was fixed in d243524). Optional: a one-line scope note on the spa hub ("spa guidance follows CDC recommendations").

- **how-often-to-change-hot-tub-water sourced (d243524, Sep 21):** its bather-load formula (spa gallons ÷ 3 ÷ average users per day, previously labeled "a common industry guideline") is the CDC formula — MAHC 5th Ed §5.12.1.2.1 (verified in the PDF; a public-spa code that also adds "or at a minimum of every 1–2 weeks", deliberately NOT put on the page) and the CDC "Controlling Legionella in Hot Tubs" page (applies to all hot tubs; gives the same formula; says drain, scrub, clean, fill; key Legionella growth factors = sediment/biofilm, temperature, water age, disinfectant residual; hot tubs run at 77–113°F, the range where Legionella grows best). Page now attributes the formula, calls "3–4 months" an industry rule of thumb (not a CDC number), adds a Legionella health-reason paragraph, replaces the unsourced "CYA above 50 ppm" bullet with "CYA built up from dichlor" (CDC: no CYA in hot tubs), and has a Sources block (MAHC, CDC Legionella page, CDC home-pool/hot-tub page). Still uncited: the line-flush-product step (biofilm in plumbing). dateModified/visible date/lastmod → 2026-09-21. Submitted to GSC + Bing (reported Sep 21). This completes the audit's CDC-sourcing item.

**Homepage read (Sep 20):** index.html is a link directory (hero, 11 calculator cards, 8-symptom grid, 5 explainer cards, 4 guide-series callouts, 6-Q FAQ, app CTA), almost no prose. Findings: (a) FAQPage schema still has specific numbers (CYA 30 → 3–5 ppm, 7.5%, pH 7.4–7.8, LSI ±0.3, 1 oz per 1,000 gal) — homepage was not in the Aug 15 directional-FAQ batch; not urgent (AIO footprint collapsed with organic). (b) Only 2 of 4 guide callouts go to hub pages (blog/algae/, blog/alkalinity/); the other 2 go to pillar articles; 9 of 11 hubs have 0 homepage links, incl. desert-pools/ (audit's strongest differentiator) and spa/. (c) 7 of 19 calculators not on the homepage grid: dry-acid, pool-closing, pool-opening, water-replacement, chlorine-cost, chlorine-usage, overnight-chlorine-loss-test (pool-closing is in season). (d) The Sep 6 change cannot be diffed — this repo's history starts at 1e2798d (the Sep 6 commit, 20 commits total), so the pre-change homepage isn't in git; testing "did Sep 6 cost rank" needs Wayback/backup or GSC query-level data for the 36.5→78 drop. **Deferred until after the Oct 15 read (homepage is in the on-hold Sep 6 batch):** directional homepage FAQ schema, desert-pools + spa hub links, missing calculators on the grid.

**Why linking was needed:** /methodology had no site-wide entry point. The Sep 17 note says a footer link was wired — it never existed (0 of 139 pages with a footer-links block link to it). Before 5b53f18 only ~16 files linked to it (12 blog trust lines, about, explained/lsi, explained/ph). Homepage still has no methodology link.

**⚠️ Experiment caveats to remember at the Oct 15 read:**
- 11 `explained/` pages outside the trust-line treatment group now carry a methodology link (no trust line). If any were in the ~36 control pages, the control is slightly contaminated.
- The 4 on-hold calculators (muriatic-acid, chlorine-dose, baking-soda, pool-ph) were live with the methodology link for a short window (5b53f18 → 88a180b, Sep 20) and then restored to their pre-link state. No residual change; treat them as untouched for the Oct 15 read. 13 other tool pages keep the link (none were in the Aug 15 fix batch).

**Corrections to earlier entries (each fixed in place elsewhere in this file):** (1) the `how-long-after-shocking-can-you-swim` row said its thresholds were sourced from ANSI/APSP/ICC-11 — the page had no CDC/MAHC source and its table is site FC/CYA ranges. (2) The Sep 17 /methodology entry said a footer link was wired — none exists on any page (0 of 139 footer blocks). (3) Sep 20 batch-2 / audit entries said CDC citations were present on the shock and spa pages — true for 4 of 6 (how-to-shock-a-pool, how-to-shock-a-hot-tub, spa-chemistry-basics, hot-tub-chlorine-vs-bromine). (4) The Sep 6 entry and the audit said the homepage guides section points to hub pages — only 2 of 4 cards do (blog/algae/, blog/alkalinity/); the other 2 go to series pillar articles. (5) The Sep 20 entries said CDC citations were "already present" on how-to-shock-a-pool and how-to-shock-a-hot-tub — the fecal-incident link on both was a 404, and the hot-tub page misstated the CDC protocol (fixed in 791a92b).

**Still open (from audit):** /tools/pool-chemical-addition-order — checked Sep 20: NOT indexed on Google (re-requested), indexed on Bing; re-check next run; homepage — trust strip added (ff2e446) and read done, homepage submitted to GSC + Bing; still need a GSC query-level check on the 36.5→78 drop; body-claim check done Sep 21 for how-to-shock-a-pool, how-to-shock-a-hot-tub, spa-chemistry-basics (fixed in 791a92b, spa CYA-vs-CDC conflict fixed in 2017bd7); the audit's CDC-sourcing item is complete (how-often-to-change-hot-tub-water sourced in d243524; pool-chemistry-beginners and pool-chlorine-levels-chart fixed in 5d6576d); the 40% shock and 5% SWG ratios are now framed as a convention (optional: cite the primary chlorine/CYA equilibrium research, O'Brien et al. 1974 — reference not yet verified); Swim University nudge status; blog related-block rollout after Oct 15.

---

## Sep 19 Weekly Report

**7th consecutive week of decline. Floor holding — no new step-change, no recovery.**

Daily impressions still drifting in the 51–124/day band since Aug 28 (Sep 12: 93, Sep 13: 87, Sep 14: 64, Sep 15: 82, Sep 16: 51 — if anything drifting to the low end). No new event.

| Run | L7 Clicks | L7 Impr. | L7 CTR | L7 Pos. | L28 Clicks | L28 Impr. | L28 CTR | L28 Pos. |
|-----|-----------|----------|--------|---------|------------|----------|---------|---------|
| Aug 22 | 335 | 37,955 | 0.88% | 7.82 | 3,429 | 302,462 | 1.13% | 7.70 |
| Aug 29 | 72 | 1,636 | 4.40% | 14.42 | 2,478 | 222,454 | 1.11% | 7.72 |
| Sep 5 | 36 | 934 | 3.85% | 25.50 | 1,426 | 137,135 | 1.04% | 7.85 |
| Sep 12 | 21 | 742 | 2.83% | 18.01 | 464 | 41,267 | 1.12% | 8.66 |
| **Sep 19** | **32** | **523** | **6.12%** | **21.19** | **161** | **3,835** | **4.20%** | **18.74** |

**L7 gain is real but narrow:** All net L7 click gain traces to muriatic-acid-calculator (+6 clicks, 19→25; CTR 5.54%→9.51%; pos 3.65→3.31). Tied [Likely] to Sep 12 internal link ("does muriatic acid lower alkalinity" pos 20.75→8.64). Hold — do not re-touch. Confirm re-crawl next run.

**L28 −95.3% is a window artifact** (entire current window post-collapse; prior window still contains 3+ pre-collapse weeks). Will keep cratering until mid-October.

**New severe Watch List items this run:**
- `pool-ph-keeps-rising` — pos now 67.71 L28 (was 21.70 last run). Accelerating, Google-specific (Bing clicks rose 21→38 same period). Investigate competing results.
- `pool-alkalinity-vs-ph` — pos now 67.49 L28 (was 19.27 last run). Newly severe.

**Query breadth:** Narrowing stabilized — 5,000→428 distinct queries L28, proportional to −95% impression fall. Not deepening further.

**Action #1 DUE NOW (Sep 20):** Confirm via GSC + Bing URL Inspection that /methodology and 6 trust-line pages are indexed (esp. `baking-soda-vs-soda-ash`). Binary check — blocks reading the Sep 17 experiment correctly.

**Action #2 still open:** Confirm whether Swim University nudge (scheduled Sep 9) was sent.

---

## Sep 17 — Full-Site Audit: DIAGNOSIS REFRAMED (see reports/FULL_SITE_AUDIT_2026-09-17.md)

**Primary mechanism is NOT AIO click-cannibalization — it is Google-specific loss of impression eligibility ("shown less," not "clicked less"). [Strongly supported.]**
- Aug 15→16: impressions −94.6% **while CTR ROSE** (0.92%→2.8%; muriatic 0.8%→5–12%). That is the *inverse* of the AIO-cannibalization signature (impr-up/CTR-down). By the site's own framework (line ~232) this is eligibility loss, not AIO.
- **GSC AI-Overview footprint collapsed WITH organic** (7d: 14,914 peak Aug15 → 4,198 → 341 → 133 → 230). If AIO were *absorbing* the site, its AIO presence would persist/grow; instead Google dropped the site from BOTH blue links and AIO → site-level trust/eligibility event.
- **AIO cannibalization is the JULY story only:** daily CTR peaked Jul25 (1.43%) then fell to 0.74% by Aug15 while impressions climbed — modest CTR compression, NOT the cliff.
- **Two events, two causes, confirmed at page level:** muriatic-acid-calculator held position 4.68→3.49 (rank intact, footprint shrank) while chlorine-dose-calculator fell to pos ~60 (rank destroyed) — same period, opposite fates. Event 1 = reliability/YMYL reclassification (informational/health clusters →0) [Likely]; Event 2 (Aug27→28, position step 21→35) = Aug 18–21 spam update [Likely].
- **Sep 12 AIO "7d +73%" (133→230) is noise off a collapsed base, NOT a confirmed reversal** (peak was 14,914). Do not act on it.
- **Recovery lever is authority/entity, not on-page/schema** — Bing/Copilot rose right through the collapse (content is citable); the gap is Google-specific trust. That's why Aug15/Sep6 fix batches show no signal.
- **Highest-value missing data:** query-level GSC before/after Aug15 + live AIO-occupancy check on vanished informational queries (who's cited). Moves Event-1 cause from Likely→Confirmed.

## Aug 15–16 Event — Diagnosis (No Manual Penalty)

**No manual penalty. No mass deindexing.** 49 excluded URLs (27 redirects, 9 crawled-not-indexed, 5 discovered-not-indexed, 4 404s) — normal for a 4-month-old site. Ahrefs Health Score 100 as of Sep 8.

**Rankings on surviving pages did NOT collapse.** muriatic acid cluster: pos 4.9→4.3 (improved), CTR 0.8%→5.3% — Google shows pages only for highly relevant queries now, stopped testing them broadly.

### Query Cluster Analysis — Aug 1–14 (before) vs Aug 16–25 (after)

| Cluster | Status | Before impr. | After impr. |
|---|---|---|---|
| CDC chlorine guidance | **GONE** | ~2,000+ (50+ queries × 10–100 impr) | **0** |
| Chlorine levels / safety informational | **GONE** | ~2,000+ | ~50 |
| Baking soda vs soda ash | **GONE** | ~800 | ~15 |
| LSI / Langelier | **GONE** | ~600 | ~25 |
| Pool shock dosing | **GONE** | ~1,200 | ~50 |
| CYA / FC ratio | **GONE** | ~150 | ~15 |
| Muriatic acid / pH down calculator | **SURVIVED** | ~3,000+ | ~1,000 (~50% drop) |

The entire **CDC chlorine guidance cluster** (50+ unique queries) returned **zero** in the after period — it didn't shrink, it vanished. Pattern: informational/educational queries disappeared; tool/calculator queries where site ranks #1–2 survived at reduced volume.

**Recovery path:** CDC/safety/baking soda explainers = accept as AIO-absorbed, focus on citation authority. Muriatic acid cluster = protect, do not change. **Do not:** delete articles, rewrite successful calculators, bulk-build backlinks, make broad structural changes.

## Sep 12 Update — Daily Data Confirms TWO Step-Changes

**Daily GSC data (Aug 15–Sep 10) available in gsc_daily_history.csv and gsc_daily_page_history.csv.**

| Event | Date | Sitewide Impressions | Change |
|-------|------|---------------------|--------|
| Event 1 | Aug 15→16 | 7,280 → 390 | −94.6% overnight |
| Plateau | Aug 16–27 | 141–300/day | Slowly drifting lower |
| Event 2 | Aug 27→28 | 209 → 141 | Second clear step-down |
| New plateau | Aug 28+ | 76–140/day | Continuing to drift |
| Possible uptick | Sep 4–6 | 105–124/day | Not yet confirmed as floor |
| Resumed drift | Sep 7–10 | 97→86→111→76 | Floor not confirmed |

**muriatic-acid-calculator daily shape:** Aug 15: 754 impr → Aug 16: 134 (Event 1) → plateau 118–188 Aug 16–27 → Aug 28: 60 (Event 2) → Sep 1–10: 26–70/day.

**Two-event → two-cause mapping:**
- Event 1 (Aug 15–16): Query-footprint narrowing / AIO absorption. [Likely] confirmed.
- Event 2 (Aug 28–29): Ranking effect of the Aug 18–21 spam update (~10-day lag typical). Pages with CTR+position both worsening = spam update ranking regressions. [Likely].

**No floor confirmed.** Sep 4–6 uptick (105→112→124) followed immediately by Sep 7–10 drift back down (97→86→111→76).

## Sep 12 Weekly Report

**Shape:** L7 21 clicks (−41.7%), L28 464 (−67.5%) — sixth consecutive decline. Only 24 of 139 pages with any L28 clicks. Absolute L7 weekly loss shrinking (−648→−263→−36→−15), suggesting a floor may be forming, not yet confirmed. L28 will keep falling until the entire window sits inside the post-Aug-16 era (~late September).

**muriatic-acid-calculator VOLUME collapsed (not rank)** — last resilient page for 4 straight weeks — −988 clicks L28, −32,416 impressions. **Clarification (Sep 17):** two different axes were being conflated. What broke is the *volume-protection* assumption ("tools kept their traffic while informational lost it") — muriatic's last resilient impression/click floor is gone. The *decline mechanism is unchanged*: daily position held/improved throughout (Aug22–Sep10: 4.68→3.49, best-ever ~2.3–3.5) and CTR stayed 4–12%. So muriatic remains in the **NARROWING** bucket (impressions collapse, rank fine) — it has **NOT** crossed into ranking regression like chlorine-dose/ph/calcium-hardness. "Tools are protected" is false on *volume*, still true on *rank*.

**Two distinct decline signatures:**
- **Narrowing/AIO-absorbed** (muriatic-acid-calculator, pool-shock-calculator): CTR and position flat-to-improved while impressions/clicks collapse. [Likely] cause.
- **Ranking regression** (chlorine-dose-calculator, pool-ph-calculator, calcium-hardness-calculator): CTR AND position both worsening alongside the loss. [Likely] Aug 18–21 spam update effect.

**Sep 6 fix batch** (homepage, pool-startup-chemicals-checklist, pool-volume-calculator, what-is-lsi, algae/alkalinity hubs) — all declined further this run. Likely swamped by broader event. Re-check once broader decline stabilizes.

## AI Overview Cannibalization — Ongoing

**Root cause confirmed Aug 15:** FAQPage schema added Jun 11–24. Google extracted specific numbers into AI Overview; CTR peaked Jul 25 then compressed.

**Fix applied Aug 15:** Rewrote FAQ Q1 answers on chlorine-dose, baking-soda, muriatic-acid, pool-ph calculators from specific numbers to directional. **Do not re-act on these pages** — collapse is masking fix signal.

**Sep 19 AI visibility:**
| Source | Current | Previous | Δ |
|--------|---------|----------|---|
| GSC AI Overview — 24 hours | 30 | 16 | +87.5% |
| GSC AI Overview — 7 day | 149 | 230 | −35.2% ← **+73% reversal did NOT hold; confirmed noise** |
| GSC AI Overview — 28 day | 853 | 50,138 | −98.3% (window artifact) |
| Bing Copilot page — 7 day | 4,876 | 6,586 | −25.96% |
| Bing Copilot query — 7 day | 1,830 | 3,161 | −42.1% |
| Bing Copilot page — 30 day | 22,924 | 8,718 | +162.9% |
| Bing Copilot query — 30 day | 8,843 | 2,802 | +215.6% |

GSC AI Overview 7d +73% (Sep 12) confirmed noise — fell back to 149. Bing Copilot page-vs-query divergence remains resolved. Top 30d Copilot gainers (seasonal): how-to-close-a-pool-for-winter +2,279, pool-scale-calcium-deposits +1,980, "remove calcium carbonate scaling...pumice stone" query +1,602, pool-closing-chemicals-checklist +1,109, black-algae-in-pool +800, "black algae in pool" query +642.

**Sep 12 AI visibility (prior run):**
| Source | Current | Previous | Δ |
|--------|---------|----------|---|
| GSC AI Overview — 24 hours | 10 | 28 | −64.3% |
| GSC AI Overview — 7 day | 230 | 133 | +73.0% (noise — did not hold) |
| GSC AI Overview — 28 day | 7,633 | 56,516 | −86.5% (window artifact) |
| Bing Copilot page — 7 day | 5,959 | 5,864 | +1.6% |
| Bing Copilot query — 7 day | 3,004 | 1,915 | +56.9% |
| Bing Copilot page — 30 day | 19,383 | 8,819 | +119.7% |
| Bing Copilot query — 30 day | 7,454 | 2,539 | +193.6% |

## Sep 12 Action Checklist

- [x] **Action #2 — GSC URL Inspection:** Both confirmed clean.
  - `muriatic-acid-calculator` — URL is on Google ✓, Page indexed ✓, HTTPS ✓, Breadcrumbs 1 valid item ✓.
  - `chlorine-dose-calculator` — URL is on Google ✓, Page indexed ✓, HTTPS ✓, Breadcrumbs 1 valid item ✓.
  - **Conclusion:** No crawl or indexing issue. Decline on both is pure ranking/AIO — no technical remediation path.
- [x] **Submit `muriatic-acid-calculator`** — GSC + Bing submitted Sep 12 (new body link → how-to-lower-pool-alkalinity, dateModified 2026-09-12). Check re-crawl next run.
- [x] **Submit `pool-scale-calcium-deposits`** — GSC + Bing submitted Sep 12 (pumice stone FAQ, internal link → muriatic-acid-calculator, dateModified 2026-09-12). Check re-crawl next run.

## Aug 29 Report Checklist — Results

- [x] `muriatic-acid-calculator` — Bing traffic confirmed (731 impr L28). URL inspection confirmed Sep 12 — indexed ✓.
- [x] `chlorine-dose-calculator` — target query "how much liquid chlorine to add to pool" improved 14.00→9.33. Encouraging.
- [x] **Action List #2 complete (Aug 29):** All 4 calculator pages confirmed indexed and recently crawled. Near-zero impressions is a pure ranking/AIO issue.
- [ ] SERP title changed × 2 — no Ahrefs data this run. Carry to ~Sep 1 crawl.
- [x] CYA cluster — "pool alkalinity too low" on page 1 (pos 8.32). ✅
- [x] Star GA4 `store_click` as Key Event — done Aug 29. ✅

## Pending GSC Checks

| Page | Change | Status |
|------|--------|--------|
| `chlorine-dose-calculator` | Aug 15: FAQ Q1 directional; Aug 27: H1 "Liquid", meta rewritten, reference table (10k/15k/20k gallon doses) | Mid-Sep signal window arrived but collapse masks signal. Target query flat pos 9.53 vs 9.67, 0% CTR — inconclusive. Hold. |
| `baking-soda-calculator` | Aug 15: meta directional; FAQ Q1 rewritten | Mid-Sep signal window arrived but collapse masks signal. Hold. |
| `pool-ph-calculator` | Aug 15: FAQ Q1 directional; new dose FAQ | Mid-Sep signal window arrived but collapse masks signal. Hold. |
| `muriatic-acid-calculator` | Aug 15: TA worked example + FAQ; Sep 12: body link → how-to-lower-pool-alkalinity | 28-day CTR 2.28%→3.31% directional. Sep 12 submitted. Check re-crawl next run. |
| `pool-alkalinity-vs-ph` | Aug 15: title/meta (fix-TA-first); schema fix | Mid-Sep signal window arrived but collapse masks signal. Hold. |
| `fc-cya-chart-chlorine-levels` | Aug 15: title rewritten | 28-day CTR 1.78%→2.14% — directional. |
| `/explained/lsi` | Aug 16: title/meta rewritten; first Bing submission | Position regressed to 23.27 (was 17.46 after fix). Watch whether reverses. |
| `/blog/how-to-close-a-pool-for-winter` | Aug 16: new article | Seasonal spike expected Sep–Oct. Bing Copilot +1,415 (new). Monitor. |
| `pool-scale-calcium-deposits` | Sep 12: pumice stone FAQ + internal link → muriatic-acid-calculator | Submitted Sep 12. Check re-crawl and "remove calcium carbonate scaling" Google visibility next run. |
| `/tools/pool-chemical-addition-order` | Sep 6: GSC indexing requested | "Discovered - currently not indexed" as of Sep 6. **Sep 20 check: still NOT indexed on Google — label unchanged since Sep 6: "Discovered - currently not indexed" (Google knows the URL but has not crawled it; 2 indexing requests, Sep 6 and Sep 20); indexing re-requested Sep 20. INDEXED on Bing.** Page is live (200), linked from homepage card + tools index + 12 files, in sitemap + llms.txt — discovery is not the issue; likely the site-level Google eligibility problem. Re-check next run; don't spend more effort before Oct 15. |
| `pool-ph-keeps-rising` | Sep 20: trust line + dateModified | Submitted GSC + Bing Sep 20. Part of trust-line treatment group. Read at Oct 15. |
| `pool-alkalinity-vs-ph` | Sep 20: trust line + dateModified (visible date also corrected Jul 7→Sep 20) | Submitted GSC + Bing Sep 20. Part of trust-line treatment group. Read at Oct 15. |
| `how-long-after-shocking-can-you-swim` | Sep 20: trust line + dateModified | Submitted GSC + Bing Sep 20. Sep 20 later (22590ec): added MAHC §6.6.3.1A note + Sources block (CDC home-pool page, MAHC 5th Ed); swim-safe table = site FC/CYA ranges (not a CDC/ANSI threshold), links to /methodology. Edited after first submission — resubmitted GSC + Bing Sep 20. |
| `how-to-shock-a-pool` | Sep 20: trust line + dateModified (visible date corrected Aug 4→Sep 20) | Submitted GSC + Bing Sep 20. CDC citations (incl. fecal incident response) already present. |
| `spa-chemistry-basics` | Sep 20: trust line + dateModified | Submitted GSC + Bing Sep 20. CDC citation already present. |
| `hot-tub-chlorine-vs-bromine` | Sep 20: trust line + dateModified | Submitted GSC + Bing Sep 20. CDC citation already present. |
| `how-to-shock-a-hot-tub` | Sep 20: trust line + dateModified | Submitted GSC + Bing Sep 20. CDC + fecal incident response citations already present. |
| `how-often-to-change-hot-tub-water` | Sep 20: trust line + dateModified; Sep 21 (d243524): sourced to CDC/MAHC (formula, Legionella rationale, Sources block), CYA bullet aligned, dateModified 2026-09-21 | Submitted GSC + Bing Sep 20; Sep 21 edit submitted GSC + Bing (reported Sep 21). Treatment page. |
| `/methodology` | Sep 17: NEW page (audit Part 1), submitted GSC + Bing | Confirm indexed on Google + Bing next run. |
| `pool-chlorine-levels-chart` | Sep 20: trust line + CDC/MAHC corrections + dateModified (5d6576d) | Submitted GSC + Bing (reported Sep 21). Trust-line treatment group (16). Read Oct 15. |
| `pool-chemistry-beginners` | Sep 20: trust line + FC/CYA wording + FAQ schema alignment + dateModified (5d6576d) | Submitted GSC + Bing (reported Sep 21). Treatment group. Read Oct 15. |
| `/` (homepage) | Sep 20: trust strip (ff2e446); wording broadened (5d6576d) | Submitted GSC + Bing (reported Sep 21). Neither treatment nor control page. |
| `/methodology` (later updates) | Sep 20: IPSSA source + ANSI/MAHC links (22590ec, resubmitted); other-sources entry + SWG 5% paragraph (5d6576d) | Resubmitted GSC + Bing after 5d6576d (reported Sep 21). |
| `how-to-shock-a-pool`, `how-to-shock-a-hot-tub` (Sep 21 edits) | Sep 21: CDC fecal-incident guidance corrected, dead CDC link replaced, dateModified 2026-09-21 (791a92b) | Submitted GSC + Bing (reported Sep 21). Both are trust-line treatment pages (already in the 16). Read Oct 15. |
| `/methodology` (Sep 21 edit) | Sep 21: "fecal-incident" wording, dateModified 2026-09-21 (791a92b); CDC-on-CYA citation added to the equilibrium entry (2017bd7) | Submitted GSC + Bing (reported Sep 21). |
| `spa-chemistry-basics`, `hot-tub-chlorine-vs-bromine` (+ `how-to-shock-a-hot-tub` dichlor row) | Sep 21: CYA guidance aligned to CDC — no CYA in stand-alone hot tubs; attached spas follow pool chemistry (2017bd7); dateModified 2026-09-21 on the two spa pages | Submitted GSC + Bing (reported Sep 21). Trust-line treatment pages (already in the 16). Read Oct 15. |
| `fc-cya-chart-chlorine-levels` (Sep 21 edit) | Sep 21: MAHC §6.6.3.1A cited in the "Can FC be too high?" answer + Sources; removed the unsourced "above 20 ppm generally not safe" line; dateModified/visible date/lastmod 2026-09-21 (f72e437) | Submitted GSC + Bing (reported Sep 21). One of the original 6 Sep 17 trust-line pages — small content edit (trust line and intro untouched; trust line keeps the old wording). Read Oct 15. |
| **Gap-3 trust-line batch (6 pages)** | Sep 17: trust line + /methodology link on explained/lsi, explained/ph, fc-cya-chart, baking-soda-vs-soda-ash, free-chlorine-vs-total-chlorine, cya-pool-stabilizer; submitted GSC + Bing | **Sep 20: All 6 + /methodology indexed on Google ✅. All indexed on Bing except `baking-soda-vs-soda-ash` (still "Discovered not crawled" — Request Indexing clicked again Sep 20).** HOLD experiment read until Oct 15. |

## Watch List

- **⚠️ ONGOING COLLAPSE — floor holding, no recovery** — TOP ITEM. Sep 19: L7 32 clicks, L28 161 (−95.3% window artifact), 7th straight decline. Floor (51–124 impr/day band) still not confirmed — if anything drifting lower (Sep 16: 51). 74 pages with L28 losses, 0 L28 winners. **Do not make broad site changes — hold all.**
- **⚠️ EXPERIMENT — Sep 17 methodology + trust-line (audit Part 1)** — HOLD until 2026-10-15.
  - **Indexing confirmation — DONE 2026-09-20:** All 7 indexed on Google ✅. `baking-soda-vs-soda-ash` still "Discovered but not crawled" on Bing — same status as Sep 17 (Request Indexing clicked again Sep 20). All others indexed on Bing ✅. Bing crawl on baking-soda-vs-soda-ash may take 1–2 weeks; not a blocker for the experiment (Google is what matters for the trust-line hypothesis).
  - **Sep 20 batch expansion:** 8 more pages added to trust-line treatment group (pool-ph-keeps-rising, pool-alkalinity-vs-ph, how-long-after-shocking-can-you-swim, how-to-shock-a-pool, spa-chemistry-basics, hot-tub-chlorine-vs-bromine, how-to-shock-a-hot-tub, how-often-to-change-hot-tub-water). Treatment group now **16 pages total** (Sep 20 later: + pool-chemistry-beginners and pool-chlorine-levels-chart, 5d6576d — submitted GSC + Bing, reported Sep 21). All submitted GSC + Bing Sep 20. Control group now ~34 untouched informational pages.
  - **Divergence-vs-control read — HOLD until 2026-10-15:** do the 16 recover impressions faster than ~34 untouched informational control pages? Roll wider if yes; if no divergence by Oct 15, trust-line alone isn't the lever — need external authority/backlinks.
  - **Sep 20 later (5b53f18, 88a180b) — control caveat:** methodology link added to related blocks on 13 explained/ + 13 tools/ pages (no trust line, no dateModified). Possible mild control contamination (explained/ pages outside the trust-line treatment group). On-hold calculators (muriatic, chlorine-dose, baking-soda, pool-ph) and blog control pages are untouched. See Sep 20 Update.
- **⚠️ pool-ph-keeps-rising** — pos now **67.71 L28** (was 21.70 last run). Accelerating Google-specific decline; Bing clicks rose 21→38 same period. **Sep 20: trust line added, dateModified bumped, submitted GSC + Bing.** Now part of trust-line treatment group. HOLD — read alongside Sep 17 batch at Oct 15.
- **⚠️ pool-alkalinity-vs-ph** — pos now **67.49 L28** (was 19.27 last run). Newly severe. **Sep 20: trust line added, dateModified bumped (visible date also corrected — was still showing July 7 despite schema showing Sep 6), submitted GSC + Bing.** Now part of trust-line treatment group. HOLD.
- **⚠️ Pending Aug 15 fix batch** (chlorine-dose, baking-soda, pool-ph, muriatic-acid calculators; pool-alkalinity-vs-ph; fc-cya-chart; /explained/lsi) — collapse still masks fix-specific signal. Hold.
- **⚠️ Sep 6 fix batch** (homepage, pool-startup-chemicals-checklist, pool-volume-calculator, what-is-lsi, algae/alkalinity hubs) — all continued declining. Swamped by broader event. Re-check when floor confirmed.
- **⚠️ Homepage ranking** — L28 pos 78.07 (was 36.52), L7 pos 69.71 (slight L7 improvement but +4 clicks unknown cause). Do not credit Sep 6 guides-relink yet — investigate competing results directly. **Sep 20: trust strip added (ff2e446) — see Sep 20 Update for the homepage read; pre-Sep-6 page not recoverable from git.**
- **⚠️ Mixed decline signature** — narrowing (muriatic/shock-calc) vs. ranking regression (chlorine-dose/ph/calcium-hardness calc). Both still active.
- **GSC AI Overview 7d +73% reversal (Sep 12)** — ✅ Confirmed noise. Fell back to 149 this run. Closed.
- **Bing Copilot page-vs-query divergence** — ✅ Resolved Sep 12 and held Sep 19. Closed.
- **iOS conversion rate** — **7.04% (28d), four consecutive runs of decline** from ~13% peak. Not yet stabilized. Watch.
- **GA4 Key Events** — 27 on 28d cut (up from 17, third consecutive run). ✅ Genuine trackable metric.
- **Google Play data** — 11 days stale (Sep 8 latest), 10-day internal gap (Aug 22–31). Needs fresh export + properly-formatted Sales report.
- **Swim University (Matt Giovanisci)** — nudge scheduled 2026-09-09, still unconfirmed sent. Highest-leverage backlink target — confirm.
- **`/blog/how-to-close-a-pool-for-winter`** — Bing Copilot +2,279 (30d) ✅ Seasonal spike confirmed.
- **`/blog/pool-scale-calcium-deposits`** — Bing Copilot +1,980 (30d). Invisible to Google organic. ✅ Bing/AI thriving.
- **`/blog/black-algae-in-pool`** — Bing Copilot +800 (30d, +642 query). Continue building links.
- **`/explained/lsi`** — pos regressed to 23.27 (was 17.46 after Aug 16 fix). Monitor.
- **`/explained/ph`** — confirmed AIO absorption. Citation authority only, no title/meta changes.
- **2 pages blocked by robots.txt** — `/demo` and `/demo/` (JS app, intentional). No action needed.
- **27 redirect pages — "Failed" GSC validation** — expected. No action needed.
- **August 2026 Spam Update (Aug 18–21)** — Possible-tier link. Ahrefs Health Score 100 as of Sep 8. Recovery if applicable is weeks, not days.
- **Bing document-size-0** — `lsi-pool-surface-types`, `year-round-pool-maintenance-desert-pools`, `cya-effect-on-lsi`, `saltwater-pool-salt-calculator`: resubmitted Sep 12. Crawl status still not verifiable — confirm next run.

## Bing Performance — Sep 19

| Range | Clicks (cur/prev) | Impr. (cur/prev) | CTR (cur/prev) | Position (cur/prev) |
|-------|-------------------|------------------|----------------|---------------------|
| Last 7 days | 54 / 84 | 2,216 / 2,832 | 2.44% / 2.97% | 4.68 / 4.72 (approx.) |
| Last 28 days | 349 / 363 | 11,455 / 11,861 | 3.05% / 3.06% | 4.63 / 4.79 (approx.) |

**Key takeaway: Bing L28 down only 3.9% while Google fell 95.3% — strongest evidence this is Google-specific trust/eligibility, not content quality.**

Top Bing pages by clicks (L7): muriatic-acid-calculator (8/6), how-to-balance-pool-water (7/4), pool-ph-keeps-rising (6/10), dry-acid-calculator (6/5), pool-closing-calculator (5/6), chlorine-dose-calculator (4/11).

**Google-vs-Bing gap standouts (Sep 19):**
- pool-ph-keeps-rising: Google pos collapsed 8.82→67.71 (L28) while Bing clicks rose 21→38 (+81%) — strongest single-page evidence this run.
- chlorine-dose-calculator: Google L28 clicks fell 717→1 (essentially zero); Bing L28 clicks fell only 54→46 (−15%).
- pool-scale-calcium-deposits: invisible to Google organic; Bing L28 clicks rose 17→28 (+65%); biggest 30d Copilot gainer (+1,980).

## Bing Performance — Sep 12 (prior run)

| Range | Clicks (cur/prev) | Impr. (cur/prev) | CTR (cur/prev) | Position (cur/prev) |
|-------|-------------------|------------------|----------------|---------------------|
| Last 7 days | 69 / 76 | 2,534 / 2,716 | 2.72% / 2.80% | 4.41 / 4.68 |
| Last 28 days | 362 / 392 | 11,539 / 11,950 | 3.14% / 3.28% | 4.73 / 4.96 |

## App Store Performance — Sep 19 (iOS, data through Sep 17)

| Metric | 7-day (cur/prev) | 28-day (cur/prev) |
|--------|-----------------|------------------|
| Total Downloads | 8 / 5 | 22 / 48 |
| First-Time Downloads | 7 / 4 | 20 / 46 |
| Impressions (Unique Devices) | 53 / 83 | 284 / 395 |
| Product Page Views | 17 / 17 | 75 / 94 |
| In-App Purchases | 0 / 1 | 4 / 10 |
| Sales | 0 / 5 | 20 / 50 |
| Conversion Rate (derived) | 13.21% / 4.82% | **7.04% / 11.65%** |

28-day conversion rate: 13.02%→12.14%→8.20%→**7.04%** — **four consecutive runs of decline from ~13% peak, not yet stabilized.** 7-day 13.21% is noise (7 downloads / 53 impressions only).

## App Store Performance — Sep 12 (prior run, iOS, data through Sep 10)

| Metric | 7-day (cur/prev) | 28-day (cur/prev) |
|--------|-----------------|------------------|
| Total Downloads | 5 / 4 | 27 / 46 |
| First-Time Downloads | 4 / 4 | 25 / 44 |
| Impressions (Unique Devices) | 83 / 71 | 305 / 489 |
| Product Page Views | 17 / 16 | 78 / 98 |
| In-App Purchases | 1 / 3 | 6 / 11 |
| Sales | 5 / 15 | 30 / 55 |
| Conversion Rate (derived) | 4.82% / 5.63% | 8.20% / 9.00% |

## Google Play Performance — Sep 12 (data stale)

**Data still only reported through Aug 21 (3+ weeks stale) as of Sep 6 export.** Fresh export needed from Play Console. Last known: 39 installs (Jul 20–Aug 21), 26 active devices, 5 total transactions ($25.08 revenue).

## Ahrefs Site Audit — Sep 22, 2026

Health Score: **100 (Excellent)** — 146 internal URLs (152 × 2xx, 4 × 3xx), 0 errors, 18 warnings, 76 notices. Total issues 94 (was 43 Sep 15). The rise is all notices, driven by the Sep 17–21 sourcing/trust-line edits (IndexNow + rank-tracking notices), not by site defects.

| Issue | Count | Change | Priority | Notes |
|-------|-------|--------|----------|-------|
| Meta description too long | 5 | +1 | **Fixed Sep 23 (new one)** | New: `/methodology` (161 chars, from the Sep 20–21 edits) → trimmed to 148. Other 4 are older: `muriatic-acid-calculator` (173, protected, do not touch), `pool-closing-chemicals-checklist` (175), `low-cya-in-pool` (190), `what-is-lsi` (163). |
| Open Graph tags incomplete | 7 | +1 | **Fixed Sep 23 (new one)** | New: `/methodology` had no `og:image` → added og:image + twitter:image (social-card.png). Other 6 are legal/about pages (about, legal, privacy-app, privacy-website, terms-app, terms-website), all missing only og:image. Low value, optional. |
| Changed pages not submitted to IndexNow | 47 | +45 | Info | Expected after the Sep 17–21 edit batch. Pages were submitted by hand to GSC + Bing. An IndexNow ping would speed up Bing. |
| Pages dropped from Top 10 | 8 | +5 | Watch | Was 3. Consistent with the known Aug-15 eligibility loss. Drill down in Ahrefs to list the 8 URLs and cross-check against the trust-line experiment (HOLD until Oct 15). |
| Organic traffic dropped | 7 | +3 | Watch | Came back after clearing Sep 15. Same as above: identify the URLs next run. |
| SERP title changed | 2 | +1 | Check | Was 1 (baking-soda-calculator, fixed Sep 15). Find the new URL. |
| Pages added to sitemaps | 1 | New | Info | Probably `/methodology` (not confirmed in Ahrefs). |

---

## Ahrefs Site Audit — Sep 15, 2026

Health Score: **100 (Excellent)** — 148 internal URLs, 0 errors, 18 warnings, 25 notices. Total issues 43 (was 57 Sep 8 — −14).

| Issue | Count | Change | Priority | Notes |
|-------|-------|--------|----------|-------|
| Slow page | 0 | −4 | ✅ Cleared | Sep 8 Cache-Control fix confirmed working within one week. |
| Title too long | 0 | −1 | ✅ Cleared | what-is-lsi trim confirmed. |
| Meta desc too long | 0 | — | ✅ Cleared | All prior warnings gone. |
| Organic traffic dropped | 0 | — | ✅ Cleared | Dropped from top issues. |
| SERP title changed | 1 | +1 (New) | **Fixed Sep 15** | `/tools/baking-soda-calculator` — Google was ignoring `<title>` ("Baking Soda Pool Calculator — How Many Pounds to Raise Alkalinity") and using H1 instead ("How Much Baking Soda to Add to Your Pool — Calculator"). Fixed by aligning title/og/twitter/JSON-LD to match H1. 4 occurrences updated. Pushed Sep 15. |
| Pages dropped from Top 10 | 3 | +1 | Watch | One additional page fell out of top 10 vs Sep 8. Identify which pages next drill-down. |

**Sep 15 vs Sep 8:** Massive cleanup — warnings 21→18, notices 36→25, total issues 57→43. Both Sep 8 fixes confirmed in one crawl cycle.

---

## Ahrefs Site Audit — Sep 8, 2026

Health Score: **100 (Excellent)** — 148 internal URLs, 0 errors, 21 warnings, 36 notices.

| Issue | Count | Priority | Notes |
|-------|-------|----------|-------|
| Slow page | 4 | **Fixed Sep 8** | liquid-chlorine-vs-tablets, corrosive-pool-water, lsi-pool-surface-types, explained/salt. Root cause: no Cache-Control headers. Fix: `public, max-age=3600, s-maxage=86400` added to `_headers`. Should clear next crawl. |
| Title too long | 1 | **Fixed Sep 8** | `/blog/what-is-lsi` — trimmed from 77 to 56 chars. |
| Meta description too long | 4 | ✅ Resolved (net −4 vs prior run) | Aug 25 fixes cleared 4 of 8. |
| Organic traffic dropped | 8 | Watch | All pre-existing known issues — see Watch List. |
| 404 / 4XX | 0 | ✅ Resolved | |

## External Link Profile — Aug 16, 2026

Total: 133 external links. 116 of 133 from app stores/directories/social. **Zero pool industry editorial sites.**

| Site | Linking pages |
|------|--------------|
| apple.com | 64 |
| reddit.com | 52 |
| appagg.com | 5 |
| calculatedhome.com | 2 |
| google.com | 1 |

## Backlink Outreach

| Target | Priority | Status |
|--------|----------|--------|
| Swim University | High | Responded 2026-08-21: "still battle-testing it." Next nudge: 2026-09-09 (past — confirm whether sent). Matt cited in AI Overview for baking soda + chlorine queries — highest-leverage backlink target. |
| Leisure Pools USA | High | Not contacted |
| Poolburg | Medium | Not contacted |
| Swimmer Living | Medium | Not contacted |
| Platinum Pools | Medium | Contacted 2026-06-09 |
| 813 Pool Service | Low | Not contacted |

## GSC Monitoring & Frameworks

- Weekly report via cowork task (PDF) — Saturday 6am
- Key band: positions 5–15 (most valuable improvement zone)
- CTR drop at stable position → title/meta fix
- Position improves but impressions flat → SERP feature eating real estate
- Growing impressions + falling CTR → AI Overview cannibalization pattern
- Falling impressions + falling CTR (position flat) → demand-side / seasonal

**P4 CTR framework:** Title = numeric hook + category anchor; meta = immediate answer. Pool queries are decision-driven.

**AI Overview investigation-first rule:** Before rewriting any title/meta on a zero-CTR query at strong position, check AI Overview absorption first — a title change won't fix it.

## Completed Work Summary (Don't Redo)

- **Aug 15:** pool-alkalinity-vs-ph title/meta (fix-TA-first). chlorine-dose-calculator FAQ Q1 directional. muriatic-acid-calculator TA worked example + FAQ. fc-cya-chart-chlorine-levels title rewritten. baking-soda-calculator meta + FAQ Q1 directional. pool-ph-calculator FAQ Q1 directional + new dose FAQ. All submitted GSC + Bing. AI Overview root cause confirmed.
- **Aug 16:** Internal linking audit — body links to baking-soda + pool-ph calculators from 3 high-traffic guides. muriatic-acid-calculator query CSV audit (confirmed AI Overview, not ranking). explained/lsi title/meta rewritten; first Bing submission.
- **Aug 22:** GA4 `store_click` event fixed — added `target="_blank" rel="noopener"` to all 236 store badge links across 117 pages (links navigating same tab, dropping beacon before GA4 could send). Confirmed working.
- **Aug 23:** CYA cluster — 7 articles published: `cya-pool-stabilizer` (pillar), `how-to-lower-cya`, `how-to-raise-cya`, `high-cya-in-pool`, `best-cya-level-for-liquid-chlorine`, `low-cya-in-pool`, `how-much-stabilizer-to-add`. All submitted. Reciprocal links added to fc-cya-chart, does-liquid-chlorine-raise-cya, cya-effect-on-lsi.
- **Aug 25:** Meta descriptions trimmed ≤155 chars on 7 CYA cluster pages + baking-soda-calculator. Submitted GSC + Bing.
- **Aug 27:** `chlorine-dose-calculator` — H1 "Liquid" added; meta rewritten; reference table for 10k/15k/20k/25k-gallon doses at 10% and 12.5%. Submitted GSC + Bing.
- **Aug 29:** Internal links — lsi-saltwater-pools (added /explained/lsi to keep-reading), how-to-lower-cya (alkalinity link + how-to-raise-pool-alkalinity to keep-reading). `pool-closing-chemicals-checklist` — new article; 6 inbound links at launch. Submitted GSC + Bing.
- **Sep 6:** Algae cluster internal links — /blog/algae/ hub ↔ 4 satellite articles (both directions). Alkalinity cluster internal links — /blog/alkalinity/ hub ↔ 5 satellite articles (both directions). Homepage guides section updated to hub pages. pool-volume-calculator related lists restructured + inbound links from 4 posts. pool-startup-chemicals-checklist troubleshooting section added. what-is-lsi cannibalization fix (title/meta/H1 pivoted to consequences framing). Sitemap lastmod updated for all 17 touched pages. pool-chemical-addition-order indexing requested.
- **Sep 8:** `what-is-lsi` title trimmed 77→56 chars. `_headers` Cache-Control added (`public, max-age=3600, s-maxage=86400`); removed 2 junk local paths.
- **Sep 12:** Daily GSC pull resolved — gsc_daily_history.csv and gsc_daily_page_history.csv (Aug 15–Sep 10). Two-event diagnosis confirmed. See Sep 12 Update section.
- **Sep 12:** `muriatic-acid-calculator` — inline body link "Lowering total alkalinity" → how-to-lower-pool-alkalinity, reinforcing "does muriatic acid lower alkalinity" (pos 20.75→8.64). dateModified 2026-09-12. Submitted GSC + Bing.
- **Sep 12:** `pool-scale-calcium-deposits` — pumice stone FAQ added to FAQPage JSON-LD and HTML body ("Can you use a pumice stone to remove calcium carbonate scaling in your pool?"), with body link → muriatic-acid-calculator. Addresses Bing Copilot trending query +1,827 citations (+1,353%) with 0 Google organic clicks. dateModified 2026-09-12. Submitted GSC + Bing.
- **Sep 15:** `/blog/does-liquid-chlorine-raise-cya` — added body links: "30–50 ppm for a standard pool" → best-cya-level-for-liquid-chlorine; "draining some water and refilling" → how-to-lower-cya. Added 3 related reading entries: high-cya-in-pool, how-to-lower-cya, best-cya-level-for-liquid-chlorine. dateModified 2026-09-15. Submitted GSC + Bing next run.
- **Sep 15:** `/tools/baking-soda-calculator` — title aligned to H1 ("How Much Baking Soda to Add to Your Pool — Calculator"). Google was overriding the old title tag with the H1; aligning them eliminates the SERP rewrite. title/og/twitter/JSON-LD updated (4 occurrences). H1 unchanged. Pushed.
- **Sep 16:** Spa & hot tub content section launched to support V2 app spa support. 4 new articles: `spa-chemistry-basics` (pillar — target ranges, pH/TA/CH, sanitizer overview, CYA guidance), `hot-tub-chlorine-vs-bromine` (full comparison, bromide bank mechanics, setup steps), `how-to-shock-a-hot-tub` (MPS for bromine spas, liquid chlorine for chlorine spas, contamination protocol), `how-often-to-change-hot-tub-water` (TDS, bather-load formula, drain steps). Hub page at `/blog/spa/`. Topic card added to `/blog/` index. Breadcrumbs on all 4 articles include hub. Meta descriptions on 3 articles trimmed to ≤160 chars after Bing WMT flag. All 6 URLs submitted GSC + Bing. Both chlorine and bromine systems covered throughout.
- **Sep 17:** **Authority/entity work (audit Part 1)** — created `/methodology` page ("How we calculate our numbers"): sources (ANSI/APSP/ICC-11, CDC MAHC, equilibrium chemistry, manufacturer data), FC/CYA formulas + table (min=CYA×7.5%, ×5% SWG, shock=×40%; CYA 30/50/80 rows), pH/TA/CH targets, LSI inputs + effective TA=TA−CYA/3 + PHTA no-input-tuning note, dosing assumptions/limits, "not medical/pro advice" scope, author/corrections. All numbers aligned to fc-cya-chart single-source-of-truth; LSI equation links to /explained/lsi + lsi-calculator (not restated). Wired: methodology.html at root, `_redirects` (.html→/methodology 301), sitemap.xml (lastmod 2026-09-17), llms.txt (Pages section), related-block links added Sep 20 in 5b53f18 (no footer link exists on any page). Enriched about.html Person schema (jobTitle Founder, worksFor Org, expanded knowsAbout, added Bluesky sameAs) + linked about→methodology. **Deployed + submitted GSC + Bing Sep 17** (commit 51b8ff1, live at /methodology; check crawl/index next run).
- **Sep 17 — Gap 3 batch 1 (commit 90f385d, pushed):** added visible trust line "Based on published standards — ANSI/APSP/ICC-11 and CDC guidance · See how we calculate our numbers →" (links /methodology) to 6 informational explainers hit hardest by Aug-15 eligibility loss: `explained/lsi`, `explained/ph`, `fc-cya-chart-chlorine-levels`, `baking-soda-vs-soda-ash`, `free-chlorine-vs-total-chlorine`, `cya-pool-stabilizer`. dateModified + sitemap lastmod bumped to 2026-09-17. **EXPERIMENT — measure ~3–4 weeks (through ~mid-Oct) before rolling wider.** Hypothesis: reliability signal + methodology internal links help restore informational/YMYL eligibility on Google. Expected signal: informational-cluster impressions tick up (vs flat control pages); Bing citations may respond faster. **Continue/roll wider if** these 6 recover impressions faster than untouched informational pages; **stop/rethink if** no divergence by mid-Oct (means trust-line alone isn't the lever — authority/backlinks needed). **Submitted GSC + Bing Sep 17** (all 7 incl. /methodology). **Bing crawl gap:** `baking-soda-vs-soda-ash` showed "Discovered but not crawled / not indexed" (discovered 13 Jun, predates edits) — live page confirmed healthy 200 w/ trust line via fetch, so it's the known pre-Sep-8 TTFB stale-crawl issue; clicked Request Indexing. **NEXT RUN: check whether the 6 (esp. baking-soda-vs-soda-ash) actually got crawled/indexed on Bing, and whether /methodology indexed on Google + Bing.**
- **Still pending:** Part 2 (page-type citation-vs-click reformatting). Gap 3 remaining ~36 informational pages held until batch-1+2 signal reads at Oct 15.
- **Sep 20 — Full-site Page Quality & SEO Audit completed** (saved as `seo-audit-2026-09-19.md` in PoolChem Web root). Key independent findings: two-event two-cause diagnosis confirmed; content quality genuinely high (Bing Copilot thriving is the proof); recovery lever is external authority (Swim University backlink) + trust-line propagation; YMYL sourcing on shock/spa pages mostly present (CDC citations on 4 of 6; see Sep 20 Update corrections).
- **Sep 20 — Trust-line batch 2 (commit fce9274, pushed):** added trust line to 8 pages — `pool-ph-keeps-rising`, `pool-alkalinity-vs-ph` (both missed from Sep 17 batch, both severe watch-list items), `how-long-after-shocking-can-you-swim`, `how-to-shock-a-pool`, `spa-chemistry-basics`, `hot-tub-chlorine-vs-bromine`, `how-to-shock-a-hot-tub`, `how-often-to-change-hot-tub-water`. All 8 dateModified bumped to 2026-09-20. All submitted GSC + Bing. Treatment group now 14 pages (was 6). Note: CDC citations were already present on 4 of the 6 shock/spa pages (how-to-shock-a-pool, how-to-shock-a-hot-tub, spa-chemistry-basics, hot-tub-chlorine-vs-bromine); how-long-after-shocking-can-you-swim had none until 22590ec; how-often-to-change-hot-tub-water had none until d243524. pool-alkalinity-vs-ph visible date corrected (was showing July 7 despite schema already at Sep 6).
- **Sep 20 (later):** post-audit sourcing pass + methodology-link rollout — full detail in the Sep 20 Update section above. Commits: `22590ec` (MAHC §6.6.3.1A + Sources on how-long-after-shocking-can-you-swim; IPSSA + ANSI/MAHC links on /methodology), `5b53f18` + `88a180b` ("Methodology & sources" link added to 13 `explained/` + 13 `tools/` related blocks, reverted on the 4 on-hold calculators), `ff2e446` (homepage "Where our numbers come from" trust strip — first methodology/author link on the homepage), `5d6576d` (`pool-chlorine-levels-chart` + `pool-chemistry-beginners` sourcing/accuracy fixes, added to the trust-line treatment group; broadened trust-line wording to "published standards and other reputable pool chemistry sources"; methodology "Other reputable pool chemistry sources" entry + SWG-5% rationale). All submitted GSC + Bing.
- **Sep 21:** CDC/MAHC accuracy pass — full detail in the Sep 20 Update section above. Commits: `791a92b` (corrected a wrong "20 ppm per CDC" fecal-incident figure on how-to-shock-a-hot-tub to the CDC's actual 3 ppm/7.0–7.8/30 min/drain-and-scrub protocol; same fix on how-to-shock-a-pool + llms.txt; replaced 2 dead CDC links site-wide), `2017bd7` (aligned spa CYA guidance to the CDC — no CYA in stand-alone hot tubs — across spa-chemistry-basics, hot-tub-chlorine-vs-bromine, how-to-shock-a-hot-tub, llms.txt; CDC cited on methodology's FC/CYA entry), `f72e437` (MAHC §6.6.3.1A cited on fc-cya-chart-chlorine-levels; removed an unsourced "above 20 ppm" line), `d243524` (how-often-to-change-hot-tub-water's bather-load formula sourced to MAHC §5.12.1.2.1 + CDC Legionella guidance, was an unattributed "industry guideline" — completes the audit's CDC-sourcing item), `7e4ae07` (CLAUDE.md repo-path fix, no site impact). All submitted GSC + Bing.
