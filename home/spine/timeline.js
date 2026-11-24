// Total progress: an opening bookend (the whole board as an unlit plan, with the
// page headline), then Codex's six-chapter shot sheet, unchanged, in the rest.
export const HERO = 0.075;
const GHOST = 0.2;
const coreStops = [0, 0.14, 0.32, 0.51, 0.69, 0.85];
const coreLandings = [0, 0.25, 0.46, 0.65, 0.75, 0.98];
const toTotal = (c) => HERO + c * (1 - HERO);
export const stops = [0, ...coreStops.map(toTotal)];
export const landings = [0, ...coreLandings.map(toTotal)];
// Index 0 is the opening; it has an article but no chapter link.
export const names = [
  null,
  "Systems",
  "Architecture",
  "Software",
  "Automation",
  "Infrastructure",
  "Reveal",
];
// Construction front: plan x of the site slab's leading edge, keyed to core progress.
const front = [
  [0.1, 520],
  [0.25, 1450],
  [0.46, 2450],
  [0.6, 3390],
  [0.74, 4310],
  [0.845, 4700],
];
export function siteFront(c) {
  if (c <= front[0][0]) return front[0][1];
  for (let i = 1; i < front.length; i++) {
    const [a, x0] = front[i - 1],
      [b, x1] = front[i];
    if (c <= b) return x0 + (x1 - x0) * ((c - a) / (b - a));
  }
  return front[front.length - 1][1];
}
const clamp = (x) => Math.max(0, Math.min(1, x));
const mix = (a, b, t) => a + (b - a) * t;
export function ramp(p, a, b) {
  const t = clamp((p - a) / (b - a));
  return t * t * (3 - 2 * t);
}

// Each key names a Foundry camera or anchor. Offsets are master units.
// Width and height define the protected subject rectangle in the art pane.
const shots = [
  [0, "disconnected", 0, -10, 1340, 800],
  [0.065, "disconnected", 0, -10, 1340, 800],
  [0.155, "s2.collector.out", -165, -140, 1390, 860],
  [0.222, "strategy", 25, -45, 1490, 840],
  [0.266, "strategy", 25, -45, 1490, 840],
  [0.333, "spine.j23", -10, -90, 1340, 765],
  [0.394, "s3.module.hanging", -12, 12, 1010, 640],
  [0.472, "s3.module.hanging", -12, 12, 1010, 640],
  [0.55, "s4.core", -115, 70, 1290, 780],
  [0.596, "s4.core", -26, 90, 1000, 625],
  [0.658, "s4.gate", 55, -95, 980, 600],
  [0.735, "cloud", -70, -90, 1540, 950],
  [0.771, "cloud", -70, -90, 1540, 950],
  [0.835, "s5.terminal", -155, -75, 720, 440],
  [0.858, "s5.terminal", -155, -75, 720, 440],
  [0.96, "overview", 0, 0, 5280, 3300],
  [1, "overview", 0, 0, 5280, 3300],
];

export function prepareFraming(manifest, width, height, leftSpace = 0) {
  const aspect = width / height;
  const portrait = aspect < 1.1;
  const points = new Map(manifest.anchors.map((a) => [a.id, a.master]));
  const frames = shots.map(([at, key, dx, dy, w, h]) => {
    let center = points.get(key);
    const camera = manifest.cameras[key];
    if (camera) {
      const [x, y, cw, ch] = camera[portrait ? "portrait_viewBox" : "viewBox"];
      center = [x + cw / 2, y + ch / 2];
    }
    if (key === "overview") {
      w = manifest.canvas.width;
      h = manifest.canvas.height;
      center = [w / 2, h / 2];
    }
    // Expand the last shot into the available paper to the left of the plate.
    if (key === "overview" && leftSpace > 0) {
      const scale = Math.min((width + leftSpace) / w, height / h);
      return {
        at,
        x: center[0] + leftSpace / (2 * scale),
        y: center[1],
        width: width / scale,
      };
    }
    if (portrait && key !== "overview") {
      const close =
        key === "s3.module.hanging" ? 0.72 : key === "s5.terminal" ? 0.8 : 0.94;
      w *= close;
    }
    const wide = Math.max(w, h * aspect);
    return { at, x: center[0] + dx, y: center[1] + dy, width: wide };
  });
  // Opening frame: a crop of the board, wide across the whole stage. Scene 1 sits just right of the
  // headline; the rest of the architecture runs off to the lower right as an unlit plan.
  let hero = frames[frames.length - 1];
  const s1 = points.get("s1.centre");
  if (leftSpace > 0 && s1) {
    const total = width + leftSpace;
    const scale = total / 3300;
    const sx = 0.5 * total - leftSpace,
      sy = 0.36 * height;
    const left = s1[0] - sx / scale,
      top = s1[1] - sy / scale;
    hero = { at: 0, x: left + width / scale / 2, y: top + height / scale / 2, width: width / scale };
  }
  // Narrow screens: open on the first two stations rather than the whole, tiny, board.
  const j23 = points.get("spine.j23");
  if (!(leftSpace > 0) && s1 && j23) {
    hero = { at: 0, x: (s1[0] + j23[0]) / 2 - 170, y: (s1[1] + j23[1]) / 2 - 40, width: 2000 };
  }
  return { frames, aspect, portrait, leftSpace, hero };
}

