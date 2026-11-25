import assert from "node:assert/strict";
import fs from "node:fs/promises";
import {
  chromium,
  firefox,
  webkit,
  base,
  profiles,
  open,
  seek,
  writeJson,
  evidence,
} from "./common.mjs";
const results = [];
const digest = (page) =>
  page.evaluate(() => ({
    view: document.querySelector("svg.ia").getAttribute("viewBox"),
    seat: document.querySelector("#ia-s3-module-new").getAttribute("transform"),
    phase: document.querySelector("[aria-current]")?.textContent,
    paths: [
      ...document.querySelectorAll(".ia-spine .strand,.ia-link[data-state]"),
    ].map((el) => [el.dataset.state, el.getAttribute("stroke-dashoffset")]),
  }));
const position = (p) =>
  p.evaluate(
    () => scrollY / (document.documentElement.scrollHeight - innerHeight),
  );
async function restored(p, target) {
  await p.waitForFunction(
    (t) =>
      Math.abs(
        scrollY / (document.documentElement.scrollHeight - innerHeight) - t,
      ) < 0.003,
    target,
    { timeout: 4000 },
  );
}
for (const [name, kind] of Object.entries({ chromium, firefox, webkit })) {
  const browser = await kind.launch(
    name === "chromium" ? { channel: "chromium" } : {},
  );
  try {
    for (const [profile, viewport] of Object.entries(profiles)) {
      const ctx = await browser.newContext({
        viewport,
        hasTouch: profile !== "desktop",
      });
      const p = await ctx.newPage();
      p.setDefaultTimeout(6500);
      const errors = [];
      p.on("pageerror", (err) => errors.push(err.message));
      await open(p);
      await seek(p, 0.424);
      const middle = await digest(p);
      await seek(p, 0.87);
      await seek(p, 0.424);
      assert.deepEqual(await digest(p), middle, "reversal");
      const progress = await position(p);
      await p.reload();
      await p.waitForSelector(".live");
      await restored(p, progress);
      await p.goto(base + "../../about/");
      await p.goBack();
      await p.waitForSelector(".live");
      await restored(p, progress);
      await p.locator("nav a").last().click();
      await restored(p, 0.98);
      await p.waitForFunction(
        () =>
          document.querySelectorAll(".ia-scene[data-state=active]").length ===
          5,
      );
      // Reload after manually scrolling away from a chapter hash.
      await seek(p, 0.65);
      await p.reload();
      await p.waitForSelector(".live");
      await restored(p, 0.65);
      await seek(p, 0.98);
      await p.locator("#mode").click();
      assert.equal(
        await p.locator("main").getAttribute("data-mode"),
        "overview",
      );
      await p.locator("#mode").click();
      await restored(p, 0.98);
      await seek(p, 0);
      await p.keyboard.press("PageDown");
      await p.waitForFunction(() => scrollY > 15);
      await seek(p, 0);
      await p.mouse.wheel(0, 380);
      await p.waitForFunction(() => scrollY > 15);
      if (name === "chromium" && profile === "phone") {
        await seek(p, 0);
        const c = await ctx.newCDPSession(p);
        await c.send("Input.dispatchTouchEvent", {
          type: "touchStart",
          touchPoints: [{ x: 160, y: 620 }],
        });
        for (const y of [590, 540, 440, 320, 200])
          await c.send("Input.dispatchTouchEvent", {
            type: "touchMove",
            touchPoints: [{ x: 160, y }],
          });
        await c.send("Input.dispatchTouchEvent", {
          type: "touchEnd",
          touchPoints: [],
        });
        await p.waitForFunction(() => scrollY > 40);
      }
      await p.setViewportSize({
        width: viewport.height,
        height: viewport.width,
      });
      await seek(p, 0.65);
      await p.setViewportSize({ width: 320, height: 560 });
      await seek(p, 0.46);
      assert.ok(
        await p.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        "reflow",
      );
      await p.emulateMedia({ reducedMotion: "reduce" });
      await p.waitForSelector("main[data-mode=overview]");
      assert.ok(await p.locator("svg.ia").isVisible());
      assert.equal(await p.locator("article").count(), 7);
      await p.emulateMedia({ reducedMotion: "no-preference" });
      await p.waitForSelector(".live");
      await open(p, "?asset=fixture");
      await seek(p, 1);
      assert.equal(
        await p.locator("#ia-s3-module-new").getAttribute("transform"),
        "translate(0.00 171.00)",
      );
      assert.deepEqual(errors, []);
      results.push({
        browser: name,
        version: browser.version(),
        profile,
        passed: true,
      });
      console.log(name, profile, "passed");
      await ctx.close();
    }
    const p = await browser.newPage();
    await p.route("**/foundry/master.svg", (r) => r.abort());
    await p.goto(base);
    await p.waitForSelector("main[data-mode=fallback]");
    assert.equal(await p.locator("main.live").count(), 0);
    assert.ok(await p.locator(".poster").isVisible());
    await p.unrouteAll();
    await p.route("**/anchors.json", (r) =>
      r.fulfill({ json: { version: "99" } }),
    );
    await p.reload();
    await p.waitForSelector("main[data-mode=fallback]");
    await p.close();
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const plain = await ctx.newPage();
    await plain.goto(base);
    assert.equal(await plain.locator("article:visible").count(), 7);
    await ctx.close();
    if (name === "webkit") {
      await fs.mkdir(evidence + "webkit", { recursive: true });
      const pg = await browser.newPage({ viewport: profiles.desktop });
      await open(pg);
      for (const pct of [12, 46, 98]) {
        await seek(pg, pct / 100);
        await pg.screenshot({ path: evidence + "webkit/" + pct + ".png" });
      }
    }
  } finally {
    await browser.close();
    await writeJson("browser-results.json", results);
  }
}
