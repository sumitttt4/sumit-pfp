"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [query, setQuery] = useState("");
  const filtered = projects.filter((project) =>
    `${project.name} ${project.category} ${project.description}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  return (
    <div className="page-content">
      <div className="page-heading">
        <p className="eyebrow">An ongoing collection</p>
        <h1>Things I’ve built.</h1>
        <p>
          Products, experiments, and interfaces. From an idea on a page to
          something you can use.
        </p>
      </div>
      <div className="project-search">
        <label htmlFor="project-search">Find a project</label>
        <div>
          <Search size={17} aria-hidden="true" />
          <input
            id="project-search"
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
        {filtered.map((project) => (
          <ProjectCard {...project} key={project.slug} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <p>No projects match “{query}”.</p>
          <button className="text-link" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
