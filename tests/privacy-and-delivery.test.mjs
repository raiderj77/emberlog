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
});

test("loads Google Analytics only after an explicit choice", () => {
  const layout = read("app/layout.jsx");
  const consent = read("components/ConsentManager.jsx");
  assert.doesNotMatch(layout, /googletagmanager\.com\/gtag/);
  assert.match(layout, /<ConsentManager \/>/);
  assert.match(consent, /nextChoice === "granted"/);
  assert.match(consent, /ga-disable-/);
  assert.match(consent, /never receives your cook details/i);
});

test("privacy policy accurately describes current analytics and advertising state", () => {
  const privacy = read("app/privacy/page.jsx");
  assert.match(privacy, /does not currently display third-party advertising/i);
  assert.match(privacy, /Google Analytics does not load unless/i);
  assert.match(privacy, /never include cook-log entries/i);
});
