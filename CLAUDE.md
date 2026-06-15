# PCT Landing Page

## Location
`/Users/jeffreythompson/PoolChem-iOS-Web/landing-page/`
GitHub: `git@github.com:amarkviii/PCT-Landing-Page.git`

## Deploy
Cloudflare Pages — auto-deploys from `main` branch.

## Structure
- `blog/` — blog posts
- `explained/` — educational content hub
- `llms.txt` — update on every new post (see blog workflow memory)

## Copy rules
- Do not use "TFP" / "Trouble Free Pool" in any page copy.
- Do not use "SLAM" — use "breakpoint chlorination" / "hold FC at shock level".
- UTMs on outbound links are OK.

## Related
- iOS app: `/Users/jeffreythompson/PoolChem-iOS-Web/PoolChem2/`
- Android: `/Users/jeffreythompson/PoolChem-Android/`
- RSS worker: `/Users/jeffreythompson/PoolChem-iOS-Web/rss-to-social/`
- Core chemistry: `/Users/jeffreythompson/PoolChem-Core/`

## Search rules
- `rg` ONLY. Never use `grep`.
- Never search above this repo root.
- Never scan `node_modules/`, `.wrangler/`, `dist/`.
- One `rg` query → open matched files only. No rescans.
