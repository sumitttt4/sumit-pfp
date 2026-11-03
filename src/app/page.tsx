import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Greeting from '@/components/quiet/Greeting';
import PreviewLink from '@/components/quiet/PreviewLink';
import ProjectViews from '@/components/quiet/ProjectViews';
import Tool from '@/components/quiet/Tool';
import GithubActivity from '@/components/quiet/GithubActivity';
import {Arrow} from '@/components/quiet/Icons';
import posts from '@/data/blog';
import {experience,profile} from '@/data/profile';
import {featuredProjects} from '@/data/quiet';
import revenue from '@/data/glyph-revenue.json';
import h from '@/components/quiet/Home.module.css';
export const metadata:Metadata={title:'Sumit Sharma — Design engineer',description:'Design engineer. Products, notes, and small things worth using.',alternates:{canonical:'/'}};
const project=(slug:string)=>featuredProjects.find(p=>p.slug===slug)!;
const writing=['building-glyph','your-ai-built-website-needs-a-visual-direction-before-it-needs-another-prompt-d30168236c7b'].map(slug=>posts.find(p=>p.slug===slug)!);
function Head({index,title,more}:{index:string;title:string;more?:React.ReactNode}){return <div className={h.head}><span className={h.index}>{index}</span><h2>{title}</h2>{more}</div>}
export default function Home(){return <>
 <section className={h.hero}>
  <div className={h.identity}><span className={h.avatar}><Image src="/avatar.jpg" alt="" fill sizes="64px" priority/></span><div><Greeting className={h.greeting}/><h1 className={h.name}>Sumit Sharma</h1><p className={h.role}>Design engineer · Frontend at <a href="https://craon.ai" target="_blank" rel="noreferrer">Craon</a></p></div></div>
  <p className={h.lead}>I build products for the web, from the first interface to the details of how it works. I shipped <PreviewLink {...project('glyph')}/>, a brand-identity tool with <a className={h.revenue} href={revenue.source} target="_blank" rel="noreferrer" title={`Verified on TrustMRR with ${revenue.verifiedWith}, checked ${revenue.checkedAt}`}>${revenue.allTime} in revenue</a> so far, and I make tools for people who build interfaces: <PreviewLink {...project('glaze')}/>, <PreviewLink {...project('glyph-skill')}/> and <PreviewLink {...project('slate')}/>.</p>
  <p className={h.heroLinks}><a href={profile.calendar} target="_blank" rel="noreferrer">Book a call <Arrow size={13}/></a><a href="#contact">Email me</a></p>
 </section>
 <section className={h.section}><ProjectViews storageKey="view-featured" projects={featuredProjects} head={<Head index="01" title="Things I’ve built" more={<Link className={h.more} href="/projects">All projects <Arrow size={13}/></Link>}/>}/></section>
 <section className={h.section}><Head index="02" title="Experience"/><ol className={h.jobs}>{experience.map(job=><li key={job.company}><h3>{job.href?<a href={job.href} target="_blank" rel="noreferrer">{job.company}</a>:job.company}{job.current&&<span className={h.now}>Now</span>}</h3><span className={h.jobDate}>{job.date}</span><p className={h.jobRole}>{job.role}</p><p>{job.description}</p></li>)}</ol></section>
 <section className={h.section}><Head index="03" title="How I work" more={<Link className={h.more} href="/craft">Full kit <Arrow size={13}/></Link>}/><p className={h.stackLine}>Mostly <Tool name="TypeScript" logo="typescript"/>, <Tool name="React" logo="react"/> and <Tool name="Next.js" logo="nextjs"/>, styled with <Tool name="Tailwind" logo="tailwind"/>, designed in <Tool name="Figma" logo="figma"/>, with <Tool name="Claude Code"/> in the daily loop.</p></section>
 <section className={h.section}><Head index="04" title="Writing" more={<Link className={h.more} href="/blog">All writing <Arrow size={13}/></Link>}/><div className={h.posts}>{writing.map(post=>{const body=<><h3>{post.title}</h3><time>{post.date}</time></>;return post.link?<a key={post.slug} className={h.post} href={post.link} target="_blank" rel="noreferrer">{body}</a>:<Link key={post.slug} className={h.post} href={`/blog/${post.slug}`}>{body}</Link>})}</div></section>
 <GithubActivity className={h.section} head={<Head index="05" title="On GitHub" more={<a className={h.more} href={profile.github} target="_blank" rel="noreferrer">@sumitttt4 <Arrow size={13}/></a>}/>}/>
 </>}
