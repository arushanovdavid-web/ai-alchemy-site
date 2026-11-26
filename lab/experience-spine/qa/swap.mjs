// Exercise a second actual Foundry release without modifying the installed lab bundle.
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";
import { chromium, open, seek, evidence } from "./common.mjs";

const revision = "6f0ed4146daa9e1e66556af0df07f346097dcfd5";
const blob = (name) =>
  execFileSync("git", ["show", revision + ":illustration/" + name]);
const browser = await chromium.launch({ channel: "chromium" });
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await page.route("**/foundry/master.svg", (r) =>
    r.fulfill({
      contentType: "image/svg+xml",
      body: blob("svg/master.svg"),
    }),
  );
  await page.route("**/foundry/anchors.json", (r) =>
    r.fulfill({
      contentType: "application/json",
      body: blob("anchors.json"),
    }),
  );
  await open(page);
  assert.equal(
    await page.locator("svg.ia").getAttribute("data-ia-version"),
    "1.1.0",
  );
  await seek(page, 0.424);
  const moving = await page
    .locator("#ia-s3-module-new")
    .getAttribute("transform");
  await seek(page, 1);
  assert.equal(await page.locator(".ia-scene[data-state=active]").count(), 5);
  await page.screenshot({ path: evidence + "foundry-1.1-swap.png" });
  await seek(page, 0.424);
  assert.equal(
    await page.locator("#ia-s3-module-new").getAttribute("transform"),
    moving,
  );
  console.log(
    "Foundry 1.1.0 loaded, seated, activated and reversed with the same engine.",
  );
} finally {
  await browser.close();
}
