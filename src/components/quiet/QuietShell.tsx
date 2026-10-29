"use client";
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useTheme} from 'next-themes';
import {useCallback,useEffect,useRef,useState} from 'react';
import {profile} from '@/data/profile';
import {revealQuietPage} from '@/lib/quiet-snake';
import {Arrow,CopyIcon,GithubIcon,InspectIcon,ThemeIcon,XIcon} from './Icons';
import Inspector from './Inspector';
import s from './Quiet.module.css';
import f from './Frame.module.css';
const links=[['Work','/projects'],['Writing','/blog'],['About','/about'],['Craft','/craft']];
export default function QuietShell({children}:{children:React.ReactNode}){
 const shell=useRef<HTMLDivElement>(null);const path=usePathname();const {resolvedTheme,setTheme}=useTheme();const [copy,setCopy]=useState('');const [inspect,setInspect]=useState(false);const timer=useRef<ReturnType<typeof setTimeout>>();
 const closeInspect=useCallback(()=>setInspect(false),[]);
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 useEffect(()=>{if(shell.current)return revealQuietPage(shell.current)},[path]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{const el=e.target as HTMLElement;if(e.key.toLowerCase()!=='i'||e.metaKey||e.ctrlKey||e.altKey||el.closest('input,textarea,[contenteditable=true],[data-snake-board]'))return;setInspect(v=>!v)};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
 async function copyEmail(){clearTimeout(timer.current);try{await navigator.clipboard.writeText(profile.email);setCopy('Copied to clipboard');}catch{setCopy('Couldn’t copy. Use the email link.');}timer.current=setTimeout(()=>setCopy(''),3000);}
 return <div ref={shell} className={`${s.quiet} ${f.canvas}`} data-quiet data-inspect={inspect?'':undefined}><a href="#main" className={s.skip}>Skip to content</a>
 <div className={f.frame} data-frame>
 <header className={f.header}>
  <Link href="/" className={f.mark} aria-label="Sumit Sharma, home"><Image src="/avatar.jpg" alt="" width={24} height={24}/><span>Sumit Sharma</span></Link>
  <nav className={f.nav} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} aria-current={path.startsWith(href)?'page':undefined}>{label}</Link>)}</nav>
  <div className={f.tools} data-inspect-ui>
   <a className={`${f.iconButton} ${f.social}`} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon/></a>
   <a className={`${f.iconButton} ${f.social}`} href={profile.twitter} target="_blank" rel="noreferrer" aria-label="X"><XIcon/></a>
   <span className={f.divider}/>
   <button className={f.iconButton} type="button" aria-pressed={inspect} aria-label="Inspect layout" title="Inspect layout (I)" onClick={()=>setInspect(v=>!v)}><InspectIcon/></button>
   <button className={`${s.theme} ${f.iconButton}`} type="button" aria-label="Toggle colour theme" onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')}><ThemeIcon/></button>
  </div>
 </header>
 <main id="main" tabIndex={-1}>{children}</main>
 <footer className={f.footer} id="contact" aria-label="Contact">
  <p className={f.footerIndex}>Contact</p>
  <h2>Let’s work together.</h2>
  <p className={f.footerInvitation}>Open to projects and collaborations.</p>
  <div className={f.actions}>
   <span className={f.emailGroup}><a className={`${f.button} ${f.primary}`} href={`mailto:${profile.email}`} title={profile.email}>Email me</a><button type="button" className={`${f.button} ${f.primary}`} aria-label="Copy email address" title={profile.email} onClick={copyEmail}><CopyIcon/></button></span>
   <a className={f.button} href={profile.calendar} target="_blank" rel="noreferrer">Book a call <Arrow size={13}/></a>
   <span className={f.copyStatus} role="status">{copy}</span>
  </div>
  <nav className={f.footerLinks} aria-label="Footer links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.twitter} target="_blank" rel="noreferrer">X</a><a href="https://buymeacoffee.com/sumitsharmq" target="_blank" rel="noreferrer">Buy me a coffee</a><a href="#main">Back to top</a></nav>
  <p className={f.colophon}>Designed and built by Sumit. Set in Inter and Geist Mono. Press <kbd>I</kbd> to inspect the layout.</p>
 </footer>
 </div>
 {inspect&&<Inspector onClose={closeInspect}/>}
 </div>;
}
