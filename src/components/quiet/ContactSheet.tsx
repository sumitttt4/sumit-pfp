import type { CSSProperties } from 'react';
import { featuredProjects } from '@/data/quiet';
import s from './ContactSheet.module.css';

/** Six stills, one for each product. A contact sheet, because Slate is a library of launch films. */
const stills: Record<string, { light: string; dark: string; num: string; numDark: string }> = {
  glyph: { light: '#c46a3a', dark: '#e08a55', num: '#fff8f3', numDark: '#3a2014' },
  glaze: { light: '#7ea4b8', dark: '#9ec4d4', num: '#102028', numDark: '#102028' },
  'glyph-skill': { light: '#6f7f57', dark: '#a8b890', num: '#f4f6ef', numDark: '#1c2414' },
  slate: { light: '#3c3935', dark: '#d4cdc2', num: '#f4f1ec', numDark: '#2a2724' },
  'fedup-studio': { light: '#c4a15a', dark: '#e2c48a', num: '#2a2110', numDark: '#2a2110' },
  'file-studio': { light: '#ddd6ca', dark: '#3e3b36', num: '#3a342c', numDark: '#f3efe8' },
};

export default function ContactSheet() {
  const frames = featuredProjects.filter((project) => stills[project.slug]);
  return (
    <nav className={s.sheet} aria-label="A contact sheet of the work">
      {frames.map((project, index) => {
        const still = stills[project.slug];
        return (
          <a
            key={project.slug}
            className={s.frame}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={project.name}
            title={project.name}
            style={{ '--still': still.light, '--still-dark': still.dark, '--num': still.num, '--num-dark': still.numDark, '--i': index } as CSSProperties}
          >
            <span className={s.perf} aria-hidden="true" />
            <span className={s.cell}>
              <span className={s.no}>{String(index + 1).padStart(2, '0')}</span>
            </span>
            <span className={s.perf} aria-hidden="true" />
            <span className={s.name}>{project.name}</span>
          </a>
        );
      })}
    </nav>
  );
}
