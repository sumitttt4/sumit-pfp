"use client";
import {useEffect,useRef,useState} from 'react';
import f from './Frame.module.css';
type Spec={top:number;left:number;width:number;height:number;pad:number[];tag:string;detail:string;color:string;flipTag:boolean;flipSpec:boolean};
const targets='h1,h2,h3,p,a,button,img,li,time,small,strong,input,svg,article,section,nav,span';
const hex=(value:string)=>{const m=value.match(/[\d.]+/g);return m?'#'+m.slice(0,3).map(v=>Math.round(+v).toString(16).padStart(2,'0')).join(''):value};
const family=(value:string)=>/mono/i.test(value)?'Geist Mono':/devanagari/i.test(value)?'Noto Sans Devanagari':/portfolio|inter/i.test(value)?'Inter':value.split(',')[0].replace(/['"]/g,'');
const round=(n:number)=>Math.round(n*10)/10;
function describe(el:Element):Spec{
 const r=el.getBoundingClientRect(),cs=getComputedStyle(el),size=parseFloat(cs.fontSize),tracking=parseFloat(cs.letterSpacing);
 const line=cs.lineHeight==='normal'?'auto':round(parseFloat(cs.lineHeight));
 const media=el instanceof HTMLImageElement?`${el.naturalWidth}×${el.naturalHeight} source`:el instanceof SVGElement?'vector':null;
 const detail=media??`${family(cs.fontFamily)} ${round(size)}/${line} · ${cs.fontWeight}${tracking?` · ${round(tracking/size*100)/100}em`:''}`;
 return {top:r.top,left:r.left,width:r.width,height:r.height,pad:['Top','Right','Bottom','Left'].map(side=>parseFloat(cs.getPropertyValue(`padding-${side.toLowerCase()}`))||0),tag:el.tagName.toLowerCase(),detail,color:hex(cs.color),flipTag:r.top<88,flipSpec:r.bottom>innerHeight-34};
}
export default function Inspector({onClose}:{onClose:()=>void}){
 const [spec,setSpec]=useState<Spec|null>(null);const current=useRef<Element|null>(null);
 useEffect(()=>{
  const frame=document.querySelector('[data-frame]');if(!frame)return;
  const pick=(target:EventTarget|null)=>{const el=target instanceof Element?target.closest(targets):null;if(!el||!frame.contains(el)||el.closest('[data-inspect-ui]'))return;current.current=el;setSpec(describe(el))};
  const over=(e:PointerEvent)=>pick(e.target);
  const block=(e:MouseEvent)=>{const el=e.target as Element;if(frame.contains(el)&&!el.closest('[data-inspect-ui]')){e.preventDefault();e.stopPropagation()}};
  const refresh=()=>{if(current.current?.isConnected)setSpec(describe(current.current))};
  const key=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose()};
  document.addEventListener('pointerover',over);document.addEventListener('pointerdown',over);document.addEventListener('click',block,true);window.addEventListener('scroll',refresh,{passive:true});window.addEventListener('resize',refresh);window.addEventListener('keydown',key);
  return()=>{document.removeEventListener('pointerover',over);document.removeEventListener('pointerdown',over);document.removeEventListener('click',block,true);window.removeEventListener('scroll',refresh);window.removeEventListener('resize',refresh);window.removeEventListener('keydown',key)};
 },[onClose]);
 return <>
  {spec&&<div className={`${f.box} ${spec.flipTag?f.flipTag:''} ${spec.flipSpec?f.flipSpec:''}`} style={{top:spec.top,left:spec.left,width:spec.width,height:spec.height}} aria-hidden="true">
   {spec.pad.some(Boolean)&&<span className={f.content} style={{top:spec.pad[0],right:spec.pad[1],bottom:spec.pad[2],left:spec.pad[3]}}/>}
   <span className={f.tag}>{spec.tag}<span>{Math.round(spec.width)} × {Math.round(spec.height)}</span></span>
   <span className={f.spec}><i className={f.swatch} style={{background:spec.color}}/>{spec.detail}<span>{spec.color}</span></span>
  </div>}
  <div className={f.hud} data-inspect-ui role="status"><i/>Inspect<span>Hover anything · {document.querySelector('[data-frame]')?.clientWidth??768}px frame</span><button type="button" onClick={onClose}>Esc</button></div>
 </>;
}
