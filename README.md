# PoolChem Tracker — Website

Marketing website and blog for [PoolChem Tracker](https://www.poolchemtracker.com), a free iOS app for tracking pool water chemistry.

## About the App

PoolChem Tracker helps residential pool owners monitor and balance their water chemistry. Log readings for Free Chlorine, Total Chlorine, pH, Alkalinity, Calcium Hardness, CYA, Salt, and Temperature. The app calculates your Langelier Saturation Index (LSI), generates a health score, and gives plain-language dosing recommendations based on your pool size.

- No account required
- No cloud — all data stays on your device
- Free to start, with optional Pro upgrade

[Download on the App Store](https://apps.apple.com/app/id6762652630)

## Website

The site is static HTML/CSS hosted on Cloudflare. No build step, no frameworks, no dependencies.

### Structure

```
index.html          — Homepage (problem-centric hub)
features.html       — Feature overview
about.html          — About the app
download.html       — Download / app page
tools/              — Pool calculators (13)
explained/          — Chemistry reference (13 pages)
blog/               — Pool care guides (56 articles)
demo/               — Seeded interactive demo
app/                — Standalone web app (PWA)
privacy-app.html    — App privacy policy
privacy-website.html — Website privacy policy
terms-app.html      — App terms of service
terms-website.html  — Website terms of service
sitemap.xml         — Sitemap
robots.txt          — Crawler directives
llms.txt            — LLM discovery file
```

### Blog Topics

The blog covers practical pool chemistry and maintenance:

- Chlorine management (FC/CYA chart, levels, liquid vs tablets)
- Water balance (pH, alkalinity, calcium hardness)
- Testing guides (when to test, how to test, strips vs kits)
- Troubleshooting (cloudy water, green water, high pH)
- Seasonal guides (opening, startup checklists)
- Reference charts and cheat sheets

## Tech

- Static HTML/CSS — no JavaScript frameworks
- Hosted on Cloudflare Workers (auto-deploys from this repo)
- Google Analytics for traffic
- Schema.org JSON-LD for structured data
- Responsive design, dark theme

## License

Content and code in this repository are copyright 2026 PoolChem Tracker. All rights reserved.
