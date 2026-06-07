"use client";

import React, { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import projects from '@/data/projects';

export default function Projects() {
    const [filter, setFilter] = useState('');

    const allProjects = projects;

    const filteredProjects = allProjects.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase()) ||
        p.category.toLowerCase().includes(filter.toLowerCase()) ||
        p.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">All Projects</h1>
                <p className="text-gray-600 dark:text-gray-400">Products I&apos;ve shipped. Some have paying customers.</p>

                {/* Search Bar */}
                <div className="relative max-w-md mt-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-brandAccent transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.slug} className="group flex flex-col space-y-3 bg-black/5 dark:bg-white/5 rounded-2xl p-4 border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors">

                        {/* Image */}
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-black/20 relative">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-white/80 transition-colors">
                                    {project.name}
                                </h3>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-500 dark:text-gray-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <div className="text-xs font-mono text-zinc-900/50 dark:text-white/50">
                                {project.category}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>
                            {project.metrics && (
                                <p className="text-xs text-zinc-900/60 dark:text-white/50 font-medium flex items-center gap-1 mt-1">
                                    <span>↗</span> {project.metrics}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500 dark:text-gray-500">
                    No projects found matching &quot;{filter}&quot;
                </div>
            )}
        </div>
    );
}
