import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import projects from "@/data/projects";
import { profile } from "@/data/profile";
import ProjectCard from "@/components/ui/ProjectCard";
import StackSection from "@/components/ui/StackSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import ContactSection from "@/components/ui/ContactSection";
import GithubCalendarComponent from "@/components/ui/GithubCalendarComponent";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const selected = projects.filter((project) => project.featured);
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Hey, I’m Sumit<span className="hello-mark" aria-hidden="true">✳</span></h1>
        <p>A frontend engineer who enjoys designing and building things for the web. I care about the little details that make a product feel good to use.</p>
        <p>Currently at <a className="inline-link" href="#experience">Craon</a>, building an AI video editor. I also built <a className="inline-link" href="https://glyph.software" target="_blank" rel="noreferrer">Glyph</a>, a brand identity generator for builders.</p>
        <div className="hero-links">
          <a href={`mailto:${profile.email}`} className="text-link">Say hello <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="text-link">Resume <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </section>
      <GithubCalendarComponent />
      <ExperienceSection />
      <section className="section" id="work">
        <div className="section-heading">
          <h2>Selected work</h2>
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
      <StackSection />
      <section className="section writing-section">
        <div className="section-heading">
          <h2>Writing</h2>
          <Link href="/blog" className="text-link">
            All writing <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <Link
          href="/blog/building-glyph"
          className="writing-row"
        >
          <span>
            <span className="writing-title">
              Building Glyph: from an idea to a paid product
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
