import Link from 'next/link';
import s from './Rows.module.css';

/* The one list pattern used across the site: a label, a dotted leader, and a quiet note on the right. */
export type RowItem={key:string;label:React.ReactNode;meta?:React.ReactNode;href?:string};
const external=(href:string)=>/^https?:|^mailto:/.test(href);

export function Rows({items,wrapMeta=false}:{items:RowItem[];wrapMeta?:boolean}){
 return <ul className={s.rows} data-wrap={wrapMeta?"":undefined}>{items.map(({key,label,meta,href})=>{
  const inner=<><span className={s.label}>{label}</span><span className={s.leader} aria-hidden="true"/>{meta!=null&&<span className={wrapMeta?s.metaWrap:s.meta}>{meta}</span>}</>;
  return <li key={key}>{!href?<div className={s.row}>{inner}</div>:external(href)?<a className={s.row} href={href} target="_blank" rel="noreferrer">{inner}</a>:<Link className={s.row} href={href}>{inner}</Link>}</li>;
 })}</ul>;
}

export function SectionHead({title,more}:{title:string;more?:React.ReactNode}){
 return <div className={s.head}><h2>{title}</h2>{more}</div>;
}

export const rowStyles=s;
