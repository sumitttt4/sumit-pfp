"use client";
import {useEffect,useState} from 'react';
import CanvasHome from './CanvasHome';
import c from './Canvas.module.css';
const query='(min-width: 900px)';
/* Wide screens get the canvas; phones (and anyone who picks "View as a list") keep the scrolling page. */
export default function CanvasMount(){
 const [wide,setWide]=useState(false);const [list,setList]=useState(false);
 useEffect(()=>{const media=matchMedia(query);try{setList(sessionStorage.getItem('home-list')==='1')}catch{}
  const sync=()=>setWide(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync)},[]);
 const on=wide&&!list;
 useEffect(()=>{const root=document.documentElement;if(on)root.dataset.canvas='';else delete root.dataset.canvas;return()=>{delete root.dataset.canvas}},[on]);
 const choose=(asList:boolean)=>{try{sessionStorage.setItem('home-list',asList?'1':'0')}catch{}setList(asList);scrollTo(0,0)};
 if(on)return <CanvasHome onList={()=>choose(true)}/>;
 return wide&&list?<button type="button" className={c.backToCanvas} onClick={()=>choose(false)}>Open the canvas view</button>:null;
}
