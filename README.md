# Pitmaster Log

Pitmaster Log is a free, hardware-agnostic BBQ cook log and planning toolkit created by Jason Ramirez. Cook records stay in browser storage; the application has no account system or cook-data backend.

## Current product

- Browser cook log with multiple named probe channels, charts, timeline events, ratings, full JSON backup, and probe-reading CSV export.
- Five free tools: smoke-time planner, meat-per-person estimator, dry-brine calculator, USDA doneness reference, and wood-pairing finder.
- Thirty searchable BBQ guides plus an answer-first guide index.
- Installable PWA. Core pages can remain available after a successful online load; offline behavior depends on the browser and cache state.
- Opt-in Google Analytics with Global Privacy Control support. Cook-log and calculator values are not intentionally sent to analytics.
- Disclosed Amazon Associate links using the configured `pitmasterlog-20` tag.
- AdSense publisher metadata and `ads.txt` are present, but display ads are not loaded.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 3
- Node test runner and ESLint
- Vercel deployment through GitHub

## Local development

```bash
npm install
npm run dev
npm test
npm run lint
npm run build
```

`npm run check` runs lint and the production build; `npm run build` runs tests first through the `prebuild` script.

## Content and safety boundaries

Food-safety endpoints must be grounded in current primary USDA FSIS guidance. Common BBQ cook times and probe-tender targets are planning or texture estimates, not safety endpoints. See `/editorial-standards/` and `tests/` before changing safety language.

The named author is an independent software developer and does not claim professional food-safety, culinary, nutrition, or health credentials. Do not add reviewer credentials unless that review actually occurred and the reviewer can be identified.

## Monetization boundaries

- Keep the exact Amazon disclosure visible before qualifying affiliate links and retain `rel="sponsored nofollow noopener"`.
- Do not load AdSense merely because publisher metadata exists. Before enabling ads for visitors in the EEA, UK, or Switzerland, implement a Google-certified CMP and recheck privacy copy, CSP, layout shift, mobile readability, and accidental-click risk.
- Keep ads and affiliate decisions separate from food-safety guidance.

## Configuration

Brand, domain, author, contact, affiliate tag, and publisher ID live in `lib/site.js`. Deployment and domain settings are managed in the connected Vercel project; do not overwrite `.vercel/project.json` with another project mapping.
