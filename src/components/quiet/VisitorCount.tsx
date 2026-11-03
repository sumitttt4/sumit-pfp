"use client";
import {useEffect,useState} from 'react';
import f from './Frame.module.css';
/* Abacus (abacus.jasoncameron.dev) keeps the count. Each browser is counted once, and only on the live domain. */
const host=['sumitsharma.pro','www.sumitsharma.pro'];
export default function VisitorCount(){
 const [count,setCount]=useState<number|null>(null);
 useEffect(()=>{const key=host.includes(location.hostname)?'visitors':'visitors-preview';let seen=false;try{seen=localStorage.getItem('counted-visit')==='1'}catch{}
  const action=seen?'get':'hit';let live=true;
  fetch(`https://abacus.jasoncameron.dev/${action}/sumitsharma-pro/${key}`).then(r=>r.ok?r.json():null).then(d=>{if(!live||typeof d?.value!=='number')return;setCount(d.value);if(!seen)try{localStorage.setItem('counted-visit','1')}catch{}}).catch(()=>{});
  return()=>{live=false}},[]);
 if(count===null)return null;
 return <p className={f.visitors}><i aria-hidden="true"/>{count.toLocaleString('en-US')} {count===1?'visitor':'visitors'}</p>;
}
