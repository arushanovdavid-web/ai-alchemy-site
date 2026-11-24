import {
  chromium,
  open,
  seek,
  traverse,
  profiles,
  writeJson,
} from "./common.mjs";
const browser = await chromium.launch({ channel: "chromium" });
const results = [];
try {
  for (const [profile, viewport] of Object.entries(profiles)) {
    for (const asset of ["foundry", "fixture"]) {
      const context = await browser.newContext({
        viewport,
        deviceScaleFactor: 1,
        hasTouch: profile !== "desktop",
      });
      const page = await context.newPage();
      const session = await context.newCDPSession(page);
      const throttle = profile === "phone" ? 4 : 1;
      await session.send("Emulation.setCPUThrottlingRate", { rate: throttle });
      await open(page, asset === "fixture" ? "?asset=fixture" : "");
      await traverse(page, false, 1600);
      await traverse(page, true, 1600);
      for (let run = 1; run <= 3; run++) {
        for (const reverse of [false, true]) {
          await seek(page, reverse ? 1 : 0);
          const { intervals, blocks } = await traverse(page, reverse, 4000);
          results.push({
            profile,
            viewport,
            asset,
            throttle,
            run,
            direction: reverse ? "reverse" : "forward",
            intervals: intervals.map((ms) => Math.round(ms * 10) / 10),
            longTasks: blocks,
          });
        }
      }
      console.log(profile, asset, results.length);
      await context.close();
      await writeJson("profile.json", {
        browser: browser.version(),
        dpr: 1,
        durationMs: 4000,
        runs: results,
      });
    }
  }
} finally {
  await browser.close();
}
