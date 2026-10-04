import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface ProjectCardProps {
  name: string;
  description: string;
  category?: string;
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  priority?: boolean;
  image?: string;
  showVisual?: boolean;
}

export default function ProjectCard({ name, description, metrics, liveUrl, githubUrl, showVisual = false }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-title">
        <h3><a href={liveUrl} target="_blank" rel="noreferrer">{name}<ArrowUpRight size={14} aria-hidden="true" /></a></h3>
        {githubUrl && <a className="icon-button" href={githubUrl} target="_blank" rel="noreferrer" aria-label={`${name} on GitHub`}><BrandLogo name="github" size={16} /></a>}
      </div>
      <p className="project-description">{description}</p>
      {showVisual && name === "Glyph" && (
        <div className="project-detail">
          <figure>
            <Image src="/projects/glyph-brand-output.webp" width={1599} height={1599} alt="A brand identity generated with Glyph: logo, colour palette, typography, business cards, and a website preview." sizes="(max-width: 684px) calc(100vw - 64px), 620px" unoptimized />
            <figcaption>A complete identity, from one idea.</figcaption>
          </figure>
          <h4>What I built</h4>
          <p>A workflow for generating logos, colours, typography, and brand guidelines, with developer exports for Tailwind, CSS, and React.</p>
          <a className="text-link" href="https://x.com/sumitthq/status/2027032028584276128" target="_blank" rel="noreferrer">Watch the launch demo <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      )}
      <div className="project-footnote">
        {metrics && <span className="project-metrics">{metrics}</span>}
        {name === "Glyph" && <Link className="text-link" href="/blog/building-glyph">Read the story <ArrowUpRight size={12} aria-hidden="true" /></Link>}
      </div>
    </article>
  );
}