// Cubic Hermite interpolation. Shared slopes carry velocity through a
// passing shot. A true hold or change of direction has a zero tangent.
function tangent(prev, here, next, key) {
  if (!prev || !next) return 0;
  const incoming = (here[key] - prev[key]) / (here.at - prev.at);
  const outgoing = (next[key] - here[key]) / (next.at - here.at);
  return incoming * outgoing <= 0
    ? 0
    : (2 * incoming * outgoing) / (incoming + outgoing);
}
function travel(frames, i, u, key) {
  const a = frames[i],
    b = frames[i + 1],
    dt = b.at - a.at;
  const m = tangent(frames[i - 1], a, b, key),
    n = tangent(a, b, frames[i + 2], key);
  return (
    mix(a[key], b[key], u * u * (3 - 2 * u)) +
    dt * u * (1 - u) * ((1 - u) * m - u * n)
  );
}
function sampleCore(p, framing) {
  p = clamp(p);
  const { frames, aspect } = framing;
  const next = frames.findIndex((k) => k.at > p);
  const b = frames[next < 0 ? frames.length - 1 : next],
    a = frames[next < 0 ? frames.length - 2 : Math.max(next - 1, 0)];
  const t = ramp(p, a.at, b.at);
  const width = a.width * Math.pow(b.width / a.width, t),
    height = width / aspect;
  // During withdrawal, center travels in proportion to the widening field.
  // This keeps the terminal in frame as the earlier stations re-enter.
  const pan = a.at === 0.858 ? (width - a.width) / (b.width - a.width || 1) : t;
  const i = next < 0 ? frames.length - 2 : next - 1;
  const u = clamp((p - a.at) / (b.at - a.at));
  const x = a.at === 0.858 ? mix(a.x, b.x, pan) : travel(frames, i, u, "x");
  const y = a.at === 0.858 ? mix(a.y, b.y, pan) : travel(frames, i, u, "y");
  const chapter = coreStops.reduce((last, at, i) => (p >= at ? i : last), 0);
  return {
    p,
    chapter,
    camera: [x - width / 2, y - height / 2, width, height],
    draw: [
      [0.205, 0.329],
      [0.328, 0.496],
      [0.494, 0.671],
      [0.668, 0.836],
    ].map(([s, e]) => ramp(p, s, e)),
    links: [0, 1, 2, 3].map((i) =>
      ramp(p, 0.072 + i * 0.014, 0.172 + i * 0.014),
    ),
    built: p >= 0.222,
    liveLinks: p >= 0.85,
    visibility: [
      1,
      ramp(p, 0.098, 0.178),
      ramp(p, 0.282, 0.35),
      ramp(p, 0.478, 0.55),
      ramp(p, 0.635, 0.73),
    ],
    seat: ramp(p, 0.399, 0.458),
    plate: ramp(p, 0.162, 0.25),
    core: p >= 0.595,
    gate: p >= 0.641,
    terminal: p >= 0.833,
    powered: [0.85, 0.62, 0.62, 0.65, 0.833].map((at) => p >= at),
    depth: 8 * (ramp(p, 0, 0.51) - ramp(p, 0.51, 0.96)),
  };
}

// Zoom between two shots so the destination stays in frame: the centre moves in
// proportion to the change of scale, as in the closing withdrawal.
function dolly(a, b, t, aspect) {
  const width = a.width * Math.pow(b.width / a.width, t);
  const pan = Math.abs(b.width - a.width) < 1e-6 ? t : (width - a.width) / (b.width - a.width);
  const x = mix(a.x, b.x, pan),
    y = mix(a.y, b.y, pan),
    height = width / aspect;
  return [x - width / 2, y - height / 2, width, height];
}

export function sample(total, framing) {
  total = clamp(total);
  if (total >= HERO) {
    const c = (total - HERO) / (1 - HERO);
    const f = sampleCore(c, framing);
    return {
      ...f,
      total,
      chapter: f.chapter + 1,
      hero: 0,
      ghost: 0,
      unfold: ramp(c, 0.858, 0.96),
      site: siteFront(c),
    };
  }
  const t = ramp(total, HERO * 0.12, HERO);
  const f = sampleCore(0, framing);
  const start = framing.frames[0];
  return {
    ...f,
    total,
    chapter: 0,
    hero: 1 - t,
    ghost: GHOST * (1 - t),
    camera: dolly(framing.hero, start, t, framing.aspect),
    visibility: f.visibility.map((v, i) => (i === 0 ? 1 : GHOST * (1 - t))),
    unfold: 1 - t,
    site: Infinity,
  };
}
