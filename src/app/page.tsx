"use client";

import React, { useState } from 'react';
import LetsTalkModal from '@/components/ui/LetsTalkModal';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, ExternalLink, Coffee, Send } from 'lucide-react';
import projects from '@/data/projects';
import posts from '@/data/blog';
import { GitHubCalendar } from 'react-github-calendar';
import Link from 'next/link';
import BorderGrid from '@/components/ui/BorderGrid';

// Tech Stack Data
const stack = [
    { name: "JavaScript", color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20" },
    { name: "TypeScript", color: "bg-blue-400/10 text-blue-400 border-blue-400/20" },
    { name: "Next.js", color: "bg-white/10 text-white border-white/20" },
    { name: "React.js", color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
    { name: "TailwindCSS", color: "bg-sky-400/10 text-sky-400 border-sky-400/20" },
    { name: "Node.js", color: "bg-green-400/10 text-green-400 border-green-400/20" },
    { name: "PostgreSQL", color: "bg-blue-300/10 text-blue-300 border-blue-300/20" },
    { name: "Figma", color: "bg-purple-400/10 text-purple-400 border-purple-400/20" },
    { name: "Supabase", color: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" },
    { name: "REST APIs", color: "bg-orange-400/10 text-orange-400 border-orange-400/20" },
    { name: "GraphQL", color: "bg-pink-400/10 text-pink-400 border-pink-400/20" },
    { name: "Docker", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { name: "Prisma", color: "bg-indigo-400/10 text-indigo-400 border-indigo-400/20" },
    { name: "Framer Motion", color: "bg-fuchsia-400/10 text-fuchsia-400 border-fuchsia-400/20" },
];

export default function Home() {
    const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);

    // Flatten projects for display
    const featuredProjects = projects.flatMap(p => p.items ? p.items : [p]).slice(0, 4);

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
            className="space-y-32"
        >

            {/* HERO SECTION */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="max-w-3xl space-y-8 py-20"
            >
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-zinc-900 dark:text-white/90 tracking-[-0.04em]">
                        Sumit Sharma
                    </h1>
                    <p className="text-xl text-zinc-900/80 dark:text-white/60 font-medium max-w-2xl leading-relaxed">
                        <span className="font-playfair italic text-2xl text-zinc-900/90 dark:text-white/80 pr-1">Design Engineer</span>
                        who bridges the gap between Figma and Code.
                        I build polished, interactive interfaces that feel alive.
                    </p>
                </div>

                <div className="text-zinc-900/70 dark:text-white/50 space-y-6 text-lg leading-relaxed max-w-2xl font-light">
                    <p>
                        Currently building <a href="https://glyph.software" target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-white/90 font-medium hover:text-cyan-400 transition-colors underline decoration-black/30 dark:decoration-white/30 hover:decoration-cyan-400/50 underline-offset-4">Glyph</a>, an AI brand identity generator with 7 paying customers.
                        Also running <a href="https://fedup.studio" target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-white/90 font-medium hover:text-cyan-400 transition-colors underline decoration-black/30 dark:decoration-white/30 hover:decoration-cyan-400/50 underline-offset-4">Fedup Studio</a> — a design & development agency.
                    </p>

                    {/* Experience Timeline */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } }
                        }}
                        className="pt-2 pl-1"
                    >
                        <div className="relative space-y-0">
                            {/* Vertical line */}
                            <div className="absolute left-[4px] top-[10px] bottom-[10px] w-px bg-black/10 dark:bg-white/10" />

                            {/* Metry AI */}
                            <div className="relative flex items-start gap-4 py-2.5">
                                <div className="relative z-10 mt-1.5 w-[9px] h-[9px] rounded-full bg-black/20 dark:bg-white/20 border border-black/10 dark:border-white/10 shrink-0" />
                                <div className="min-w-0">
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <span className="text-sm font-medium text-zinc-900/80 dark:text-white/70">Metry AI</span>
                                        <span className="text-xs text-zinc-900/50 dark:text-white/30">— Frontend Engineer Intern</span>
                                    </div>
                                    <span className="text-[11px] font-mono text-zinc-900/50 dark:text-white/25 tracking-wide">Aug 2024 – Jan 2025</span>
                                </div>
                            </div>

                            {/* Fedup Studio */}
                            <div className="relative flex items-start gap-4 py-2.5">
                                <div className="relative z-10 mt-1.5 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-[9px] w-[9px] rounded-full bg-green-400 opacity-50"></span>
                                    <span className="relative inline-flex rounded-full h-[9px] w-[9px] bg-green-500 border border-green-400/30"></span>
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <a href="https://fedup.studio" target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-900/80 dark:text-white/70 hover:text-cyan-400 transition-colors underline decoration-black/15 dark:decoration-white/15 hover:decoration-cyan-400/40 underline-offset-2">Fedup Studio</a>
                                        <span className="text-xs text-zinc-900/50 dark:text-white/30">— Founder & Design Engineer</span>
                                    </div>
                                    <span className="text-[11px] font-mono text-zinc-900/50 dark:text-white/25 tracking-wide">Feb 2025 – Present</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Currently Building */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.32, duration: 0.5 } }
                        }}
                        className="pl-1 flex items-start gap-3"
                    >
                        <span className="text-[11px] font-mono text-zinc-900/50 dark:text-white/25 tracking-wide uppercase shrink-0 pt-px">Currently building</span>
                        <div className="flex items-baseline gap-2 flex-wrap">
                            <a
                                href="https://glyph.software"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium text-zinc-900/80 dark:text-white/70 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                            >
                                Glyph
                                <ExternalLink className="w-3 h-3 text-zinc-900/50 dark:text-white/25" />
                            </a>
                            <span className="text-xs text-zinc-900/50 dark:text-white/30">· AI brand identity generator · 7 paying customers</span>
                        </div>
                    </motion.div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { delay: 0.4 } }
                        }}
                        className="pt-4 flex items-center gap-2"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide uppercase text-zinc-900/60 dark:text-white/40">Available Now · Full-Time or Freelance · <span className="text-zinc-900/50 dark:text-white/30">Bengaluru · IST</span> <span onClick={() => setIsLetsTalkOpen(true)} className="text-cyan-400/90 hover:text-cyan-300 cursor-pointer transition-colors border-b border-cyan-500/30 pb-0.5">Let&apos;s talk</span></span>
                    </motion.p>
                </div>
            </motion.section>

            {/* SKILLS SECTION */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="space-y-8"
            >
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white/90 tracking-tight">Tools that I have used</h2>
                <div className="space-y-4">
                    <Marquee gradient={false} speed={40} className="py-2">
                        {[...stack.slice(0, 7), ...stack.slice(0, 7), ...stack.slice(0, 7)].map((tech, i) => (
                            <span
                                key={`${tech.name}-${i}`}
                                className={`mx-4 px-4 py-2 rounded-full text-xs font-medium border ${tech.color} bg-opacity-[0.03] backdrop-blur-sm transition-all hover:scale-105 cursor-default`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </Marquee>
                    <Marquee gradient={false} speed={40} direction="right" className="py-2">
                        {[...stack.slice(7), ...stack.slice(7), ...stack.slice(7)].map((tech, i) => (
                            <span
                                key={`${tech.name}-${i}`}
                                className={`mx-4 px-4 py-2 rounded-full text-xs font-medium border ${tech.color} bg-opacity-[0.03] backdrop-blur-sm transition-all hover:scale-105 cursor-default`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </Marquee>
                </div>

                {/* GitHub Calendar */}
                <div className="pt-6">
                    <h3 className="text-sm font-bold text-zinc-900/60 dark:text-white/40 mb-4 tracking-wider uppercase">Code Contributions</h3>
                    <div className="relative overflow-hidden flex justify-center lg:justify-start -ml-1">
                        <GitHubCalendar
                            username="sumitttt4"
                            colorScheme="dark"
                            fontSize={12}
                            blockSize={13}
                            blockMargin={3}
                            year={2026}
                            labels={{
                                totalCount: '{{count}} contributions in 2026',
                            }}
                            theme={{
                                dark: ['rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.7)'],
                            }}
                            renderColorLegend={() => <></>}
                        />
                    </div>
                </div>
            </motion.section>

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
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group space-y-5 perspective-1000"
                        >
                            {/* Glassmorphic Project Card */}
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 backdrop-blur-md relative shadow-2xl shadow-black/50">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                                        onMouseOver={e => e.currentTarget.play()}
                                        onMouseOut={e => e.currentTarget.pause()}
                                    />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                                    />
                                )}

                            </div>
                            <div className="px-1">
                                <div className="flex items-baseline justify-between mb-1">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white/90 group-hover:text-white transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] font-mono text-zinc-900/50 dark:text-white/30 uppercase tracking-widest">{project.category}</span>
                                </div>
                                <p className="text-sm text-zinc-900/70 dark:text-white/50 line-clamp-2 leading-relaxed font-light">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4 mt-4 text-xs font-medium">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-cyan-400/90 hover:text-cyan-300 transition-colors flex items-center gap-1.5 border-b border-transparent hover:border-cyan-400/30 pb-0.5">
                                            <ArrowUpRight className="w-3.5 h-3.5" /> Live Preview
                                        </a>
                                    )}
                                    {project.impact && (
                                        <span className="text-green-400/80 flex items-center gap-1">
                                            <span className="text-[10px]">↗</span> {project.impact}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </BorderGrid>
                <div className="text-center pt-8">
                    <Link href="/projects" className="text-sm text-zinc-900/60 dark:text-white/40 hover:text-zinc-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-black/20 dark:hover:border-white/20 pb-1">
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
                    {posts.slice(0, 3).map((post) => (
                        post.link ? (
                            <a
                                key={post.id}
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group block space-y-4 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3 text-[10px] tracking-wider uppercase text-zinc-900/50 dark:text-white/30 font-medium">
                                    <span className="text-cyan-400/70"># {post.tags[0].toLowerCase()}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900/90 dark:text-white/80 group-hover:text-white transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-zinc-900/60 dark:text-white/40 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </a>
                        ) : (
                            <Link key={post.id} href="/blog" className="group block space-y-4 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all backdrop-blur-sm">
                                <div className="flex items-center gap-3 text-[10px] tracking-wider uppercase text-zinc-900/50 dark:text-white/30 font-medium">
                                    <span className="text-cyan-400/70"># {post.tags[0].toLowerCase()}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900/90 dark:text-white/80 group-hover:text-white transition-colors">
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
                className="space-y-8 max-w-2xl"
            >
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white/90 tracking-tight">Let&apos;s Work Together</h2>
                <div className="space-y-5">
                    <div className="space-y-2">
                        <p className="text-zinc-900/80 dark:text-white/70 text-lg font-medium leading-relaxed">
                            Open to full-time Design Engineer roles<br />
                            and select freelance projects.
                        </p>
                        <p className="text-zinc-900/60 dark:text-white/40 text-sm">
                            Based in Bengaluru · <span className="text-green-400">Available now</span>
                        </p>
                    </div>
                    <div className="space-y-2.5">
                        <a 
                            href="mailto:sumitsharma9128@gmail.com"
                            className="flex items-center gap-2.5 text-zinc-900/80 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm group"
                        >
                            <span className="text-zinc-900/50 dark:text-white/30">→</span>
                            <span className="group-hover:underline decoration-black/30 dark:decoration-white/30 underline-offset-4">sumitsharma9128@gmail.com</span>
                        </a>
                        <a 
                            href="https://cal.com/sumit-sharma/15min"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2.5 text-zinc-900/80 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm group"
                        >
                            <span className="text-zinc-900/50 dark:text-white/30">→</span>
                            <span className="group-hover:underline decoration-black/30 dark:decoration-white/30 underline-offset-4">Book a 15-min call</span>
                        </a>
                    </div>
                    <div className="pt-2">
                        <button
                            onClick={() => setIsLetsTalkOpen(true)}
                            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-black/10 dark:bg-white/10 hover:bg-white/15 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-zinc-900 dark:text-white font-medium text-sm transition-all"
                        >
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            Get in Touch
                        </button>
                    </div>
                </div>

                <div className="flex gap-6 pt-4">
                    <a href="https://github.com/sumitttt4" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/Sumitthq" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/sumitsharma4" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:sumitsharma9128@gmail.com" className="text-zinc-900/50 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://buymeacoffee.com/sumitsharmq" target="_blank" rel="noreferrer" className="text-zinc-900/50 dark:text-white/30 hover:text-[#FFDD00] transition-colors transform hover:scale-110">
                        <Coffee className="w-5 h-5" />
                    </a>
                </div>
            </motion.section>

            <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
        </motion.div>
    );
}
