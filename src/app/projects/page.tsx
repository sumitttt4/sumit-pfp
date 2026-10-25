import HeadingWords from '@/components/quiet/HeadingWords';
import ProjectCollection from '@/components/quiet/ProjectCollection';
import s from '@/components/quiet/Quiet.module.css';
export default function Projects(){return <><header className={s.pageIntro}><p className={s.kicker}>Work</p><h1><HeadingWords text="Things I’ve put into the world"/></h1><p>Products, small tools, and experiments. Pick one and try it.</p></header><ProjectCollection/></>}
