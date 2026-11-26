import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
process.env.PLAYWRIGHT_BROWSERS_PATH ??= fileURLToPath(
  new URL("./node_modules/.browsers", import.meta.url),
);
export const { chromium, firefox, webkit } = await import("playwright");
export const base =
  process.env.SPINE_URL || "http://127.0.0.1:8719/lab/experience-spine/";
export const evidence = fileURLToPath(new URL("../evidence/", import.meta.url));
export const profiles = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 820, height: 1180 },
  phone: { width: 390, height: 844 },
};
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export async function open(page, suffix = "") {
  await page.goto(base + suffix);
  await page.waitForSelector("#experience.live");
  await page.evaluate(() => document.fonts.ready);
}
export async function seek(page, p) {
  await page.evaluate(
    (t) =>
      window.scrollTo(
        0,
        t * (document.documentElement.scrollHeight - innerHeight),
      ),
    p,
  );
  await page.evaluate(
    () =>
      new Promise((done) =>
        requestAnimationFrame(() => requestAnimationFrame(done)),
      ),
  );
}
export async function traverse(page, reverse, duration) {
  return page.evaluate(
    ({ reverse, duration }) =>
      new Promise((resolve) => {
        const intervals = [],
          blocks = [];
        const hasLongTasks =
          PerformanceObserver.supportedEntryTypes.includes("longtask");
        const po = hasLongTasks
          ? new PerformanceObserver((list) =>
              blocks.push(...list.getEntries().map((e) => e.duration)),
            )
          : null;
        po?.observe({ entryTypes: ["longtask"] });
        const range = document.documentElement.scrollHeight - innerHeight;
        let first, last;
        function tick(now) {
          first ??= now;
          if (last !== undefined) intervals.push(now - last);
          last = now;
          const p = Math.min(1, (now - first) / duration);
          window.scrollTo(0, range * (reverse ? 1 - p : p));
          if (p < 1) requestAnimationFrame(tick);
          else
            requestAnimationFrame(() => {
              if (po) {
                blocks.push(...po.takeRecords().map((e) => e.duration));
                po.disconnect();
              }
              resolve({ intervals, blocks });
            });
        }
        requestAnimationFrame(tick);
      }),
    { reverse, duration },
  );
}
export async function writeJson(name, value) {
  await fs.writeFile(evidence + name, JSON.stringify(value, null, 2) + "\n");
}
