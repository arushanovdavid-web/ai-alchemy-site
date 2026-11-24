from playwright.sync_api import sync_playwright
import statistics, subprocess
from pathlib import Path
out=Path('evidence')
url='http://127.0.0.1:8000/labs/experience-spine/'
with sync_playwright() as pw:
 b=pw.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 print(b.version,flush=True)
 page=b.new_page(viewport={'width':1280,'height':800})
 errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(url); page.wait_for_selector('body.live')
 for p in (0,25,50,75,100):
  page.evaluate('(p)=>scrollTo(0,(document.documentElement.scrollHeight-innerHeight)*p/100)',p)
  page.wait_for_timeout(80)
  page.screenshot(path=str(out/f'{p}.png'))
 for w,h in [(390,844),(820,1180),(1280,800)]:
  page.set_viewport_size({'width':w,'height':h})
  page.evaluate('scrollTo(0,(document.documentElement.scrollHeight-innerHeight)/2)')
  page.wait_for_timeout(80)
  title=page.locator('h1').inner_text()
  page.reload(); page.wait_for_timeout(150)
  assert page.locator('h1').inner_text()==title
  assert page.evaluate('document.documentElement.scrollWidth===innerWidth')
 page.emulate_media(reduced_motion='reduce');page.wait_for_selector('article')
 assert page.locator('h1').inner_text()=='Connected architecture'
 page.emulate_media(reduced_motion='no-preference')
 for direction in ['forward','reverse']:
  # Capture compositor frames through CDP, retaining actual presentation timestamps.
  import base64,tempfile
  c=page.context.new_cdp_session(page)
  frames=[]
  with tempfile.TemporaryDirectory() as d:
   def frame(evt):
    c.send('Page.screencastFrameAck',{'sessionId':evt['sessionId']})
    name=Path(d)/f'{len(frames)}.jpg'
    name.write_bytes(base64.b64decode(evt['data']))
    frames.append((name,evt['metadata']['timestamp']))
   c.on('Page.screencastFrame',frame)
   rev=direction=='reverse'
   page.evaluate('(r)=>scrollTo(0,r?document.documentElement.scrollHeight:0)',rev)
   page.wait_for_timeout(80)
   c.send('Page.startScreencast',{'format':'jpeg','quality':78})
   times=page.evaluate('''r=>new Promise(done=>{let start,prev;const gaps=[];function step(t){start??=t;if(prev)gaps.push(t-prev);prev=t;let f=Math.min(1,(t-start)/4200);scrollTo(0,(r?1-f:f)*(document.documentElement.scrollHeight-innerHeight));if(f<1)requestAnimationFrame(step);else done(gaps)}requestAnimationFrame(step)})''',rev)
   page.wait_for_timeout(150);c.send('Page.stopScreencast');c.detach()
   manifest=Path(d)/'frames.txt'
   manifest.write_text(''.join(f"file '{f}'\nduration {frames[i+1][1]-t if i+1<len(frames) else .15}\n" for i,(f,t) in enumerate(frames)))
   subprocess.run(['ffmpeg','-loglevel','error','-y','-f','concat','-safe','0','-i',str(manifest),'-vf','fps=30','-pix_fmt','yuv420p','-c:v','libx264',str(out/f'{direction}.mp4')],check=True)
   print(direction,len(frames),statistics.median(times),sorted(times)[int(.95*len(times))],flush=True)
 assert not errors,errors
 fallback=b.new_context(java_script_enabled=False).new_page();fallback.goto(url);assert fallback.locator('article li').count()==6
 b.close()
