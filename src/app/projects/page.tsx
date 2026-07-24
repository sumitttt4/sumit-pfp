"use client";

import React, { useState } from 'react';
import { Search, Menu, Grid } from 'lucide-react';
import { motion } from 'framer-motion';
import projects from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import AsciiHeroContainer from '@/components/ui/AsciiHeroContainer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function Projects() {
    const [filter, setFilter] = useState('');
    const [layout, setLayout] = useState<'list' | 'grid'>('list');

    const filteredProjects = projects.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase()) ||
        p.category.toLowerCase().includes(filter.toLowerCase()) ||
        p.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <AsciiHeroContainer className="w-full">
            <div className="space-y-8 py-6">
                {/* Header */}
                <div className="space-y-4 border-b border-zinc-200/80 dark:border-zinc-800 pb-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">projects.</h1>
                        <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5">
                            <button
                                onClick={() => setLayout('list')}
                                className={`p-1.5 rounded-md transition-all active:scale-[0.95] ${layout === 'list' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'}`}
                                title="List View"
                            >
                                <Menu className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setLayout('grid')}
                                className={`p-1.5 rounded-md transition-all active:scale-[0.95] ${layout === 'grid' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'}`}
                                title="Grid View (With Photos)"
                            >
                                <Grid className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Products I&apos;ve shipped. Some have paying customers.</p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mt-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-brandAccent transition-all"
                        />
                    </div>
                </div>

                {/* Staggered Blur-In Projects Display */}
                {layout === 'list' ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80 group/projects relative"
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                name={project.name}
                                description={project.description}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                                layout="list"
                            />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7 group/projects relative max-w-[780px] mx-auto"
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                category={project.category}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                                layout="grid"
                            />
                        ))}
                    </motion.div>
                )}

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 text-sm text-zinc-500 dark:text-zinc-500">
                        No projects found matching &quot;{filter}&quot;
                    </div>
                )}
            </div>
        </AsciiHeroContainer>
    );
}
