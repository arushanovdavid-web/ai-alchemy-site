import fs from "node:fs/promises";
import {
  chromium,
  open,
  seek,
  traverse,
  profiles,
  evidence,
  sleep,
} from "./common.mjs";
const cut = process.argv[2] || "final";
const browser = await chromium.launch({ channel: "chromium" });
try {
  for (const [name, size] of Object.entries(profiles)) {
    const dest = evidence + cut + "/" + name;
    await fs.mkdir(dest, { recursive: true });
    if (name === "tablet" && cut !== "final") continue;
    const context = await browser.newContext({
      viewport: size,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await open(page);
    for (const p of [0, 25, 46, 50, 75, 84, 100]) {
      await seek(page, p / 100);
      await page.screenshot({ path: dest + "/" + p + ".png" });
    }
    await context.close();
    if (name === "tablet") continue;
    for (const reverse of [false, true]) {
      const ctx = await browser.newContext({
        viewport: size,
        deviceScaleFactor: 1,
        recordVideo: { dir: dest, size },
      });
      const pg = await ctx.newPage();
      await open(pg);
      await seek(pg, reverse ? 1 : 0);
      await sleep(350);
      await traverse(pg, reverse, 11000);
      await sleep(500);
      const video = pg.video();
      await ctx.close();
      await fs.rename(
        await video.path(),
        dest + "/" + (reverse ? "reverse" : "forward") + ".webm",
      );
    }
  }
} finally {
  await browser.close();
}
