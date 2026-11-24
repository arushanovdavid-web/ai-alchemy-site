"""Summarize the saved Chromium samples. Run from the lab directory."""
import itertools
import json
import math
import statistics
from pathlib import Path

data = json.loads(Path("evidence/profile.json").read_text())
runs = data["runs"]
assert len(runs) == 36, "Need the complete six-run matrix for each asset/profile"
report = [
    "# Performance report", "",
    "## Measurement setup", "",
    f"Chromium {data['browser']}, headless full browser on a physical Apple M1 MacBook Air with 16 GB RAM and macOS 26.6.2. All contexts used DPR 1. The observed animation clock ran near 60 Hz. The tablet and phone used emulated viewport and touch settings on the same Mac. The phone added 4× CPU throttling. Hardware GPU, thermal conditions and touch latency on a physical mobile device remain unmeasured.", "",
    "Two warm-up traversals preceded three measured forward and three reverse traversals for each bundle and layout. Each measured traversal covered the entire route in four seconds via native document offsets. Video recording was disabled. Intervals are differences between requestAnimationFrame timestamps, so they measure browser callback cadence. Physical display presentation times require separate instrumentation.", "",
    "The table pools three runs in each direction. Median and p95 use frame intervals in milliseconds. Lost slots estimate skipped 60 Hz animation opportunities by rounding each interval to 16.67 ms slots. The late column counts intervals over the profile budget with a 0.2 ms rounding allowance. A 50 ms interval counts as late on the phone. Long tasks are browser-reported main-thread tasks of at least 50 ms.", "",
    "| Profile | Bundle | Direction | Samples | Median ms | p95 ms | Worst ms | Lost 60 Hz slots | Late / samples | Long tasks |",
    "|---|---|---|---:|---:|---:|---:|---:|---:|---:|",
]
key = lambda r: (r["profile"], r["asset"], r["direction"])
for (profile, asset, direction), group in itertools.groupby(sorted(runs,key=key),key=key):
    group=list(group)
    assert len(group)==3
    intervals=sorted(ms for run in group for ms in run["intervals"])
    count=len(intervals)
    budget=1000/(30 if profile=="phone" else 60)
    lost=sum(max(0,round(ms/(1000/60))-1) for ms in intervals)
    late=sum(ms>budget+.2 for ms in intervals)
    blocks=sum(len(run["longTasks"]) for run in group)
    report.append(f"| {profile} | {asset} | {direction} | {count} | {statistics.median(intervals):.1f} | {intervals[math.ceil(.95*count)-1]:.1f} | {max(intervals):.1f} | {lost/(count+lost):.2%} | {late} / {count} | {blocks} |")
report.extend(["", "## Interpretation", ""])
for profile,fps in [("desktop",60),("tablet",60),("phone",30)]:
    selected=[r for r in runs if r["asset"]=="foundry" and r["profile"]==profile]
    a=sorted(ms for r in selected for ms in r["intervals"])
    p95=a[math.ceil(.95*len(a))-1]
    late=sum(ms>1000/fps+.2 for ms in a)
    passed=p95<=1000/fps+.2
    report.append(f"- **{profile.capitalize()} Foundry.** The {fps} fps budget was {'met' if passed else 'exceeded'} at p95 ({p95:.1f} ms). {late} of {len(a)} intervals exceeded the budget. The longest was {max(a):.1f} ms.")
report.extend(["","The desktop profile was 1440 × 900, tablet 820 × 1180 and phone 390 × 844. Compare the fixture with the Foundry rows to see the cost of the actual drawing. Native Safari was inspected visually. Firefox, WebKit, physical mobile devices and higher-DPR devices have no published frame-time measurements in this run.", "",
    "[Raw per-run intervals and long tasks](../evidence/profile.json) · [Profiling harness](../qa/profile.mjs) · [Visual and functional evidence](review.md)",""])
Path("docs/performance.md").write_text("\n".join(report))
