/* Homepage entry for the Experience Spine. Foundry artwork and manifest come from /illustration (one source). */
import { mountSpine } from "./engine.js";

const root = document.getElementById("experience");
const bundle = {
  master: "/illustration/svg/master.svg",
  anchors: "/illustration/anchors.json",
};
if (root && "ResizeObserver" in window)
  mountSpine(root, bundle)
    .catch((error) => {
      console.error("Experience Spine:", error.message);
      root.dataset.mode = "fallback";
    })
    .finally(() => document.documentElement.classList.remove("preparing"));
else document.documentElement.classList.remove("preparing");
