import { prepareFraming, sample, landings, stops, names, ramp } from "./timeline.js";
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

// Gimbal rings: each ring spins about its own normal axis. Segments are recomputed in world space and
// projected, so the isometric ellipse, line weights and ring width stay exact at every angle. Each ring is
// drawn twice, and each copy is clipped to the half of the ring that lies behind or in front of the sphere.
const RING_AXES = { x: [[0, 1, 0], [0, 0, 1]], y: [[1, 0, 0], [0, 0, 1]], z: [[1, 0, 0], [0, 1, 0]] };
function bindRing(back, front, project, defs) {
  const d = back.dataset;
  const c = d.center.split(",").map(Number);
  const [u, v] = RING_AXES[d.axis];
  const r = Number(d.r), rIn = r - Number(d.width), count = Number(d.segments),
    frac = Number(d.frac), phase = Number(d.phase);
  const at = (rad, t) => project(...[0, 1, 2].map((k) => c[k] + rad * (u[k] * Math.cos(t) + v[k] * Math.sin(t))));
  // Depth toward the viewer is along (1,1,1); the boundary between halves is where it equals the centre's.
  const du = u[0] + u[1] + u[2], dv = v[0] + v[1] + v[2];
  const [cx, cy] = project(...c);
  const [ex, ey] = at(r * 3, Math.atan2(-du, dv)), [fx, fy] = at(r * 3, Math.atan2(dv, du));
  const lx = ex - cx, ly = ey - cy, nx = fx - cx, ny = fy - cy;
  const half = (s) => {
    const clip = document.createElementNS(NS, "clipPath"), path = document.createElementNS(NS, "path");
    clip.id = back.id + (s > 0 ? "-near" : "-far");
    clip.setAttribute("clipPathUnits", "userSpaceOnUse");
    const pts = [[cx + lx, cy + ly], [cx + lx + s * nx, cy + ly + s * ny], [cx - lx + s * nx, cy - ly + s * ny], [cx - lx, cy - ly]];
    path.setAttribute("d", "M" + pts.map((p) => p.map((q) => q.toFixed(2)).join(",")).join("L") + "Z");
    clip.append(path);
    defs.append(clip);
    return "url(#" + clip.id + ")";
  };
  const layers = [[back, half(-1)], [front, half(1)]].map(([group, clip]) => {
    group.replaceChildren();
    group.setAttribute("clip-path", clip);
    return Array.from({ length: count }, () => {
      const face = document.createElementNS(NS, "path"), edge = document.createElementNS(NS, "path");
      face.setAttribute("class", "f-ring");
      edge.setAttribute("class", "e-i");
      group.append(face, edge);
      return [face, edge];
    });
  });
  let last = null;
  return (angle) => {
    const a = (angle * Math.PI) / 180;
    if (a === last) return;
    last = a;
    for (let i = 0; i < count; i++) {
      const a0 = phase + (2 * Math.PI * i) / count + a, a1 = a0 + ((2 * Math.PI) / count) * frac;
      const pts = [];
      for (let j = 0; j <= 8; j++) pts.push(at(r, a0 + ((a1 - a0) * j) / 8));
      for (let j = 0; j <= 8; j++) pts.push(at(rIn, a1 - ((a1 - a0) * j) / 8));
      const path = "M" + pts.map((p) => p[0].toFixed(2) + "," + p[1].toFixed(2)).join("L") + "Z";
      for (const layer of layers) for (const el of layer[i]) el.setAttribute("d", path);
    }
  };
}

