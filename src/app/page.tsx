import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactSheet from '@/components/quiet/ContactSheet';
import GithubActivity from '@/components/quiet/GithubActivity';
import GlyphMark from '@/components/quiet/GlyphMark';
import Greeting from '@/components/quiet/Greeting';
import PreviewLink from '@/components/quiet/PreviewLink';
import Tool from '@/components/quiet/Tool';
import posts from '@/data/blog';
import { experience, profile } from '@/data/profile';
import { featuredProjects } from '@/data/quiet';
import revenue from '@/data/glyph-revenue.json';
import h from '@/components/quiet/Home.module.css';

export const metadata: Metadata = {
  title: 'Sumit Sharma — Design engineer',
  description: 'Design engineer. Products, notes, and small things worth using.',
  alternates: { canonical: '/' },
};

const project = (slug: string) => featuredProjects.find((item) => item.slug === slug)!;
const writing = [
  'building-glyph',
  'your-ai-built-website-needs-a-visual-direction-before-it-needs-another-prompt-d30168236c7b',
].map((slug) => posts.find((post) => post.slug === slug)!);

function Mark({ slug }: { slug: string }) {
  const item = project(slug);
  return <PreviewLink href={item.href} name={item.name} logo={item.logo} image={item.image} note={item.tagline} />;
}

export default function Home() {
  return (
    <>
      <section className={h.hero}>
        <div className={h.who}>
          <Image className={h.avatar} src="/avatar.jpg" alt="" width={42} height={42} priority />
          <div>
            <Greeting className={h.greeting} />
            <h1 className={h.name}>Sumit Sharma</h1>
            <p className={h.role}>
              Design engineer · Frontend at <a href="https://craon.ai" target="_blank" rel="noreferrer">Craon</a>
            </p>
          </div>
        </div>
        <p className={h.bio}>
          I build products for the web with <Tool name="TypeScript" logo="typescript" />, <Tool name="React" logo="react" /> and <Tool name="Next.js" logo="nextjs" />, from the first interface to the details of how it works. I shipped <Mark slug="glyph" />, a brand-identity tool with <a className={h.ink} href={revenue.source} target="_blank" rel="noreferrer" title={`Verified on TrustMRR with ${revenue.verifiedWith}, checked ${revenue.checkedAt}`}>${revenue.allTime} in revenue</a> so far, and I make tools for people who build interfaces: <Mark slug="glaze" />, <Mark slug="glyph-skill" /> and <Mark slug="slate" />.
          <GlyphMark />
        </p>
        <p className={h.reach}>
          You can reach me on <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>, <a href={profile.twitter} target="_blank" rel="noreferrer">X</a> and <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>, <a href={profile.calendar} target="_blank" rel="noreferrer">book a call</a>, or <a href="#contact">email me</a>.
        </p>
      </section>

      <section className={h.section}>
        <div className={h.label}>
          <h2>Projects</h2>
          <Link href="/projects">All work</Link>
        </div>
        <ul className={h.list}>
          {featuredProjects.map((item) => (
            <li key={item.slug}>
              <div className={h.leader}>
                {item.detail ? (
                  <Link className={h.leaderName} href={item.detail}>
                    {item.logo && <Image src={item.logo} alt="" width={14} height={14} unoptimized />}
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a className={h.leaderName} href={item.href} target="_blank" rel="noreferrer">
                    {item.logo && <Image src={item.logo} alt="" width={14} height={14} unoptimized />}
                    <span>{item.name}</span>
                  </a>
                )}
                <span className={h.dots} aria-hidden="true" />
                <span className={h.hint}>{item.tagline}</span>
              </div>
              <p className={h.detail}>{item.description}</p>
              <p className={h.links}>
                {item.status && <span>{item.status}</span>}
                {item.proof && <a href={item.proof.href} target="_blank" rel="noreferrer" title={item.proof.title}>{item.proof.label}</a>}
                <a href={item.href} target="_blank" rel="noreferrer">Website</a>
                {item.repo && <a href={item.repo} target="_blank" rel="noreferrer">GitHub</a>}
                {item.detail && <Link href={item.detail}>Notes</Link>}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className={h.section}>
        <div className={h.label}><h2>Experience</h2></div>
        <ul className={h.list}>
          {experience.map((job) => (
            <li key={job.company}>
              <div className={h.leader}>
                <span className={h.leaderName}>
                  {job.href ? <a href={job.href} target="_blank" rel="noreferrer">{job.company}</a> : job.company}
                  {job.current && <span className={h.now}>Now</span>}
                </span>
                <span className={h.dots} aria-hidden="true" />
                <span className={h.hint}>{job.date}</span>
              </div>
              <p className={h.detail}>{job.role}. {job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={h.section}>
        <div className={h.label}>
          <h2>How I work</h2>
          <Link href="/craft">Full kit</Link>
        </div>
        <p className={h.bio}>
          Mostly <Tool name="TypeScript" logo="typescript" />, <Tool name="React" logo="react" /> and <Tool name="Next.js" logo="nextjs" />, styled with <Tool name="Tailwind" logo="tailwind" />, designed in <Tool name="Figma" logo="figma" />, with <Tool name="Claude Code" /> in the daily loop.
        </p>
      </section>

      <section className={h.section}>
        <div className={h.label}>
          <h2>Writing</h2>
          <Link href="/blog">All writing</Link>
        </div>
        <ul className={h.list}>
          {writing.map((post) => {
            const title = <span className={h.leaderName}>{post.title}</span>;
            const row = (
              <>
                {title}
                <span className={h.dots} aria-hidden="true" />
                <time className={h.hint} dateTime={post.date}>{post.date}</time>
              </>
            );
            return (
              <li key={post.slug}>
                {post.link ? (
                  <a className={h.leader} href={post.link} target="_blank" rel="noreferrer">{row}</a>
                ) : (
                  <Link className={h.leader} href={`/blog/${post.slug}`}>{row}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <GithubActivity
        className={h.section}
        head={(
          <div className={h.label}>
            <h2>On GitHub</h2>
            <a href={profile.github} target="_blank" rel="noreferrer">@sumitttt4</a>
          </div>
        )}
      />

      <ContactSheet />
    </>
  );
}
