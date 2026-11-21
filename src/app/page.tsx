import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Greeting from '@/components/quiet/Greeting';
import PreviewLink from '@/components/quiet/PreviewLink';
import ProjectViews from '@/components/quiet/ProjectViews';
import GithubActivity from '@/components/quiet/GithubActivity';
import {Rows,SectionHead,rowStyles as r} from '@/components/quiet/Rows';
import posts from '@/data/blog';
import {experience,profile} from '@/data/profile';
import {featuredProjects} from '@/data/quiet';
import h from '@/components/quiet/Home.module.css';
export const metadata:Metadata={title:'Sumit Sharma — Design engineer',description:'Design engineer in India. I build for the web and make small, focused tools.',alternates:{canonical:'/'}};
const project=(slug:string)=>featuredProjects.find(p=>p.slug===slug)!;
const ext={target:'_blank',rel:'noreferrer'};
/* "Aug 2026 — Present" → "2026 – now", "Feb 2026 — Jun 2026" → "2026". */
const years=(date:string)=>{const [a,b]=date.split(' — ').map(d=>d==='Present'?'now':d.match(/\d{4}/)?.[0]);return !b||a===b?a:`${a} – ${b}`};
const collections=[
 {key:'writing',label:'Writing',meta:'Notes from making things',href:'/blog'},
 {key:'craft',label:'Craft',meta:'Tools and taste',href:'/craft'},
 {key:'about',label:'About',meta:'A little beyond the browser',href:'/about'},
 {key:'resume',label:'Résumé',meta:'For hiring managers',href:profile.resume},
];
const latest=[...posts].sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()).slice(0,4);
export default function Home(){return <>
 <section className={h.hero}>
  <div className={h.identity}><span className={h.avatar}><Image src="/avatar.jpg" alt="" fill sizes="56px" priority/></span><div><Greeting className={h.greeting}/><h1 className={h.name}>Sumit Sharma</h1><p className={h.role}>Design engineer</p></div></div>
  <div className={h.about}>
   <p>I’m from India. I build for the web and make small, focused tools like <PreviewLink {...project('glyph')}/>, <PreviewLink {...project('glaze')}/> and <PreviewLink {...project('glyph-skill')}/>.</p>
   <p>You can reach me on <a href={profile.github} {...ext}>GitHub</a>, <a href={profile.twitter} {...ext}>X</a>, <a href={profile.linkedin} {...ext}>LinkedIn</a> or by <a href="#contact">email</a>.</p>
  </div>
 </section>
 <section className={r.section}><SectionHead title="Collections"/><Rows items={collections}/></section>
 <section className={r.section}><ProjectViews title="Projects" storageKey="view-featured" projects={featuredProjects} more={<Link className={r.more} href="/projects">All</Link>}/></section>
 <section className={r.section}><SectionHead title="Experience"/><Rows items={experience.map(job=>({key:job.company,label:job.company,meta:`${job.role.split(' · ')[0]} · ${years(job.date)}`,href:job.href}))}/></section>
 <section className={r.section}><SectionHead title="Latest writing" more={<Link className={r.more} href="/blog">All</Link>}/><Rows items={latest.map(p=>({key:p.slug,label:p.title,meta:new Date(p.date).toLocaleDateString('en-US',{month:'short',year:'numeric',timeZone:'UTC'}),href:p.link??`/blog/${p.slug}`}))}/></section>
 <GithubActivity className={r.section} head={<SectionHead title="Activity" more={<a className={r.more} href={profile.github} {...ext}>@sumitttt4</a>}/>}/>
 </>}
