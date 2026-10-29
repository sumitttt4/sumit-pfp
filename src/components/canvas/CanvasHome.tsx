"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useCallback,useEffect,useLayoutEffect,useRef,useState,type CSSProperties,type ReactNode} from 'react';
import Greeting from '@/components/quiet/Greeting';
import GithubActivity from '@/components/quiet/GithubActivity';
import Tool from '@/components/quiet/Tool';
import {Arrow} from '@/components/quiet/Icons';
import posts from '@/data/blog';
import {experience,profile} from '@/data/profile';
import {selectedProjects} from '@/data/quiet';
import skill from '@/data/glyph-skill.json';
import c from './Canvas.module.css';

type Cam={x:number;y:number;z:number};
type Node={id:string;name:string;kind:'Frame'|'Sticky';x:number;y:number;w:number;href?:string;tone?:string;body:ReactNode};
const project=(slug:string)=>selectedProjects.find(p=>p.slug===slug)!;
const writing=['building-glyph','your-ai-built-website-needs-a-visual-direction-before-it-needs-another-prompt-d30168236c7b'].map(slug=>posts.find(p=>p.slug===slug)!);
const clamp=(v:number,a:number,b:number)=>Math.min(b,Math.max(a,v));
const ease=(t:number)=>1-Math.pow(1-t,4);

function ProjectFrame({slug,status,live,note}:{slug:string;status?:string;live?:boolean;note?:ReactNode}){
 const p=project(slug);const host=new URL(p.href).hostname;
 return <div className={c.project}>
  {p.image&&<span className={c.shot}><Image src={p.image} alt={`${p.name} website`} fill sizes="440px" draggable={false}/></span>}
  <div className={c.projectHead}>{p.logo&&<Image src={p.logo} alt="" width={22} height={22} unoptimized draggable={false}/>}<h2>{p.name}</h2>{status&&<span className={c.status}>{live&&<i/>}{status}</span>}</div>
  <p>{p.description}</p>
  <div className={c.links}><a href={p.href} target="_blank" rel="noreferrer">{host} <Arrow size={12}/></a>{slug==='glyph'&&<Link href="/projects/glyph">Case study <Arrow size={12}/></Link>}{note}</div>
 </div>;
}

