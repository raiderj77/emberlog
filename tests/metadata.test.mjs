import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

import { pageMetadata } from "../lib/metadata.js";

async function pageFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const child = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);
    if (entry.isDirectory()) files.push(...await pageFiles(child));
    if (entry.isFile() && entry.name === "page.jsx") files.push(child);
  }
  return files;
}

function twitterBlock(source) {
  return source.match(/twitter:\s*{([\s\S]*?)\n?\s*},/)?.[1] ?? "";
}

test("pageMetadata gives every helper-backed static page a complete Twitter card", async () => {
  const metadata = pageMetadata({
    title: "Privacy Policy",
    description: "How Pitmaster Log handles local cook data and optional analytics.",
    canonical: "/privacy/",
  });

  assert.deepEqual(metadata.twitter, {
    card: "summary_large_image",
    title: "Privacy Policy | Pitmaster Log",
    description: "How Pitmaster Log handles local cook data and optional analytics.",
    images: ["/og.png"],
  });

  const helperBackedPages = [];
  for (const file of await pageFiles(new URL("../app/", import.meta.url))) {
    const source = await readFile(file, "utf8");
    if (!/from ["']@\/lib\/metadata["']/.test(source)) continue;
    helperBackedPages.push(file.pathname);
    assert.match(
      source,
      /export const metadata\s*=\s*pageMetadata\s*\(/,
      `${file.pathname} must export metadata through pageMetadata`,
    );
  }

  assert.ok(helperBackedPages.length >= 10, "expected the static trust and tool pages to use pageMetadata");
});

test("dynamic guide and smoke-preset metadata keep complete Twitter cards", async () => {
  const dynamicPages = [
    new URL("../app/guides/[slug]/page.jsx", import.meta.url),
    new URL("../app/tools/smoke-time/[preset]/page.jsx", import.meta.url),
  ];

  for (const file of dynamicPages) {
    const source = await readFile(file, "utf8");
    const block = twitterBlock(source);
    assert.ok(block, `${file.pathname} must return Twitter metadata`);
    assert.match(block, /card:\s*"summary_large_image"/);
    assert.match(block, /title:/);
    assert.match(block, /description:/);
    assert.match(block, /images:\s*\["\/og\.png"\]/);
  }
});
