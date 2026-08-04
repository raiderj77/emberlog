import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

import { ARTICLES } from "../lib/articles.js";
import { getAllGuides } from "../lib/guides.js";
import { SMOKE_PRESETS } from "../lib/smokePresets.js";
import { TEMPS } from "../lib/temps.js";
import { SMOKE_TIMES } from "../lib/woods.js";
import { compactDescription, compactTitle } from "../lib/seo.js";
import { BRISKET_PLANNING } from "../lib/brisketTiming.js";

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const article = (slug) => ARTICLES.find((entry) => entry.slug === slug);

test("turkey planner follows the current USDA smoking limits", () => {
  const preset = SMOKE_PRESETS.find((entry) => entry.slug === "turkey");
  const rule = SMOKE_TIMES.find((entry) => entry.protein === "Turkey (whole)");
  const guide = JSON.stringify(article("how-to-smoke-a-turkey"));
  const smokerGuide = JSON.stringify(article("smoker-temperature-guide"));
  const chickenGuide = JSON.stringify(article("how-to-smoke-a-whole-chicken"));

  assert.equal(preset.weight, 12);
  assert.equal(rule.minWeight, 8);
  assert.equal(rule.maxWeight, 12);
  assert.equal(rule.pit, 300);
  assert.equal(rule.minPerLb, 20);
  assert.equal(rule.maxPerLb, 30);
  assert.match(guide, /fully thawed/i);
  assert.match(guide, /unstuffed/i);
  assert.match(guide, /225-300°F/i);
  assert.match(guide, /breast, thigh, and wing/i);
  assert.doesNotMatch(smokerGuide, /12 (?:lb|pounds?) or less/i);
  assert.match(smokerGuide, /8-12 (?:lb|pound)/i);
  assert.doesNotMatch(`${chickenGuide}${guide}`, /thickest part of the (?:inner )?thigh|wing joint/i);
  assert.doesNotMatch(`${JSON.stringify(preset)}${guide}`, /14\s*(?:lb|pound).*turkey|never 225|275-325°F/i);
});

test("whole-cut pork and beef guidance does not rely on carry-over to reach 145°F", () => {
  const tenderloin = JSON.stringify(article("how-to-smoke-pork-tenderloin"));
  const triTip = JSON.stringify(article("how-to-smoke-tri-tip"));
  const primeRib = JSON.stringify(article("how-to-smoke-prime-rib"));

  assert.doesNotMatch(tenderloin, /140\s*[-–]\s*143°F|carry.?over (?:heat )?(?:will|brings?|pulls?|carries?).{0,40}145°F/i);
  assert.match(tenderloin, /verif(?:y|ies) 145°F/i);
  assert.match(triTip, /verif(?:y|ies) 145°F/i);
  assert.match(primeRib, /verif(?:y|ies) 145°F/i);
  assert.match(`${tenderloin}${triTip}${primeRib}`, /3-minute rest|rest at least 3 minutes/i);
});

test("temperature table preserves rest, poultry, ham, casserole, and holding rules", () => {
  const items = TEMPS.flatMap((group) => group.items);
  const wholeCuts = items.find((entry) => entry.name === "Steaks, chops, roasts");
  const turkey = items.find((entry) => entry.name === "Turkey (whole)");
  const inspectedHam = items.find((entry) => entry.name.includes("USDA-inspected"));
  const otherHam = items.find((entry) => entry.name.includes("other source"));
  const casserole = items.find((entry) => entry.name === "Casseroles");
  const hotHold = items.find((entry) => entry.name.startsWith("Hot-holding"));
  const poultrySausage = items.find((entry) => entry.name === "Sausage (fresh poultry)");
  const fish = items.find((entry) => entry.name === "Fish");
  const bivalves = items.find((entry) => entry.name === "Clams, oysters, mussels");

  assert.deepEqual([wholeCuts.safeMin, wholeCuts.rest], [145, 3]);
  assert.match(turkey.bbqTarget, /breast.*thigh.*wing/i);
  assert.equal(inspectedHam.safeMin, 140);
  assert.equal(otherHam.safeMin, 165);
  assert.equal(casserole.safeMin, 165);
  assert.equal(hotHold.safeMin, 140);
  assert.equal(poultrySausage.safeMin, 165);
  assert.equal(fish.safeMin, 145);
  assert.equal(bivalves.safeMin, null);
  assert.match(bivalves.bbqTarget, /shells open/i);
  assert.doesNotMatch(wholeCuts.bbqTarget, /125|135/);
});

