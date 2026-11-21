import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Greeting from '@/components/quiet/Greeting';
import PreviewLink from '@/components/quiet/PreviewLink';
import ProjectViews from '@/components/quiet/ProjectViews';
import GithubActivity from '@/components/quiet/GithubActivity';
import {Arrow} from '@/components/quiet/Icons';
import posts from '@/data/blog';
import {experience,profile} from '@/data/profile';
import {featuredProjects,personalProfiles} from '@/data/quiet';
import h from '@/components/quiet/Home.module.css';
export const metadata:Metadata={title:'Sumit Sharma — Design engineer',description:'Design engineer in India. I build for the web and make small, focused tools.',alternates:{canonical:'/'}};
const project=(slug:string)=>featuredProjects.find(p=>p.slug===slug)!;
const away=(name:string)=>personalProfiles.find(p=>p.name===name)!.href;
const writing=['building-glyph','your-ai-built-website-needs-a-visual-direction-before-it-needs-another-prompt-d30168236c7b'].map(slug=>posts.find(p=>p.slug===slug)!);
const ext={target:'_blank',rel:'noreferrer'};
function Head({title,more}:{title:string;more?:React.ReactNode}){return <div className={h.head}><h2>{title}</h2>{more}</div>}
export default function Home(){return <>
 <section className={h.hero}>
  <div className={h.identity}><span className={h.avatar}><Image src="/avatar.jpg" alt="" fill sizes="64px" priority/></span><div><Greeting className={h.greeting}/><h1 className={h.name}>Sumit Sharma</h1><p className={h.role}>Design engineer · Frontend at <a href="https://craon.ai" {...ext}>Craon</a></p></div></div>
  <div className={h.about}>
   <p>I’m a design engineer from India. I care about the whole thing: how an interface looks, how it feels in the hand, and how it works underneath.</p>
   <p>Right now I’m building an AI video editor at Craon. On the side I make small, focused tools for people who build interfaces, like <PreviewLink {...project('glyph')}/>, <PreviewLink {...project('glaze')}/> and <PreviewLink {...project('glyph-skill')}/>.</p>
   <p>Away from the screen I’m logging <a href={away('Letterboxd')} {...ext}>films</a>, looping <a href={away('Spotify')} {...ext}>playlists</a>, and <a href={away('Duolingo')} {...ext}>learning Spanish</a>.</p>
   <p>You can reach me on <a href={profile.github} {...ext}>GitHub</a>, <a href={profile.twitter} {...ext}>X</a>, <a href={profile.linkedin} {...ext}>LinkedIn</a> or by <a href="#contact">email</a>.</p>
  </div>
 </section>
 <section className={h.section}><ProjectViews storageKey="view-featured" projects={featuredProjects} head={<Head title="Projects"/>}/><p className={h.showMore}><Link href="/projects">All projects <Arrow size={13}/></Link></p></section>
 <section className={h.section}><Head title="Experience"/><ol className={h.jobs}>{experience.map(job=><li key={job.company}><h3>{job.href?<a href={job.href} {...ext}>{job.company}</a>:job.company}{job.current&&<span className={h.now}>Now</span>}</h3><span className={h.jobDate}>{job.date}</span><p className={h.jobRole}>{job.role}</p></li>)}</ol></section>
 <section className={h.section}><Head title="Writing" more={<Link className={h.more} href="/blog">All writing <Arrow size={13}/></Link>}/><div className={h.posts}>{writing.map(post=>{const body=<><h3>{post.title}</h3><time>{post.date}</time></>;return post.link?<a key={post.slug} className={h.post} href={post.link} {...ext}>{body}</a>:<Link key={post.slug} className={h.post} href={`/blog/${post.slug}`}>{body}</Link>})}</div></section>
 <GithubActivity className={h.section} head={<Head title="On GitHub" more={<a className={h.more} href={profile.github} {...ext}>@sumitttt4 <Arrow size={13}/></a>}/>}/>
 </>}