function bindMechanics(get, C30, project, defs) {
  const fan = get("s4-fan-rotor"), parcel = get("s4-parcel"),
    boom = get("s4-boom"), lever = get("s4-lever");
  const rings = ["outer", "inner"].map((name) =>
    bindRing(get("s4-ring-" + name + "-back"), get("s4-ring-" + name + "-front"), project, defs));
  const travelX = Number(parcel.dataset.travel);
  const [hx, hy] = boom.dataset.pivot.split(",").map(Number);
  return (frame) => {
    rings.forEach((spin, i) => spin(frame.ringAngles[i]));
    attr(fan, "transform", `rotate(${frame.fanAngle.toFixed(4)})`);
    attr(parcel, "transform", `translate(${(frame.conveyor * travelX * C30).toFixed(4)} ${(frame.conveyor * travelX / 2).toFixed(4)})`);
    // Hinge along world X: rotate in the Y/Z plane, then project back.
    const angle = frame.barrier * Math.PI / 2;
    const c = Math.cos(angle), s = Math.sin(angle);

    attr(boom, "transform", `translate(${hx} ${hy}) matrix(${c + s / 2} ${-1.25 * s / C30} ${C30 * s} ${c - s / 2} 0 0) translate(${-hx} ${-hy})`);
    attr(lever, "transform", `rotate(${(frame.lever * 42).toFixed(3)} ${lever.dataset.pivot.replace(",", " ")})`);
  };
}

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
  // Foundry 1.1: proposed migration from the legacy core to the rack (optional in 1.0 bundles).
  const migration = svg.querySelector("#ia-link-migration");
  // Foundry 1.1 site slab (optional in 1.0 bundles): revealed behind a moving construction front.
  const site = svg.querySelector("#ia-site");
  const [OX, OY] = manifest.projection?.origin_master ?? [900, 700];
  const C30 = Math.cos(Math.PI / 6);
  const project = (x, y, z) => [OX + (x - y) * C30, OY + (x + y) / 2 - z];
  let siteClip = null,
    lastFront = null;
  if (site) {
    const clip = document.createElementNS(NS, "clipPath");
    clip.id = "spine-site-front";
    clip.setAttribute("clipPathUnits", "userSpaceOnUse");
    siteClip = document.createElementNS(NS, "path");
    clip.append(siteClip);
    defs.append(clip);
    site.setAttribute("clip-path", "url(#spine-site-front)");
  }
  const mechanics = manifest.version === "1.2.0";
  const segments = [2, 3, 4, 5].map((n) => {
    const paths = [...get("spine-s" + n).querySelectorAll(".strand")];
    if (
      paths.length !== (mechanics ? 4 : 7) ||
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
  const paintMechanics = mechanics ? bindMechanics(get, C30, project, defs) : null;
  const labels = [...svg.querySelectorAll(".ia-note")].map((n) => {
    const dot = n.querySelector("circle");
    return { n, x: Number(dot?.getAttribute("cx")), y: Number(dot?.getAttribute("cy")) };
  });
  const sceneNotes = scenes.map((el, i) =>
    svg.querySelector("#ia-s" + (i + 1) + "-notes"),
  );
  const from = anchors.get("s3.module.hanging"),
    to = anchors.get("s3.module.slot");
  const delta = to.map((v, i) => v - from[i]);
  const cables = [...lines.querySelectorAll("path")].map((path) => ({
    path,
    d: path.getAttribute("d") || "",
  }));
  const guidePath = guide.querySelector("path");
  const guideNums = (guidePath?.getAttribute("d") || "")
    .match(/-?\d*\.?\d+/g)
    ?.map(Number);
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
            (1 - ramp(frame.p, 0.858, 0.93)) *
            (1 - frame.hero),
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
    const travel = delta.map((v) => v * frame.seat);
    attr(
      module,
      "transform",
      "translate(" + travel.map((v) => v.toFixed(2)).join(" ") + ")",
    );
    // Cables stay pinned to the trolley and follow the sling, so they do not
    // detach while the module is still in the air. They fade as it seats.
    for (const cable of cables) {
      const next = cable.d.replace(
        /L(-?\d*\.?\d+),(-?\d*\.?\d+)/g,
        (_, x, y) =>
          "L" +
          (Number(x) + travel[0]).toFixed(2) +
          "," +
          (Number(y) + travel[1]).toFixed(2),
      );
      attr(cable.path, "d", next);
    }
    if (guidePath && guideNums && guideNums.length >= 4) {
      const y0 = guideNums[1] + travel[1];
      const y1 = guideNums[3];
      const x = guideNums[0];
      attr(
        guidePath,
        "d",
        "M" +
          x.toFixed(2) +
          "," +
          Math.min(y0, y1).toFixed(2) +
          "L" +
          x.toFixed(2) +
          "," +
          Math.max(y0, y1).toFixed(2),
      );
    }
    opacity(lines, 1 - frame.seat);
    opacity(guide, 1 - frame.seat);
    if (migration)
      state(migration, frame.liveLinks ? "active" : frame.seat >= 1 ? "built" : frame.visibility[2] > 0 ? "proposed" : "off");
    paintMechanics?.(frame);
    state(core, frame.core ? "active" : "default");
    state(gate, frame.gate ? "active" : "default");
    state(terminal, frame.terminal ? "active" : "default");
    attr(ground, "transform", "translate(0 " + frame.depth.toFixed(2) + ")");
    attr(notes, "visibility", framing.portrait || frame.hero > 0.5 ? "hidden" : "visible");
    if (!framing.portrait && framing.px) {
      const scale = framing.px / width;
      const type = Math.max(1, Math.min(2.1, 11 / (12.5 * scale)));
      if (!labels.measured) {
        svg.style.removeProperty("--ia-type");
        for (const l of labels) l.box = l.n.getBBox();
        labels.measured = true;
      }
      const typeVal = type.toFixed(2);
      if (svg.style.getPropertyValue("--ia-type") !== typeVal) svg.style.setProperty("--ia-type", typeVal);
      const hPx = framing.px / framing.aspect,
        m = 16;
      for (const l of labels) {
        // Measured once at type 1; text grows away from the anchor dot as the type factor rises.
        const bx0 = l.x + (l.box.x - l.x) * type,
          bx1 = l.x + (l.box.x + l.box.width - l.x) * type,
          by0 = l.y + (l.box.y - l.y) * type,
          by1 = l.y + (l.box.y + l.box.height - l.y) * type;
        const inside =
          (bx0 - left) * scale > m && (bx1 - left) * scale < framing.px - m &&
          (by0 - top) * scale > m && (by1 - top) * scale < hPx - m;
        attr(l.n, "visibility", inside ? "visible" : "hidden");
      }
    }
    if (site) {
      opacity(site, frame.hero > 0 ? frame.ghost / 0.2 * 0.35 : 1);
      const x = Number.isFinite(frame.site) ? Math.round(frame.site) : 99999;
      if (x !== lastFront) {
        const pts = [
          project(x, -4000, -90),
          project(x, 4000, -90),
          project(x - 40000, 4000, -90),
          project(x - 40000, -4000, -90),
        ];
        siteClip.setAttribute("d", "M" + pts.map((p) => p.map((v) => v.toFixed(1)).join(",")).join("L") + "Z");
        lastFront = x;
      }
    }
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
    marker.id = i ? "shot-" + i : "shot-start";
    marker.style.top = landings[i] * 100 + "%";
    markers.append(marker);
    if (!name) return null;
    const link = document.createElement("a");
    link.href = "#" + marker.id;
    link.setAttribute("aria-label", "Chapter " + i + ", " + name);
    const number = document.createElement("span"),
      label = document.createElement("strong");
    number.textContent = "0" + i;
    label.textContent = name;
    link.append(number, label);
    nav.append(link);
    return link;
  });
  function measure() {
    const rect = viewport.getBoundingClientRect();
    const spread = root.querySelector(".spread").getBoundingClientRect();
    // One framing rule: the drawing stays inside its plate in every frame (no extension into the text column).
    const leftSpace = 0;
    framing = prepareFraming(
      manifest,
      Math.max(1, rect.width),
      Math.max(1, rect.height),
      leftSpace,
    );
    top = root.getBoundingClientRect().top + scrollY;
    const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    range = Math.max(1, root.offsetHeight - stage.offsetHeight - stickyTop);
  }
  function render() {
    raf = 0;
    if (!root.classList.contains("live")) return;
    const frame = sample((scrollY - top) / range, framing);
    paint(frame, framing);
    const unfold = frame.unfold;
    root.classList.toggle("unfolding", unfold > 0 && framing.leftSpace > 0);
    viewport.style.setProperty(
      "--extend",
      (-unfold * framing.leftSpace).toFixed(1) + "px",
    );
    // Only the closing reveal lowers the caption; the opening keeps the headline where it was set.
    root.style.setProperty(
      "--caption-shift",
      (frame.hero > 0 ? 0 : unfold * framing.leftSpace * 0.23).toFixed(1) + "px",
    );
    const i = frame.chapter;
    // Tie the handoff to camera travel so reversing retraces the same fade.
    const fade = 0.008;
    const nextStop = stops[i + 1];
    const handoff = nextStop === undefined ? 0
      : ramp(frame.total, nextStop - fade, nextStop);
    if (lastChapter !== i) {
      articles.forEach((a, n) => {
        a.style.opacity = n === i ? "1" : "0";
      });
      targets.forEach((a, n) => {
        if (!a) return;
        if (n === i) a.setAttribute("aria-current", "step");
        else a.removeAttribute("aria-current");
      });
      root.dataset.chapter = String(i);
      lastChapter = i;
    }
    articles[i].style.opacity = Math.max(0, 1 - 2 * handoff).toFixed(3);
    if (articles[i + 1])
      articles[i + 1].style.opacity = Math.max(0, 2 * handoff - 1).toFixed(3);
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
