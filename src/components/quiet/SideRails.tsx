"use client";
import {useEffect,useState} from 'react';
import f from './Frame.module.css';
type Mark={index:string;label:string;top:number};
type Spec={size:string;padding:string;heading:string;scroll:number};
const family=(value:string)=>/manrope/i.test(value)?'Manrope':/mono/i.test(value)?'Geist Mono':'Inter';
/* Wide screens only: a scroll ruler in the left margin and a live spec card in the right one. */
export default function SideRails(){
 const [marks,setMarks]=useState<Mark[]>([]);const [active,setActive]=useState(0);const [pos,setPos]=useState(0);const [spec,setSpec]=useState<Spec|null>(null);const [shown,setShown]=useState(false);
 useEffect(()=>{
  let frame=0,sections:HTMLElement[]=[];
  const collect=()=>{sections=Array.from(document.querySelectorAll<HTMLElement>('[data-frame] main > section, [data-frame] > footer'));const height=document.documentElement.scrollHeight;
   setMarks(sections.map((el,i)=>({index:String(i).padStart(2,'0'),label:el.tagName==='FOOTER'?'Contact':el.querySelector('h2')?.textContent??(i===0?'Intro':'Section'),top:(el.getBoundingClientRect().top+scrollY)/height})))};
  const update=()=>{frame=0;if(!sections.length)return;const height=document.documentElement.scrollHeight,line=Math.min(innerHeight*.4,160);
   let current=0;sections.forEach((el,i)=>{if(el.getBoundingClientRect().top<=line)current=i});
   if(scrollY+innerHeight>=height-2)current=sections.length-1;
   const el=sections[current],r=el.getBoundingClientRect(),cs=getComputedStyle(el),heading=el.querySelector('h2,h1'),hs=heading&&getComputedStyle(heading);
   setActive(current);setPos(Math.min(1,(scrollY+line)/height));setShown(scrollY>160);
   setSpec({size:`${Math.round(r.width)} × ${Math.round(r.height)}`,padding:`${parseFloat(cs.paddingTop)} · ${parseFloat(cs.paddingBottom)}`,heading:hs?`${family(hs.fontFamily)} ${Math.round(parseFloat(hs.fontSize))} / ${hs.fontWeight}`:'—',scroll:Math.round(scrollY/Math.max(1,height-innerHeight)*100)})};
  const queue=()=>{if(!frame)frame=requestAnimationFrame(update)};
  const refresh=()=>{collect();queue()};
  refresh();const observer=new ResizeObserver(refresh);observer.observe(document.body);addEventListener('scroll',queue,{passive:true});
  return()=>{cancelAnimationFrame(frame);observer.disconnect();removeEventListener('scroll',queue)};
 },[]);
 if(!marks.length)return null;
 const jump=(i:number)=>{const el=document.querySelectorAll<HTMLElement>('[data-frame] main > section, [data-frame] > footer')[i];el?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
 return <div aria-hidden={!shown} className={f.rails} data-shown={shown?'':undefined}>
  <nav className={f.ruler} aria-label="Page sections">
   <span className={f.rulerFill} style={{height:`${pos*100}%`}}/>
   <span className={f.rulerCaret} style={{top:`${pos*100}%`}}/>
   {marks.map((m,i)=><button type="button" key={m.index} tabIndex={shown?0:-1} className={f.rulerMark} data-active={i===active?'':undefined} style={{top:`${m.top*100}%`}} onClick={()=>jump(i)} aria-label={`Go to ${m.label}`}><i/><b>{m.index}</b><span>{m.label}</span></button>)}
  </nav>
  {spec&&<aside className={f.specCard}>
   <p className={f.specKicker}>Inspecting</p>
   <p className={f.specTitle} key={active}><b>{marks[active]?.index}</b>{marks[active]?.label}</p>
   <dl>
    <div><dt>Frame</dt><dd>{spec.size}</dd></div>
    <div><dt>Padding</dt><dd>{spec.padding}</dd></div>
    <div><dt>Heading</dt><dd>{spec.heading}</dd></div>
    <div><dt>Scroll</dt><dd>{spec.scroll}%</dd></div>
   </dl>
   <p className={f.specHint}>Press <kbd>I</kbd> to inspect anything</p>
  </aside>}
 </div>;
}
