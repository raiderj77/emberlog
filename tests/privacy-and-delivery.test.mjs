import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("uses Vercel-native delivery with a security-header baseline", () => {
  const config = read("next.config.mjs");
  assert.doesNotMatch(config, /output:\s*["']export["']/);
  assert.match(config, /Content-Security-Policy/);
  assert.match(config, /Strict-Transport-Security/);
  assert.match(config, /X-Content-Type-Options/);
  assert.match(config, /Referrer-Policy/);
  assert.match(config, /Permissions-Policy/);
  assert.match(config, /process\.env\.NODE_ENV === "development"/);
  assert.match(config, /isDevelopment \? " 'unsafe-eval'" : ""/);
  assert.equal(config.match(/unsafe-eval/g)?.length, 1);
});

test("redirects the www hostname to the canonical apex", async () => {
  const config = (await import("../next.config.mjs")).default;
  const redirects = await config.redirects();
  const redirect = redirects.find((entry) => (
    entry.has?.some((condition) => condition.type === "host" && condition.value === "www\\.pitmasterlog\\.com")
  ));

  assert.deepEqual(redirect, {
    source: "/:path*",
    has: [{ type: "host", value: "www\\.pitmasterlog\\.com" }],
    destination: "https://pitmasterlog.com/:path*/",
    permanent: true,
  });

  const hostPattern = new RegExp(`^${redirect.has[0].value}$`);
  assert.equal(hostPattern.test("www.pitmasterlog.com"), true);
  assert.equal(hostPattern.test("wwwXpitmasterlogYcom"), false);
  assert.equal(redirect.destination.endsWith("/:path*/"), true);
});

test("keeps service-worker lifecycle work and cache writes event-bound", () => {
  const serviceWorker = read("public/sw.js");
  assert.match(serviceWorker, /await self\.skipWaiting\(\)/);
  assert.match(serviceWorker, /await self\.clients\.claim\(\)/);
  assert.match(serviceWorker, /await cacheSuccessfulResponse\(request, response\)/);
  assert.doesNotMatch(serviceWorker, /caches\.open\(CACHE\)\.then\([^\n]*cache\.put/);
  assert.match(serviceWorker, /caches\.keys\(\)\.catch\(\(\) => \[\]\)/);
});

test("awaits Next 16 dynamic route parameters before rendering", () => {
  const guide = read("app/guides/[slug]/page.jsx");
  const preset = read("app/tools/smoke-time/[preset]/page.jsx");
  for (const source of [guide, preset]) {
    assert.match(source, /async function generateMetadata/);
    assert.match(source, /await params/);
  }
  assert.match(guide, /export default async function ArticlePage/);
  assert.match(preset, /export default async function Page/);
  assert.match(preset, /if \(!p\) notFound\(\)/);
});

test("install prompts stay hidden until privacy choices are resolved", () => {
  const header = read("components/SiteHeader.jsx");
  assert.match(header, /choice === "granted" \|\| choice === "denied" \|\| choice === "gpc"/);
  assert.match(header, /pitmaster:privacy-choices/);
  assert.match(header, /privacyResolved && !standalone/);
  assert.match(header, /aria-current=\{isCurrentPath\(pathname, n\.href\) \? "page" : undefined\}/);
  assert.match(header, /aria-current=\{isCurrentPath\(pathname, "\/"\) \? "page" : undefined\}/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /id="mobile-navigation"/);
});

test("loads Google Analytics only after an explicit choice", () => {
  const layout = read("app/layout.jsx");
  const consent = read("components/ConsentManager.jsx");
  assert.doesNotMatch(layout, /googletagmanager\.com\/gtag/);
  assert.match(layout, /<ConsentManager \/>/);
  assert.match(consent, /nextChoice === "granted"/);
  assert.match(consent, /ga-disable-/);
  assert.match(consent, /domain=\.pitmasterlog\.com/);
  assert.match(consent, /never receives your cook details/i);
});

test("privacy policy accurately describes current analytics and advertising state", () => {
  const privacy = read("app/privacy/page.jsx");
  assert.match(privacy, /does not currently display third-party advertising/i);
  assert.match(privacy, /Google Analytics does not load unless/i);
  assert.match(privacy, /never include cook-log entries/i);
});
