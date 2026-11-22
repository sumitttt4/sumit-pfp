import Link from 'next/link';
import {Rows,SectionHead,rowStyles as r} from '@/components/quiet/Rows';
import s from '@/components/quiet/Quiet.module.css';
export const metadata={title:'Not found — Sumit Sharma'};
export default function NotFound(){return <>
 <header className={s.pageIntro}><p className={s.kicker}>404</p><h1>Lost in the clouds</h1><p>This page doesn’t exist, or it moved. <Link className={s.editorialLink} href="/">Head home</Link>, or try one of these.</p></header>
 <section className={r.section}><SectionHead title="Try"/><Rows items={[{key:'work',label:'Work',meta:'Projects',href:'/projects'},{key:'writing',label:'Writing',meta:'Notes from making things',href:'/blog'},{key:'about',label:'About',meta:'A little beyond the browser',href:'/about'}]}/></section>
 </>}
