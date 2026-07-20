import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const component = fs.readFileSync("components/calc/SmokeTime.jsx", "utf8");
const styles = fs.readFileSync("app/globals.css", "utf8");

test("smoke-time results expose a browser print action", () => {
  assert.match(component, /data-printable-results/);
  assert.match(component, /aria-label="Print results"/);
  assert.match(component, /window\.print\(\)/);
});

test("print styles isolate the result and hide the print control", () => {
  assert.match(styles, /@media print/);
  assert.match(styles, /\[data-printable-results\]/);
  assert.match(styles, /\.no-print/);
});
