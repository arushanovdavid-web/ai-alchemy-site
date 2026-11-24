import {mount, ease, track} from './engine.js';

const ns = 'http://www.w3.org/2000/svg';
function svg(parent, tag, attrs) {
  const item = document.createElementNS(ns, tag);
  for (const [key,value] of Object.entries(attrs)) item.setAttribute(key,value);
  parent.append(item);
  return item;
}
const $ = id => document.getElementById(id);
const captions = [
 'Sales, operations and finance each hold a separate piece of the business.',
 'A shared foundation gives each business system a place in the architecture.',
 'Interfaces carry records between teams and the software they already use.',
 'Automation turns connected events into actions across the business.',
 'A cloud data layer stores the history behind each decision.',
 'Follow any connection to see how the six systems work together.'
];
const titles = [...$('summary').children].map(el => el.textContent);
const layout = [
 ['Sales',190,200,0,2],['Operations',310,135,0,3],['Finance',155,320,0,2],
 ['Platform',418,253,.35,5],['Automation',565,158,2.45,4],['Cloud data',668,325,3.45,6]
];
const nodes = layout.map(([label,x,y,start,depth],i) => {
  const group = svg($('modules'),'g',{id:'module-'+i});
  const slot = svg(group,'g',{'data-slot':'art'});
  // Test geometry is replaceable as a unit. Connections use the outer origin.
  for(let level=0;level<depth;level++) {
    const block = svg(slot,'g',{transform:'translate(0 '+(-level*9)+')'});
    svg(block,'path',{d:'M-46 0 0 22 46 0V8L0 31 -46 8Z',fill:'#a8b7a8',stroke:'#40594e'});
    svg(block,'path',{d:'M-46 0 0 -22 46 0 0 22Z',fill:level===depth-1?'currentColor':'#d5ddcf',stroke:'#40594e'});
  }
  svg(slot,'text',{x:0,y:52,'text-anchor':'middle','font-family':'monospace','font-size':15,fill:'#183a30'}).textContent=label;
  return {group,x,y,start,i};
});
const edges = [[0,3,1.4],[1,3,1.6],[2,3,1.8],[3,4,2.6],[3,5,3.65],[4,5,4.15]].map(([a,b,start]) => {
  const source=nodes[a], target=nodes[b];
  const mid=(source.x+target.x)/2;
  const path=svg($('wires'),'path',{d:'M'+source.x+' '+source.y+' L'+mid+' '+(source.y+(mid-source.x)*.45)+' L'+target.x+' '+target.y,fill:'none',stroke:'#297b66','stroke-width':4,pathLength:1,'stroke-dasharray':'1 1'});
  return {path,start};
});
const cameras=[[245,230,1.52],[315,215,1.28],[365,228,1.14],[475,213,1.25],[535,242,1.13],[425,235,1]];
mount((p, reduced) => {
  const phase=p*5, [x,y,z]=track(cameras,phase);
  $('camera').setAttribute('transform',`translate(400 265) scale(${z}) translate(${-x} ${-y})`);
  $('grid').setAttribute('x',(x-425)*.23);
  for(const {group,x,y,start,i} of nodes){
    const visible=start===0?1:ease((phase-start)*1.6);
    group.setAttribute('transform',`translate(${x} ${y-(1-visible)*45})`);
    group.style.opacity=visible;
    group.style.color=`hsl(${155+i*2} ${8+ease((phase-1)/3)*37}% ${83-ease((phase-1)/3)*28}%)`;
    group.dataset.state=visible===0?'hidden':visible<1?'entering':phase>=2?'active':'present';
  }
  for(const {path,start} of edges) path.style.strokeDashoffset=1-ease((phase-start)*1.7);
  const i=Math.min(5,Math.floor(phase+.28));
  $('title').textContent=titles[i]; $('copy').textContent=captions[i];
  $('step').textContent=String(i+1).padStart(2,'0')+' / 06';
  document.querySelector('progress').value=p;
  document.querySelector('footer span:last-child').hidden=reduced;
});
