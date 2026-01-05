import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Search } from 'lucide-react';
import projects from '@/data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('');

    // Flatten all projects
    const allProjects = projects.flatMap(p => p.items ? p.items : [p]);

    const filteredProjects = allProjects.filter(p =>
        p.title.toLowerCase().includes(filter.toLowerCase()) ||
        p.category.toLowerCase().includes(filter.toLowerCase()) ||
        p.description?.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">All Projects</h1>
                <p className="text-gray-400">A collection of mostly useless things I built.</p>

                {/* Search Bar */}
                <div className="relative max-w-md mt-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="group flex flex-col space-y-3 bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-colors">

                        {/* Image */}
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/20 relative">
                            {project.video ? (
                                <video
                                    src={project.video}
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    onMouseOver={e => e.currentTarget.play()}
                                    onMouseOut={e => e.currentTarget.pause()}
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <div className="text-xs font-mono text-cyan-500/80">
                                {project.category}
                            </div>
                            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No projects found matching "{filter}"
                </div>
            )}
        </div>
    );
};

export default Projects;
