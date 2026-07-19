"use client";

import React, { useState, useEffect } from 'react';
import LetsTalkModal from '@/components/ui/LetsTalkModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Clock, MapPin, Globe, Calendar, Twitter } from 'lucide-react';
import projects from '@/data/projects';
import posts from '@/data/blog';
import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import AsciiBadge from '@/components/ui/AsciiBadge';
import AsciiHeroContainer from '@/components/ui/AsciiHeroContainer';

// Tech Stack Data with specific accent brand colors
const stack = [
    { name: "JavaScript", color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20", accent: "#facc15" },
    { name: "TypeScript", color: "bg-blue-400/10 text-blue-400 border-blue-400/20", accent: "#3b82f6" },
    { name: "Next.js", color: "bg-gray-900/10 text-gray-900 border-gray-900/20 dark:bg-white/10 dark:text-white dark:border-white/20", accent: "#a1a1aa" },
    { name: "React.js", color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20", accent: "#22d3ee" },
    { name: "TailwindCSS", color: "bg-sky-400/10 text-sky-400 border-sky-400/20", accent: "#38bdf8" },
    { name: "Node.js", color: "bg-green-400/10 text-green-400 border-green-400/20", accent: "#4ade80" },
    { name: "PostgreSQL", color: "bg-blue-300/10 text-blue-300 border-blue-300/20", accent: "#60a5fa" },
    { name: "Figma", color: "bg-purple-400/10 text-purple-400 border-purple-400/20", accent: "#c084fc" },
    { name: "Supabase", color: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20", accent: "#34d399" },
    { name: "REST APIs", color: "bg-orange-400/10 text-orange-400 border-orange-400/20", accent: "#fb923c" },
    { name: "GraphQL", color: "bg-pink-400/10 text-pink-400 border-pink-400/20", accent: "#f472b6" },
    { name: "Docker", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", accent: "#60a5fa" },
    { name: "Prisma", color: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20", accent: "#818cf8" },
    { name: "Framer Motion", color: "bg-fuchsia-400/10 text-fuchsia-400 border-fuchsia-400/20", accent: "#e879f9" },
];

export default function Home() {
    const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);
    const [allPosts, setAllPosts] = useState(posts);
    const roles = ["Product Engineer", "Product Builder", "Design Engineer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const res = await fetch('/api/posts');
                if (res.ok) {
                    const json = await res.json();
                    setAllPosts(json);
                }
            } catch (e) {
                console.error('Error loading posts on home page:', e);
            }
        };
        loadPosts();
    }, []);

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
            className="space-y-24"
        >

            {/* HERO SECTION */}
            <AsciiHeroContainer className="w-full">
                <motion.section
                    variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="max-w-2xl space-y-6 py-10"
                >
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h1 className="text-[17px] font-semibold text-zinc-900 dark:text-white tracking-tight">
                            Sumit Sharma
                        </h1>
                        <div className="h-5 overflow-hidden relative text-zinc-500 dark:text-zinc-400 font-mono text-[12px] tracking-wide">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[currentRoleIndex]}
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -8, opacity: 0 }}
                                    transition={{ duration: 0.15, ease: "easeInOut" }}
                                    className="absolute left-0"
                                >
                                    {roles[currentRoleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                    
                    <p className="text-[15px] text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed pt-2">
                        I build internet products with strong UX, fast execution, and clear positioning. My work spans product, frontend, automation, and growth - shipping tools that feel polished, useful, and intentional.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                        <a 
                            href="https://drive.google.com/file/d/1rEQ2cCs-dJg18AEAcPp4AU5LHI4iTI9u/view?usp=sharing" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                        >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                            </svg> View Resume
                        </a>
                        <button 
                            onClick={() => setIsLetsTalkOpen(true)}
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-850 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-zinc-200/50 dark:border-zinc-700/50"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>


                {/* Experience Timeline */}
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                    <div className="relative pl-4 border-l border-zinc-200/90 dark:border-zinc-800 space-y-6 text-[13px]">
                        {/* Glyph */}
                        <div className="relative">
                            <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 border border-white dark:border-zinc-950" />
                            <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <div>
                                    <span className="font-bold text-zinc-900 dark:text-white">Glyph</span>
                                    <span className="text-zinc-500 dark:text-zinc-400 font-normal ml-2">— Founder & Developer</span>
                                </div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">Feb 2025 – Jun 2026</span>
                            </div>
                            <p className="text-[12px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed max-w-xl">
                                Built and launched a branding SaaS platform end-to-end. Designed the system architecture, handled Stripe integration, and scaled the product solo to over 400 active users and paying customers.
                            </p>
                        </div>
                        {/* Glyph Skill */}
                        <div className="relative">
                            <span className="absolute -left-[21px] top-1.5 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <div>
                                    <a 
                                        href="https://glyph-skillfordesign.vercel.app/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="font-bold text-zinc-900 dark:text-white hover:text-brandAccent dark:hover:text-brandAccent hover:underline transition-colors"
                                    >
                                        Glyph Skill
                                    </a>
                                    <span className="text-zinc-500 dark:text-zinc-400 font-normal ml-2">— Open Source Creator</span>
                                </div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">Mar 2026 – Present</span>
                            </div>
                            <p className="text-[12px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed max-w-xl">
                                Designed and launched an open-source framework to enforce design constraints in AI coding workflows. Used by 100+ developers to build polished, non-slop interfaces.
                            </p>
                        </div>
                        {/* Metry AI */}
                        <div className="relative">
                            <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 border border-white dark:border-zinc-950" />
                            <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <div>
                                    <span className="font-bold text-zinc-900 dark:text-white">Metry AI</span>
                                    <span className="text-zinc-500 dark:text-zinc-400 font-normal ml-2">— Frontend Engineer Intern</span>
                                </div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">Aug 2024 – Jan 2025</span>
                            </div>
                            <p className="text-[12px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed max-w-xl">
                                Spearheaded component library refactoring in React and TypeScript, boosting frontend rendering performance and reducing dashboard load times.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Links & Resume */}
                <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80">
                    <div className="flex items-center gap-5 text-zinc-400">
                        {/* GitHub */}
                        <a href="https://github.com/sumitttt4" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="GitHub">
                            <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </a>

                        {/* X (formerly Twitter) */}
                        <a href="https://x.com/sumitdotme" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="Twitter / X">
                            <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/sumitsharma4" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="LinkedIn">
                            <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                            </svg>
                        </a>

                        {/* Email */}
                        <a href="mailto:sumitsharma9128@gmail.com" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="Email">
                            <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                            </svg>
                        </a>

                        {/* Resume Link */}
                        <a href="https://drive.google.com/file/d/1rEQ2cCs-dJg18AEAcPp4AU5LHI4iTI9u/view?usp=sharing" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="View Resume">
                            <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* SKILLS SECTION (Normal & Simple) */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="space-y-4"
            >
                <h2 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">Tech Stack</h2>
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-2">
                    <div className="flex gap-3 animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
                        {/* First list of items */}
                        {stack.map((tech) => (
                            <AsciiBadge
                                key={`${tech.name}-1`}
                                accentColor={tech.accent}
                                className="bg-[#f2f2f2] text-zinc-700 hover:bg-[#e4e4e4]/30 border-zinc-200/20 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/30 dark:border-zinc-800/50 whitespace-nowrap"
                            >
                                {tech.name}
                            </AsciiBadge>
                        ))}
                        {/* Second list of items to enable seamless looping */}
                        {stack.map((tech) => (
                            <AsciiBadge
                                key={`${tech.name}-2`}
                                accentColor={tech.accent}
                                className="bg-[#f2f2f2] text-zinc-700 hover:bg-[#e4e4e4]/30 border-zinc-200/20 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/30 dark:border-zinc-800/50 whitespace-nowrap"
                            >
                                {tech.name}
                            </AsciiBadge>
                        ))}
                    </div>
                </div>
            </motion.section>
            </AsciiHeroContainer>

            {/* PROJECTS SECTION */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="space-y-12"
            >
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white/90 tracking-tight">Featured Projects</h2>
                
                {featuredProjects.length > 0 && (
                    <div className="space-y-12">
                        {/* Spotlight Project */}
                        <div className="pb-10 border-b border-zinc-200/80 dark:border-white/5">
                            <ProjectCard
                                isSpotlight
                                name={featuredProjects[0].name}
                                description={featuredProjects[0].description}
                                image={featuredProjects[0].image}
                                category={featuredProjects[0].category}
                                metrics={featuredProjects[0].metrics}
                                liveUrl={featuredProjects[0].liveUrl}
                                githubUrl={featuredProjects[0].githubUrl}
                            />
                        </div>

                        {/* Other Projects Grid */}
                        {featuredProjects.length > 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {featuredProjects.slice(1).map((project) => (
                                    <ProjectCard
                                        key={project.slug}
                                        name={project.name}
                                        description={project.description}
                                        image={project.image}
                                        category={project.category}
                                        metrics={project.metrics}
                                        liveUrl={project.liveUrl}
                                        githubUrl={project.githubUrl}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <div className="text-center pt-4">
                    <Link href="/projects" className="text-sm text-zinc-900/60 dark:text-white/40 hover:text-brandAccent hover:border-brandAccent transition-colors border-b border-transparent pb-1">
                        View all projects →
                    </Link>
                </div>
            </motion.section>

            {/* RECENT POSTS SECTION */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="space-y-8"
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white/90 tracking-tight">Most recent posts</h2>
                    <Link href="/blog" className="text-xs font-medium text-zinc-900/60 dark:text-white/40 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        View all
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {allPosts.slice(0, 3).map((post) => (
                        post.link ? (
                            <a
                                key={post.id}
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group block space-y-4 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3 text-[10px] tracking-wider uppercase text-zinc-900/50 dark:text-white/30 font-medium">
                                    <span className="text-zinc-900/60 dark:text-white/50"># {post.tags[0].toLowerCase()}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900/90 dark:text-white/80 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-zinc-900/60 dark:text-white/40 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </a>
                        ) : (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="group block space-y-4 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all backdrop-blur-sm">
                                <div className="flex items-center gap-3 text-[10px] tracking-wider uppercase text-zinc-900/50 dark:text-white/30 font-medium">
                                    <span className="text-zinc-900/60 dark:text-white/50"># {post.tags[0].toLowerCase()}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900/90 dark:text-white/80 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-zinc-900/60 dark:text-white/40 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </Link>
                        )
                    ))}
                </div>
            </motion.section>

            {/* CONTACT SECTION */}
            <motion.section
                id="contact"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="w-full relative animate-fade-in"
            >
                <div className="p-8 sm:p-12 rounded-[24px] bg-white/40 dark:bg-white/[0.01] border border-zinc-200/80 dark:border-white/5 backdrop-blur-sm space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Column (6 columns) */}
                        <div className="md:col-span-6 space-y-4">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">Let&apos;s build together.</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed max-w-md">
                                Whether you want to collaborate on a new project, chat about product engineering, or schedule a quick consulting call, feel free to reach out.
                            </p>
                        </div>

                        {/* Right Column (6 columns) */}
                        <div className="md:col-span-6 space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a 
                                    href="mailto:sumitsharma9128@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-white dark:bg-white/[0.01] hover:border-brandAccent dark:hover:border-white/10 hover:shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Email</span>
                                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">sumitsharma9128@gmail.com</span>
                                    </div>
                                </a>

                                <a 
                                    href="https://x.com/sumitdotme"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-white dark:bg-white/[0.01] hover:border-brandAccent dark:hover:border-white/10 hover:shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
                                        <Twitter className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Twitter / X</span>
                                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">@sumitdotme</span>
                                    </div>
                                </a>

                                <a 
                                    href="https://cal.com/sumit-sharma/15min"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-white dark:bg-white/[0.01] hover:border-brandAccent dark:hover:border-white/10 hover:shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Schedule</span>
                                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">Book a 15m call</span>
                                    </div>
                                </a>

                                <button
                                    onClick={() => setIsLetsTalkOpen(true)}
                                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-white dark:bg-white/[0.01] hover:border-brandAccent dark:hover:border-white/10 hover:shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all text-left w-full group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
                                        <Send className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Contact</span>
                                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">Get in Touch</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row (Metadata & Socials) */}
                    <div className="pt-6 border-t border-zinc-200/85 dark:border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                                Usually replies within 24 hours
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                                Based in Bengaluru
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Globe className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                                Open to remote opportunities
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <a href="https://github.com/sumitttt4" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-white/30 dark:hover:text-white transition-colors transform hover:scale-110" title="GitHub">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </a>
                            <a href="https://x.com/sumitdotme" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-white/30 dark:hover:text-white transition-colors transform hover:scale-110" title="Twitter / X">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/sumitsharma4" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-white/30 dark:hover:text-white transition-colors transform hover:scale-110" title="LinkedIn">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                                </svg>
                            </a>
                            <a href="mailto:sumitsharma9128@gmail.com" className="text-zinc-500 hover:text-zinc-900 dark:text-white/30 dark:hover:text-white transition-colors transform hover:scale-110" title="Email">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                                </svg>
                            </a>
                            <a href="https://drive.google.com/file/d/1rEQ2cCs-dJg18AEAcPp4AU5LHI4iTI9u/view?usp=sharing" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-white/30 dark:hover:text-white transition-colors transform hover:scale-110" title="View Resume">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>

            <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
        </motion.div>
    );
}
