import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactSheet from '@/components/quiet/ContactSheet';
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

const hints: Record<string, string> = {
  glyph: 'Brand identity',
  'glyph-skill': 'Design skill',
  glaze: 'React components',
  slate: 'Launch films',
  'fedup-studio': 'Landing pages',
  'file-studio': 'File tools',
};

const collections = [
  ['Work', '/projects', 'Shipped products'],
  ['Writing', '/blog', 'Notes and essays'],
  ['Craft', '/craft', 'Tools I use'],
  ['Resume', '/resume', 'Where I’ve worked'],
  ['About', '/about', 'Off the clock'],
] as const;

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
        <h2 className={h.label}>Collections</h2>
        <ul className={h.list}>
          {collections.map(([name, href, hint]) => (
            <li key={href}>
              <Link className={h.row} href={href}>
                <span>{name}</span>
                <span className={h.dots} aria-hidden="true" />
                <span className={h.hint}>{hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={h.section}>
        <h2 className={h.label}>Projects</h2>
        <ul className={h.list}>
          {featuredProjects.map((item) => (
            <li key={item.slug}>
              <Link className={h.row} href={item.detail ?? `/projects#${item.slug}`}>
                <span>{item.name}</span>
                <span className={h.dots} aria-hidden="true" />
                <span className={h.hint}>{hints[item.slug] ?? item.name}</span>
              </Link>
            </li>
          ))}
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

      <ContactSheet />
    </>
  );
}
