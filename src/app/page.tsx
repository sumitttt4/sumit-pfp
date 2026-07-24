"use client";

import React, { useState, useEffect } from 'react';
import LetsTalkModal from '@/components/ui/LetsTalkModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Grid, ArrowUpRight, ChevronUp, Mail, Twitter, Calendar, Send, Clock, MapPin, Globe } from 'lucide-react';
import projects from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import Link from 'next/link';
import AsciiHeroContainer from '@/components/ui/AsciiHeroContainer';
import GithubCalendarComponent from '@/components/ui/GithubCalendarComponent';

// Brand Icon Fetcher using official Simple Icons & vector fallbacks
const BrandIcon = ({ name }: { name: string }) => {
    const slugMap: Record<string, string> = {
        'typescript': 'typescript',
        'javascript': 'javascript',
        'python': 'python',
        'react': 'react',
        'next.js': 'nextdotjs',
        'tailwind css': 'tailwindcss',
        'shadcn/ui': 'shadcnui',
        'radix ui': 'radixui',
        'framer motion': 'framer',
        'figma': 'figma',
        'node.js': 'nodedotjs',
        'supabase': 'supabase',
        'postgresql': 'postgresql',
        'payments': 'stripe',
        'claude code': 'anthropic',
        'claude': 'anthropic',
        'codex': 'openai',
        'chatgpt / openai': 'openai',
        'openai': 'openai',
        'cursor': 'cursor',
        'tanstack': 'reactquery',
        'zod': 'zod',
        'redux': 'redux',
        'clerk': 'clerk',
        'firebase': 'firebase',
        'convex': 'convex',
        'prisma': 'prisma',
        'drizzle': 'drizzle',
        'mongodb': 'mongodb',
        'redis': 'redis',
        'bun': 'bun',
        'docker': 'docker',
        'github': 'github',
        'vercel': 'vercel',
        'n8n': 'n8n',
    };

    const lower = name.toLowerCase();

    if (lower === 'codex') {
        return (
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path
                        d="M17.5 7C16.5 4.5 13.8 3 11 3C7.5 3 4.5 5.5 3.8 8.8C1.6 9.5 0 11.5 0 14C0 17.3 2.7 20 6 20H17.5C20.5 20 23 17.5 23 14.5C23 11.7 20.8 9.4 18 9.1C17.9 8.4 17.7 7.7 17.5 7Z"
                        fill="url(#codex-grad)"
                    />
                    <path
                        d="M8.5 11.5L11 14L8.5 16.5M13.5 16.5H16.5"
                        stroke="#000000"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <defs>
                        <linearGradient id="codex-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8F83FF" />
                            <stop offset="100%" stopColor="#5B68F6" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        );
    }

    if (lower === 'paper') {
        return (
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 rounded-[3px] overflow-hidden">
                    <rect width="24" height="24" rx="6" fill="#6B99E8" />
                    <path d="M7.5 5.5H18.5V13.5H7.5Z" fill="#F8FAFC" />
                    <path d="M5.5 8.5H13.5V18.5H5.5Z" fill="#F8FAFC" />
                    <path d="M7.5 8.5H13.5V13.5H7.5Z" fill="#6B99E8" />
                </svg>
            </span>
        );
    }

    if (lower === 'opencode') {
        return (
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200">
                    <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
            </span>
        );
    }

    if (lower === 'antigravity') {
        return (
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path
                        d="M4.5 19.5C5.5 14.5 8 6 12 6C16 6 18.5 14.5 19.5 19.5"
                        fill="none"
                        stroke="url(#antigravity-grad)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="antigravity-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="35%" stopColor="#10B981" />
                            <stop offset="70%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#EF4444" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        );
    }

    const slug = slugMap[lower];

    if (slug) {
        return (
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 shrink-0">
                <img
                    src={`https://cdn.simpleicons.org/${slug}`}
                    alt={name}
                    className="w-3.5 h-3.5 object-contain dark:invert transition-all"
                    loading="lazy"
                />
            </span>
        );
    }

    return <span className="text-[10px] text-zinc-400 dark:text-zinc-500 shrink-0">❖</span>;
};

