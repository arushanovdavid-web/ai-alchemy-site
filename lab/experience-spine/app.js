import { mountSpine } from "./engine.js";
const root = document.getElementById("experience");
const fixture = new URLSearchParams(location.search).get("asset") === "fixture";
if (fixture)
  root.querySelector(".plate-label span").textContent = "Test geometry";
const bundle = {
  master: "assets/" + (fixture ? "fixture" : "foundry") + "/master.svg",
  anchors: "assets/foundry/anchors.json",
};
if ("ResizeObserver" in window)
  mountSpine(root, bundle)
    .catch((error) => {
      console.error("Experience Spine:", error.message);
      root.dataset.mode = "fallback";
    })
    .finally(() => document.documentElement.classList.remove("preparing"));
