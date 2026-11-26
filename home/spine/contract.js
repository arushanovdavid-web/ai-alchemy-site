// Check the subset of the Foundry v1 interface consumed by the motion engine.
export function validateBundle(svg, manifest) {
  if (
    svg.localName !== "svg" ||
    svg.dataset.iaVersion?.split(".")[0] !== "1" ||
    manifest.version !== svg.dataset.iaVersion
  )
    throw Error("Incompatible Foundry version");
  const ids = [...svg.querySelectorAll("[id]")].map((el) => el.id);
  if (new Set(ids).size !== ids.length) throw Error("Duplicate artwork ID");
  const finite = (a, n) =>
    Array.isArray(a) && a.length === n && a.every(Number.isFinite);
  if (
    ![manifest.canvas?.width, manifest.canvas?.height].every(
      (v) => Number.isFinite(v) && v > 0,
    )
  )
    throw Error("Invalid board dimensions");
  for (const key of ["disconnected", "strategy", "software", "ai", "cloud"]) {
    for (const crop of ["viewBox", "portrait_viewBox"]) {
      const rect = manifest.cameras?.[key]?.[crop];
      if (!finite(rect, 4) || rect[2] <= 0 || rect[3] <= 0)
        throw Error("Invalid camera " + key);
    }
  }
  const anchors = new Map();
  for (const anchor of manifest.anchors) {
    if (
      anchors.has(anchor.id) ||
      !finite(anchor.master, 2) ||
      !finite(anchor.world, 3)
    )
      throw Error("Invalid anchor " + anchor.id);
    anchors.set(anchor.id, anchor.master);
  }
  for (const id of [
    "s2.collector.out",
    "spine.j23",
    "spine.j34",
    "spine.j45",
    "s3.module.hanging",
    "s3.module.slot",
    "s4.core",
    "s4.gate",
    "s5.terminal",
  ]) {
    if (!anchors.has(id)) throw Error("Missing motion anchor " + id);
  }
  const required = [
    "link-spreadsheets",
    "link-mail",
    "link-forms",
    "link-legacy",
    "spine-s2",
    "spine-s3",
    "spine-s4",
    "spine-s5",
  ];
  for (const id of required) {
    const path = svg.querySelector("#ia-" + id);
    if (
      !path ||
      !anchors.has(path.dataset.from) ||
      !anchors.has(path.dataset.to)
    )
      throw Error("Invalid endpoints on " + id);
  }
}