// 5 Main Outcome-Focused Stack Categories
const mainStackCategories = [
    {
        id: "01",
        category: "Languages",
        skills: ["TypeScript", "JavaScript", "Python"]
    },
    {
        id: "02",
        category: "Product UI",
        skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion"]
    },
    {
        id: "03",
        category: "Design",
        skills: ["Figma", "Paper"]
    },
    {
        id: "04",
        category: "Backend Enough to Ship",
        skills: ["Node.js", "Supabase", "PostgreSQL", "Authentication", "Payments", "REST APIs"]
    },
    {
        id: "05",
        category: "AI Workflows",
        skills: ["Claude Code", "Codex", "OpenCode", "Cursor", "Antigravity"]
    }
];

// Additional Tools shown in the expandable drawer
const hiddenStackTools = [
    "TanStack", "Zod", "Redux", "Zustand", "Fumadocs", "Better Auth", "Clerk", "Firebase",
    "Convex", "Prisma", "Drizzle", "MongoDB", "Redis", "Bun", "Docker", "GitHub",
    "Vercel", "n8n"
];

export default function Home() {
    const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);
    const [stackViewMode, setStackViewMode] = useState<'list' | 'grid'>('list');
    const [projectLayout, setProjectLayout] = useState<'list' | 'grid'>('list');
    
    const [isFullStackExpanded, setIsFullStackExpanded] = useState(false);
    const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
    const [hoveredStackCategory, setHoveredStackCategory] = useState<string | null>(null);

    const roles = ["Product Engineer", "Product Builder", "Design Engineer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const visibleProjects = projects.slice(0, 4);

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
            className="space-y-20"
        >

            {/* HERO & TOP CONTENT */}
            <AsciiHeroContainer className="w-full">
                {/* Intro Text */}
                <motion.section
                    variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="max-w-2xl space-y-4 pt-6 pb-2"
                >
                    <div className="space-y-1">
                        <h1 className="text-[17px] font-semibold text-zinc-900 dark:text-white tracking-tight">
                            Sumit Sharma
                        </h1>
                        <div className="h-5 overflow-hidden relative text-zinc-500 dark:text-zinc-400 font-mono text-[12px] tracking-wide">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[currentRoleIndex]}
                                    initial={{ y: 8, opacity: 0, filter: "blur(2px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: -8, opacity: 0, filter: "blur(2px)" }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute left-0"
                                >
                                    {roles[currentRoleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                    
                    <p className="text-[15px] text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                        I build internet products with strong UX, fast execution, and clear positioning. My work spans product, frontend, automation, and growth - shipping tools that feel polished, useful, and intentional.
                    </p>
                </motion.section>

                {/* GITHUB CONTRIBUTION CALENDAR */}
                <GithubCalendarComponent username="sumitttt4" onOpenLetsTalk={() => setIsLetsTalkOpen(true)} />

                {/* STACK SECTION ("what I ship with.") */}
                <motion.section
                    variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    onMouseLeave={() => setHoveredStackCategory(null)}
                    className="w-full space-y-6 pt-10 sm:pt-12 group/stack relative"
                >

                    <div className="space-y-1.5 border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                                what I ship with.
                            </h2>
                            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5">
                                <button
                                    onClick={() => setStackViewMode('list')}
                                    className={`p-1.5 rounded-md transition-all active:scale-[0.95] ${stackViewMode === 'list' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'}`}
                                    title="List View"
                                >
                                    <Menu className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => setStackViewMode('grid')}
                                    className={`p-1.5 rounded-md transition-all active:scale-[0.95] ${stackViewMode === 'grid' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'}`}
                                    title="Grid View"
                                >
                                    <Grid className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xl">
                            A practical stack for building polished AI products, landing pages, dashboards, and growth systems.
                        </p>
                    </div>

                    {stackViewMode === 'list' ? (
                        <div className="space-y-4">
                            {mainStackCategories.map((item) => {
                                const isCategoryHovered = hoveredStackCategory === item.id;
                                const isAnyCategoryHovered = hoveredStackCategory !== null;
                                const categoryOpacity = isAnyCategoryHovered
                                    ? isCategoryHovered ? 'opacity-100' : 'opacity-30'
                                    : 'opacity-100';

                                return (
                                    <div 
                                        key={item.id} 
                                        tabIndex={0}
                                        onMouseEnter={() => setHoveredStackCategory(item.id)}
                                        onFocus={() => setHoveredStackCategory(item.id)}
                                        onMouseLeave={() => setHoveredStackCategory(null)}
                                        onBlur={() => setHoveredStackCategory(null)}
                                        className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline pb-4 border-b border-zinc-200/40 dark:border-zinc-800/40 last:border-b-0 outline-none focus:outline-none transition-all duration-200 ease-out ${categoryOpacity}`}
                                    >
                                        <div className="md:col-span-4 flex items-baseline gap-2">
                                            <span className={`font-mono text-xs transition-colors duration-200 ${isCategoryHovered ? 'text-zinc-700 dark:text-zinc-300 font-semibold' : 'text-zinc-400 dark:text-zinc-500'}`}>{item.id}</span>
                                            <span className={`text-sm font-semibold transition-colors duration-200 ${isCategoryHovered ? 'text-brandAccent dark:text-brandAccent' : 'text-zinc-900 dark:text-zinc-100'}`}>{item.category}</span>
                                        </div>
                                        <div className="md:col-span-8 flex flex-wrap gap-2">
                                            {item.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className={`px-3 py-1 rounded-full text-xs font-medium border inline-flex items-center gap-2 transition-all duration-200 ${
                                                        isCategoryHovered
                                                            ? 'bg-black/[0.08] dark:bg-white/[0.1] text-zinc-900 dark:text-white border-black/15 dark:border-white/20'
                                                            : 'bg-black/[0.03] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border-black/5 dark:border-white/5'
                                                    }`}
                                                >
                                                    <BrandIcon name={skill} />
                                                    <span>{skill}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mainStackCategories.map((item) => {
                                const isCategoryHovered = hoveredStackCategory === item.id;
                                const isAnyCategoryHovered = hoveredStackCategory !== null;
                                const categoryOpacity = isAnyCategoryHovered
                                    ? isCategoryHovered ? 'opacity-100' : 'opacity-30'
                                    : 'opacity-100';

                                return (
                                    <div 
                                        key={item.id} 
                                        tabIndex={0}
                                        onMouseEnter={() => setHoveredStackCategory(item.id)}
                                        onFocus={() => setHoveredStackCategory(item.id)}
                                        onMouseLeave={() => setHoveredStackCategory(null)}
                                        onBlur={() => setHoveredStackCategory(null)}
                                        className={`p-4 rounded-xl border space-y-3 outline-none focus:outline-none transition-all duration-200 ease-out ${categoryOpacity} ${
                                            isCategoryHovered
                                                ? 'bg-black/[0.04] dark:bg-white/[0.04] border-black/20 dark:border-white/20'
                                                : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{item.id}</span>
                                            <span className={`text-sm font-semibold transition-colors duration-200 ${isCategoryHovered ? 'text-brandAccent dark:text-brandAccent' : 'text-zinc-900 dark:text-white'}`}>{item.category}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.03] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5 inline-flex items-center gap-2"
                                                >
                                                    <BrandIcon name={skill} />
                                                    <span>{skill}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* EXPANDABLE FULL STACK DRAWER */}
                    <AnimatePresence>
                        {isFullStackExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden pt-4"
                            >
                                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-3">
                                    <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-mono">
                                        Additional Libraries, Frameworks & Infra
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {hiddenStackTools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.03] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5 inline-flex items-center gap-2"
                                            >
                                                <BrandIcon name={tool} />
                                                <span>{tool}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* VIEW FULL STACK BUTTON */}
                    <div className="text-center pt-2">
                        <button
                            onClick={() => setIsFullStackExpanded(!isFullStackExpanded)}
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 text-zinc-900 dark:text-white text-xs font-semibold transition-all active:scale-[0.97]"
                        >
                            <span>{isFullStackExpanded ? 'Hide full stack' : 'View full stack'}</span>
                            {isFullStackExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                        </button>
                    </div>
                </motion.section>
            </AsciiHeroContainer>

            {/* PROJECTS SECTION */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
                }}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="w-full space-y-6 group/projects relative"
            >
                <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-3">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">projects.</h2>
                    <div className="flex items-center gap-0.5 bg-black/5 dark:bg-white/5 p-1 rounded-lg border border-black/5 dark:border-white/5">
                        <button
                            onClick={() => setProjectLayout('list')}
                            className={`p-1.5 rounded-md transition-all active:scale-[0.95] ${projectLayout === 'list' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'}`}
                            title="List View"
                        >
                            <Menu className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={() => setProjectLayout('grid')}
                            className={`p-1.5 rounded-md transition-all active:scale-[0.95] ${projectLayout === 'grid' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'}`}
                            title="Grid View (With Photos)"
                        >
                            <Grid className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
                
                {projectLayout === 'list' ? (
                    <div className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
                        {visibleProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                name={project.name}
                                description={project.description}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                                layout="list"
                                isHovered={hoveredProjectId === project.slug}
                                isAnyHovered={hoveredProjectId !== null}
                                onMouseEnter={() => setHoveredProjectId(project.slug)}
                                onMouseLeave={() => setHoveredProjectId(null)}
                                onFocus={() => setHoveredProjectId(project.slug)}
                                onBlur={() => setHoveredProjectId(null)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 pt-1">
                        {visibleProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                category={project.category}
                                liveUrl={project.liveUrl}
                                githubUrl={project.githubUrl}
                                layout="grid"
                                isHovered={hoveredProjectId === project.slug}
                                isAnyHovered={hoveredProjectId !== null}
                                onMouseEnter={() => setHoveredProjectId(project.slug)}
                                onMouseLeave={() => setHoveredProjectId(null)}
                                onFocus={() => setHoveredProjectId(project.slug)}
                                onBlur={() => setHoveredProjectId(null)}
                            />
                        ))}
                    </div>
                )}

                <div className="text-center pt-2">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-[0.97] shadow-sm"
                    >
                        View all <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </motion.section>

            {/* EXPERIENCE SECTION (AFTER PROJECTS) */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="space-y-6"
            >
                <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-3">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">experience.</h2>
                </div>

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
                        <p className="text-[13px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed max-w-xl">
                            Built and launched a branding SaaS platform end-to-end. Designed the system architecture, handled Stripe integration, and scaled the product solo to over 400 active users and paying customers.
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
                        <p className="text-[13px] text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed max-w-xl">
                            Spearheaded component library refactoring in React and TypeScript, boosting frontend rendering performance and reducing dashboard load times.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* SOCIALS SECTION (BELOW EXPERIENCE) */}
            <motion.section
                id="socials"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="w-full space-y-6"
            >
                <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-3">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">socials.</h2>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 space-y-8 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Left Info */}
                        <div className="md:col-span-5 space-y-3">
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">Let&apos;s build together.</h3>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Whether you want to collaborate on a new project, chat about product engineering, or schedule a consulting call, feel free to reach out.
                            </p>
                        </div>

                        {/* Right Grid of Social Buttons */}
                        <div className="md:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a 
                                    href="mailto:sumitsharma9128@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-brandAccent dark:hover:border-brandAccent transition-all active:scale-[0.97] group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
                                        <Mail className="w-4 h-4" />
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
                                    className="flex items-center gap-3 p-3 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-brandAccent dark:hover:border-brandAccent transition-all active:scale-[0.97] group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
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
                                    className="flex items-center gap-3 p-3 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-brandAccent dark:hover:border-brandAccent transition-all active:scale-[0.97] group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Schedule</span>
                                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">Book a 15m call</span>
                                    </div>
                                </a>

                                <button
                                    onClick={() => setIsLetsTalkOpen(true)}
                                    className="flex items-center gap-3 p-3 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-brandAccent dark:hover:border-brandAccent transition-all active:scale-[0.97] text-left w-full group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-brandAccent transition-colors">
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

                    {/* Bottom Metadata Badges */}
                    <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 font-medium">
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Usually replies within 24h</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Based in Bengaluru</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Open to remote opportunities</span>
                        </div>
                    </div>
                </div>
            </motion.section>

            <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
        </motion.div>
    );
}
