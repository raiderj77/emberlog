# EmberLog

A free, hardware-agnostic **BBQ cook log + pitmaster toolkit**, built as a static Next.js PWA. Local-first (no backend, no accounts), AdSense/Amazon-ready, full SEO/AEO/GEO.

Created by Jason Ramirez.

---

## What's inside

- **Cook log** (`/log`) — multi-meat / multi-probe logging, temperature-curve chart, timeline, ratings, **CSV + JSON export**, **shareable cook card**. Data stored in the browser (localStorage), never uploaded.
- **5 calculators** (`/tools`) — smoke time (+ start-time planner), meat per person, dry brine salt, doneness temps (USDA), wood pairing.
- **9 guides** (`/guides`) — answer-first, FAQ-schema'd articles for SEO/AEO/GEO.
- **Legal** — privacy (AdSense/cookies/GDPR/CCPA), terms, disclaimer (Amazon affiliate + food safety), contact.
- **PWA** — installable, offline service worker, icons, manifest.
- **SEO** — per-page metadata, Open Graph, sitemap.xml, robots.txt, and JSON-LD: Organization, WebSite, WebApplication, SoftwareApplication, Article, FAQPage, BreadcrumbList, ItemList.

## Stack
Next.js 14 (App Router, JS) · `output: 'export'` static · Tailwind 3 · lucide-react · zero runtime backend.

---

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs static site to ./out
```

---

## Deploy

### Option A — Vercel CLI (fastest, no GitHub needed)
```bash
npm install
npx vercel         # log in, accept defaults (auto-detects Next.js) -> preview URL
npx vercel --prod  # production URL
```

### Option B — GitHub + Vercel (auto-deploy on push)
```bash
git init
git add -A
git commit -m "EmberLog initial"
# with the GitHub CLI:
gh repo create emberlog --private --source=. --remote=origin --push
# or create the repo on github.com, then:
# git remote add origin https://github.com/<you>/emberlog.git && git push -u origin main
```
Then on vercel.com: **Add New → Project → Import** the repo. It auto-detects Next.js. Every push redeploys.

### One-liner for Claude Code (local)
Open this folder in Claude Code and say:
> "Push this to a new private GitHub repo called `emberlog` and deploy it to Vercel production."

Claude Code uses your local `gh` + `vercel` auth to do it.

---

## Rebrand / configure — one file: `lib/site.js`
```js
SITE.name        // "EmberLog"  -> changes brand everywhere
SITE.domain      // "emberlog.app"
SITE.url         // "https://emberlog.app"  (set to your real domain before launch)
SITE.contactEmail
SITE.amazonTag         // Amazon Associates tag for affiliate links
SITE.adsensePublisherId // ca-pub-XXXX (leave blank until approved)
SITE.jurisdiction      // used in Terms
```
**Before launch:** confirm the name/domain are available (trademark + WHOIS), then set `SITE.url` to the real domain so canonical URLs, sitemap, OG, and JSON-LD are correct.

---

## Adding stock photos (optional)
The design is deliberately photo-optional (typographic + SVG/gradient + the ember flame mark) so it ships clean with no broken/placeholder image links. To add real photos:

1. Drop JPG/WebP files in `public/images/`.
2. Hero: edit the hero block in `app/page.jsx` (add an `<img>` / Next `<Image>`).
3. Article headers: add an `image` field to each article object in `lib/articles.js` and render it in `app/guides/[slug]/page.jsx`.
4. Free, commercial-use sources: **Pexels** and **Unsplash** (both allow commercial use; attribution appreciated, not required). Use your own cook photos where you can, it's stronger for E-E-A-T.

Keep images optimized (≈1600px wide, compressed) since `images.unoptimized` is on for static export.

---

## AdSense
Placeholders are in place (`<AdSlot />` components + `public/ads.txt`). After approval:
1. Put your publisher line in `public/ads.txt`.
2. Add the AdSense script to `app/layout.jsx` `<head>` and set `SITE.adsensePublisherId`.
3. Replace `<AdSlot />` placeholders with real ad units.

## Food safety
Safe-minimum temperatures are from USDA FSIS and are separated from BBQ "probe-tender" texture targets throughout. Content is general info, not professional advice; the disclaimer reflects this. Keep it accurate if you edit `lib/temps.js`.
