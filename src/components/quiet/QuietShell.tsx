"use client";
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTheme} from 'next-themes';
import {useEffect,useRef,useState} from 'react';
import {profile} from '@/data/profile';
import {revealQuietPage} from '@/lib/quiet-snake';
import {CopyIcon,ThemeIcon} from './Icons';
import s from './Quiet.module.css';
export default function QuietShell({children}:{children:React.ReactNode}){
 const shell=useRef<HTMLDivElement>(null);const path=usePathname();const {resolvedTheme,setTheme}=useTheme();const [copy,setCopy]=useState('');const timer=useRef<ReturnType<typeof setTimeout>>();
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 useEffect(()=>{if(shell.current)return revealQuietPage(shell.current)},[path]);
 async function copyEmail(){clearTimeout(timer.current);try{await navigator.clipboard.writeText(profile.email);setCopy('Copied');}catch{setCopy('Couldn’t copy. Use the email link.');}timer.current=setTimeout(()=>setCopy(''),3000);}
 return <div ref={shell} className={s.quiet} data-quiet><a href="#main" className={s.skip}>Skip to content</a><div className={s.container}>
 <header className={s.header}><div className={s.navigation}><nav aria-label="Main navigation">{[['Home','/'],['Work','/projects'],['Writing','/blog'],['About','/about'],['Craft','/craft']].map(([label,href])=><Link key={href} href={href} aria-current={(href==='/'?path==='/':path.startsWith(href))?'page':undefined}>{label}</Link>)}</nav><button className={s.theme} type="button" aria-label="Toggle colour theme" onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')}><ThemeIcon/></button></div></header>
 <main id="main" tabIndex={-1}>{children}</main>
 <footer className={s.footer} id="contact" aria-label="Contact"><h2>Let’s work together.</h2><p className={s.footerInvitation}>Open to projects and collaborations.</p><div className={s.footerActions}><span className={s.emailAction}><a href={`mailto:${profile.email}`} title={profile.email}>Email me</a><button type="button" className={s.copy} aria-label="Copy email address" title={profile.email} onClick={copyEmail}><CopyIcon/></button></span><a href={profile.calendar} target="_blank" rel="noreferrer">Book a call</a><span className={s.copyStatus} role="status">{copy}</span></div><nav className={s.footerLinks} aria-label="Footer links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href="https://x.com/sumitthq" target="_blank" rel="noreferrer">X</a><a href="https://buymeacoffee.com/sumitsharmq" target="_blank" rel="noreferrer">Buy me a coffee</a><a href="#main">Back to top</a></nav></footer>
 </div></div>;
}
