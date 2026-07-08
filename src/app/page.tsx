"use client";

import React, { useState, useEffect } from 'react';
import LetsTalkModal from '@/components/ui/LetsTalkModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, FileText, Send, Clock, MapPin, Globe, Calendar, Twitter } from 'lucide-react';
import projects from '@/data/projects';
import posts from '@/data/blog';
import Link from 'next/link';
import BorderGrid from '@/components/ui/BorderGrid';
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
    const roles = ["Design Engineer for Startups", "Product Engineer", "Full-Stack Developer"];
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
                        I design and build premium, high-fidelity web products for startup teams. By bridging the gap between Figma mockups and production-ready React, Next.js, and TypeScript, I help teams ship polished features faster. Founder of Glyph.
                    </p>
                    <p className="text-[15px] text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                        Currently building <a href="https://glyph.software" target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-white font-medium hover:underline inline-flex items-center gap-0.5 whitespace-nowrap">Glyph<ExternalLink className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" /></a> and running <a href="https://www.blurr.design/" target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-white font-medium hover:underline inline-flex items-center gap-0.5 whitespace-nowrap">Blurr Design<ExternalLink className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" /></a>.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                        <a 
                            href="https://drive.google.com/file/d/1rEQ2cCs-dJg18AEAcPp4AU5LHI4iTI9u/view?usp=sharing" 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                        >
                            <FileText className="w-3.5 h-3.5" /> View Resume
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
                    <div className="relative pl-4 border-l border-zinc-200 dark:border-zinc-800 space-y-5 text-[13px]">
                        {/* Blurr Design */}
                        <div className="relative">
                            <span className="absolute -left-[21px] top-1.5 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <div>
                                    <span className="font-semibold text-zinc-805 dark:text-white">Blurr Design</span>
                                    <span className="text-zinc-400 dark:text-zinc-500 font-light ml-2">— Design Engineer (Part-time)</span>
                                </div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">Jul 2026 – Present</span>
                            </div>
                            <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed max-w-xl">
                                Designing high-fidelity interactive interfaces in Figma and writing production-grade React, Next.js, and Tailwind code for early-stage startup clients.
                            </p>
                        </div>
                        {/* Glyph */}
                        <div className="relative">
                            <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 border border-white dark:border-zinc-950" />
                            <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <div>
                                    <span className="font-medium text-zinc-750 dark:text-zinc-300">Glyph</span>
                                    <span className="text-zinc-400 dark:text-zinc-500 font-light ml-2">— Founder & Developer</span>
                                </div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">Feb 2025 – Jun 2026</span>
                            </div>
                            <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed max-w-xl">
                                Architected and shipped a branding SaaS tool solo. Built the full-stack system (Next.js, Supabase, Stripe Integration) and designed all user interface components.
                            </p>
                        </div>
                        {/* Metry AI */}
                        <div className="relative">
                            <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 border border-white dark:border-zinc-950" />
                            <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <div>
                                    <span className="font-medium text-zinc-750 dark:text-zinc-300">Metry AI</span>
                                    <span className="text-zinc-400 dark:text-zinc-500 font-light ml-2">— Frontend Engineer Intern</span>
                                </div>
                                <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">Aug 2024 – Jan 2025</span>
                            </div>
                            <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed max-w-xl">
                                Developed modular, typed frontend component libraries and implemented responsive dashboard view layouts in React and TypeScript.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Links & Resume */}
                <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80">
                    <div className="flex items-center gap-5 text-zinc-400">
                        {/* GitHub */}
                        <a href="https://github.com/sumitttt4" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="GitHub">
                            <Github className="w-[17px] h-[17px]" />
                        </a>

                        {/* X (formerly Twitter) */}
                        <a href="https://x.com/sumitdotme" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="Twitter / X">
                            <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/sumitsharma4" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="LinkedIn">
                            <Linkedin className="w-[17px] h-[17px]" />
                        </a>

                        {/* Email */}
                        <a href="mailto:sumitsharma9128@gmail.com" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="Email">
                            <Mail className="w-[17px] h-[17px]" />
                        </a>

                        {/* Resume Link */}
                        <a href="https://drive.google.com/file/d/1rEQ2cCs-dJg18AEAcPp4AU5LHI4iTI9u/view?usp=sharing" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors" title="View Resume">
                            <FileText className="w-[17px] h-[17px]" />
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
                className="space-y-10"
            >
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white/90 tracking-tight">Featured Projects</h2>
                <BorderGrid columns={2}>
                    {featuredProjects.map((project) => (
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
                </BorderGrid>
                <div className="text-center pt-8">
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
                <div className="p-6 sm:p-10 rounded-[20px] bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 backdrop-blur-sm space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                        {/* Left Column (60%) */}
                        <div className="md:col-span-7 space-y-6">
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">Let&apos;s build something meaningful.</h2>
                                <p className="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed">
                                    I&apos;m currently building Glyph while helping startups design, build and launch products.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">Available for</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Full-time roles',
                                        'Frontend engineering',
                                        'Product design',
                                        'Freelance work'
                                    ].map((item) => (
                                        <div 
                                            key={item} 
                                            className="px-4 py-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column (40%) */}
                        <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">Contact</h3>
                                <div className="space-y-3">
                                    <a 
                                        href="mailto:sumitsharma9128@gmail.com"
                                        className="flex items-center gap-3.5 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Email</span>
                                            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">sumitsharma9128@gmail.com</span>
                                        </div>
                                    </a>

                                    <a 
                                        href="https://x.com/sumitdotme"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3.5 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                            <Twitter className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Twitter / X</span>
                                            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">@sumitdotme</span>
                                        </div>
                                    </a>

                                    <a 
                                        href="https://cal.com/sumit-sharma/15min"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3.5 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase font-semibold">Schedule</span>
                                            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">Book a call</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    onClick={() => setIsLetsTalkOpen(true)}
                                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 font-semibold text-sm transition-all shadow-sm shadow-black/5 group"
                                >
                                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row (Metadata & Socials) */}
                    <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
                            <a href="https://github.com/sumitttt4" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/sumitdotme" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/sumitsharma4" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:sumitsharma9128@gmail.com" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://drive.google.com/file/d/1rEQ2cCs-dJg18AEAcPp4AU5LHI4iTI9u/view?usp=sharing" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110" title="View Resume">
                                <FileText className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>

            <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
        </motion.div>
    );
}
