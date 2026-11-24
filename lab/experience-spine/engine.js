import { prepareFraming, sample, landings, names, ramp } from "./timeline.js";
import { validateBundle } from "./contract.js";
const NS = "http://www.w3.org/2000/svg";
const state = (el, value) => {
  if (el.getAttribute("data-state") !== value)
    el.setAttribute("data-state", value);
};
const attr = (el, key, val) => {
  if (el.getAttribute(key) !== val) el.setAttribute(key, val);
};
const opacity = (el, v) => attr(el, "opacity", v.toFixed(3));
const ids = ["spreadsheets", "mail", "forms", "legacy"];

function bind(svg, manifest) {
  const get = (id) => {
    const el = svg.querySelector("#ia-" + id);
    if (!el) throw Error("Missing target: " + id);
    return el;
  };
  validateBundle(svg, manifest);
  const anchors = new Map(manifest.anchors.map((a) => [a.id, a.master]));
  const defs = svg.querySelector("defs");
  const links = ids.map((name, i) => {
    const path = get("link-" + name);
    if (!anchors.has(path.dataset.from) || !anchors.has(path.dataset.to))
      throw Error("Unknown link endpoint");
    const mask = document.createElementNS(NS, "mask"),
      ink = document.createElementNS(NS, "path");
    mask.id = "spine-reveal-" + i;
    // A normalized white stroke reveals the original authored dash pattern.
    for (const [k, v] of Object.entries({
      d: path.getAttribute("d"),
      pathLength: "1",
      fill: "none",
      stroke: "white",
      "stroke-width": "14",
      "stroke-linecap": "round",
      "stroke-dasharray": "1 1",
    }))
      ink.setAttribute(k, v);
    // Explicit user-space bounds also work on horizontal test geometry.
    for (const [k, v] of Object.entries({
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: manifest.canvas.width,
      height: manifest.canvas.height,
    }))
      mask.setAttribute(k, v);
    mask.append(ink);
    defs.append(mask);
    return { path, ink, mask };
  });
  const scenes = [1, 2, 3, 4, 5].map((n) => get("scene-" + n));
  const segments = [2, 3, 4, 5].map((n) => {
    const paths = [...get("spine-s" + n).querySelectorAll(".strand")];
    if (
      paths.length !== 7 ||
      paths.some((p) => p.getAttribute("pathLength") !== "1")
    )
      throw Error("Invalid spine segment " + n);
    paths.forEach((p) => (p.style.strokeDasharray = "1 1"));
    return paths;
  });
  const plate = get("s2-plate"),
    module = get("s3-module-new"),
    lines = get("s3-hoist-lines"),
    guide = get("s3-drop-line");
  const core = get("s4-core"),
    gate = get("s4-gate"),
    terminal = get("s5-terminal"),
    ground = get("ground"),
    notes = get("annotations");
  const sceneNotes = scenes.map((el, i) =>
    svg.querySelector("#ia-s" + (i + 1) + "-notes"),
  );
  const from = anchors.get("s3.module.hanging"),
    to = anchors.get("s3.module.slot");
  const delta = to.map((v, i) => v - from[i]);
  let sceneBounds;
  const lastDraw = new Array(segments.length);
  return (frame, framing) => {
    // Measure once, while every unmodified scene still participates in layout.
    // Include extra room for stroke caps and the module's travel in either direction.
    sceneBounds ??= scenes.map((el) => el.getBBox());
    const [left, top, width, height] = frame.camera;
    attr(svg, "viewBox", frame.camera.map((x) => x.toFixed(3)).join(" "));
    const weight = framing.portrait ? "2" : "1.45";
    if (svg.style.getPropertyValue("--ia-lw") !== weight)
      svg.style.setProperty("--ia-lw", weight);
    sceneNotes.forEach((group, i) => {
      if (group)
        opacity(
          group,
          frame.visibility[i] *
            (i === 2 ? 1 - frame.seat : 1) *
            (1 - ramp(frame.p, 0.858, 0.93)),
        );
    });
    scenes.forEach((el, i) => {
      const b = sceneBounds[i];
      const margin = 200;
      const outside =
        b.x + b.width < left - margin ||
        b.x > left + width + margin ||
        b.y + b.height < top - margin ||
        b.y > top + height + margin;
      // Portrait never extends into the caption. Keep distant groups out of its paint tree.
      const display =
        framing.portrait && framing.leftSpace === 0 && outside ? "none" : "";
      if (el.style.display !== display) el.style.display = display;
      opacity(el, frame.visibility[i]);
      attr(el, "visibility", frame.visibility[i] === 0 ? "hidden" : "visible");
      state(el, frame.powered[i] ? "active" : "default");
    });
    links.forEach(({ path, ink, mask }, i) => {
      const t = frame.links[i];
      state(
        path,
        !t
          ? "off"
          : frame.liveLinks
            ? "active"
            : frame.built
              ? "built"
              : "proposed",
      );
      if (t > 0 && t < 1) {
        attr(path, "mask", "url(#" + mask.id + ")");
        attr(ink, "stroke-dashoffset", (1 - t).toFixed(4));
      } else if (path.hasAttribute("mask")) path.removeAttribute("mask");
    });
    segments.forEach((paths, i) => {
      const fraction = frame.draw[i];
      if (fraction === lastDraw[i]) return;
      const completed = fraction === 1;
      const changePattern = completed !== (lastDraw[i] === 1);
      const offset = (1 - fraction).toFixed(4);
      paths.forEach((path) => {
        if (changePattern)
          path.style.strokeDasharray = completed ? "none" : "1 1";
        attr(path, "stroke-dashoffset", offset);
      });
      lastDraw[i] = fraction;
    });
    opacity(plate, frame.plate);
    attr(
      module,
      "transform",
      "translate(" +
        delta.map((v) => (v * frame.seat).toFixed(2)).join(" ") +
        ")",
    );
    opacity(lines, 1 - frame.seat);
    opacity(guide, 1 - frame.seat);
    state(core, frame.core ? "active" : "default");
    state(gate, frame.gate ? "active" : "default");
    state(terminal, frame.terminal ? "active" : "default");
    attr(ground, "transform", "translate(0 " + frame.depth.toFixed(2) + ")");
    attr(notes, "visibility", framing.portrait ? "hidden" : "visible");
  };
}

