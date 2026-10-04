import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import projects from "@/data/projects";
import { profile } from "@/data/profile";
import ProjectCard from "@/components/ui/ProjectCard";
import StackSection from "@/components/ui/StackSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import ContactSection from "@/components/ui/ContactSection";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const selected = projects.filter((project) => project.featured);
  return (
    <div className="home-page">
      <section className="hero">
        <div className="eyebrow">
          <span className="current-dot" />
          Frontend engineer at Craon
        </div>
        <h1>
          Design-minded.
          <br />
          <span>Built to ship.</span>
        </h1>
        <p>
          I’m Sumit, a design engineer and product builder. I turn ideas into
          useful interfaces, and care just as much about how they feel as how
          they work.
        </p>
        <div className="hero-links">
          <Link href="#work" className="primary-link">
            Explore my work <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Resume <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-note">
          Currently building an AI video editor. Independently building{" "}
          <a
            className="inline-link"
            href="https://glyph.software"
            target="_blank"
            rel="noreferrer"
          >
            Glyph
          </a>
          .
        </div>
      </section>
      <section className="section" id="work">
        <div className="section-heading">
          <h2>Selected work.</h2>
          <Link className="text-link" href="/projects">
            All projects <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-grid">
          {selected.map((project, index) => (
            <ProjectCard key={project.slug} {...project} priority={index < 2} />
          ))}
        </div>
      </section>
      <ExperienceSection />
      <StackSection />
      <section className="section writing-section">
        <div className="section-heading">
          <h2>Notes from building.</h2>
          <Link href="/blog" className="text-link">
            All writing <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <Link
          href="/blog/how-i-built-glyph-to-427-revenue"
          className="writing-row"
        >
          <span>
            <span className="writing-title">
              Taking Glyph from an idea to paying customers
            </span>
            <span className="writing-excerpt">
              What I learned designing, building, and launching on my own.
            </span>
          </span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
      <ContactSection />
    </div>
  );
}
