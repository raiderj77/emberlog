import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

import { BRISKET_TIMING_ARTICLE } from "../lib/brisket-timing-article.js";
import { uniqueBySlug } from "../lib/collections.js";

test("brisket timing guide answers the visible query with sourced planning ranges", async () => {
  const article = BRISKET_TIMING_ARTICLE;
  const articlesSource = await readFile(new URL("../lib/articles.js", import.meta.url), "utf8");

  assert.equal(
    article.title,
    "How Long to Smoke a Brisket: Time by Weight and Pit Temperature",
  );
  assert.match(article.answer, /1 to 1\.5 hours per pound/);
  assert.match(article.answer, /planning range/);
  assert.match(article.body, /fsis\.usda\.gov/);
  assert.match(article.body, /oklahomajoes\.com/);
  assert.match(article.body, /traeger\.com/);
  assert.match(article.body, /thermoworks\.com/);
  assert.match(article.body, /amazingribs\.com/);
  assert.match(article.body, /at or above <strong>140°F<\/strong>/);
  assert.match(articlesSource, /\.\.\.BRISKET_TIMING_ARTICLE/);
});

test("visible date-only article dates do not shift to the prior day", async () => {
  const pageSource = await readFile(new URL("../app/guides/[slug]/page.jsx", import.meta.url), "utf8");
  assert.match(pageSource, /toLocaleDateString\("en-US",[\s\S]*timeZone: "UTC"/);
});

test("brisket timing guide avoids unsupported finish and holding guarantees", () => {
  const article = BRISKET_TIMING_ARTICLE;
  const copy = [
    article.description,
    article.answer,
    article.body,
    ...article.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join("\n");

  assert.doesNotMatch(copy, /pull it when .*203°F|203°F internal.*always|always finish|holds safely and well/i);
  assert.doesNotMatch(copy, /cook to temperature instead of the clock/i);
  assert.match(copy, /finish.*probe|probe.*finish/is);
  assert.match(copy, /not a guarantee|not.*guarantee/i);
});

test("guide collections keep one canonical card and route per slug", () => {
  const merged = uniqueBySlug(
    [{ slug: "how-long-to-smoke-a-brisket", title: "Reviewed" }],
    [
      { slug: "how-long-to-smoke-a-brisket", title: "Shadowed" },
      { slug: "another-guide", title: "Another" },
    ],
  );

  assert.deepEqual(merged.map((article) => article.title), ["Reviewed", "Another"]);
});

test("future generated guides require sources and complete search metadata", async () => {
  const contentUrl = new URL("../content/published/", import.meta.url);
  const files = (await readdir(contentUrl)).filter((name) => name.endsWith(".md"));

  for (const file of files) {
    const source = await readFile(new URL(file, contentUrl), "utf8");
    const date = source.match(/^date:\s*"([^"]+)"/m)?.[1] ?? "";
    if (date < "2026-07-18") continue;

    const description = source.match(/^description:\s*"([^"]+)"/m)?.[1] ?? "";
    const visibleCopy = source.replace(/<script[\s\S]*?<\/script>/gi, "");
    assert.match(visibleCopy, /\]\(https?:\/\//, `${file} must cite at least one visible external source`);
    assert.ok(description.length >= 70 && description.length <= 160, `${file} needs a complete 70-160 character description`);
  }
});

test("retired overlapping brisket route redirects to the reviewed canonical", async () => {
  const config = await readFile(new URL("../next.config.mjs", import.meta.url), "utf8");
  assert.match(config, /source:\s*"\/guides\/brisket-cook-time\/"/);
  assert.match(config, /destination:\s*"\/guides\/how-long-to-smoke-a-brisket\/"/);
  assert.match(config, /permanent:\s*true/);
});
