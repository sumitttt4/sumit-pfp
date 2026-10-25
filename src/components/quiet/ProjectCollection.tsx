import Link from 'next/link';
import Image from 'next/image';
import {quietProjects} from '@/data/quiet';
import PreviewLink from './PreviewLink';
import s from './Quiet.module.css';
export default function ProjectCollection(){return <div className={s.projectCollection}>{quietProjects.map(p=><article key={p.slug} className={s.projectEntry}><div className={s.projectTop}>{p.href?<PreviewLink {...p}/>:<span className={s.projectName}>{p.logo&&<Image src={p.logo} alt="" width={18} height={18} unoptimized/>}<span>{p.name}</span></span>}{p.status&&<span className={s.projectStatus}>{p.status}</span>}</div><p>{p.description}</p>{p.slug==='glyph'&&<Link className={s.quietLink} href="/projects/glyph">Glyph case study</Link>}</article>)}</div>}
