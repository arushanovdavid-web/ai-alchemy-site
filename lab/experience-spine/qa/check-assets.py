"""From the lab directory, verify vendor bytes, camera bounds and required binding IDs."""
import hashlib
import json
import subprocess
from pathlib import Path
from xml.etree import ElementTree as ET

REVISION = "7245555fcd11b5c3d9323a0eadddb26a32feebc0"
base = Path("assets/foundry")
for source in ("svg/master.svg", "anchors.json", "components.json", "previews/master-paper-active.png"):
    blob = subprocess.check_output(["git", "show", f"{REVISION}:illustration/{source}"])
    file = base / Path(source).name
    assert blob == file.read_bytes(), f"Changed Foundry asset: {file}"
    print(hashlib.sha256(blob).hexdigest(), file)
manifest = json.loads((base / "anchors.json").read_text())
components = json.loads((base / "components.json").read_text())
assert components["version"] == manifest["version"]
assert all("place_in_master" in part for part in components["components"])
anchors = {item["id"] for item in manifest["anchors"]}
assert len(anchors) == len(manifest["anchors"])
for camera in manifest["cameras"].values():
    for key in ("viewBox", "portrait_viewBox"):
        assert len(camera[key]) == 4 and min(camera[key][2:]) > 0
for name in ("foundry", "fixture"):
    root = ET.parse(f"assets/{name}/master.svg").getroot()
    assert root.get("data-ia-version") == manifest["version"]
    ids = [node.get("id") for node in root.iter() if node.get("id")]
    assert len(ids) == len(set(ids))
    for suffix in ("s2-plate", "s3-module-new", "s3-hoist-lines", "s3-drop-line",
                   "s4-core", "s4-gate", "s5-terminal", "ground", "annotations"):
        assert "ia-" + suffix in ids
    for n in range(2, 6):
        spine = root.find(f".//*[@id='ia-spine-s{n}']")
        strands = list(spine)
        assert {p.get("data-strand") for p in strands} == set(map(str, range(7)))
        assert all(p.get("pathLength") == "1" for p in strands)
    for node in root.iter():
        for key in ("data-from", "data-to"):
            if node.get(key):
                assert node.get(key) in anchors, (name, node.get(key))
    print(name, "passed")
