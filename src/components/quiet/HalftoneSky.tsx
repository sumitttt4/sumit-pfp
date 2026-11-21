"use client";
import {useEffect,useRef} from 'react';
import s from './HalftoneSky.module.css';

/**
 * A full-bleed halftone sky behind the page. The photo is sampled into a grid and redrawn as dots sized by tone,
 * then drifts sideways forever (mirrored so it never shows a seam), twinkles, and swells near the pointer.
 * Light theme uses the clouds as blue ink on paper; dark theme uses the deep-blue plate, lit dots on black.
 */
const SKIES={
 light:{src:'/halftone/clouds.jpg',ink:true},
 dark:{src:'/halftone/deep-blue.jpg',ink:false},
} as const;
type Props={variant:'hero'|'footer'};

export default function HalftoneSky({variant}:Props){
 const box=useRef<HTMLDivElement>(null);const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=box.current,cv=canvas.current;if(!el||!cv)return;
  const ctx=cv.getContext('2d');if(!ctx)return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sample=document.createElement('canvas');const sctx=sample.getContext('2d',{willReadFrequently:true});if(!sctx)return;
  const images:Partial<Record<'light'|'dark',HTMLImageElement>>={};
  let theme:'light'|'dark'=document.documentElement.classList.contains('dark')?'dark':'light';
  let cell=8,cols=0,rows=0,w=0,h=0,dpr=1,raf=0,visible=false;const t0=performance.now();
  const pointer={x:-1e3,y:-1e3,on:false};
  const load=(t:'light'|'dark')=>{if(images[t])return;const im=new Image();im.decoding='async';im.onload=()=>{images[t]=im;if(t===theme){el.dataset.ready='';paint(performance.now())}};im.src=SKIES[t].src};
  const resize=()=>{const r=el.getBoundingClientRect();w=r.width;h=r.height;dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);cell=w<640?5:6;cols=Math.ceil(w/cell);rows=Math.ceil(h/cell);sample.width=cols;sample.height=rows;paint(performance.now())};
  const paint=(now:number)=>{
   const img=images[theme];if(!img||!cols)return;
   const t=reduce?0:(now-t0)/1000,ink=SKIES[theme].ink;
   const sc=Math.max(cols*1.15/img.width,rows*1.1/img.height),dw=img.width*sc,dh=img.height*sc;
   const off=t*5+(variant==='footer'?dw*.35:0);
   const fy=variant==='hero'?.36:.62,top=-(dh-rows)*(fy+(reduce?0:.05*Math.sin(t*.15)));
   sctx.fillStyle=ink?'#fff':'#000';sctx.fillRect(0,0,cols,rows);
   for(let k=Math.floor(off/dw);k<=Math.floor((off+cols)/dw);k++){
    const x=k*dw-off;
    if(k%2===0)sctx.drawImage(img,x,top,dw,dh);
    else{sctx.save();sctx.translate(x+dw,0);sctx.scale(-1,1);sctx.drawImage(img,0,top,dw,dh);sctx.restore()}
   }
   const d=sctx.getImageData(0,0,cols,rows).data;
   ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
   const half=cell*.6;
   for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    const i=(y*cols+x)*4,r=d[i],g=d[i+1],b=d[i+2];
    const lum=(.2126*r+.7152*g+.0722*b)/255;
    const cx=x*cell+cell/2,cy=y*cell+cell/2;
    let k=ink?Math.pow(1-lum,.8)*1.25:Math.pow(lum,.8)*1.1;
    if(!reduce)k*=1+.16*Math.sin(cx*.021-cy*.017+t*1.4);
    if(pointer.on){const dx=cx-pointer.x,dy=cy-pointer.y,dd=Math.hypot(dx,dy);if(dd<110)k+=(1-dd/110)*(ink?.5:.45)}
    const rad=Math.min(half,half*k);if(rad<.4)continue;
    ctx.fillStyle=ink?'#2457ea':`rgb(${Math.min(255,r+30)},${Math.min(255,g+30)},${Math.min(255,b+40)})`;
    ctx.beginPath();ctx.arc(cx,cy,rad,0,6.2832);ctx.fill();
   }
  };
  const loop=(now:number)=>{paint(now);if(visible&&!reduce)raf=requestAnimationFrame(loop)};
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;cancelAnimationFrame(raf);if(visible)raf=requestAnimationFrame(loop)});
  const ro=new ResizeObserver(resize);
  const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();pointer.x=e.clientX-r.left;pointer.y=e.clientY-r.top;pointer.on=pointer.y>-60&&pointer.y<h+60;if(reduce)paint(performance.now())};
  const mo=new MutationObserver(()=>{const next=document.documentElement.classList.contains('dark')?'dark':'light';if(next===theme)return;theme=next;load(theme);paint(performance.now())});
  mo.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  load(theme);io.observe(el);ro.observe(el);addEventListener('pointermove',move,{passive:true});
  return()=>{cancelAnimationFrame(raf);io.disconnect();ro.disconnect();mo.disconnect();removeEventListener('pointermove',move)};
 },[variant]);
 return <div ref={box} className={`${s.sky} ${variant==='hero'?s.hero:s.footer}`} aria-hidden="true"><canvas ref={canvas}/></div>;
}
