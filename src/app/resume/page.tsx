import type { Metadata } from 'next';
import HeadingWords from '@/components/quiet/HeadingWords';
import { experience, profile } from '@/data/profile';
import s from '@/components/quiet/Quiet.module.css';

export const metadata: Metadata = {
  title: 'Resume — Sumit Sharma',
  description: 'Where Sumit Sharma has worked.',
  alternates: { canonical: '/resume' },
};

export default function Resume() {
  return (
    <>
      <header className={s.pageIntro}>
        <p className={s.kicker}>Resume</p>
        <h1><HeadingWords text="Where I’ve worked" /></h1>
        <p>Design engineer. Currently frontend at Craon. Based in {profile.timezone}.</p>
      </header>
      <ol className={s.timeline}>
        {experience.map((job) => (
          <li key={job.company}>
            <div className={s.timelineTop}>
              <h3>{job.href ? <a href={job.href} target="_blank" rel="noreferrer">{job.company}</a> : job.company}</h3>
              <span>{job.date}</span>
            </div>
            <p className={s.timelineRole}>{job.role}{job.current ? ' · Now' : ''}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ol>
      <p className={s.aboutNavigation}>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.calendar} target="_blank" rel="noreferrer">Book a call</a>
        <a href={profile.resume} target="_blank" rel="noreferrer">Resume PDF</a>
      </p>
    </>
  );
}
