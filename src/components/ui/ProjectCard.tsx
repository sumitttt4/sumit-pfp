import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface ProjectCardProps {
  name: string;
  description: string;
  image?: string;
  category?: string;
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  priority?: boolean;
}

export default function ProjectCard({
  name,
  description,
  image,
  category,
  metrics,
  liveUrl,
  githubUrl,
  priority,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      {image && (
        <a
          className="project-preview"
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${name}`}
        >
          <Image
            src={image}
            alt={`${name} interface preview`}
            fill
            sizes="(max-width: 640px) calc(100vw - 40px), 360px"
            priority={priority}
            className="project-image"
          />
          <span className="preview-arrow">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </a>
      )}
      <div className="project-info">
        <div className="project-title">
          <h3>{name}</h3>
          {githubUrl && (
            <a
              className="icon-button"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} on GitHub`}
            >
              <BrandLogo name="github" size={16} />
            </a>
          )}
        </div>
        {category && <p className="project-category">{category}</p>}
        <p className="project-description">{description}</p>
        {metrics && <p className="project-metrics">{metrics}</p>}
        {name === "Glyph" && (
          <Link
            className="text-link project-case-study"
            href="/blog/how-i-built-glyph-to-427-revenue"
          >
            How I built it <ArrowRight size={14} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
