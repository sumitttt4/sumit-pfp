"use client";
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useTheme} from 'next-themes';
import {useCallback,useEffect,useRef,useState} from 'react';
import {Toaster,toast} from 'sonner';
import {profile} from '@/data/profile';
import {revealQuietPage} from '@/lib/quiet-snake';
import {revealOnScroll} from '@/lib/reveal';
import {Arrow,CopyIcon,GithubIcon,ThemeIcon,XIcon} from './Icons';
import VisitorCount from './VisitorCount';
import s from './Quiet.module.css';
import f from './Frame.module.css';
const built=process.env.NEXT_PUBLIC_BUILD_DATE;
const updated=built?new Date(built).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}):null;
const links=[['Work','/projects'],['Writing','/blog'],['About','/about'],['Craft','/craft']];
export default function QuietShell({children}:{children:React.ReactNode}){
 const shell=useRef<HTMLDivElement>(null);const path=usePathname();const {resolvedTheme,setTheme}=useTheme();
 const toggleTheme=useCallback(()=>setTheme(resolvedTheme==='dark'?'light':'dark'),[resolvedTheme,setTheme]);
 useEffect(()=>{if(shell.current)return revealQuietPage(shell.current)},[path]);
 useEffect(()=>revealOnScroll(),[path]);
 const [menu,setMenu]=useState(false);const header=useRef<HTMLElement>(null);
 useEffect(()=>{setMenu(false)},[path]);
 useEffect(()=>{if(!menu)return;const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false)};const outside=(e:PointerEvent)=>{if(!header.current?.contains(e.target as Node))setMenu(false)};addEventListener('keydown',key);document.addEventListener('pointerdown',outside);return()=>{removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside)}},[menu]);
 /* In-page links (Back to top, Email me) glide instead of jumping; page navigation stays instant. */
 useEffect(()=>{const click=(e:MouseEvent)=>{const a=(e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');if(!a||e.metaKey||e.ctrlKey||e.shiftKey)return;const target=document.getElementById(a.hash.slice(1));if(!target)return;e.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});history.replaceState(null,'',a.hash)};document.addEventListener('click',click);return()=>document.removeEventListener('click',click)},[]);
 const copyEmail=useCallback(async()=>{try{await navigator.clipboard.writeText(profile.email);toast('Email copied',{description:profile.email});}catch{toast('Couldn’t copy',{description:'Use the Email me link instead.'});}},[]);
 return <div ref={shell} className={`${s.quiet} ${f.canvas}`} data-quiet><a href="#main" className={s.skip}>Skip to content</a>
 <div className={f.frame} data-frame>
 <header ref={header} className={f.header} data-menu={menu?'':undefined}>
  <Link href="/" className={f.mark} aria-label="Sumit Sharma, home"><Image src="/avatar.jpg" alt="" width={24} height={24}/><span>Sumit Sharma</span></Link>
  <nav className={f.nav} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} aria-current={path.startsWith(href)?'page':undefined}>{label}</Link>)}</nav>
  <div className={f.tools}>
   <a className={`${f.iconButton} ${f.social}`} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon/></a>
   <a className={`${f.iconButton} ${f.social}`} href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X"><XIcon/></a>
   <span className={f.divider}/>
   <button className={`${s.theme} ${f.iconButton}`} type="button" aria-label="Toggle colour theme" onClick={toggleTheme}><ThemeIcon/></button>
   <button className={f.menuButton} type="button" aria-expanded={menu} aria-controls="phone-menu" aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(v=>!v)}><span/><span/><span/></button>
  </div>
  <div id="phone-menu" className={f.menu} ref={el=>{if(el)el.inert=!menu}}>
   <nav aria-label="Menu">{[['Home','/'],...links].map(([label,href],i)=><Link key={href} href={href} style={{'--i':i} as React.CSSProperties} aria-current={(href==='/'?path==='/':path.startsWith(href))?'page':undefined} onClick={()=>setMenu(false)}>{label}</Link>)}</nav>
   <div className={f.menuSocial} style={{'--i':links.length+1} as React.CSSProperties}><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon/>GitHub</a><a href={profile.twitter} target="_blank" rel="noreferrer"><XIcon/>X</a></div>
  </div>
 </header>
 <div className={f.menuBackdrop} data-open={menu?'':undefined} aria-hidden="true" onClick={()=>setMenu(false)}/>
 <main id="main" tabIndex={-1}>{children}</main>
 <footer className={f.footer} id="contact" aria-label="Contact">
  <p className={f.footerIndex}>Contact</p>
  <h2>Let’s work together.</h2>
  <p className={f.footerInvitation}>Open to projects and collaborations.</p>
  <p className={f.footerZone}>Based in {profile.timezone}</p>
  <div className={f.actions}>
   <span className={f.emailGroup}><a href={`mailto:${profile.email}`} title={profile.email}>Email me</a><button type="button" className={s.copy} aria-label="Copy email address" title={profile.email} onClick={copyEmail}><CopyIcon/></button></span>
   <a href={profile.calendar} target="_blank" rel="noreferrer">Book a call <Arrow size={13}/></a>
  </div>
  <nav className={f.footerLinks} aria-label="Footer links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.twitter} target="_blank" rel="noreferrer">X</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="https://buymeacoffee.com/sumitsharmq" target="_blank" rel="noreferrer">Buy me a coffee</a><a href="#main">Back to top</a></nav>
  <p className={f.colophon}>Designed and built by Sumit.</p>
  <div className={f.meta}><VisitorCount/>{updated&&<span>Last updated · {updated}</span>}</div>
 </footer>
 </div>
 <Toaster theme={resolvedTheme==='dark'?'dark':'light'} position="bottom-center" toastOptions={{className:f.toast}}/>
 </div>;
}
