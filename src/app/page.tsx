import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GithubActivity from '@/components/quiet/GithubActivity';
import GlyphMark from '@/components/quiet/GlyphMark';
import Tool from '@/components/quiet/Tool';
import { profile } from '@/data/profile';
import { featuredProjects } from '@/data/quiet';
import h from '@/components/quiet/Home.module.css';

export const metadata: Metadata = {
  title: 'Sumit Sharma — Design engineer',
  description: 'Design engineer. Products, notes, and small things worth using.',
  alternates: { canonical: '/' },
};

const projects: Record<string, { hint: string; color: string }> = {
  glyph: { hint: 'Brand identity', color: '#e25a2a' },
  'glyph-skill': { hint: 'Design skill', color: '#2f9e62' },
  glaze: { hint: 'React components', color: '#3b7ddd' },
  slate: { hint: 'Launch films', color: '#7a5af5' },
  'fedup-studio': { hint: 'Landing pages', color: '#e0a100' },
  'file-studio': { hint: 'File tools', color: '#e15b8a' },
};

export default function Home() {
  return (
    <>
      <section className={h.hero}>
        <div className={h.who}>
          <Image className={h.avatar} src="/avatar.jpg" alt="" width={36} height={36} priority />
          <div>
            <h1 className={h.name}>Sumit Sharma</h1>
            <p className={h.role}>Design engineer</p>
          </div>
        </div>
        <p className={h.bio}>
          I build products for the web with <Tool name="TypeScript" logo="typescript" />, <Tool name="React" logo="react" /> and <Tool name="Next.js" logo="nextjs" />.
          Small tools, careful interfaces, and the last detail.
          <GlyphMark />
        </p>
        <p className={h.reach}>
          You can reach me on <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>, <a href={profile.twitter} target="_blank" rel="noreferrer">X</a> and <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.
        </p>
      </section>

      <section className={h.section}>
        <h2 className={h.label}>Projects</h2>
        <ul className={h.list}>
          {featuredProjects.map((item) => {
            const tone = projects[item.slug] ?? { hint: item.name, color: '#7a5af5' };
            return (
              <li key={item.slug}>
                <Link className={h.row} href={item.detail ?? `/projects#${item.slug}`} style={{ '--row': tone.color } as CSSProperties}>
                  <span className={h.chip} aria-hidden="true" />
                  <span className={h.project}>{item.name}</span>
                  <span className={h.hint}>{tone.hint}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <GithubActivity
        className={h.github}
        head={(
          <div className={h.labelRow}>
            <h2 className={h.label}>GitHub</h2>
            <a href={profile.github} target="_blank" rel="noreferrer">@sumitttt4</a>
          </div>
        )}
      />
    </>
  );
}
