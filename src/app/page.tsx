import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Greeting from '@/components/quiet/Greeting';
import PreviewLink from '@/components/quiet/PreviewLink';
import ProjectRows,{type ProjectRow} from '@/components/quiet/ProjectRows';
import Tool from '@/components/quiet/Tool';
import GithubActivity from '@/components/quiet/GithubActivity';
import {Arrow} from '@/components/quiet/Icons';
import posts from '@/data/blog';
import {experience,profile} from '@/data/profile';
import {personalProfiles,selectedProjects} from '@/data/quiet';
import skill from '@/data/glyph-skill.json';
import f from '@/components/quiet/Frame.module.css';
import h from '@/components/quiet/Home.module.css';
export const metadata:Metadata={title:'Sumit Sharma — Design engineer',description:'Design engineer. Products, notes, and small things worth using.',alternates:{canonical:'/'}};
const project=(slug:string)=>selectedProjects.find(p=>p.slug===slug)!;
const checked=new Date(skill.checkedAt+'T00:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});
const work:ProjectRow[]=[
 {...project('glyph'),tagline:'AI brand identity, one brief in',live:true},
 {...project('glyph-skill'),tagline:'Design skill for AI coding assistants',extra:[{label:`GitHub · ${skill.stars} stars`,href:skill.repository,title:`Star count checked ${checked}`}]},
 {...project('fedup-studio'),tagline:'Landing-page code library',status:'Free'},
 {...project('musiclb'),tagline:'Your days, in songs'},
];
const writing=['building-glyph','your-ai-built-website-needs-a-visual-direction-before-it-needs-another-prompt-d30168236c7b'].map(slug=>posts.find(p=>p.slug===slug)!);
const away=[{kind:'Music',...personalProfiles[1]},{kind:'Films',...personalProfiles[0]},{kind:'Learning',...personalProfiles[2]}];
function Head({index,title,more}:{index:string;title:string;more?:React.ReactNode}){return <div className={h.head}><span className={h.index}>{index}</span><h2>{title}</h2>{more}</div>}
export default function Home(){return <>
 <section className={h.hero}>
  <div className={h.identity}><span className={h.avatar}><Image src="/avatar.jpg" alt="" fill sizes="64px" priority/></span><div><Greeting className={h.greeting}/><h1 className={h.name}>Sumit Sharma</h1><p className={h.role}>Design engineer · Frontend at <a href="https://craon.ai" target="_blank" rel="noreferrer">Craon</a></p></div></div>
  <p className={h.lead}>I build products for the web, from the first interface to the details of how it works. I shipped <PreviewLink {...project('glyph')}/>, and I’m building <PreviewLink {...project('glyph-skill')}/> so AI coding assistants make better UI.</p>
  <p className={h.leadMuted}>Mostly TypeScript and React, designed in Figma, with Claude Code in the daily loop. Away from the screen: music, films and Spanish.</p>
  <div className={h.heroActions}><span className={h.status}><i className={h.dot}/>Open to projects</span><div className={h.heroLinks}><a className={`${f.button} ${f.primary}`} href={profile.calendar} target="_blank" rel="noreferrer">Book a call <Arrow size={13}/></a><a className={f.button} href="#contact">Get in touch</a></div></div>
 </section>
 <section className={`${f.rule} ${h.section}`}><Head index="01" title="Things I’ve built" more={<Link className={h.more} href="/projects">All projects <Arrow size={13}/></Link>}/><ProjectRows projects={work}/></section>
 <section className={`${f.rule} ${h.section}`}><Head index="02" title="Experience"/><ol className={h.jobs}>{experience.map(job=><li key={job.company}><h3>{job.href?<a href={job.href} target="_blank" rel="noreferrer">{job.company}</a>:job.company}{job.current&&<span className={h.now}>Now</span>}</h3><span className={h.jobDate}>{job.date}</span><p className={h.jobRole}>{job.role}</p><p>{job.description}</p></li>)}</ol></section>
 <section className={`${f.rule} ${h.section}`}><Head index="03" title="How I work" more={<Link className={h.more} href="/craft">Full kit <Arrow size={13}/></Link>}/><p className={h.stackLine}>Mostly <Tool name="TypeScript" logo="typescript"/>, <Tool name="React" logo="react"/> and <Tool name="Next.js" logo="nextjs"/>, styled with <Tool name="Tailwind" logo="tailwind"/>, designed in <Tool name="Figma" logo="figma"/>, with <Tool name="Claude Code"/> in the daily loop.</p></section>
 <section className={`${f.rule} ${h.section}`}><Head index="04" title="Writing" more={<Link className={h.more} href="/blog">All writing <Arrow size={13}/></Link>}/><div className={h.posts}>{writing.map(post=>{const body=<><h3>{post.title}</h3><time>{post.date}</time></>;return post.link?<a key={post.slug} className={h.post} href={post.link} target="_blank" rel="noreferrer">{body}</a>:<Link key={post.slug} className={h.post} href={`/blog/${post.slug}`}>{body}</Link>})}</div></section>
 <section className={`${f.rule} ${h.section}`}><Head index="05" title="Away from the screen"/><div className={h.cards}>{away.map(item=><a key={item.name} className={h.card} href={item.href} target="_blank" rel="noreferrer"><span className={`${h.cardImage} ${item.image.startsWith('/brands')?h.contain:''}`}><Image src={item.image} alt="" fill sizes="(max-width:640px) 72vw, 230px"/></span><span className={h.cardMeta}><span className={h.cardKind}>{item.kind}</span><span className={h.cardName}><Image src={item.logo} alt="" width={14} height={14} unoptimized/>{item.name}</span><span className={h.cardNote}>{item.note}</span></span></a>)}</div></section>
 <GithubActivity className={`${f.rule} ${h.section}`} head={<Head index="06" title="On GitHub" more={<a className={h.more} href={profile.github} target="_blank" rel="noreferrer">@sumitttt4 <Arrow size={13}/></a>}/>}/>
 </>}
