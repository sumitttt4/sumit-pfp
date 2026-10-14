"use client";

import { useRef, useState } from "react";
import { Search } from "lucide-react";
import projects from "@/data/projects";
import SecondaryProjects from "@/components/ui/SecondaryProjects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const searchInput = useRef<HTMLInputElement>(null);
  function clearSearch() { setQuery(""); searchInput.current?.focus(); }
  const [query, setQuery] = useState("");
  const filtered = projects.filter((project) =>
    `${project.name} ${project.title || ""} ${project.category} ${project.description} ${project.contribution || ""} ${(project.tags || []).join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  return (
    <div className="page-content">
      <div className="page-heading">
        <p className="eyebrow">An ongoing collection</p>
        <h1>Things I’ve built.</h1>
        <p>
          Selected products, followed by smaller tools and experiments.
        </p>
      </div>
      <div className="project-search">
        <label htmlFor="project-search">Find a project</label>
        <div>
          <Search size={17} aria-hidden="true" />
          <input
            id="project-search"
            ref={searchInput}
            onKeyDown={event => { if (event.key === "Escape") clearSearch(); }}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, tool, or category…"
          />
        </div>
      </div>
      <p className="search-count" role="status">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid">
        {filtered.filter(project => project.featured).map((project) => (
          <ProjectCard {...project} key={project.slug} showVisual />
        ))}
      </div>
      {filtered.some(project => !project.featured) && <section className="section secondary-section" aria-labelledby="more-projects-title"><div className="section-heading"><h2 id="more-projects-title">More things I’ve built</h2></div><SecondaryProjects projects={filtered.filter(project => !project.featured)} /></section>}
      {!filtered.length && (
        <div className="empty-state">
          <p>No projects match “{query}”.</p>
          <button type="button" className="text-link" onClick={clearSearch}>
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
