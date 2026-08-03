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
  const categoryLink = read("components/AmazonCategoryLink.jsx");
  const footer = read("components/SiteFooter.jsx");
  const disclosure = "As an Amazon Associate I earn from qualifying purchases.";

  assert.match(gear, /rel="sponsored nofollow noopener"/);
  assert.match(gear, /If you purchase through these links,\s+I may earn a commission at no additional cost to you\./);
  assert.ok(gear.indexOf(disclosure) < gear.indexOf("href={amazonUrl(it.q)}"));
  assert.match(categoryLink, /rel="sponsored nofollow noopener"/);
  assert.ok(categoryLink.indexOf(disclosure) < categoryLink.indexOf("href={amazonSearchUrl(query)}"));
  assert.match(footer, /As an\s+Amazon Associate I earn from qualifying purchases\./);
  assert.doesNotMatch(footer, /As an As an Amazon Associate/);
});

test("only the validated category links appear after their complete tool guidance", () => {
  const doneness = read("components/calc/DonenessTemps.jsx");
  const dryBrine = read("components/calc/DryBrine.jsx");
  const wood = read("components/calc/WoodPairing.jsx");

  assert.match(doneness, /query="instant read meat thermometer"/);
  assert.ok(doneness.indexOf("USDA Food Safety and Inspection Service") < doneness.indexOf("<AmazonCategoryLink"));
  assert.match(dryBrine, /query="digital gram scale kitchen"/);
  assert.ok(dryBrine.indexOf("USDA safe minimum temperature") < dryBrine.indexOf("<AmazonCategoryLink"));
  assert.match(wood, /query="smoking wood chunks"/);
  assert.ok(wood.indexOf("Wood is a seasoning") < wood.indexOf("<AmazonCategoryLink"));
});
