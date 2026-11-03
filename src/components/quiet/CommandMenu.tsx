"use client";
import {useRouter} from 'next/navigation';
import {useEffect,useId,useMemo,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
import {allProjects} from '@/data/quiet';
import {profile} from '@/data/profile';
import {SearchIcon} from './Icons';
import c from './CommandMenu.module.css';
type Item={id:string;group:string;label:string;hint?:string;keywords?:string;run:()=>void};
/* ⌘K / Ctrl+K: jump to any page or project, or run a quick action. */
export default function CommandMenu({onCopyEmail,onToggleTheme}:{onCopyEmail:()=>void;onToggleTheme:()=>void}){
 const router=useRouter();const [open,setOpen]=useState(false);const [query,setQuery]=useState('');const [active,setActive]=useState(0);const [mac,setMac]=useState(true);
 const input=useRef<HTMLInputElement>(null);const list=useRef<HTMLDivElement>(null);const opener=useRef<HTMLElement|null>(null);const id=useId();
 const external=(href:string)=>()=>window.open(href,'_blank','noopener,noreferrer');
 const items=useMemo<Item[]>(()=>[
  ...[['Home','/'],['Work','/projects'],['Writing','/blog'],['About','/about'],['Craft','/craft']].map(([label,href])=>({id:`page-${href}`,group:'Pages',label,run:()=>router.push(href)})),
  ...allProjects.map(p=>({id:`project-${p.slug}`,group:'Projects',label:p.name,hint:p.tagline??p.status,keywords:p.description,run:p.detail?()=>router.push(p.detail!):external(p.href)})),
  {id:'copy-email',group:'Actions',label:'Copy email',hint:profile.email,run:onCopyEmail},
  {id:'book-call',group:'Actions',label:'Book a call',hint:'cal.com',run:external(profile.calendar)},
  {id:'theme',group:'Actions',label:'Switch theme',hint:'Light / dark',keywords:'dark light mode',run:onToggleTheme},
  {id:'github',group:'Elsewhere',label:'GitHub',hint:'@sumitttt4',run:external(profile.github)},
  {id:'x',group:'Elsewhere',label:'X',hint:profile.twitterHandle,keywords:'twitter',run:external(profile.twitter)},
  {id:'linkedin',group:'Elsewhere',label:'LinkedIn',run:external(profile.linkedin)},
 ],[router,onCopyEmail,onToggleTheme]);
 const results=useMemo(()=>{const q=query.trim().toLowerCase();return q?items.filter(i=>`${i.label} ${i.hint??''} ${i.keywords??''} ${i.group}`.toLowerCase().includes(q)):items},[items,query]);
 const show=()=>{opener.current=document.activeElement as HTMLElement;setQuery('');setActive(0);setOpen(true)};
 const close=()=>{setOpen(false);opener.current?.focus?.()};
 const run=(item?:Item)=>{if(!item)return;setOpen(false);item.run()};
 useEffect(()=>{setMac(/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent))},[]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(open)close();else show()}};addEventListener('keydown',key);return()=>removeEventListener('keydown',key)});
 useEffect(()=>{if(!open)return;input.current?.focus();const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=prev}},[open]);
 useEffect(()=>{setActive(0)},[query]);
 useEffect(()=>{list.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({block:'nearest'})},[active]);
 const onKey=(e:React.KeyboardEvent)=>{if(e.key==='ArrowDown'){e.preventDefault();setActive(a=>Math.min(results.length-1,a+1))}else if(e.key==='ArrowUp'){e.preventDefault();setActive(a=>Math.max(0,a-1))}else if(e.key==='Enter'){e.preventDefault();run(results[active])}else if(e.key==='Escape'){e.preventDefault();close()}else if(e.key==='Tab')e.preventDefault()};
 let last='';
 return <>
  <button type="button" className={c.trigger} onClick={show} aria-label="Open command menu" aria-haspopup="dialog" aria-keyshortcuts="Meta+K Control+K"><SearchIcon/><kbd>{mac?'⌘':'Ctrl'} K</kbd></button>
  {open&&createPortal(<div className={c.overlay} onPointerDown={e=>{if(e.target===e.currentTarget)close()}}>
   <div className={c.panel} role="dialog" aria-modal="true" aria-label="Command menu" onKeyDown={onKey}>
    <div className={c.search}><SearchIcon/><input ref={input} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Jump to a page, project or action…" role="combobox" aria-expanded="true" aria-controls={`${id}-list`} aria-activedescendant={results[active]?`${id}-${results[active].id}`:undefined} aria-autocomplete="list" spellCheck={false}/><kbd>Esc</kbd></div>
    <div ref={list} className={c.list} id={`${id}-list`} role="listbox" aria-label="Results">
     {results.length===0&&<p className={c.empty}>Nothing matches “{query}”.</p>}
     {results.map((item,i)=>{const heading=item.group!==last;last=item.group;return <div key={item.id} role="presentation">
      {heading&&<p className={c.group} role="presentation">{item.group}</p>}
      <div id={`${id}-${item.id}`} role="option" aria-selected={i===active} data-index={i} className={c.item} onPointerMove={()=>setActive(i)} onClick={()=>run(item)}><span>{item.label}</span>{item.hint&&<small>{item.hint}</small>}</div>
     </div>})}
    </div>
    <div className={c.foot}><span><kbd>↑</kbd><kbd>↓</kbd> to move</span><span><kbd>↵</kbd> to open</span></div>
   </div>
  </div>,document.querySelector('[data-quiet]')??document.body)}
 </>;
}
