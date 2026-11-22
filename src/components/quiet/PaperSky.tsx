"use client";
import dynamic from 'next/dynamic';
import {useEffect,useRef,useState} from 'react';
import {useTheme} from 'next-themes';
import s from './PaperSky.module.css';

const Dithering=dynamic(()=>import('@paper-design/shaders-react').then(m=>m.Dithering),{ssr:false});

/**
 * Full-bleed animated sky: a Paper Shaders dither (simplex noise through an 8x8 Bayer matrix) behind the top of every page.
 * It lives in the shell, so it keeps moving across navigation. On hover, a dithered ripple follows the pointer.
 * Everything stands still off-screen, in a hidden tab, or for reduced motion.
 */
const colors={light:{front:'#2457eaf2',back:'#2457ea00'},dark:{front:'#7aa2ffe6',back:'#0b1b5000'}};
const fill={position:'absolute',inset:0,width:'100%',height:'100%'} as const;

export default function PaperSky(){
 const ref=useRef<HTMLDivElement>(null);const lens=useRef<HTMLDivElement>(null);const {resolvedTheme}=useTheme();
 const [live,setLive]=useState(false);const [mounted,setMounted]=useState(false);const [hover,setHover]=useState(false);
 useEffect(()=>{
  setMounted(true);
  const el=ref.current;if(!el)return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');let seen=false,fg=!document.hidden,inside=false;
  const sync=()=>setLive(seen&&fg&&!reduce.matches);
  const io=new IntersectionObserver(([e])=>{seen=e.isIntersecting;sync()});io.observe(el);
  const vis=()=>{fg=!document.hidden;sync()};document.addEventListener('visibilitychange',vis);reduce.addEventListener('change',sync);
  /* The sky sits behind the page, so follow the pointer from the window and only react over its dense top part. */
  const move=(e:PointerEvent)=>{
   if(!fine.matches||reduce.matches)return;
   const r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,now=y>=0&&y<r.height*.55;
   if(now!==inside){inside=now;setHover(now)}
   if(now&&lens.current)lens.current.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
  };
  const leave=()=>{if(inside){inside=false;setHover(false)}};
  addEventListener('pointermove',move,{passive:true});document.documentElement.addEventListener('pointerleave',leave);
  return()=>{io.disconnect();document.removeEventListener('visibilitychange',vis);reduce.removeEventListener('change',sync);removeEventListener('pointermove',move);document.documentElement.removeEventListener('pointerleave',leave)};
 },[]);
 const c=colors[resolvedTheme==='dark'?'dark':'light'];
 return <div ref={ref} className={s.sky} aria-hidden="true" data-ready={mounted?'':undefined}>
  {mounted&&<Dithering style={fill} colorBack={c.back} colorFront={c.front} shape="simplex" type="8x8" size={3} scale={.75} speed={live?.22:0} offsetY={-.1}/>}
  <div ref={lens} className={s.lens} data-on={hover?'':undefined}>{mounted&&<Dithering style={fill} colorBack={c.back} colorFront={c.front} shape="ripple" type="4x4" size={3} scale={.9} speed={hover?1:0}/>}</div>
 </div>;
}