const nodes:Node[]=[
 {id:'intro',name:'Intro',kind:'Frame',x:0,y:0,w:520,body:<div className={c.intro}>
  <div className={c.identity}><span className={c.avatar}><Image src="/avatar.jpg" alt="" fill sizes="72px" priority draggable={false}/></span><Greeting className={c.greeting}/></div>
  <h1>Sumit<br/>Sharma</h1>
  <p className={c.role}>Design engineer · Frontend at <a href="https://craon.ai" target="_blank" rel="noreferrer">Craon</a></p>
  <p className={c.lead}>I build products for the web, from the first interface to the details of how it works.</p>
  <div className={c.links}><a href={profile.calendar} target="_blank" rel="noreferrer">Book a call <Arrow size={12}/></a><a href={`mailto:${profile.email}`}>Email me</a></div>
 </div>},
 {id:'hello',name:'Read me',kind:'Sticky',x:-250,y:40,w:210,tone:'yellow',body:<div className={c.sticky}><p>This is my portfolio as a design file.</p><p>Drag to look around. Scroll or pinch to zoom. Double-click any frame.</p><span>— Sumit</span></div>},
 {id:'glyph',name:'Glyph',kind:'Frame',x:620,y:-60,w:460,href:project('glyph').href,body:<ProjectFrame slug="glyph" status="Live · paid" live/>},
 {id:'glyph-skill',name:'Glyph-Skill',kind:'Frame',x:1180,y:40,w:440,href:project('glyph-skill').href,body:<ProjectFrame slug="glyph-skill" status="Open source" note={<a href={skill.repository} target="_blank" rel="noreferrer" title={`Star count checked ${skill.checkedAt}`}>GitHub · {skill.stars} ★ <Arrow size={12}/></a>}/>},
 {id:'fedup',name:'Fedup Studio',kind:'Frame',x:620,y:520,w:460,href:project('fedup-studio').href,body:<ProjectFrame slug="fedup-studio" status="Free"/>},
 {id:'musiclb',name:'Musiclb',kind:'Frame',x:1180,y:620,w:440,href:project('musiclb').href,body:<ProjectFrame slug="musiclb"/>},
 {id:'experience',name:'Experience',kind:'Frame',x:0,y:560,w:520,body:<div className={c.text}><h2>Experience</h2><ol className={c.jobs}>{experience.map(job=><li key={job.company}><div><h3>{job.href?<a href={job.href} target="_blank" rel="noreferrer">{job.company}</a>:job.company}{job.current&&<em>Now</em>}</h3><time>{job.date}</time></div><p className={c.jobRole}>{job.role}</p><p>{job.description}</p></li>)}</ol></div>},
 {id:'stack',name:'How I work',kind:'Frame',x:0,y:1130,w:520,body:<div className={c.text}><h2>How I work</h2><p className={c.stack}>Mostly <Tool name="TypeScript" logo="typescript"/>, <Tool name="React" logo="react"/> and <Tool name="Next.js" logo="nextjs"/>, styled with <Tool name="Tailwind" logo="tailwind"/>, designed in <Tool name="Figma" logo="figma"/>, with <Tool name="Claude Code"/> in the daily loop.</p><div className={c.links}><Link href="/craft">Full kit <Arrow size={12}/></Link></div></div>},
 {id:'writing',name:'Writing',kind:'Frame',x:620,y:1100,w:460,body:<div className={c.text}><h2>Writing</h2><div className={c.posts}>{writing.map(post=>{const body=<><strong>{post.title}</strong><time>{post.date}</time></>;return post.link?<a key={post.slug} href={post.link} target="_blank" rel="noreferrer">{body}</a>:<Link key={post.slug} href={`/blog/${post.slug}`}>{body}</Link>})}</div><div className={c.links}><Link href="/blog">All writing <Arrow size={12}/></Link></div></div>},
 {id:'github',name:'On GitHub',kind:'Frame',x:1180,y:1140,w:560,body:<GithubActivity className={c.github} head={<div className={c.githubHead}><h2>On GitHub</h2><a href={profile.github} target="_blank" rel="noreferrer">@sumitttt4 <Arrow size={12}/></a></div>}/>},
 {id:'play',name:'Psst',kind:'Sticky',x:1790,y:1150,w:190,tone:'green',body:<div className={c.sticky}><p>The contribution graph is a snake game. Press Play a round.</p></div>},
 {id:'contact',name:'Contact',kind:'Frame',x:0,y:1440,w:1080,body:<div className={c.contact}><h2>Let’s work<br/>together.</h2><div><p>Open to projects and collaborations.</p><div className={c.links}><a href={`mailto:${profile.email}`}>Email me <Arrow size={12}/></a><a href={profile.calendar} target="_blank" rel="noreferrer">Book a call <Arrow size={12}/></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow size={12}/></a><a href={profile.twitter} target="_blank" rel="noreferrer">X <Arrow size={12}/></a></div></div></div>},
];
/* Hand-drawn connectors between related frames: [from, to, label]. */
const links:[string,string,string][]=[['glyph','glyph-skill','led to'],['intro','glyph','shipped']];
/* The guide cursor's tour: frame id, message. */
const tour:[string,string][]=[['intro','Hi, I’m Sumit'],['glyph','My paid product'],['glyph-skill','Open source'],['github','Try the snake'],['contact','Say hello']];

