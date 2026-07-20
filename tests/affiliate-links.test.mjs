import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("Amazon links use the site-wide approved associate tag", () => {
  const site = read("lib/site.js");
  const gear = read("components/GearForCook.jsx");

  assert.match(site, /amazonTag:\s*"pitmasterlog-20"/);
  assert.match(gear, /tag=\$\{SITE\.amazonTag\}/);
  assert.doesNotMatch(gear, /YOURTAG-20/);
});

test("affiliate links and disclosures meet the documented requirements", () => {
  const gear = read("components/GearForCook.jsx");
  const footer = read("components/SiteFooter.jsx");

  assert.match(gear, /rel="sponsored nofollow noopener"/);
  assert.match(gear, /As an Amazon Associate I earn from qualifying purchases\./);
  assert.match(footer, /As an\s+Amazon Associate I earn from qualifying purchases\./);
  assert.doesNotMatch(footer, /As an As an Amazon Associate/);
});
