"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import type {QuietProject} from '@/data/quiet';
import {Arrow,PlusIcon} from './Icons';
import h from './Home.module.css';
export type ProjectRow=QuietProject&{tagline:string;live?:boolean;extra?:{label:string;href:string;title?:string}[]};
export default function ProjectRows({projects}:{projects:ProjectRow[]}){
 const [open,setOpen]=useState<string|undefined>(projects[0]?.slug);
 return <div className={h.rows}>{projects.map(p=>{const expanded=open===p.slug,panel=`panel-${p.slug}`,host=new URL(p.href).hostname;return <div key={p.slug} className={h.row} data-open={expanded?'':undefined}>
  <button type="button" className={h.rowButton} aria-expanded={expanded} aria-controls={panel} onClick={()=>setOpen(expanded?undefined:p.slug)}>
   {p.logo?<Image src={p.logo} alt="" width={20} height={20} unoptimized className={h.rowLogo}/>:<span className={h.rowLogo}/>}
   <span className={h.rowName}>{p.name}</span>
   <span className={h.rowTag}>{p.tagline}</span>
   <span className={h.rowStatus}>{p.status&&<>{p.live&&<i/>}{p.status}</>}</span>
   <span className={h.plus}><PlusIcon/></span>
  </button>
  <div id={panel} className={h.panel} ref={el=>{if(el)el.inert=!expanded}}><div className={h.panelInner}><div className={h.panelBody}>
   {p.image&&<a href={p.href} target="_blank" rel="noreferrer" className={h.shot} tabIndex={-1} aria-hidden="true"><Image src={p.image} alt="" fill sizes="(max-width:640px) 100vw, 380px"/></a>}
   <div className={h.panelText}><p>{p.description}</p><div className={h.panelLinks}>
    <a href={p.href} target="_blank" rel="noreferrer">{host} <Arrow size={13}/></a>
    {p.slug==='glyph'&&<Link href="/projects/glyph">Read the case study <Arrow size={13}/></Link>}
    {p.extra?.map(link=><a key={link.href} href={link.href} title={link.title} target="_blank" rel="noreferrer">{link.label} <Arrow size={13}/></a>)}
   </div></div>
  </div></div></div>
 </div>})}</div>;
}
