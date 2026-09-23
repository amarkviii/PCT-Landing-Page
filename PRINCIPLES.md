---
name: Working principles
description: Jeff's background; privacy-first product rule; rg-only search rule
type: feedback
originSessionId: 4872b3f7-93fc-45c3-96d8-a24a5a0a2f65
---
## Jeff's background
- Self-taught developer, actively learning Swift and iOS development
- Built PoolChem Tracker as first App Store app — hybrid SwiftUI + WKWebView architecture
- Stronger on the HTML/CSS/JS side, still building Swift knowledge
- Learns by building and asking questions — prefers practical explanations over theory
- Pool owner who built the app to solve his own problem

## Privacy-first — no tracking workarounds
PoolChem is intentionally private and local-only. The "no analytics SDKs / no phone-home / no remote flags / no crash reporters" rule in CLAUDE.md is a product principle, not just a technical preference.

**Why:** Even "local-only" instrumentation drifts toward the behavior tracking the user explicitly doesn't want as part of the product.

**How to apply:**
- When a diagnostic question ("are users coming back?") comes up and ASC data is sparse, accept the data is unmeasurable rather than proposing app-side workarounds.
- Don't suggest session counters, view trackers, or paywall-impression logs — even framed as "local-only" or "debug-only."
- Move directly to hypothesis-driven action rather than building diagnostic tooling.
- Exception: user-facing features the user chooses to use (the readings log is product, not analytics).

## LSI-forward chemistry
The app treats LSI as the primary water-balance and surface-protection signal. When surface/climate factors conflict with a single-parameter target, defer to LSI.

**Why:** LSI already folds in CH, pH, TA, temperature, and TDS, so it's the truest measure of whether a surface is being protected or attacked. Jeff wants the app "LSI-forward." Surfacing raw-parameter rules that fight LSI (e.g. a high CH floor that drives scaling) creates contradictory advice — hit repeatedly while building pool surface type.

**How to apply:**
- Pool surface type differentiates via the **LSI target band**, not raw CH. Cementitious surfaces (plaster, pebble) share the climate CH baseline; only inert surfaces (vinyl −100, fiberglass −50) shift CH, to avoid false low-CH flags.
- LSI **severity** labels use ABSOLUTE thresholds (scale onset +0.3 / severe +0.5; corrosive −0.3 / −0.5). "Balanced" = within the surface target range. Do not tie severity to distance from a surface ceiling — it over-alarms when a ceiling sits below the physical scaling point.
- Corrective advice lever order: **pH → TA → CH only when CH is genuinely above range.** Never recommend dropping CH below the surface floor (etches cementitious surfaces).
- Never recommend adding calcium when LSI is already above the target band.
- The `computeLSI()` formula itself is settled — surface/climate change the reference bands, not the LSI value.

## Never edit project.pbxproj directly
Do not modify `PoolChem2.xcodeproj/project.pbxproj` with edit tools or shell — editing it while Xcode is open risks crashing Xcode.

**Why:** Enforced by a steering hook; edits are denied. Project-file changes (targets, capabilities, version/build numbers, file membership) must go through the Xcode UI.

**How to apply:** When a change needs the project file (e.g. adding a capability, creating a target, bumping a target's version), give the user exact Xcode click-steps and end the turn. Related: the widget extension (`PoolWidgetExtension`) must share the app's Version + Build every archive — see [[Current state]] pre-archive checklist.

## Git branching workflow (iOS repo)
- `working` = active development branch. All day-to-day commits go here.
- `main` = shipped state. Merge `working` → `main` at each App Store submission, then push.

**Why:** Keeps `main` as a clean record of what's actually in the store, while `working` accumulates in-progress changes freely.

**How to apply:** After bumping the build number and submitting to App Store Connect, run: `git checkout main && git merge working && git push origin main && git checkout working`.

## Use rg only
Always use `rg` for any file search. Never use `grep` or `grep -r`. The Grep tool (which uses ripgrep internally) is also fine.

**Why:** CLAUDE.md explicitly mandates `rg` only. User caught a `grep -r` slip and flagged it.

**How to apply:** Any time a search over files is needed — path audits, code searches, memory scans — use `rg`. Never fall back to `grep`.
