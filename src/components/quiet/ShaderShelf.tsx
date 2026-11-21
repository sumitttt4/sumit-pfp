"use client";
import dynamic from 'next/dynamic';
import {useEffect,useRef,useState} from 'react';
import {useTheme} from 'next-themes';
import s from './Quiet.module.css';

const Dithering=dynamic(()=>import('@paper-design/shaders-react').then(m=>m.Dithering),{ssr:false});
const MeshGradient=dynamic(()=>import('@paper-design/shaders-react').then(m=>m.MeshGradient),{ssr:false});
const GrainGradient=dynamic(()=>import('@paper-design/shaders-react').then(m=>m.GrainGradient),{ssr:false});

/* Three live Paper Shaders. They only animate while on screen, and hold still for reduced motion. */
export default function ShaderShelf(){
 const ref=useRef<HTMLDivElement>(null);const [live,setLive]=useState(false);const [mounted,setMounted]=useState(false);const {resolvedTheme}=useTheme();
 useEffect(()=>{setMounted(true);const el=ref.current;if(!el)return;const reduce=matchMedia('(prefers-reduced-motion: reduce)');let seen=false;
  const sync=()=>setLive(seen&&!reduce.matches&&!document.hidden);
  const io=new IntersectionObserver(([e])=>{seen=e.isIntersecting;sync()});io.observe(el);document.addEventListener('visibilitychange',sync);reduce.addEventListener('change',sync);
  return()=>{io.disconnect();document.removeEventListener('visibilitychange',sync);reduce.removeEventListener('change',sync)}},[]);
 const dark=resolvedTheme==='dark',fill={position:'absolute',inset:0,width:'100%',height:'100%'} as const,speed=(n:number)=>live?n:0;
 const items=[
  {name:'Dithering',note:'The pixel sky on the home page.',shader:<Dithering style={fill} colorBack={dark?'#000000':'#faf8f3'} colorFront={dark?'#7aa2ff':'#2457ea'} shape="warp" type="4x4" size={2.5} scale={1.1} speed={speed(.4)}/>},
  {name:'Mesh Gradient',note:'Slow colour fields for covers and cards.',shader:<MeshGradient style={fill} colors={['#e8552a','#f3b38a','#2457ea','#faf8f3']} distortion={.8} swirl={.35} speed={speed(.35)}/>},
  {name:'Grain Gradient',note:'Soft, grainy light with some texture.',shader:<GrainGradient style={fill} colorBack={dark?'#0a0a0a':'#1b1410'} colors={['#ff6f43','#ffc39e','#7aa2ff','#2457ea']} softness={.7} intensity={.5} noise={.35} shape="corners" speed={speed(.5)}/>},
 ];
 return <div ref={ref} className={s.shaderShelf}>{items.map(i=><figure key={i.name}><div className={s.shaderTile} aria-hidden="true">{mounted&&i.shader}</div><figcaption><strong>{i.name}</strong><span>{i.note}</span></figcaption></figure>)}</div>;
}
