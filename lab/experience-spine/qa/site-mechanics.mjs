// Serve the repository root, then run this script with its URL and an output directory.
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { chromium } from "playwright";

const [url = "http://localhost:8737", out = "tools/qa/evidence/mechanics"] = process.argv.slice(2);
await mkdir(out, {recursive:true});
const browser = await chromium.launch({channel:process.env.CHROME_CHANNEL || "chrome"});
const report = {};
try {
  for (const [name,width,height] of [["desktop",1440,900],["mobile",390,844]]) {
    const context = await browser.newContext({viewport:{width,height},isMobile:name==="mobile",hasTouch:name==="mobile",
      recordVideo:{dir:out,size:{width,height}}});
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror",e=>errors.push(e.message));
    await page.goto(url);
    await page.waitForSelector("#experience.live #ia-s4-fan-rotor",{state:"attached"});
    await page.evaluate(()=>document.fonts.ready);
    const summary = await page.evaluate(async () => {
      const root = document.querySelector("#experience"), stage=root.querySelector(".stage");
      const svg = root.querySelector("svg.ia");
      const el = id => svg.querySelector("#ia-"+id);
      const fan=el("s4-fan-rotor"), box=el("s4-parcel"), boom=el("s4-boom");
      const next = ()=>new Promise(requestAnimationFrame);
      const top=root.offsetTop, range=root.offsetHeight-stage.offsetHeight-parseFloat(getComputedStyle(stage).top);
      const frames=[], mismatches=[], violations=[];
      let min=Infinity,max=-Infinity,tiltError=0,axisError=0;
      const steps=240;
      for(let j=0;j<=2*steps;j++){
        const i=j<=steps?j:2*steps-j;
        scrollTo({top:top+range*i/steps,behavior:"instant"});
        await next();await next();
        const m=box.transform.baseVal.getItem(0).matrix;
        const travel=m.e/Math.cos(Math.PI/6);
        min=Math.min(min,travel);max=Math.max(max,travel);
        tiltError=Math.max(tiltError,Math.abs(m.f-travel/2));
        const rotation=fan.transform.baseVal.getItem(0).matrix;
        axisError=Math.max(axisError,Math.abs(rotation.e),Math.abs(rotation.f));
        const gate=boom.transform.baseVal.getItem(1).matrix;
        if(travel>0.001 && Math.abs(gate.a-.5)>0.001) violations.push("closed gate at "+i);
        const signature=JSON.stringify([svg.getAttribute("viewBox"),box.getAttribute("transform"),
          fan.getAttribute("transform"),boom.getAttribute("transform"),[...root.querySelectorAll("article")].map(a=>a.style.opacity)]);
        if(j<=steps) frames.push(signature); else if(frames[i]!==signature) mismatches.push(i);
      }
      const counts=[2,3,4,5].map(n=>el("spine-s"+n).querySelectorAll(".strand").length);
      return {scrollSamples:2*steps+1, mismatches, violations, counts, boxTravel:[min,max],tiltError,axisError};
    });
    assert.deepEqual(summary.mismatches,[]);assert.deepEqual(summary.violations,[]);assert.deepEqual(summary.counts,[4,4,4,4]);
    assert.ok(Math.abs(summary.boxTravel[0])<.001 && Math.abs(summary.boxTravel[1]-134)<.01);
    assert.ok(summary.tiltError<.001 && summary.axisError===0);
    assert.deepEqual(errors,[]);
    report[name]=summary;
    const video=page.video();
    await context.close();
    await video.saveAs(join(out,name+".webm"));
    await video.delete();
  }
  await writeFile(join(out,"sweep.json"),JSON.stringify(report,null,2)+"\n");
} finally {await browser.close();}
