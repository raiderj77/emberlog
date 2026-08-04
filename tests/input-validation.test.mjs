import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { boundedNumber } from "../lib/inputValidation.js";

test("boundedNumber rejects blank, non-finite, negative, oversized, and fractional counts", () => {
  const count = { min: 0, max: 1_000, integer: true };
  assert.equal(boundedNumber("", count), null);
  assert.equal(boundedNumber("   ", count), null);
  assert.equal(boundedNumber("Infinity", count), null);
  assert.equal(boundedNumber(-1, count), null);
  assert.equal(boundedNumber(1_001, count), null);
  assert.equal(boundedNumber(1.5, count), null);
  assert.equal(boundedNumber(0, count), 0);
  assert.equal(boundedNumber(1_000, count), 1_000);
});

test("calculator components suppress unsafe results and expose accessible errors", async () => {
  const [meat, brine] = await Promise.all([
    readFile(new URL("../components/calc/MeatPerPerson.jsx", import.meta.url), "utf8"),
    readFile(new URL("../components/calc/DryBrine.jsx", import.meta.url), "utf8"),
  ]);
  for (const component of [meat, brine]) {
    assert.match(component, /boundedNumber/);
    assert.match(component, /aria-invalid=/);
    assert.match(component, /role="alert"/);
  }
  assert.match(meat, /!guestError &&/);
  assert.match(brine, /!weightError &&/);
});
