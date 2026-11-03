import HeadingWords from '@/components/quiet/HeadingWords';
import ProjectViews from '@/components/quiet/ProjectViews';
import {featuredProjects,moreProjects} from '@/data/quiet';
import s from '@/components/quiet/Quiet.module.css';
export default function Projects(){return <>
 <header className={s.pageIntro}><p className={s.kicker}>Work</p><h1><HeadingWords text="Things I’ve put into the world"/></h1><p>Products, small tools, and experiments. Pick one and try it.</p></header>
 <section className={s.section}><ProjectViews storageKey="view-featured" projects={featuredProjects} head={<h2>Featured</h2>}/></section>
 <section className={s.section}><ProjectViews storageKey="view-more" projects={moreProjects} head={<h2>More projects</h2>}/></section>
</>}
