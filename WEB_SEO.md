---
name: seo-priorities-and-status
description: "Sep 26: Week 8 of the Google collapse (since Aug 15–16). Floor holding in a lower band (44–68 impr/day), no recovery. GA4 7d users 36→104 from seasonal pool-closing demand (lower engagement). Trust-line experiment (16 pages) and the 4 on-hold calculators on HOLD until Oct 15. No new site work recommended. Last site changes: Sep 23 meta/og fixes (032a034, 9cb2183)."
metadata: 
  node_type: memory
  type: project
  originSessionId: bd1d6a59-8e37-44b3-bfed-b4c7f6898573
---

# PoolChemTracker.com — SEO Status & Change Log

Newest weekly report is first. Data history lives in the Performance History tables below and in the CoWork history CSVs (`gsc_history.csv`, `gsc_daily_history.csv`, `bing_history.csv`, `ai_visibility_history.csv`, `engagement_history.csv`, etc.).

**Standing rule until Oct 15:** no broad site changes. Do not touch the 16 trust-line pages or the 4 on-hold calculators (muriatic-acid, chlorine-dose, baking-soda, pool-ph).

---

## Sep 26 Weekly Report

**8th week of the collapse. The floor is holding in a lower band, with no recovery. No new cause.** The scheduled 6:08 AM run updated all six history CSVs but stopped before writing the report (computer migration). The report was finished by hand from the same data. Confidence: Medium.

