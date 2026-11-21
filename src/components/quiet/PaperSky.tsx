"use client";
import dynamic from 'next/dynamic';
import {useEffect,useRef,useState} from 'react';
import {useTheme} from 'next-themes';
import s from './PaperSky.module.css';

const Dithering=dynamic(()=>import('@paper-design/shaders-react').then(m=>m.Dithering),{ssr:false});
const Warp=dynamic(()=>import('@paper-design/shaders-react').then(m=>m.Warp),{ssr:false});
/* Footer band: liquid warp, the orange accent folding into the sky blue. */
const warp={light:['#faf8f3','#ffb38a','#e8552a','#2457ea'],dark:['#000000','#5a1c08','#ff6f43','#2f5cff']};

/**
 * Full-bleed animated sky made with a Paper Shaders dither: a slow simplex-noise field quantised through an 8x8 Bayer matrix.
 * It sits behind the page, fades into the paper, and stands still when off-screen, in a hidden tab, or for reduced motion.
 */
const palette={
 light:{hero:{front:'#2457eaf2',back:'#2457ea00'},footer:{front:'#e8552ad9',back:'#e8552a00'}},
 dark:{hero:{front:'#7aa2ffe6',back:'#0b1b5000'},footer:{front:'#ff6f43cc',back:'#ff6f4300'}},
};
export default function PaperSky({variant}:{variant:'hero'|'footer'}){
 const ref=useRef<HTMLDivElement>(null);const {resolvedTheme}=useTheme();
 const [live,setLive]=useState(false);const [mounted,setMounted]=useState(false);
 useEffect(()=>{
  setMounted(true);
  const el=ref.current;if(!el)return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');let seen=false,fg=!document.hidden;
  const sync=()=>setLive(seen&&fg&&!reduce.matches);
  const io=new IntersectionObserver(([e])=>{seen=e.isIntersecting;sync()});io.observe(el);
  const vis=()=>{fg=!document.hidden;sync()};document.addEventListener('visibilitychange',vis);reduce.addEventListener('change',sync);
  return()=>{io.disconnect();document.removeEventListener('visibilitychange',vis);reduce.removeEventListener('change',sync)};
 },[]);
 const c=palette[resolvedTheme==='dark'?'dark':'light'][variant];
 const hero=variant==='hero';
 return <div ref={ref} className={`${s.sky} ${hero?s.hero:s.footer}`} aria-hidden="true" data-ready={mounted?'':undefined}>
  {mounted&&!hero&&<Warp style={{position:'absolute',inset:0,width:'100%',height:'100%'}} colors={warp[resolvedTheme==='dark'?'dark':'light']} proportion={.45} softness={1} distortion={.25} swirl={.8} swirlIterations={10} shape="checks" shapeScale={.1} speed={live?.6:0}/>}
  {mounted&&hero&&<Dithering style={{position:'absolute',inset:0,width:'100%',height:'100%'}} colorBack={c.back} colorFront={c.front} shape={hero?'simplex':'dots'} type={hero?'8x8':'4x4'} size={3} scale={hero?.75:.55} speed={live?(hero?.22:.14):0} offsetY={hero?-.1:.2}/>}
 </div>;
}
