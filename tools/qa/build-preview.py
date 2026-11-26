"""Build the private review preview: a copy of a committed revision with root-relative paths made relative,
noindex, and a review-revision stamp. Usage: git archive <rev> | tar -x -C SRC; python3 tools/qa/build-preview.py SRC OUT <sha>"""
import os,re,shutil,sys,glob
SRC,P,SHA=sys.argv[1:4]
os.chdir(SRC)
pages=['index.html','404.html']+sorted(f for f in glob.glob('**/index.html',recursive=True) if not f.startswith(('lab/','tools/','docs/','illustration/')) and f!='index.html')
assets=set()
def fix_html(f,s):
    r='../'*f.count('/')
    def sub(m):
        attr,path=m.group(1),m.group(2)
        base,sep,rest=re.match(r'([^?#]*)([?#]?)(.*)',path).groups()
        b=base[1:]
        if b=='' or b.endswith('/'): b+='index.html'
        else: assets.add(b)
        return f'{attr}="{r}{b}{sep}{rest}"'
    s=re.sub(r'(href|src|poster|data-src|srcset)="(/(?!/)[^"]*)"',sub,s)
    s=s.replace('<head>','<head><meta name="robots" content="noindex,nofollow">\n<meta name="review-revision" content="%s">'%SHA,1)
    return s
def out(f): o=os.path.join(P,f); os.makedirs(os.path.dirname(o) or P,exist_ok=True); return o
for f in pages: open(out(f),'w').write(fix_html(f,open(f).read()))
for f in glob.glob('home/**/*',recursive=True):
    if os.path.isdir(f): continue
    if f.endswith('.css'):
        open(out(f),'w').write(open(f).read().replace('url(/','url('+'../'*f.count('/')))
    elif f.endswith('.js'):
        s=open(f).read().replace('"/illustration/','"illustration/').replace("location.replace('/contact/')","location.replace('contact/index.html')").replace("location.href = '/contact/thanks/'","location.href = 'thanks/index.html'")
        open(out(f),'w').write(s)
    else: shutil.copy(f,out(f))
# JS/CSS-referenced illustration assets
for f in glob.glob('home/**/*.js',recursive=True):
    for m in re.findall(r'"/(illustration/[^"]+)"',open(f).read()): assets.add(m)
for a in sorted(assets):
    if a.startswith('home/'): continue
    if os.path.exists(a): shutil.copy(a,out(a))
    else: print('missing',a)
for a in ['fonts/jetbrains-mono.woff2','fonts/newsreader.woff2','fonts/inter-tight.woff2','og-image.png']:
    shutil.copy(a,out(a))
open(out('review-revision.txt'),'w').write(SHA+'\n')
left=[ (f,l) for f in glob.glob(P+'/**/*.*',recursive=True) if f.endswith(('.html','.js','.css')) for l in re.findall(r'''(?:=|\(|')["']?/(?:home|illustration|fonts|contact|services|about|industries|privacy)/''',open(f).read())]
print('files',sum(len(fs) for _,_,fs in os.walk(P)),'root-relative left',len(left))
