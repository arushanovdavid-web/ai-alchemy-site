"""Generate neutral test shapes at Foundry anchor coordinates. Run from the lab directory."""
import json
from pathlib import Path
from xml.etree import ElementTree as ET

data = json.loads(Path('assets/foundry/anchors.json').read_text())
points = {a['id']: a['master'] for a in data['anchors']}
root = ET.Element('svg', {'xmlns': 'http://www.w3.org/2000/svg', 'class':'ia',
    'data-ia-version':data['version'], 'viewBox':'0 0 5280 3300'})
ET.SubElement(root,'defs')
ET.SubElement(root,'style').text = """
.ia .strand,.ia .ia-link{fill:none;stroke:#444;stroke-width:2}
.ia .ia-link[data-state=off]{visibility:hidden}
.ia .ia-link[data-state=proposed]{stroke-dasharray:7 5}
.ia [data-state=active] .ia-lead,.ia .ia-link[data-state=active]{stroke:#1f6b5c}
.ia rect{fill:#e3ded1;stroke:#333;stroke-width:3}.ia [data-state=active]>rect{fill:#ce9775}
"""
def group(parent, key):
    return ET.SubElement(parent,'g',id='ia-'+key)
def box(parent,key,anchor,w,h):
    x,y=points[anchor]
    part=group(parent,key)
    ET.SubElement(part,'rect',x=str(x-w/2),y=str(y-h/2),width=str(w),height=str(h))
    return part
group(root,'ground')
scenes=group(root,'scenes')
ends=['s2.collector.out','spine.j23','spine.j34','spine.j45','s5.terminal']
for n in range(1,6):
    scene=group(scenes,'scene-'+str(n))
    ground=group(scene,f's{n}-ground')
    objects=group(scene,f's{n}-objects')
    if n==1:
        for name in ['spreadsheets','mail','forms','legacy']:
            start,end=f's1.{name}.out',f's2.collector.in.{name}'
            (x,y),(ex,ey)=points[start],points[end]
            ET.SubElement(ground,'path',{'id':'ia-link-'+name,'class':'ia-link','data-from':start,
                'data-to':end,'d':f'M{x} {y} L{ex} {ey}'})
            box(objects,'s1-'+name,start,110,65)
    else:
        seg=group(ground,'spine-s'+str(n))
        start,end=ends[n-2:n]
        seg.set('data-from',start)
        seg.set('data-to',end)
        for i in range(7):
            (x,y),(ex,ey)=points[start],points[end]
            ET.SubElement(seg,'path',{'class':'strand'+(' ia-lead' if i==3 else ''),
                'data-strand':str(i),'pathLength':'1','d':f'M{x} {y+3*(i-3)} L{ex} {ey+3*(i-3)}'})
    if n==2:
        box(objects,'s2-collector','s2.collector.out',140,70)
        box(objects,'s2-plate','s2.plate.centre',290,180)
    if n==3:
        box(objects,'s3-rack','s3.module.slot',300,115)
        group(objects,'s3-hoist-lines')
        group(objects,'s3-drop-line')
        box(objects,'s3-module-new','s3.module.hanging',90,70)
    if n==4:
        box(objects,'s4-core','s4.core',180,180)
        box(objects,'s4-gate','s4.gate',100,45)
    if n==5:
        box(objects,'s5-racks','s5.racks',280,160)
        box(objects,'s5-stores','s5.stores',190,110)
        box(objects,'s5-terminal','s5.terminal',55,45)
group(root,'annotations')
ET.indent(root)
ET.ElementTree(root).write('assets/fixture/master.svg',encoding='utf-8',xml_declaration=True)
