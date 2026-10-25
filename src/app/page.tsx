import HeadingWords from '@/components/quiet/HeadingWords';
import type {Metadata} from 'next';
import Link from 'next/link';
import Greeting from '@/components/quiet/Greeting';
import PreviewLink from '@/components/quiet/PreviewLink';
import Tool from '@/components/quiet/Tool';
import Newsletter from '@/components/quiet/Newsletter';
import ExperienceTimeline from '@/components/quiet/ExperienceTimeline';
import GithubActivity from '@/components/quiet/GithubActivity';
import posts from '@/data/blog';
import {selectedProjects} from '@/data/quiet';
import s from '@/components/quiet/Quiet.module.css';
export const metadata:Metadata={title:'Sumit Sharma — Design engineer',description:'Design engineer. Products, notes, and small things worth using.',alternates:{canonical:'/'}};
const glyph=selectedProjects.find(p=>p.slug==='glyph')!;
const glyphSkill=selectedProjects.find(p=>p.slug==='glyph-skill')!;
const fedup=selectedProjects.find(p=>p.slug==='fedup-studio')!;
const musiclb=selectedProjects.find(p=>p.slug==='musiclb')!;
export default function Home(){return <>
 <section className={s.intro}><Greeting/><h1><HeadingWords text="Sumit Sharma"/></h1><p>Design engineer</p></section>
 <section className={s.section} aria-labelledby="work-title"><h2 id="work-title">Things I’ve built</h2><div className={s.prose}>
 <p>I shipped <PreviewLink {...glyph}/>, an AI brand-identity product: one brief in, a full launch kit out. <span className={s.projectStatus}>Live · paid</span></p>
 <p>I’m also building <PreviewLink {...glyphSkill}/>, a design skill that helps AI coding assistants build better UI and frontend layouts.</p>
 <p><PreviewLink {...fedup}/> is a free library of the actual landing-page code from open-source products.</p>
 <p><PreviewLink {...musiclb}/> keeps your days in songs.</p>
 </div><Link className={s.quietLink} href="/projects">All projects</Link></section>
 <section className={s.section}><h2>How I work</h2><p className={s.prose}>Mostly <Tool name="TypeScript" logo="typescript"/>, <Tool name="React" logo="react"/> and <Tool name="Next.js" logo="nextjs"/>, styled with <Tool name="Tailwind" logo="tailwind"/>, designed in <Tool name="Figma" logo="figma"/>, with <Tool name="Claude Code"/> in the daily loop.</p><Link href="/craft" className={s.quietLink}>The rest of my working kit</Link></section>
 <section className={s.section}><h2>Writing</h2><div className={s.homeWriting}>{['building-glyph','your-ai-built-website-needs-a-visual-direction-before-it-needs-another-prompt-d30168236c7b'].map(slug=>{const post=posts.find(p=>p.slug===slug)!;const content=<><h3>{post.title}</h3><p>{post.excerpt}</p></>;return post.link?<a key={slug} href={post.link} target="_blank" rel="noreferrer">{content}</a>:<Link key={slug} href={`/blog/${slug}`}>{content}</Link>})}</div><Link className={s.quietLink} href="/blog">All writing</Link></section>
 <ExperienceTimeline/>
 <GithubActivity/>
 <Newsletter/>
 </>}
