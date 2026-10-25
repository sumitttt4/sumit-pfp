import HeadingWords from '@/components/quiet/HeadingWords';
import type {Metadata} from 'next';
import Link from 'next/link';
import PreviewLink from '@/components/quiet/PreviewLink';
import {personalProfiles} from '@/data/quiet';
import s from '@/components/quiet/Quiet.module.css';
export const metadata:Metadata={title:'About — Sumit Sharma',alternates:{canonical:'/about'}};
export default function About(){return <>
 <header className={s.pageIntro}><p className={s.kicker}>About</p><h1><HeadingWords text="A little beyond the browser"/></h1><p>I’m Sumit Sharma, a design engineer.</p></header>
 <section className={s.aboutBody}><div className={s.prose}><p>I build products for the web, from the first interface to the details of how it works. My own projects include Glyph, an AI brand-identity product, Fedup Studio, a landing-page code library, and Musiclb, a song diary.</p><p className={s.affiliation}>Currently at Craon, previously at Metry AI.</p></div></section>
 <section className={s.section}><h2>Outside work</h2><div className={s.personalLinks}>
 <div><span>Music</span><PreviewLink {...personalProfiles[1]}/></div>
 <div><span>Films</span><PreviewLink {...personalProfiles[0]}/></div>
 <div><span>Learning</span><PreviewLink {...personalProfiles[2]}/></div>
 </div></section>
 <section className={s.section}><h2>Things I believe</h2><p className={s.beliefIntro}>A few ideas from my writing.</p><div className={s.personalBeliefs}><a href="https://medium.com/@sumitsharma9128/is-the-glass-half-empty-or-half-full-d4c8c097557e" target="_blank" rel="noreferrer"><h3>There’s room for more than one perspective.</h3><p>The same glass can be half empty and half full. The life behind a viewpoint matters.</p></a><a href="https://medium.com/write-a-catalyst/when-love-redefines-you-and-how-you-deal-when-its-over-39f5ed066748" target="_blank" rel="noreferrer"><h3>Identity needs more than one root.</h3><p>Work, friendships, passions and routines can each hold a part of who we are.</p></a><a href="https://medium.com/@sumitsharma9128/building-is-no-longer-the-hard-part-e83538ae79ad" target="_blank" rel="noreferrer"><h3>Building is only part of the work.</h3><p>Making a product better and helping people discover it are different problems.</p></a></div></section>
 <section className={s.section}><h2>What I’m working on</h2><p>I’m also building <a className={s.editorialLink} href="https://github.com/sumitttt4/Glyph-Skill" target="_blank" rel="noreferrer">Glyph-Skill</a>, a design skill for better UI and frontend work with coding assistants.</p><p className={s.aboutNavigation}><Link href="/projects">Explore my projects</Link><Link href="/craft">My tools and influences</Link><Link href="/blog">Read my writing</Link></p></section>
 </>}