test("published guidance rejects unsafe ambient prep and unverified holding", () => {
  const articles = read("lib/articles.js");
  const smokePlanner = read("components/calc/SmokeTime.jsx");
  const tenderloinGuide = JSON.stringify(article("how-to-smoke-pork-tenderloin"));
  const turkeyGuide = JSON.stringify(article("how-to-smoke-a-turkey"));
  const published = fs.readdirSync(path.join(root, "content", "published"))
    .filter((name) => name.endsWith(".md"))
    .map((name) => read(path.join("content", "published", name)))
    .join("\n");

  assert.doesNotMatch(articles, /hold it wrapped in a cooler|rest wrapped in a dry cooler|cool place with a fan|Two hours before cooking: pull the rack/i);
  assert.doesNotMatch(articles, /(?:meat|bird|butt|loin|roast).{0,120}(?:sit|rest) at room temperature/i);
  assert.doesNotMatch(smokePlanner, /Finishing early is fine|To be safe, start cooking/i);
  assert.doesNotMatch(published, /steady, unattended heat/i);
  assert.match(articles, /refrigerate uncovered at 40°F or colder for 1-3 hours/i);
  assert.match(tenderloinGuide, /covered, food-safe container under refrigeration at 40°F or colder/i);
  assert.match(tenderloinGuide, /discard (?:the )?used marinade/i);
  assert.match(turkeyGuide, /wet brine[\s\S]*40°F or colder throughout/i);
  assert.match(turkeyGuide, /discard (?:the )?used brine/i);
  assert.match(JSON.stringify(article("smoked-mac-and-cheese")), /165°F in the center/i);
});

test("canonical guide inventory parses frontmatter and excludes the retired overlap", () => {
  const guides = getAllGuides();
  const slugs = guides.map((guide) => guide.slug);
  const offset = guides.find((guide) => guide.slug.startsWith("offset-smoker"));

  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(slugs.includes("brisket-cook-time"), false);
  assert.equal(slugs.includes("how-to-trim-a-brisket-flat-without-losing-too-much-fat-cap"), true);
  assert.match(offset.title, /Offset smoker vs pellet grill/i);
  assert.equal(offset.published, "2026-06-30");
  assert.equal(offset.updated, "2026-08-03");
});

test("search snippets compact at word boundaries", () => {
  assert.ok(compactTitle("A very long title about brisket timing and preparation that keeps going").length <= 49);
  assert.ok(compactDescription("x ".repeat(200)).length <= 156);
  assert.equal(compactTitle("Short title"), "Short title");
});

test("brisket calculator uses the centralized sourced planning range", () => {
  const brisket = SMOKE_TIMES.find((entry) => entry.protein === "Brisket (packer)");
  assert.equal(brisket.minPerLb, BRISKET_PLANNING.minMinutesPerPound);
  assert.equal(brisket.maxPerLb, BRISKET_PLANNING.maxMinutesPerPound);
  assert.deepEqual([brisket.minPerLb, brisket.maxPerLb], [60, 90]);
  assert.doesNotMatch(brisket.done, /~203/);
});

test("doneness checker distinguishes invalid input from an empty field", () => {
  const checker = read("components/calc/DonenessTemps.jsx");
  assert.match(checker, /readingError/);
  assert.match(checker, /aria-invalid=/);
  assert.match(checker, /thermometer-reading-error/);
  assert.match(checker, /role="alert"/);
});