- **GSC:** L7 25 clicks / 421 impr / pos 16.82 (Sep 19: 32 / 523 / 21.19). L28 114 clicks / 2,620 impr (−95.4%, window artifact — prior window Aug 1–28 still has ~2 pre-collapse weeks). Daily impressions 44–68/day through Sep 23 (was 51–124). Sep 23 had the best daily position in over a month (9.78) on low volume (49 impr, 3 clicks).
- **L7 dip is not a new decline:** the Sep 19 muriatic-acid-calculator gain faded (−3 clicks) while position improved.
- **Winners/losers:** 0 winners on either range (first run with none at all). L28 losers 74→69 — fits a stabilizing floor, not yet a confirmed bottom.
- **Query breadth:** 428→332 distinct L28 queries (5,000 before the collapse), shrinking in line with impressions. New queries ranking well on first appearance: "does adding muriatic acid lower alkalinity" (pos 1.00), "how much chlorine is in a swimming pool" (7.25).
- **Branded:** 0 on both ranges.
- **GA4 (the main story this run):** 7d active users 36→104 (+189%), spread across 5+ pages: fc-cya-chart +8, pool-ph-keeps-rising +7, homepage +6, pool-closing-calculator +6, free-chlorine-vs-total-chlorine +3, pool-closing-chemicals-checklist +3. Engagement rate 37.87%→26.21%, avg. time 233.0s→142.1s. [Likely] seasonal pool-closing demand bringing in a more casual audience, not a ranking change. Key events: 8/10 on 7d, **35** on 28d (4th straight rise).
- **Seasonal pool-closing signal on every channel:** Bing pool-closing-calculator L7 clicks 5→20; Copilot how-to-close-a-pool-for-winter 30d 223→3,832; GA4 users on pool-closing-calculator and pool-closing-chemicals-checklist went from 0 to positive. **Watch whether GSC shows a matching move Oct 3** — that would be the first cross-channel confirmation.
- **Content opportunities (report's own read):** only `/tools/pool-ph-calculator` (pos 8.95, 38 impr, 0% CTR) and `/tools/dry-acid-calculator` (pos 2.61, 28 impr, 0% CTR) are worth a title/meta look. pool-ph-calculator is on hold (do not touch before Oct 15); dry-acid volume is too thin to act on. Pages in the pos 8–15 band all just dropped into it from better positions — none has sat there across runs, so the internal-link/refresh rule doesn't apply yet.
- **Newer severe decliners:** `/explained/cyanuric-acid` 21.24→67.15, `/blog/what-is-lsi` 17.64→86.08 (Sep 6 batch), `/blog/pool-cloudy-after-shocking` 7.45→41.67, `/blog/pool-startup-chemicals-checklist` 19.38→41.76 (Sep 6 batch).
- **Apps:** iOS 28d conversion 6.23% (5th straight decline). Google Play Installs 18 days stale; Sales report now correctly formatted but only through Aug 30. The staleness is at the Play Console, not a missed export.
- **Report recommends no new content or technical work.**

---

## Open Actions

All manual, outside the repo, unless noted.

1. Check that scheduled tasks run on the new computer, so the Oct 3 run isn't missed or duplicated.
2. Ahrefs: wait for the Tue Sep 29 crawl, then list the "Pages dropped from Top 10", "Organic traffic dropped" and new "SERP title changed" URLs from that audit (Sep 22 counts: 8, 7, 1). Cross-check against the trust-line experiment. No drill-down on the Sep 22 audit.
3. Google Play: the Play Console itself hasn't published newer data (Installs stop at Sep 8, Sales at Aug 30) — not a missed export. Re-export once the Console updates. Treat Play as stale until then; no action needed per report.
4. Swim University follow-up: deliberately held until after the Oct 15 read (the Sep 9 nudge was not sent). Not an open item before then.
5. Re-check `/tools/pool-chemical-addition-order` indexing on Google (still "Discovered - currently not indexed" as of Sep 20; don't spend more effort before Oct 15).
6. Re-check Bing crawl of `baking-soda-vs-soda-ash` and the 4 document-size-0 pages (see Watch List).
7. Still owed from the Sep 17 audit: GSC query-level check on the homepage 36.5→78 position drop; query-level GSC before/after Aug 15 + live AIO-occupancy check on vanished informational queries (would move Event 1's cause from Likely to Confirmed).
8. **Oct 15:** read the trust-line experiment (see below), then decide on the deferred work list.

---

## Watch List

- **⚠️ ONGOING COLLAPSE — TOP ITEM.** Sep 26: 8th week. Floor 44–68 impr/day (lower than the 51–124 band of Aug 28–Sep 19). 69 L28 losers, 0 winners. Stabilizing, not a confirmed bottom. L28 comparisons stay distorted until the prior window is fully post-collapse (mid-October). **Hold all broad changes.**
- **⚠️ Trust-line experiment** — HOLD until 2026-10-15. See Trust-Line Experiment.
- **⚠️ pool-ph-keeps-rising** — Google L28 pos 21.70→67.71 (Sep 19). Google-specific: Bing L28 clicks 24→39 (Sep 26). In the treatment group since Sep 20. HOLD.
- **⚠️ pool-alkalinity-vs-ph** — Google L28 pos 19.27→67.49 (Sep 19), 65.97 (Sep 26). In the treatment group since Sep 20. HOLD.
- **⚠️ Newer severe decliners (Sep 26)** — `/explained/cyanuric-acid`, `/blog/what-is-lsi`, `/blog/pool-cloudy-after-shocking`, `/blog/pool-startup-chemicals-checklist`. Monitor; no action before Oct 15.
- **⚠️ Aug 15 fix batch** (chlorine-dose, baking-soda, pool-ph, muriatic-acid calculators; pool-alkalinity-vs-ph; fc-cya-chart; /explained/lsi) — collapse still masks any fix signal. Hold.
- **⚠️ Sep 6 fix batch** (homepage, pool-startup-chemicals-checklist, pool-volume-calculator, what-is-lsi, algae/alkalinity hubs) — all continued declining, swamped by the broader event. Re-check when the floor is confirmed.
- **⚠️ Homepage ranking** — L28 pos 78.07 (was 36.52) as of Sep 19. Trust strip added Sep 20 (ff2e446). Do not credit the Sep 6 guides relink yet. The pre-Sep-6 homepage isn't in git (history starts at 1e2798d).
- **⚠️ Mixed decline signature** — narrowing (muriatic, pool-shock calculators: rank fine, footprint shrank) vs. ranking regression (chlorine-dose, pool-ph, calcium-hardness calculators: rank and CTR both worse). Both still active.
- **Seasonal pool-closing content** — `/tools/pool-closing-calculator` (Bing L7 5→20, GA4 0→6; not on the homepage grid — deferred), `/blog/how-to-close-a-pool-for-winter` (Copilot 30d 3,832), `/blog/pool-closing-chemicals-checklist` (Copilot 30d 1,820). Watch for a Google move.
- **Bing/AI-only performers** — `/blog/pool-scale-calcium-deposits` (Copilot 30d 2,180; invisible on Google organic), `/blog/black-algae-in-pool` (Copilot 30d 1,033). Continue building links.
- **`/explained/lsi`** — pos regressed to 23.27 (was 17.46 after the Aug 16 fix). Monitor.
- **`/explained/ph`** — confirmed AIO absorption. Citation authority only; no title/meta changes.
- **iOS conversion rate** — 28d 13.02→12.14→8.20→7.04→**6.23%** (Sep 26). Five straight declines, not stabilized.
- **GA4 key events** — 28d 17→27→**35**. Genuine, growing metric (`store_click` starred Aug 29).
- **Google Play data** — Installs latest Sep 8 with an Aug 22–31 gap; Sales only through Aug 30. Stale at the source (Play Console hasn't updated), not a missed export. Re-export when the Console catches up.
- **Swim University (Matt Giovanisci)** — highest-leverage backlink target. Follow-up held until after Oct 15 (Sep 9 nudge not sent).
- **August 2026 spam update (Aug 18–21)** — Possible-tier link to Event 2. Recovery, if applicable, takes weeks.
- **Bing crawl gaps** — `baking-soda-vs-soda-ash` "Discovered but not crawled" (Request Indexing clicked Sep 17 and Sep 20). Document-size-0: `lsi-pool-surface-types`, `year-round-pool-maintenance-desert-pools`, `cya-effect-on-lsi`, `saltwater-pool-salt-calculator` (resubmitted Sep 12; not verifiable from report data).
- **No action needed:** `/demo` and `/demo/` blocked by robots.txt (JS app, intentional); 27 redirect pages "Failed" GSC validation (expected).

---

## Trust-Line Experiment — HOLD until 2026-10-15

**Hypothesis:** a visible reliability signal plus /methodology links helps restore Google's informational/YMYL eligibility.

**Treatment group (16 pages):**
- Sep 17 batch 1 (90f385d): `explained/lsi`, `explained/ph`, `fc-cya-chart-chlorine-levels`, `baking-soda-vs-soda-ash`, `free-chlorine-vs-total-chlorine`, `cya-pool-stabilizer`.
- Sep 20 batch 2 (fce9274): `pool-ph-keeps-rising`, `pool-alkalinity-vs-ph`, `how-long-after-shocking-can-you-swim`, `how-to-shock-a-pool`, `spa-chemistry-basics`, `hot-tub-chlorine-vs-bromine`, `how-to-shock-a-hot-tub`, `how-often-to-change-hot-tub-water`.
- Sep 20 (5d6576d): `pool-chlorine-levels-chart`, `pool-chemistry-beginners`.

**Control group:** ~34 untouched informational pages.

**Indexing:** all Sep 17 pages + /methodology confirmed indexed on Google Sep 20. All indexed on Bing except `baking-soda-vs-soda-ash`. All later pages submitted to GSC + Bing Sep 20–21.

**Read on Oct 15:** do the 16 recover impressions faster than the control pages? If yes, roll the trust line wider (remaining ~36 informational pages). If no divergence, the trust line alone isn't the lever — focus on external authority/backlinks.

**Caveats for the read:**
- Wording differs: the homepage strip, `pool-chlorine-levels-chart` and `pool-chemistry-beginners` say "published standards and other reputable pool chemistry sources — including ANSI/APSP/ICC-11 and CDC guidance". The other 14 keep "Based on published standards — ANSI/APSP/ICC-11 and CDC guidance" until after the read.
- Several treatment pages also had content/sourcing edits Sep 20–21 (see Change Log), so any lift can't be credited to the trust line alone.
- Control contamination: 5b53f18 added a "Methodology & sources" link (no trust line, no dateModified) to 13 `explained/` pages and 13 `tools/` pages. Some `explained/` pages outside the treatment group may be in the control set.
- The 4 on-hold calculators briefly had the methodology link (5b53f18 → reverted in 88a180b, Sep 20). Treat them as untouched.
- Homepage got a trust strip (ff2e446) — neither treatment nor control.

**Deferred until after Oct 15:** blog "Related reading" (54) / "Keep reading" (30) methodology links; homepage directional FAQ schema; homepage links to desert-pools/ and spa/ hubs; missing calculators on the homepage grid (dry-acid, pool-closing, pool-opening, water-replacement, chlorine-cost, chlorine-usage, overnight-chlorine-loss-test); audit Part 2 (page-type citation-vs-click reformatting); trust-line rollout to remaining informational pages.

---

## Pending Checks (pre-experiment fixes)

| Page | Change | Status |
|------|--------|--------|
| `chlorine-dose-calculator` | Aug 15: FAQ Q1 directional; Aug 27: H1 "Liquid", meta rewritten, dose reference table | Collapse masks signal. Target query flat (pos 9.53 vs 9.67, 0% CTR). Hold. |
| `baking-soda-calculator` | Aug 15: meta + FAQ Q1 directional; Sep 15: title aligned to H1 | Collapse masks signal. Hold. |
| `pool-ph-calculator` | Aug 15: FAQ Q1 directional; new dose FAQ | Collapse masks signal. Hold. |
| `muriatic-acid-calculator` | Aug 15: TA worked example + FAQ; Sep 12: body link → how-to-lower-pool-alkalinity | "does muriatic acid lower alkalinity" pos 20.75→8.64 after Sep 12. Protected — do not touch. |
| `pool-alkalinity-vs-ph` | Aug 15: title/meta (fix-TA-first), schema fix | Now in treatment group. Hold. |
| `fc-cya-chart-chlorine-levels` | Aug 15: title rewritten | 28d CTR 1.78%→2.14% (directional). Now in treatment group. |
| `/explained/lsi` | Aug 16: title/meta rewritten | Pos regressed to 23.27. Treatment group. |
| `pool-scale-calcium-deposits` | Sep 12: pumice stone FAQ + link → muriatic-acid-calculator | Check Google visibility for "remove calcium carbonate scaling". |
| `/tools/pool-chemical-addition-order` | Sep 6 + Sep 20: indexing requested | Not indexed on Google ("Discovered - currently not indexed"); indexed on Bing. Page is live, in sitemap + llms.txt, linked from 12+ files — likely the site-level eligibility problem. |

---

## Diagnosis — the Aug 15–16 collapse

**Current diagnosis (Sep 17 full-site audit, `reports/FULL_SITE_AUDIT_2026-09-17.md`; confirmed by the Sep 19 audit `seo-audit-2026-09-19.md`):** Google-specific loss of impression eligibility — the site is shown less, not clicked less. [Strongly supported.] Not a manual penalty, not mass deindexing (49 excluded URLs are normal: 27 redirects, 9 crawled-not-indexed, 5 discovered-not-indexed, 4 404s).

**Evidence:**
- Aug 15→16 impressions fell 94.6% (7,280 → 390) **while CTR rose** (0.92%→2.8%; muriatic 0.8%→5–12%). That's the inverse of AIO cannibalization (which is impressions up, CTR down).
- The GSC AI Overview footprint collapsed with organic (7d: 14,914 peak Aug 15 → 4,198 → 341 → 133 → 230 → 149 → 168). Google dropped the site from both blue links and AIO — a site-level trust/eligibility event.
- Bing stayed flat through the collapse (L28 −3.9% vs Google −95%) and Copilot citations rose — the content is citable; the gap is Google-specific trust.

**Two events, two causes:**

| Event | Date | Sitewide daily impressions | Cause |
|-------|------|---------------------|-------|
| Event 1 | Aug 15→16 | 7,280 → 390 | Reliability/YMYL reclassification of informational/health clusters [Likely] |
| Plateau | Aug 16–27 | 141–300/day | |
| Event 2 | Aug 27→28 | 209 → 141 (position step 21→35) | Aug 18–21 spam update, ~10-day lag [Likely] |
| Floor | Aug 28–Sep 19 | 51–140/day | |
| Lower floor | Sep 20–23 | 44–68/day | No new event |

Page-level confirmation: muriatic-acid-calculator held position (4.68→3.49) while its footprint shrank; chlorine-dose-calculator fell to pos ~60 in the same period.

**Query clusters — Aug 1–14 (before) vs Aug 16–25 (after):**

| Cluster | Status | Before impr. | After impr. |
|---|---|---|---|
| CDC chlorine guidance (50+ queries) | **GONE** | ~2,000+ | **0** |
| Chlorine levels / safety informational | **GONE** | ~2,000+ | ~50 |
| Baking soda vs soda ash | **GONE** | ~800 | ~15 |
| LSI / Langelier | **GONE** | ~600 | ~25 |
| Pool shock dosing | **GONE** | ~1,200 | ~50 |
| CYA / FC ratio | **GONE** | ~150 | ~15 |
| Muriatic acid / pH down calculator | **SURVIVED** | ~3,000+ | ~1,000 |

Informational/educational queries vanished; calculator queries where the site ranked #1–2 survived at reduced volume. By Sep 12 muriatic's volume also collapsed, but its rank held — "tools are protected" is false on volume, still true on rank.

**AI Overview cannibalization was the July story only.** FAQPage schema (added Jun 11–24) let Google lift specific numbers into AIO; daily CTR peaked Jul 25 (1.43%) and fell to 0.74% by Aug 15 while impressions climbed. Fixed Aug 15 by making FAQ Q1 answers directional on 4 calculators. Not the cause of the cliff.

**Recovery lever:** external authority/entity signals (backlinks, citations, author/methodology), not on-page or schema tweaks. **Do not:** delete articles, rewrite successful calculators, bulk-build backlinks, or make broad structural changes.

---

## Performance History

### Google Search Console (weekly runs)

| Run | L7 Clicks | L7 Impr. | L7 CTR | L7 Pos. | L28 Clicks | L28 Impr. | L28 CTR | L28 Pos. |
|-----|-----------|----------|--------|---------|------------|----------|---------|---------|
| Aug 22 | 335 | 37,955 | 0.88% | 7.82 | 3,429 | 302,462 | 1.13% | 7.70 |
| Aug 29 | 72 | 1,636 | 4.40% | 14.42 | 2,478 | 222,454 | 1.11% | 7.72 |
| Sep 5 | 36 | 934 | 3.85% | 25.50 | 1,426 | 137,135 | 1.04% | 7.85 |
| Sep 12 | 21 | 742 | 2.83% | 18.01 | 464 | 41,267 | 1.12% | 8.66 |
| Sep 19 | 32 | 523 | 6.12% | 21.19 | 161 | 3,835 | 4.20% | 18.74 |
| **Sep 26** | **25** | **421** | **5.94%** | **16.82** | **114** | **2,620** | **4.35%** | **21.12** |

### Bing Webmaster Tools

| Run | L7 Clicks (cur/prev) | L7 Impr. (cur/prev) | L28 Clicks (cur/prev) | L28 Impr. (cur/prev) | L28 CTR | L28 Pos. (approx.) |
|-----|------|------|------|------|------|------|
| Sep 12 | 69 / 76 | 2,534 / 2,716 | 362 / 392 | 11,539 / 11,950 | 3.14% | 4.73 |
| Sep 19 | 54 / 84 | 2,216 / 2,832 | 349 / 363 | 11,455 / 11,861 | 3.05% | 4.63 |
| **Sep 26** | **72 / 71** | **2,520 / 2,553** | **334 / 402** | **11,540 / 12,363** | **2.89%** | **4.61** |

Sep 26 top L7 Bing pages (clicks cur/prev): pool-closing-calculator 20/5, pool-ph-keeps-rising 7/8, chlorine-dose-calculator 6/4, pool-scale-calcium-deposits 6/5, how-to-close-a-pool-for-winter 4/4, how-to-balance-pool-water 4/8.

Google-vs-Bing gaps: chlorine-dose-calculator Google L28 ≈ 0 (35 impr) vs Bing L28 42 clicks / 1,114 impr; pool-ph-keeps-rising Google pos 8.82→67.71 while Bing clicks rose.

### AI visibility

| Run | GSC AIO 7d | GSC AIO 28d | Copilot page 7d | Copilot page 30d | Copilot query 7d | Copilot query 30d |
|-----|-----|-----|-----|-----|-----|-----|
| Sep 12 | 230 | 7,633 | 5,959 | 19,383 | 3,004 | 7,454 |
| Sep 19 | 149 | 853 | 4,876 | 22,924 | 1,830 | 8,843 |
| **Sep 26** | **168** | **680** | **6,308** | **26,254** | **2,269** | **10,181** |

GSC AIO 7d moves are noise off a collapsed base (peak 14,914). Sep 26 top 30d Copilot gainers: how-to-close-a-pool-for-winter +3,609 (→3,832), pool-scale-calcium-deposits +1,965, pool-closing-chemicals-checklist +1,820, "remove calcium carbonate…pumice stone" +1,659, black-algae-in-pool +835, "black algae in pool" +720, "pool closing chemicals" +539.

### App Store (iOS)

| Run (data through) | 7d Downloads | 7d Impr. | 28d Downloads | 28d First-Time | 28d Impr. | 28d Page Views | 28d IAP | 28d Sales | 28d Conversion |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Sep 12 (Sep 10) | 5 | 83 | 27 | 25 | 305 | 78 | 6 | 30 | 8.20% |
| Sep 19 (Sep 17) | 8 | 53 | 22 | 20 | 284 | 75 | 4 | 20 | 7.04% |
| **Sep 26 (Sep 24)** | **2** | **66** | **19** | **17** | **273** | **68** | **6** | **30** | **6.23%** |

Conversion = first-time downloads ÷ unique-device impressions. 7-day conversion is noise at single-digit volumes.

### Google Play

- Installs (latest Sep 8, Aug 22–31 gap): Sep 2–8 had 4 installs, 0 uninstalls; 29 active devices.
- Sales (first correctly formatted report, Jul 23–Aug 30): 6 transactions, $31.38 (Charged only).

---

## Sourcing Reference (verified Sep 20–21)

- **CDC home-pool/hot-tub page** gives minimums only: pH 7.0–7.8; FC ≥1 ppm (≥2 ppm with CYA); hot tub ≥3 ppm. **No post-shock wait time and no swim-safe maximum** — never cite the CDC for the swim-safe table. On CYA: "Disinfection times are longer in the presence of cyanuric acid"; "CDC recommends not using cyanuric acid or chlorine products with cyanuric acid in hot tubs"; no CYA limit or ratio.
- **CDC fecal-incident response:** backyard pool = FC 2 ppm, pH ≤7.5, 30 minutes, both stool types (the high-chlorine-for-hours protocol is public pools only). Hot tub = FC ≥3 ppm, pH 7.0–7.8, 30 minutes, then drain, scrub, refill. No vomit, blood or bromine guidance. Current URL: `response/what-to-do-when-there-is-poop-in-the-pool.html`.
- **CDC "Controlling Legionella in Hot Tubs":** bather-load drain formula (gallons ÷ 3 ÷ avg users/day); hot tubs run at 77–113°F, where Legionella grows best.
- **MAHC 5th Ed (PDF):** §6.6.3.1A(3) FC above 10 ppm with bathers = imminent health hazard (public-pool code, not a home-pool legal limit). §6.6.3.1A(4) CYA:FC above 45:1 = imminent hazard (not yet cited on the site; our targets are ~9:1 at CYA 80). §5.12.1.2.1 = the same drain formula (plus "every 1–2 weeks", deliberately not used).
- **7.5% minimum FC/CYA:** IPSSA newsletter, June 2025, Terry Arko (HASA), "How to Kill and Prevent Algae Without Using Algaecide" — a byline trade article, not an IPSSA standard. Also gives 11.5% at pH 7.5. It does not cover the shock multiplier or SWG. The "50 ppm → 3.75 ppm" example is our own arithmetic.
- **ANSI/APSP/ICC-11:** documents the chlorine/CYA chemistry; do NOT claim it sets the 7.5% formula.
- **40% shock and 5% SWG ratios:** no formal published standard. The site presents them as a widely used convention. 7.5% and 40% verified in a supplier guide (Benchmark Pool Supply); 5% verified only in the community wiki. Optional: cite O'Brien et al. 1974 equilibrium research (reference not yet verified).
- **Spa scope:** the site applies the CDC's no-CYA rule to stand-alone spas; attached spas share pool water and follow pool chemistry. That qualifier is ours, not the CDC's.
- **Copy rules:** never name the community wiki (TFP / Trouble Free Pool) in page copy. No "SLAM" — use "breakpoint chlorination" / "hold FC at shock level".

---

## Ahrefs Site Audits

| Date | Health | URLs | Errors | Warnings | Notices | Total issues |
|------|--------|------|--------|----------|---------|--------------|
| Sep 8 | 100 | 148 | 0 | 21 | 36 | 57 |
| Sep 15 | 100 | 148 | 0 | 18 | 25 | 43 |
| **Sep 22** | **100** | **146** | **0** | **18** | **76** | **94** |

**Sep 22 issues** (the notice jump is IndexNow/rank-tracking noise from the Sep 17–21 edits, not defects):

| Issue | Count | Status |
|-------|-------|--------|
| Meta description too long | 5 | Fixed 4 on Sep 23 (/methodology, low-cya-in-pool, pool-closing-chemicals-checklist, what-is-lsi). `muriatic-acid-calculator` (173 chars) left — protected. |
| Open Graph incomplete | 7 | /methodology og:image fixed Sep 23. Other 6 are legal/about pages missing only og:image — optional. |
| Changed pages not submitted to IndexNow | 47 | Info. Pages were submitted by hand to GSC + Bing. |
| Pages dropped from Top 10 | 8 (was 3) | Identify URLs from the Sep 29 audit — Open Action 2. |
| Organic traffic dropped | 7 (was 0) | Identify URLs from the Sep 29 audit — Open Action 2. |
| SERP title changed | 2 (was 1) | baking-soda-calculator fixed Sep 15; find the new URL. |
| Pages added to sitemaps | 1 | Probably /methodology. |

Earlier fixes confirmed: Sep 8 slow pages (Cache-Control in `_headers`) and what-is-lsi title length cleared by Sep 15.

---

## Backlinks & Outreach

**External link profile (Aug 16):** 133 external links, 116 from app stores/directories/social (apple.com 64, reddit.com 52, appagg.com 5, calculatedhome.com 2, google.com 1). **Zero pool-industry editorial sites.**

| Target | Priority | Status |
|--------|----------|--------|
| Swim University | High | Responded 2026-08-21: "still battle-testing it." The Sep 9 nudge was not sent — follow-up held until after the Oct 15 read. Matt is cited in AIO for baking soda + chlorine queries. |
| Leisure Pools USA | High | Not contacted |
| Poolburg | Medium | Not contacted |
| Swimmer Living | Medium | Not contacted |
| Platinum Pools | Medium | Contacted 2026-06-09 |
| 813 Pool Service | Low | Not contacted |

---

## Monitoring Rules

- Weekly report: CoWork task, Saturday 6 AM (PDF). It reads a Friday 9 PM `cp` of this file.
- Key band: positions 5–15 (most valuable improvement zone).
- CTR drop at stable position → title/meta fix.
- Position improves, impressions flat → SERP feature taking the space.
- Impressions up, CTR down → AI Overview cannibalization.
- Impressions down, CTR up, position flat → eligibility/footprint loss (the Aug 15 pattern).
- Impressions and CTR both down, position flat → demand-side / seasonal.
- **AIO investigation-first:** before rewriting a title/meta on a zero-CTR query at a strong position, check AI Overview absorption — a title change won't fix it.
- **Titles/meta:** numeric hook + category anchor in the title; immediate answer in the meta. Pool queries are decision-driven.

---

## Change Log (don't redo)

- **Aug 15:** pool-alkalinity-vs-ph title/meta (fix-TA-first) + schema fix. chlorine-dose, baking-soda, pool-ph calculators: FAQ Q1 made directional (baking-soda meta too; pool-ph new dose FAQ). muriatic-acid-calculator TA worked example + FAQ. fc-cya-chart title rewritten. All submitted GSC + Bing.
- **Aug 16:** Body links to baking-soda + pool-ph calculators from 3 high-traffic guides. explained/lsi title/meta rewritten; first Bing submission. how-to-close-a-pool-for-winter published.
- **Aug 22:** GA4 `store_click` fixed — `target="_blank" rel="noopener"` on all 236 store badge links across 117 pages.
- **Aug 23:** CYA cluster — 7 articles: `cya-pool-stabilizer` (pillar), `how-to-lower-cya`, `how-to-raise-cya`, `high-cya-in-pool`, `best-cya-level-for-liquid-chlorine`, `low-cya-in-pool`, `how-much-stabilizer-to-add`. Reciprocal links from fc-cya-chart, does-liquid-chlorine-raise-cya, cya-effect-on-lsi.
- **Aug 25:** Meta descriptions ≤155 chars on 7 CYA pages + baking-soda-calculator.
- **Aug 27:** chlorine-dose-calculator — H1 "Liquid", meta rewritten, dose reference table (10k/15k/20k/25k gal at 10% and 12.5%).
- **Aug 29:** Internal links on lsi-saltwater-pools and how-to-lower-cya. `pool-closing-chemicals-checklist` published (6 inbound links). `store_click` starred as a GA4 key event.
- **Sep 6:** Algae hub ↔ 4 satellites and alkalinity hub ↔ 5 satellites (both directions). Homepage guides section relinked (2 of 4 cards go to hubs: blog/algae/, blog/alkalinity/; the other 2 to pillar articles). pool-volume-calculator related lists + 4 inbound links. pool-startup-chemicals-checklist troubleshooting section. what-is-lsi cannibalization fix (title/meta/H1 → consequences framing). Sitemap lastmod on 17 pages. pool-chemical-addition-order indexing requested.
- **Sep 8:** what-is-lsi title 77→56 chars. `_headers` Cache-Control `public, max-age=3600, s-maxage=86400`.
- **Sep 12:** Daily GSC pull (gsc_daily_history.csv, gsc_daily_page_history.csv). muriatic-acid-calculator body link → how-to-lower-pool-alkalinity. pool-scale-calcium-deposits pumice stone FAQ (HTML + JSON-LD) with link → muriatic-acid-calculator. URL Inspection: muriatic and chlorine-dose both indexed, no technical issue.
- **Sep 15:** does-liquid-chlorine-raise-cya body links + 3 related-reading entries (9dee9f2). baking-soda-calculator title aligned to H1 (cfb6eed). pool-closing-chemicals-checklist added to sitemap (c8d162d).
- **Sep 16:** Spa & hot tub section (091047a, d0dfa1b, 0f03e62): `spa-chemistry-basics`, `hot-tub-chlorine-vs-bromine`, `how-to-shock-a-hot-tub`, `how-often-to-change-hot-tub-water`, hub `/blog/spa/`, topic card on `/blog/`. Supports V2 app spa support.
- **Sep 17:** `/methodology` page (51b8ff1): sources, FC/CYA formulas (min = CYA × 7.5%, × 5% SWG, shock = × 40%), pH/TA/CH targets, LSI inputs, dosing assumptions, scope, corrections. `_redirects`, sitemap, llms.txt. about.html Person schema enriched + link to methodology. Trust-line batch 1 on 6 pages (90f385d). Full-site audit reframed the diagnosis.
- **Sep 20:** Trust-line batch 2 on 8 pages (fce9274; pool-alkalinity-vs-ph visible date corrected from Jul 7). Meta trim on how-often-to-change-hot-tub-water (f354b9f). Sitemap lastmod for 8 pages (d4d37b4). Indexing of Sep 17 pages confirmed.
- **Sep 20 (later):**
  - 22590ec — how-long-after-shocking-can-you-swim: MAHC §6.6.3.1A paragraph, Sources block, swim-safe table now points to /methodology instead of implying CDC backing. /methodology: IPSSA entry, linked ANSI (PHTA Issuu) and MAHC PDF. Sitemap carried pending lastmod bumps (what-is-lsi, pool-scale-calcium-deposits, does-liquid-chlorine-raise-cya, muriatic-acid-calculator, baking-soda-calculator).
  - 5b53f18 / 88a180b — "Methodology & sources" link in related blocks on 13 explained/ + 13 tools/ pages; reverted on the 4 on-hold calculators. No dateModified change.
  - ff2e446 — homepage "Where our numbers come from" trust strip (links /methodology and /about). First methodology link on the homepage.
  - 5d6576d — pool-chlorine-levels-chart: CDC box corrected (pH 7.0–7.8), MAHC cited for the 10 ppm ceiling, 5/8 ppm swim thresholds labeled as our guidance, "unsafe-low" wording softened. pool-chemistry-beginners: FC guidance tied to CYA (7.5% / 5% SWG), FAQ JSON-LD aligned to visible text (pH 7.4–7.8, TA 60–90). Both added to the treatment group. Broader trust wording. /methodology "Other reputable pool chemistry sources" entry + SWG 5% rationale.
- **Sep 21:**
  - 791a92b — CDC fecal-incident guidance corrected on how-to-shock-a-pool, how-to-shock-a-hot-tub and llms.txt; dead CDC links replaced (all CDC URLs on the site resolve).
  - 2017bd7 — spa CYA guidance aligned to the CDC (no CYA in stand-alone hot tubs) on spa-chemistry-basics, hot-tub-chlorine-vs-bromine, how-to-shock-a-hot-tub, llms.txt; CDC-on-CYA cited on /methodology.
  - f72e437 — MAHC cited in fc-cya-chart "Can FC be too high?"; unsourced "above 20 ppm" line removed.
  - d243524 — how-often-to-change-hot-tub-water sourced to CDC/MAHC (drain formula, Legionella rationale, Sources block); "3–4 months" labeled an industry rule of thumb. Still uncited: the line-flush step.
  - All Sep 20–21 edited pages submitted to GSC + Bing.
- **Sep 22:** Notes moved into the repo; `*.md` excluded from deploy (dc90f84, ab52ac9).
- **Sep 23:** /methodology meta 161→148 chars + og:image/twitter:image (032a034). Meta trims on low-cya-in-pool, pool-closing-chemicals-checklist, what-is-lsi (9cb2183).

**Optional, low priority:** soften the spa hub's "CYA management is critical" line or add a scope note ("spa guidance follows CDC recommendations"); og:image on the 6 legal/about pages.
