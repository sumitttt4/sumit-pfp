import React, { useState } from 'react';
import LetsTalkModal from '@/components/ui/LetsTalkModal';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, ExternalLink, Coffee } from 'lucide-react';
import projects from '@/data/projects';
import posts from '@/data/blog';
import { GitHubCalendar } from 'react-github-calendar';
import { Link } from 'react-router-dom';
import CornerMarkers from '@/components/ui/CornerMarkers';
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

const Home = () => {
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
                    <h1 className="text-5xl font-bold text-white/90 tracking-[-0.04em]">
                        Sumit Sharma
                    </h1>
                    <p className="text-xl text-white/60 font-medium max-w-2xl leading-relaxed">
                        <span className="font-playfair italic text-2xl text-white/80 pr-1">Design Engineer</span>
                        who bridges the gap between Figma and Code.
                        I build polished, interactive interfaces that feel alive.
                    </p>
                </div>

                <div className="text-white/50 space-y-6 text-lg leading-relaxed max-w-2xl font-light">
                    <p>
                        Currently crafting <strong className="text-white/90 font-medium">Glyph</strong>, a brand identity engine for creators.
                        Before that: built admin panels for <strong className="text-white/90 font-medium">Bazuroo</strong> and scaled frontend architecture at <strong className="text-white/90 font-medium">Metry</strong>.
                    </p>
                    <p>
                        Obsessed with micro-interactions, clean code, and shipping fast.
                    </p>
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
                        <span className="text-sm font-medium tracking-wide uppercase text-white/40">Open to Work: Full-Time, Freelance, or Collabs. <span onClick={() => setIsLetsTalkOpen(true)} className="text-cyan-400/90 hover:text-cyan-300 cursor-pointer transition-colors border-b border-cyan-500/30 pb-0.5">Let's talk</span></span>
                    </motion.p>
                </div>
            </motion.section>

            {/* STACK SECTION */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="space-y-8"
            >
                <h2 className="text-xl font-bold text-white/90 tracking-tight">Tools that I have used</h2>
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
                    <h3 className="text-sm font-bold text-white/40 mb-4 tracking-wider uppercase">Code Contributions</h3>
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
                            renderColorLegend={() => null}
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
                <h2 className="text-xl font-bold text-white/90 tracking-tight">Featured Projects</h2>
                <BorderGrid columns={2}>
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group space-y-5 perspective-1000"
                        >
                            {/* Glassmorphic Project Card */}
                            <div className="aspect-video w-full rounded-xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-md relative shadow-2xl shadow-black/50">
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
                                    <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{project.category}</span>
                                </div>
                                <p className="text-sm text-white/50 line-clamp-2 leading-relaxed font-light">
                                    {project.description}
                                </p>
                                <div className="flex gap-4 mt-4 text-xs font-medium text-cyan-400/90">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 border-b border-transparent hover:border-cyan-400/30 pb-0.5">
                                            <ArrowUpRight className="w-3.5 h-3.5" /> Live Preview
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </BorderGrid>
                <div className="text-center pt-8">
                    <Link to="/projects" className="text-sm text-white/40 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1">
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
                    <h2 className="text-xl font-bold text-white/90 tracking-tight">Most recent posts</h2>
                    <Link to="/blog" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
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
                                className="group block space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3 text-[10px] tracking-wider uppercase text-white/30 font-medium">
                                    <span className="text-cyan-400/70"># {post.tags[0].toLowerCase()}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-white/40 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </a>
                        ) : (
                            <Link key={post.id} to="/blog" className="group block space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all backdrop-blur-sm">
                                <div className="flex items-center gap-3 text-[10px] tracking-wider uppercase text-white/30 font-medium">
                                    <span className="text-cyan-400/70"># {post.tags[0].toLowerCase()}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-white/40 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </Link>
                        )
                    ))}
                </div>
            </motion.section>

            {/* CONTACT SECTION */}
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="space-y-8 max-w-2xl"
            >
                <h2 className="text-xl font-bold text-white/90 tracking-tight">Get in Touch</h2>
                <p className="text-white/50 leading-relaxed">
                    If you have any inquiries, please feel free to reach out. You can contact me via email at <a href="mailto:sumitsharma9128@gmail.com" className="text-white hover:underline decoration-white/30 underline-offset-4 transition-all">sumitsharma9128@gmail.com</a>
                </p>

                <div className="flex gap-6 pt-4">
                    <a href="https://github.com/sumitttt4" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors transform hover:scale-110">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/Sumitthq" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors transform hover:scale-110">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/sumitsharma4" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors transform hover:scale-110">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:sumitsharma9128@gmail.com" className="text-white/30 hover:text-white transition-colors transform hover:scale-110">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://buymeacoffee.com/sumitsharmq" target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#FFDD00] transition-colors transform hover:scale-110">
                        <Coffee className="w-5 h-5" />
                    </a>
                </div>
            </motion.section>

            <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
        </motion.div>
    );
};

export default Home;
