"use client";
import {useEffect,useState} from 'react';
import s from './Quiet.module.css';
const words=[['Hello','en'],['Hola','es'],['नमस्ते','hi']];
export default function Greeting({className=''}:{className?:string}){const [active,setActive]=useState(0);useEffect(()=>{const reduce=matchMedia('(prefers-reduced-motion: reduce)');let timer:ReturnType<typeof setInterval>;const start=()=>{clearInterval(timer);setActive(0);if(!reduce.matches)timer=setInterval(()=>{if(!document.hidden)setActive(n=>(n+1)%3)},3000)};start();reduce.addEventListener('change',start);return()=>{clearInterval(timer);reduce.removeEventListener('change',start)}},[]);return <div className={`${s.greeting} ${className}`}><span className={s.srOnly}>Hello. Hola. नमस्ते.</span><div aria-hidden="true">{words.map(([word,lang],i)=><span lang={lang} key={lang} className={`${s.greetingWord} ${active===i?s.greetingActive:''}`}>{word}</span>)}</div></div>}
