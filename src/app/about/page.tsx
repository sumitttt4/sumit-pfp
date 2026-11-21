import HeadingWords from '@/components/quiet/HeadingWords';
import type {Metadata} from 'next';
import {Rows,SectionHead,rowStyles as r} from '@/components/quiet/Rows';
import {personalProfiles} from '@/data/quiet';
import s from '@/components/quiet/Quiet.module.css';
export const metadata:Metadata={title:'About — Sumit Sharma',alternates:{canonical:'/about'}};
const away=(name:string)=>personalProfiles.find(p=>p.name===name)!;
const outside=[
 {key:'films',label:'Films',meta:'Letterboxd',href:away('Letterboxd').href},
 {key:'music',label:'Music',meta:'Spotify',href:away('Spotify').href},
 {key:'spanish',label:'Learning Spanish',meta:'Duolingo',href:away('Duolingo').href},
];
const beliefs=[
 {key:'perspective',label:'There’s room for more than one perspective.',meta:'Essay',href:'https://medium.com/@sumitsharma9128/is-the-glass-half-empty-or-half-full-d4c8c097557e'},
 {key:'identity',label:'Identity needs more than one root.',meta:'Essay',href:'https://medium.com/write-a-catalyst/when-love-redefines-you-and-how-you-deal-when-its-over-39f5ed066748'},
 {key:'building',label:'Building is only part of the work.',meta:'Essay',href:'https://medium.com/@sumitsharma9128/building-is-no-longer-the-hard-part-e83538ae79ad'},
];
export default function About(){return <>
 <header className={s.pageIntro}><p className={s.kicker}>About</p><h1><HeadingWords text="A little beyond the browser"/></h1><p>I’m Sumit Sharma, a design engineer. I build for the web, from the first interface to the details of how it works, and make small tools for people who build interfaces.</p></header>
 <section className={r.section}><SectionHead title="Outside work"/><Rows items={outside}/></section>
 <section className={r.section}><SectionHead title="Things I believe"/><Rows items={beliefs}/></section>
 </>}
