/* AI Alchemy — homepage chrome: the mobile menu. The Experience Spine mounts from /home/spine/app.js.
   No dependencies, no network requests, nothing stored. */
(() => {
  "use strict";
  const btn = document.getElementById("menu-btn"), nav = document.getElementById("nav");
  if (!btn || !nav) return;
  const root = document.documentElement, main = document.getElementById("main"), ftr = document.querySelector(".ftr");
  const set = (open) => {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Close" : "Menu";
    root.classList.toggle("menu-open", open);
    for (const el of [main, ftr]) if (el) el.inert = open;
    if (open) nav.querySelector("a")?.focus();
  };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) { set(false); btn.focus(); }
  });
  matchMedia("(min-width: 981px)").addEventListener("change", (m) => { if (m.matches) set(false); });
})();
