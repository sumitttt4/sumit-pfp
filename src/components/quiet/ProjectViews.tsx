"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useEffect,useState,type CSSProperties,type ReactNode} from 'react';
import type {QuietProject} from '@/data/quiet';
import {GithubIcon,GlobeIcon} from './Icons';
import PreviewLink from './PreviewLink';
import {Rows,rowStyles as r} from './Rows';
import v from './ProjectViews.module.css';
type View='list'|'grid';
function Primary({p,className,children,label}:{p:QuietProject;className?:string;children:ReactNode;label?:string}){
 return p.detail?<Link className={className} href={p.detail} aria-label={label}>{children}</Link>:<a className={className} href={p.href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}
/* Projects as dotted rows or a screenshot grid; the choice is remembered per visitor. */
export default function ProjectViews({projects,title,more,storageKey,defaultView='list'}:{projects:QuietProject[];title:string;more?:ReactNode;storageKey:string;defaultView?:View}){
 const [view,setView]=useState<View>(defaultView);const [animate,setAnimate]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem(storageKey);if(saved==='list'||saved==='grid')setView(saved)}catch{}},[storageKey]);
 const choose=(next:View)=>{if(next===view)return;setAnimate(true);setView(next);try{localStorage.setItem(storageKey,next)}catch{}};
 const host=(p:QuietProject)=>new URL(p.href).hostname.replace(/^www\./,'');
 return <div className={v.root}>
  <div className={r.head}><h2>{title}</h2>
   <div className={v.tools}>{more}
    <div className={v.toggle} role="radiogroup" aria-label="Project layout">{(['list','grid'] as const).map(k=><button key={k} type="button" role="radio" aria-checked={view===k} onClick={()=>choose(k)}>{k==='list'?'List':'Grid'}</button>)}</div>
   </div>
  </div>
  {view==='list'?<div key="list" className={v.list} data-animate={animate?'':undefined}><Rows items={projects.map(p=>({key:p.slug,label:<PreviewLink href={p.detail??p.href} name={p.name} logo={p.logo} image={p.image} note={p.tagline}/>,meta:<>{p.live&&<i className={r.dot} aria-label="Live"/>}{p.tagline??p.status}</>}))}/></div>
  :<ul key="grid" className={v.grid} data-animate={animate?'':undefined}>{projects.map((p,i)=><li key={p.slug} className={v.card} style={{'--i':i} as CSSProperties}>
   <Primary p={p} className={v.shot} label={`${p.name}${p.detail?' project notes':' website'}`}>{p.image?<Image src={p.image} alt="" fill sizes="(max-width:640px) 100vw, 320px"/>:<span className={v.shotEmpty}>{p.name}</span>}</Primary>
   <div className={v.cardHead}>
    <Primary p={p} className={v.name}>{p.logo&&<Image src={p.logo} alt="" width={16} height={16} unoptimized/>}<span>{p.name}</span></Primary>
    <span className={v.icons}><a href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.name} website (${host(p)})`} title={host(p)}><GlobeIcon/></a>{p.repo&&<a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} title="GitHub"><GithubIcon/></a>}</span>
   </div>
   <p>{p.live&&<i className={r.dot} aria-label="Live"/>}{p.tagline??p.description}</p>
  </li>)}</ul>}
 </div>;
}
