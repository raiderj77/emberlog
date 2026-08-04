import assert from "node:assert/strict";
import test from "node:test";

import { markdownToHtml } from "../lib/posts.js";

test("Markdown lists close before headings and paragraphs", () => {
  const html = markdownToHtml([
    "- First item",
    "- Second item",
    "",
    "## Next section",
    "",
    "Plain paragraph.",
  ].join("\n"));

  assert.equal(
    html,
    "<ul>\n<li>First item</li>\n<li>Second item</li>\n</ul>\n" +
      "<h2>Next section</h2>\n<p>Plain paragraph.</p>",
  );
});