export async function mountSpine(root, assetBundle) {
  const viewport = root.querySelector(".viewport"),
    stage = root.querySelector(".stage");
  const button = root.querySelector("#mode"),
    nav = root.querySelector("nav"),
    markers = root.querySelector(".stops");
  const articles = [...root.querySelectorAll("article")];
  const [source, manifest] = await Promise.all(
    [assetBundle.master, assetBundle.anchors].map(async (url, i) => {
      const response = await fetch(url);
      if (!response.ok) throw Error("Could not load " + url);
      return i ? response.json() : response.text();
    }),
  );
  const doc = new DOMParser().parseFromString(source, "image/svg+xml");
  if (doc.querySelector("parsererror")) throw Error("Invalid SVG");
  const svg = document.importNode(doc.documentElement, true);
  const paint = bind(svg, manifest);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.style.display = "none";
  viewport.append(svg);
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const compact = matchMedia(
    "(max-width:460px) and (max-height:510px), (max-height:315px)",
  );
  let overview = false,
    raf = 0,
    framing,
    top = 0,
    range = 1,
    saved = 0,
    lastChapter = -1;
  const controller = new AbortController(),
    options = { passive: true, signal: controller.signal };
  const targets = names.map((name, i) => {
    const marker = document.createElement("span");
    marker.id = "shot-" + (i + 1);
    marker.style.top = landings[i] * 100 + "%";
    markers.append(marker);
    const link = document.createElement("a");
    link.href = "#" + marker.id;
    link.setAttribute("aria-label", "Chapter " + (i + 1) + ", " + name);
    const number = document.createElement("span"),
      label = document.createElement("strong");
    number.textContent = "0" + (i + 1);
    label.textContent = name;
    link.append(number, label);
    nav.append(link);
    return link;
  });
  function measure() {
    const rect = viewport.getBoundingClientRect();
    const spread = root.querySelector(".spread").getBoundingClientRect();
    const leftSpace = Math.max(0, rect.left - spread.left);
    framing = prepareFraming(
      manifest,
      Math.max(1, rect.width),
      Math.max(1, rect.height),
      leftSpace,
    );
    top = root.getBoundingClientRect().top + scrollY;
    range = Math.max(1, root.offsetHeight - stage.offsetHeight);
  }
  function render() {
    raf = 0;
    if (!root.classList.contains("live")) return;
    const frame = sample((scrollY - top) / range, framing);
    paint(frame, framing);
    const unfold = ramp(frame.p, 0.858, 0.96);
    root.classList.toggle("unfolding", unfold > 0 && framing.leftSpace > 0);
    viewport.style.setProperty(
      "--extend",
      (-unfold * framing.leftSpace).toFixed(1) + "px",
    );
    root.style.setProperty(
      "--caption-shift",
      (unfold * framing.leftSpace * 0.23).toFixed(1) + "px",
    );
    const i = frame.chapter;
    if (lastChapter !== i) {
      articles.forEach((a, n) => {
        a.style.opacity = n === i ? "1" : "0";
      });
      targets.forEach((a, n) => {
        if (n === i) a.setAttribute("aria-current", "step");
        else a.removeAttribute("aria-current");
      });
      lastChapter = i;
    }
  }
  function schedule() {
    if (!raf) raf = requestAnimationFrame(render);
  }
  function layout() {
    if (root.classList.contains("live")) {
      measure();
      schedule();
    }
  }
  function mode() {
    const live = !motion.matches && !compact.matches && !overview;
    root.classList.toggle("live", live);
    nav.hidden = !live;
    button.hidden = motion.matches || compact.matches;
    button.textContent = live ? "Read overview" : "Explore drawing";
    svg.style.display = "block";
    root.dataset.mode = live ? "scroll" : "overview";
    articles.forEach((a) => a.style.removeProperty("opacity"));
    lastChapter = -1;
    if (live) {
      measure();
      render();
    } else {
      const full = prepareFraming(
        manifest,
        manifest.canvas.width,
        manifest.canvas.height,
      );
      paint(sample(1, full), full);
    }
  }
  button.addEventListener(
    "click",
    () => {
      if (!overview) saved = Math.max(0, Math.min(1, (scrollY - top) / range));
      overview = !overview;
      mode();
      window.scrollTo(0, overview ? root.offsetTop : top + saved * range);
      render();
    },
    options,
  );
  for (const event of ["scroll", "resize", "pageshow"])
    window.addEventListener(
      event,
      event === "scroll" ? schedule : layout,
      options,
    );
  motion.addEventListener("change", mode, options);
  compact.addEventListener("change", mode, options);
  const observer = new ResizeObserver(layout);
  observer.observe(viewport);
  observer.observe(stage);
  // Some engines restore during the static-to-sticky layout change. Store one
  // offset per history entry, outside the render loop. Storage is optional.
  function entryKey() {
    if (!history.state?.spineEntry) {
      const id =
        "spine-" + Date.now() + "-" + Math.random().toString(36).slice(2);
      history.replaceState({ ...history.state, spineEntry: id }, "");
    }
    return history.state.spineEntry;
  }
  window.addEventListener(
    "pagehide",
    () => {
      if (!root.classList.contains("live")) return;
      try {
        sessionStorage.setItem(
          entryKey(),
          String(Math.max(0, Math.min(1, (scrollY - top) / range))),
        );
      } catch {
        /* The browser still owns native scroll restoration. */
      }
    },
    options,
  );
  window.addEventListener(
    "hashchange",
    () => {
      try {
        entryKey();
      } catch {}
    },
    options,
  );
  let restored = null;
  try {
    const key = entryKey();
    restored = sessionStorage.getItem(key);
    sessionStorage.removeItem(key);
  } catch {
    /* Storage may be disabled. */
  }
  mode();
  if (root.classList.contains("live")) {
    const navigation = performance.getEntriesByType("navigation")[0]?.type;
    if (restored !== null && Number.isFinite(Number(restored))) {
      window.scrollTo(0, top + Number(restored) * range);
    } else if (navigation !== "reload" && navigation !== "back_forward") {
      const target = [...markers.children].find(
        (marker) => "#" + marker.id === location.hash,
      );
      target?.scrollIntoView();
    }
    render();
  }
  return () => {
    controller.abort();
    observer.disconnect();
    cancelAnimationFrame(raf);
    svg.remove();
    markers.replaceChildren();
    nav.replaceChildren();
    root.classList.remove("live");
    delete root.dataset.mode;
    nav.hidden = true;
    button.hidden = true;
    articles.forEach((a) => a.style.removeProperty("opacity"));
  };
}
