"use client";
import {useEffect,useRef} from 'react';
import s from './HalftoneBanner.module.css';

/**
 * A live halftone: the photo is sampled into a coarse grid and redrawn as dots whose size follows brightness.
 * The photo slowly pans and breathes, a soft wave rolls through the dots, and the pointer swells them.
 * It only runs while on screen, and holds a still frame for reduced motion.
 */
type Props={src:string;height:number;cell?:number;bg:string;tint?:string;focus?:[number,number];className?:string;label?:string};

export default function HalftoneBanner({src,height,cell=7,bg,tint,focus=[.5,.5],className,label}:Props){
 const fx=focus[0],fy=focus[1];
 const box=useRef<HTMLDivElement>(null);const canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const el=box.current,cv=canvas.current;if(!el||!cv)return;
  const ctx=cv.getContext('2d');if(!ctx)return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const img=new Image();img.decoding='async';
  const sample=document.createElement('canvas');const sctx=sample.getContext('2d',{willReadFrequently:true});if(!sctx)return;
  let cols=0,rows=0,w=0,h=0,dpr=1,raf=0,visible=false,ready=false;const t0=performance.now();
  const pointer={x:-1e3,y:-1e3,active:false};
  const resize=()=>{const r=el.getBoundingClientRect();w=r.width;h=r.height;dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);cols=Math.ceil(w/cell);rows=Math.ceil(h/cell);sample.width=cols;sample.height=rows;if(ready)draw(performance.now())};
  const draw=(now:number)=>{
   if(!ready)return;const t=reduce?0:(now-t0)/1000;
   /* Pan and breathe: cover-fit the photo, scaled up a little so the drift never shows an edge. */
   const zoom=1.02+(reduce?0:.06*Math.sin(t*.35));
   const base=Math.max(cols/img.width,rows/img.height)*zoom;
   const dw=img.width*base,dh=img.height*base;
   const px=(dw-cols)*(fx+(reduce?0:.3*Math.sin(t*.21)))*1,py=(dh-rows)*(fy+(reduce?0:.12*Math.cos(t*.17)));
   sctx.fillStyle=bg;sctx.fillRect(0,0,cols,rows);
   sctx.drawImage(img,-Math.max(0,Math.min(dw-cols,px)),-Math.max(0,Math.min(dh-rows,py)),dw,dh);
   const data=sctx.getImageData(0,0,cols,rows).data;
   ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
   for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    const i=(y*cols+x)*4,r=data[i],g=data[i+1],b=data[i+2];
    const lum=(.2126*r+.7152*g+.0722*b)/255;
    const cx=x*cell+cell/2,cy=y*cell+cell/2;
    let k=Math.pow(lum,.85);
    if(!reduce)k*=1+.22*Math.sin(cx*.018+cy*.012+t*1.1);
    if(pointer.active){const dx=cx-pointer.x,dy=cy-pointer.y,d=Math.hypot(dx,dy);if(d<90)k+=(1-d/90)*.55}
    const rad=Math.min(cell*.62,cell*.62*k);if(rad<.35)continue;
    ctx.fillStyle=tint??`rgb(${r},${g},${b})`;ctx.globalAlpha=tint?Math.min(1,.35+lum):1;
    ctx.beginPath();ctx.arc(cx,cy,rad,0,6.2832);ctx.fill();
   }
   ctx.globalAlpha=1;
  };
  const loop=(now:number)=>{draw(now);if(visible&&!reduce)raf=requestAnimationFrame(loop)};
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;cancelAnimationFrame(raf);if(visible)raf=requestAnimationFrame(loop)});
  const ro=new ResizeObserver(resize);
  const move=(e:PointerEvent)=>{const r=el.getBoundingClientRect();pointer.x=e.clientX-r.left;pointer.y=e.clientY-r.top;pointer.active=true;if(reduce)draw(performance.now())};
  const leave=()=>{pointer.active=false;if(reduce)draw(performance.now())};
  img.onload=()=>{ready=true;resize();el.dataset.ready='';io.observe(el)};
  img.src=src;ro.observe(el);
  el.addEventListener('pointermove',move);el.addEventListener('pointerleave',leave);
  return()=>{cancelAnimationFrame(raf);io.disconnect();ro.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave)};
 },[src,cell,bg,tint,fx,fy]);
 return <div ref={box} className={`${s.banner} ${className??''}`} style={{height,background:bg}} role="img" aria-label={label} aria-hidden={label?undefined:true}><canvas ref={canvas}/></div>;
}
