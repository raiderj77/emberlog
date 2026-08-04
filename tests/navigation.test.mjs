import assert from "node:assert/strict";
import test from "node:test";

import { isCurrentPath } from "../lib/navigation.js";

test("homepage is current only at the root path", () => {
  assert.equal(isCurrentPath("/", "/"), true);
  assert.equal(isCurrentPath("/tools/", "/"), false);
  assert.equal(isCurrentPath("/guides/how-to-smoke-a-brisket/", "/"), false);
});

test("section navigation is current on its index and nested routes", () => {
  assert.equal(isCurrentPath("/tools", "/tools/"), true);
  assert.equal(isCurrentPath("/tools/", "/tools/"), true);
  assert.equal(isCurrentPath("/tools/smoke-time/", "/tools/"), true);
  assert.equal(isCurrentPath("/toolsmith/", "/tools/"), false);
  assert.equal(isCurrentPath("/guides/", "/tools/"), false);
});