export default function CanvasHome({onList}:{onList:()=>void}){
 const view=useRef<HTMLDivElement>(null);const [cam,setCam]=useState<Cam>({x:0,y:0,z:.8});const camRef=useRef(cam);camRef.current=cam;
 const [pos,setPos]=useState(()=>Object.fromEntries(nodes.map(n=>[n.id,{x:n.x,y:n.y}])) as Record<string,{x:number;y:number}>);
 const [size,setSize]=useState<Record<string,{w:number;h:number}>>({});
 const [selected,setSelected]=useState<string|null>(null);const [ready,setReady]=useState(false);const [guide,setGuide]=useState(0);const [guideOn,setGuideOn]=useState(true);
 const fly=useRef(0);
 const animate=useCallback((to:Cam)=>{cancelAnimationFrame(fly.current);const from=camRef.current,start=performance.now(),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const step=(t:number)=>{const k=reduce?1:ease(Math.min(1,(t-start)/650));setCam({x:from.x+(to.x-from.x)*k,y:from.y+(to.y-from.y)*k,z:from.z+(to.z-from.z)*k});if(k<1)fly.current=requestAnimationFrame(step)};fly.current=requestAnimationFrame(step)},[]);
 const area=useCallback(()=>{const r=view.current!.getBoundingClientRect(),wide=r.width>=1100;return {left:wide?264:24,right:r.width-(wide?264:24),top:24,bottom:r.height-72}},[]);
 const fitTo=useCallback((box:{x:number;y:number;w:number;h:number},max=1)=>{const a=area(),z=clamp(Math.min((a.right-a.left)/(box.w+80),(a.bottom-a.top)/(box.h+80)),.25,max);return {z,x:(a.left+a.right)/2-(box.x+box.w/2)*z,y:(a.top+a.bottom)/2-(box.y+box.h/2)*z}},[area]);
 const boxOf=useCallback((id:string)=>({x:pos[id].x,y:pos[id].y,w:size[id]?.w??400,h:size[id]?.h??300}),[pos,size]);
 const fitAll=useCallback(()=>{const ids=nodes.map(n=>n.id),bs=ids.map(boxOf),x=Math.min(...bs.map(b=>b.x)),y=Math.min(...bs.map(b=>b.y)),r=Math.max(...bs.map(b=>b.x+b.w)),b=Math.max(...bs.map(b=>b.y+b.h));animate(fitTo({x,y,w:r-x,h:b-y}))},[animate,boxOf,fitTo]);
 const focusNode=useCallback((id:string)=>{setSelected(id);animate(fitTo(boxOf(id),1.15))},[animate,boxOf,fitTo]);
 const focusRef=useRef(focusNode);focusRef.current=focusNode;
 const zoomBy=useCallback((factor:number,px?:number,py?:number)=>{const r=view.current!.getBoundingClientRect(),cx=px??r.width/2,cy=py??r.height/2,{x,y,z}=camRef.current,nz=clamp(z*factor,.2,3);setCam({z:nz,x:cx-(cx-x)/z*nz,y:cy-(cy-y)/z*nz})},[]);

 /* Measure frames so selection, fit and connectors know real sizes. */
 useLayoutEffect(()=>{const el=view.current;if(!el)return;const measure=()=>{const next:Record<string,{w:number;h:number}>={};el.querySelectorAll<HTMLElement>('[data-node]').forEach(n=>{next[n.dataset.node!]={w:n.offsetWidth,h:n.offsetHeight}});setSize(next)};measure();const ro=new ResizeObserver(measure);el.querySelectorAll('[data-node]').forEach(n=>ro.observe(n));return()=>ro.disconnect()},[]);
 /* Opening shot: the intro, the note and the first project. */
 useEffect(()=>{if(ready||!size.intro)return;const r=view.current!.getBoundingClientRect(),z=clamp(r.height/1000,.62,.95),a=area();setCam({z,x:a.left+290*z,y:Math.max(40,(r.height-680*z)/2)+90*z});setReady(true)},[size,ready,area]);
 /* The guide cursor walks the tour until someone starts exploring. */
 useEffect(()=>{if(!guideOn||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const t=setInterval(()=>setGuide(g=>(g+1)%tour.length),3200);return()=>clearInterval(t)},[guideOn]);

 /* Pan, drag frames, pinch and wheel zoom. */
 useEffect(()=>{const el=view.current!;const pointers=new Map<number,{x:number;y:number}>();let mode:'pan'|'move'|null=null,target='',moved=0,pinch=0;
  const down=(e:PointerEvent)=>{if(e.button!==0&&e.pointerType==='mouse')return;cancelAnimationFrame(fly.current);setGuideOn(false);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(pointers.size===2){const [a,b]=Array.from(pointers.values());pinch=Math.hypot(a.x-b.x,a.y-b.y);mode=null;return}
   const t=e.target as HTMLElement;if(t.closest('a,button,input,[data-snake-board],[data-ui]'))return;
   const node=t.closest<HTMLElement>('[data-node]');moved=0;if(node){mode='move';target=node.dataset.node!;setSelected(target)}else mode='pan';el.setPointerCapture(e.pointerId);el.dataset.dragging=''};
  const move=(e:PointerEvent)=>{const prev=pointers.get(e.pointerId);if(!prev)return;const dx=e.clientX-prev.x,dy=e.clientY-prev.y;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(pointers.size===2){const [a,b]=Array.from(pointers.values()),d=Math.hypot(a.x-b.x,a.y-b.y),r=el.getBoundingClientRect();if(pinch)zoomBy(d/pinch,(a.x+b.x)/2-r.left,(a.y+b.y)/2-r.top);pinch=d;return}
   moved+=Math.abs(dx)+Math.abs(dy);const z=camRef.current.z;
   if(mode==='pan')setCam(v=>({...v,x:v.x+dx,y:v.y+dy}));else if(mode==='move')setPos(p=>({...p,[target]:{x:p[target].x+dx/z,y:p[target].y+dy/z}}))};
  const up=(e:PointerEvent)=>{pointers.delete(e.pointerId);if(pointers.size<2)pinch=0;if(mode==='pan'&&moved<4)setSelected(null);mode=null;delete el.dataset.dragging};
  const wheel=(e:WheelEvent)=>{if((e.target as HTMLElement).closest('[data-ui]'))return;e.preventDefault();cancelAnimationFrame(fly.current);setGuideOn(false);const r=el.getBoundingClientRect();
   if(e.ctrlKey||e.metaKey)zoomBy(Math.exp(-clamp(e.deltaY,-40,40)*.01),e.clientX-r.left,e.clientY-r.top);else setCam(v=>({...v,x:v.x-e.deltaX,y:v.y-e.deltaY}))};
  const dbl=(e:MouseEvent)=>{const node=(e.target as HTMLElement).closest<HTMLElement>('[data-node]');if(node&&!(e.target as HTMLElement).closest('a,button'))focusRef.current(node.dataset.node!)};
  /* Keyboard focus inside a frame brings that frame into view instead of scrolling the viewport. */
  const focus=(e:FocusEvent)=>{el.scrollTop=0;el.scrollLeft=0;const node=(e.target as HTMLElement).closest<HTMLElement>('[data-node]');if(node&&e.target!==node)focusRef.current(node.dataset.node!)};
  el.addEventListener('pointerdown',down);el.addEventListener('pointermove',move);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);el.addEventListener('wheel',wheel,{passive:false});el.addEventListener('dblclick',dbl);el.addEventListener('focusin',focus);
  return()=>{el.removeEventListener('pointerdown',down);el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up);el.removeEventListener('pointercancel',up);el.removeEventListener('wheel',wheel);el.removeEventListener('dblclick',dbl);el.removeEventListener('focusin',focus)}},[zoomBy]);

 useEffect(()=>{const key=(e:KeyboardEvent)=>{const t=e.target as HTMLElement;if(t.closest('input,textarea,[data-snake-board]'))return;
  if(e.shiftKey&&e.code==='Digit1'){e.preventDefault();fitAll()}else if(e.shiftKey&&e.code==='Digit0'){e.preventDefault();zoomBy(1/camRef.current.z)}else if((e.key==='='||e.key==='+')&&!e.metaKey&&!e.ctrlKey)zoomBy(1.2);else if(e.key==='-'&&!e.metaKey&&!e.ctrlKey)zoomBy(1/1.2);else if(e.key==='Escape')setSelected(null)};
  addEventListener('keydown',key);return()=>removeEventListener('keydown',key)},[fitAll,zoomBy]);

 const sel=selected?nodes.find(n=>n.id===selected):null,selBox=selected?boxOf(selected):null;
 const guideNode=tour[guide][0],gb=boxOf(guideNode);
 const center=(id:string)=>{const b=boxOf(id);return {x:b.x+b.w/2,y:b.y+b.h/2,b}};
 return <div className={c.root}>
  <div ref={view} className={c.viewport} data-ready={ready?'':undefined} role="application" aria-label="Portfolio canvas. Drag to pan, scroll to move, Command or Control plus scroll to zoom." style={{'--z':cam.z} as CSSProperties}>
   <div className={c.world} style={{transform:`translate3d(${cam.x}px,${cam.y}px,0) scale(${cam.z})`}}>
    <svg className={c.connectors} aria-hidden="true">{links.map(([from,to,label])=>{const a=center(from),b=center(to);const sx=a.b.x+a.b.w,sy=a.y-40,ex=b.b.x,ey=b.y-40;const mx=(sx+ex)/2;return <g key={from+to}><path d={`M${sx+12} ${sy} C${mx} ${sy-60}, ${mx} ${ey+60}, ${ex-14} ${ey}`}/><path d={`M${ex-26} ${ey-7} L${ex-14} ${ey} L${ex-25} ${ey+8}`}/><text x={mx} y={(sy+ey)/2-14}>{label}</text></g>})}</svg>
    {nodes.map(n=>{const p=pos[n.id];return <div key={n.id} data-node={n.id} className={`${c.node} ${n.kind==='Sticky'?c.stickyNode:''}`} data-tone={n.tone} data-selected={selected===n.id?'':undefined} style={{left:p.x,top:p.y,width:n.w}}>
     {n.kind==='Frame'&&<span className={c.label}>#&nbsp;{n.name}</span>}
     <div className={c.card}>{n.body}</div>
    </div>})}
    {sel&&selBox&&<div className={c.selection} style={{left:selBox.x,top:selBox.y,width:selBox.w,height:selBox.h}} aria-hidden="true"><i/><i/><i/><i/><span>{Math.round(selBox.w)} × {Math.round(selBox.h)}</span></div>}
    {guideOn&&ready&&<div className={c.guide} style={{left:gb.x+gb.w*.72,top:gb.y+Math.min(gb.h*.4,160)}} aria-hidden="true"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M1 1l5.5 14 2.2-5.8L14.5 7z"/></svg><span>Sumit</span><b key={guide}>{tour[guide][1]}</b></div>}
   </div>
  </div>

  <nav className={c.layers} data-ui aria-label="Layers">
   <div className={c.panelHead}><strong>Layers</strong><span>Home</span></div>
   <ul>{nodes.map(n=><li key={n.id}><button type="button" data-active={selected===n.id?'':undefined} onClick={()=>focusNode(n.id)}><span className={c.layerIcon}>{n.kind==='Sticky'?'▤':'#'}</span>{n.name}</button></li>)}</ul>
   <div className={c.panelFoot}><button type="button" onClick={onList}>View as a list</button></div>
  </nav>

  {sel&&selBox&&<aside className={c.design} data-ui aria-label="Selected frame">
   <div className={c.panelHead}><strong>{sel.name}</strong><span>{sel.kind}</span></div>
   <dl className={c.props}><div><dt>X</dt><dd>{Math.round(selBox.x)}</dd></div><div><dt>Y</dt><dd>{Math.round(selBox.y)}</dd></div><div><dt>W</dt><dd>{Math.round(selBox.w)}</dd></div><div><dt>H</dt><dd>{Math.round(selBox.h)}</dd></div></dl>
   <div className={c.prop}><span>Fill</span><span className={c.fill}><i data-tone={sel.tone}/>{sel.kind==='Sticky'?(sel.tone==='green'?'D9F2C7':'FFE58A'):'Surface'}</span></div>
   <div className={c.prop}><span>Radius</span><span>{sel.kind==='Sticky'?4:14}</span></div>
   {sel.href&&<a className={c.open} href={sel.href} target="_blank" rel="noreferrer">Open prototype <Arrow size={12}/></a>}
   <button type="button" className={c.zoomTo} onClick={()=>focusNode(sel.id)}>Zoom to selection</button>
  </aside>}

  <div className={c.toolbar} data-ui>
   <button type="button" aria-label="Zoom out" onClick={()=>zoomBy(1/1.2)}>−</button>
   <button type="button" className={c.zoomValue} aria-label="Reset zoom to 100%" onClick={()=>zoomBy(1/cam.z)}>{Math.round(cam.z*100)}%</button>
   <button type="button" aria-label="Zoom in" onClick={()=>zoomBy(1.2)}>+</button>
   <span className={c.sep}/>
   <button type="button" onClick={fitAll}>Fit all</button>
   <span className={c.hint}>Drag to pan · ⌘ scroll to zoom · ⇧1 fit</span>
  </div>
 </div>;
}
