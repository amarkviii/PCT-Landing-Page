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

## Sibling repos (boundary — do not inspect)
iOS, Android, Core, and rss-to-social are reference-only. Do not open or search them unless the task explicitly requires cross-repo work.

## Search rules
- `rg` ONLY. Never use `grep`.
- Never search above this repo root.
- Never scan `node_modules/`, `.wrangler/`, `dist/`.
- One `rg` query → open matched files only. No rescans.
