/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { LogIn, Moon, Sun, Command, Mail, Copy, Linkedin } from 'lucide-react';
import { toast } from "sonner";

import robotImg from '@/assets/images/robot.png';

import projects from '@/data/projects';
import type { Project } from '@/data/projects';

const workExperience = [
    {
        id: 2,
        company: "Metry Ai",
        role: "Frontend design intern",
        date: "August 2025 - Present",
        location: "Tokyo (Remote)",
        description: "Designed and implemented a gamified loyalty reward system. Currently developing customer support interfaces to streamline user issue resolution."
    },
    {
        id: 1,
        company: "Bazuroo App",
        role: "Product Designer",
        date: "July 2025 - December 2025",
        location: "Part-time • Remote",
        description: "Combined design and development to build a comprehensive admin panel using React. Architected the complete app flow and crafted high-fidelity screens for client deployment."
    }
];

const DashboardLayout = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [currentFolderId, setCurrentFolderId] = useState<number | null>(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);
    const [showMobileProjects, setShowMobileProjects] = useState(false);
    const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (function (C: any, A, L) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        (window as any).Cal("init", "15min", { origin: "https://app.cal.com" });
        (window as any).Cal.ns["15min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }, []);

    // Recursive search to find any project by ID (for rendering active project)
    const findProjectById = (id: number, items: Project[] = projects): Project | undefined => {
        for (const item of items) {
            if (item.id === id) return item;
            if (item.items) {
                const found = findProjectById(id, item.items);
                if (found) return found;
            }
        }
        return undefined;
    };

    const activeProject = selectedProject ? findProjectById(selectedProject) : (hoveredProject ? findProjectById(hoveredProject) : undefined);

    // Determine visible projects based on current folder
    const getCurrentFolderItems = () => {
        if (!currentFolderId) return projects;
        const folder = projects.find(p => p.id === currentFolderId);
        return folder?.items || [];
    };

    const visibleProjects = getCurrentFolderItems();
    const currentFolder = currentFolderId ? projects.find(p => p.id === currentFolderId) : null;

    // Strict 3-color palette
    const textPrimary = isDarkMode ? 'text-white' : 'text-black';
    const textSecondary = isDarkMode ? 'text-white/50' : 'text-black/60';
    const textMuted = isDarkMode ? 'text-white/40' : 'text-black/40';
    const bgPrimary = isDarkMode ? 'bg-black' : 'bg-white';
    const bgSecondary = isDarkMode ? 'bg-white/5' : 'bg-black/5';
    const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';

    return (
        <div className={`h-screen overflow-hidden flex font-sans transition-colors duration-300 ${bgPrimary} ${textPrimary} relative`}>

            {/* Hire Me Modal - Full Screen Overlay with Hover Detection */}
            <AnimatePresence>
                {isHirePopupOpen && (
                    <motion.div
                        key="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        // Handle click outside on the container
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setIsHirePopupOpen(false);
                            }
                        }}
                    >
                        {/* Shadcn-Styled Hire Me Card */}
                        <motion.div
                            key="modal-card"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-sm"
                            onMouseLeave={() => setIsHirePopupOpen(false)}
                        >
                            {/* Card Container */}
                            <div className="w-full rounded-lg border border-black/10 bg-white shadow-lg relative overflow-hidden">

                                {/* Close Button - Shadcn Ghost Style */}
                                <motion.button
                                    onClick={() => setIsHirePopupOpen(false)}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 hover:bg-black/5 text-black/40 hover:text-black h-8 w-8 z-20"
                                    aria-label="Close"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>

                                {/* Card Content with Padding */}
                                <div className="p-6 pt-4">

                                    {/* Robot Icon with Glow */}
                                    <div className="flex justify-center mb-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-purple-400/20 blur-xl rounded-full" />
                                            <img
                                                src={robotImg}
                                                alt="Robot"
                                                className="w-20 h-20 relative z-10"
                                            />
                                        </div>
                                    </div>

                                    {/* Header & Description */}
                                    <div className="space-y-1.5 mb-6">
                                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-center text-black">
                                            Hire me
                                        </h3>
                                        <p className="text-sm text-gray-600 text-center font-medium">
                                            So your logo could live here 👀
                                        </p>
                                    </div>

                                    {/* Shadcn Button - Default Variant */}
                                    <div className="flex justify-center">
                                        <button
                                            data-cal-link="sumit-sharma/15min"
                                            data-cal-namespace="15min"
                                            data-cal-config='{"layout":"month_view"}'
                                            className="inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90 h-10 px-6 py-2"
                                        >
                                            Let's Talk
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Projects Overlay (Full Screen) */}
            <AnimatePresence>
                {showMobileProjects && (
                    <motion.div
                        key="mobile-projects"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black flex flex-col md:hidden overflow-hidden"
                    >
                        {/* Mobile Header */}
                        <div className="flex-none h-16 px-6 flex items-center justify-between border-b border-white/10 shrink-0 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                            <h2 className="text-xl font-bold text-white tracking-tight">All Projects</h2>
                            <button
                                onClick={() => setShowMobileProjects(false)}
                                className="p-2 -mr-2 text-white/60 hover:text-white"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-none px-6 py-4">
                            <div className="relative">
                                <Command className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                <input
                                    type="text"
                                    placeholder="Search Posts..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                                />
                            </div>
                        </div>

                        {/* Projects List (Scrollable) */}
                        <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-8 no-scrollbar">
                            {/* Flatten all projects (recursively if needed, but for now mostly flat) */}
                            {projects.flatMap(p => p.items ? p.items : [p]).map((project) => (
                                <div key={project.id} className="group cursor-pointer" onClick={() => {
                                    setSelectedProject(project.id);
                                    setShowMobileProjects(false);
                                }}>
                                    {/* Card Container - No Border, Just Content */}
                                    <div className="space-y-3">

                                        {/* Image Top */}
                                        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5 border border-white/10">
                                            {project.video ? (
                                                <video
                                                    src={project.video}
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover"
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

                                            {project.isNDA && (
                                                <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white/80">
                                                    NDA
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Bottom */}
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-xs font-medium text-blue-400 mb-2">
                                                {project.category}
                                                {project.year && <span className="text-white/20">• {project.year}</span>}
                                            </div>

                                            <p className="text-sm text-white/60 line-clamp-2 leading-relaxed mb-3">
                                                {project.description}
                                            </p>

                                            {/* Action Link (External) */}
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 hover:underline"
                                                >
                                                    Live Preview
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <aside className={`
                fixed md:static inset-y-0 left-0 z-40
                w-64 border-r ${borderColor}
                ${bgPrimary}
                flex flex-col h-full
                transition-transform duration-300
                -translate-x-full md:translate-x-0
            `}>
                <div className={`h-16 flex items-center px-6 border-b ${borderColor}`}>
                    <div
                        onClick={() => {
                            setSelectedProject(null);
                            setHoveredProject(null);
                            setCurrentFolderId(null);
                        }}
                        className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                        <span className={`text-lg font-bold tracking-tight ${textPrimary}`}>
                            Sumit Sharma
                        </span>
                    </div>
                </div>

                {/* Fixed Projects Header */}
                <div className={`px-6 py-4 border-b ${borderColor}`}>
                    <div className={`text-xs font-semibold ${textSecondary} uppercase tracking-wider`}>
                        Projects
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
                    {currentFolderId && (
                        <button
                            onClick={() => setCurrentFolderId(null)}
                            className={`w-full text-left px-4 py-3 rounded-xl mb-2 flex items-center gap-3 ${isDarkMode ? 'hover:bg-white/5 text-white/70' : 'hover:bg-black/5 text-black/70'} transition-colors group`}
                        >
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent border border-current opacity-50 group-hover:opacity-100">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </span>
                            <span className="font-medium text-sm">Back to Home</span>
                        </button>
                    )}

                    {visibleProjects.map((project) => {
                        const isFolderExpanded = project.type === 'folder' && (hoveredProject === project.id || project.items?.some(p => p.id === hoveredProject));

                        // Expanded Folder Content
                        if (isFolderExpanded && project.items) {
                            return (
                                <div
                                    key={project.id}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    className="space-y-1"
                                >
                                    {project.items.map((item) => (
                                        <div
                                            key={item.id}
                                            onMouseEnter={() => setHoveredProject(item.id)}
                                            onClick={() => setSelectedProject(item.id)}
                                            className={`
                                                group relative flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200
                                                ${selectedProject !== item.id && 'hover:bg-black/5 dark:hover:bg-white/5'}
                                            `}
                                        >
                                            {selectedProject === item.id && (
                                                <motion.div
                                                    layoutId="sidebar-active"
                                                    className={`absolute inset-0 rounded-xl ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}`}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            <span className={`relative z-10 text-sm font-medium truncate ${selectedProject === item.id ? textPrimary : textSecondary}`}>{item.title}</span>
                                            <span className={`relative z-10 text-xs transition-opacity ${selectedProject === item.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'} ${textSecondary}`}>
                                                {item.year}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            );
                        }

                        // Top Level Items (Folders included)
                        return (
                            <div
                                key={project.id}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() => {
                                    if (project.type === 'folder') {
                                        setCurrentFolderId(project.id);
                                    } else {
                                        setSelectedProject(project.id);
                                    }
                                }}
                                className={`
                                    group relative flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200
                                    ${selectedProject !== project.id && 'hover:bg-black/5 dark:hover:bg-white/5'}
                                `}
                            >
                                {selectedProject === project.id && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className={`absolute inset-0 rounded-xl ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}`}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <div className="relative z-10 flex items-center gap-3">
                                    {project.type === 'folder' && (
                                        <svg className={`w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity ${textPrimary}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                    )}
                                    <span className={`text-sm font-medium truncate ${selectedProject === project.id ? textPrimary : textSecondary}`}>{project.title}</span>
                                </div>
                                <span className={`relative z-10 text-xs transition-opacity ${selectedProject === project.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'} ${textSecondary}`}>
                                    {project.year}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className={`border-t ${borderColor}`}>
                    {/* Status Indicator */}
                    <div className={`px-6 py-4 border-b ${borderColor}`}>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className={`text-xs font-medium ${textSecondary}`}>Available for work</span>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className={`px-6 py-4 grid grid-cols-2 gap-4 border-b ${borderColor}`}>
                        <div>
                            <div className={`text-xl font-bold ${textPrimary}`}>6+</div>
                            <div className={`text-[10px] ${textSecondary} uppercase tracking-wider`}>Projects</div>
                        </div>
                        <div>
                            <div className={`text-xl font-bold ${textPrimary}`}>2+</div>
                            <div className={`text-[10px] ${textSecondary} uppercase tracking-wider`}>Years Exp</div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className={`px-6 pt-4 pb-6 flex items-center justify-between`}>
                        <div className={`flex gap-4 text-xs ${textSecondary}`}>
                            <a href="https://github.com/sumitttt4" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors`}>GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors`}>LinkedIn</a>
                            <a href="https://x.com/Sumitthq" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors`}>Twitter</a>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 flex flex-col h-screen overflow-hidden ${bgPrimary} transition-colors duration-300`}>

                {/* Header */}
                <header className={`h-16 flex-none border-b ${borderColor} flex items-center justify-between px-4 md:px-8 bg-transparent relative z-20 gap-4`}>

                    {/* Breadcrumbs / Title */}
                    <div className="flex items-center gap-2 text-sm min-w-0">
                        <span
                            className={`${textSecondary} hover:${textPrimary} cursor-pointer transition-colors whitespace-nowrap`}
                            onClick={() => {
                                setSelectedProject(null);
                                setHoveredProject(null);
                                setCurrentFolderId(null);
                            }}
                        >
                            Sumit
                        </span>

                        {/* Mobile Breadcrumb Logic: Sumit / ... / Current */}
                        <div className="md:hidden flex items-center gap-2 overflow-hidden">
                            <span className={textSecondary}>/</span>
                            {(activeProject || currentFolder) ? (
                                <>
                                    <span className={textSecondary}>...</span>
                                    <span className={textSecondary}>/</span>
                                    <span className={`${textPrimary} truncate`}>
                                        {activeProject ? activeProject.title : currentFolder?.title}
                                    </span>
                                </>
                            ) : (
                                <span className={textPrimary}>Home</span>
                            )}
                        </div>

                        {/* Desktop Breadcrumb Logic: Full Path */}
                        <div className="hidden md:flex items-center gap-2">
                            <span className={textSecondary}>/</span>
                            <span
                                className={`${currentFolderId ? `${textSecondary} hover:${textPrimary} cursor-pointer` : textPrimary} transition-colors`}
                                onClick={() => {
                                    if (currentFolderId) {
                                        setSelectedProject(null);
                                        setCurrentFolderId(null);
                                    }
                                }}
                            >
                                Home
                            </span>
                            {currentFolder && (
                                <>
                                    <span className={textSecondary}>/</span>
                                    <span className={textPrimary}>{currentFolder.title}</span>
                                </>
                            )}
                            {activeProject && !activeProject.items && (
                                <>
                                    <span className={textSecondary}>/</span>
                                    <span className={textPrimary}>{activeProject.title}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${bgSecondary} ${textSecondary} hover:${textPrimary} transition-colors`}
                        >
                            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <div
                            className="relative"
                            onMouseEnter={() => setIsProfileOpen(true)}
                            onMouseLeave={() => setIsProfileOpen(false)}
                        >
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className={`
                                    inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background
                                    h-10 px-6 py-2
                                    ${isDarkMode
                                        ? 'bg-white text-black hover:bg-white/90 shadow-md'
                                        : 'bg-white/50 backdrop-blur-md border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.9)] text-black hover:bg-white/80 hover:scale-105 active:scale-95'}
                                `}
                            >
                                Contact me
                            </button>

                            <AnimatePresence>
                                {isProfileOpen && (
                                    <>
                                        {/* Invisible Backdrop to handle click outside */}
                                        <div
                                            className="fixed inset-0 z-40 bg-transparent"
                                            onClick={() => setIsProfileOpen(false)}
                                        />

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95, y: 5, transformOrigin: 'top right' }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: 5 }}
                                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                            className={`absolute right-0 top-full mt-2 w-72 rounded-xl border ${borderColor} ${bgPrimary} p-1 shadow-xl z-50 overflow-hidden ring-1 ring-black/5`}
                                        >
                                            {/* User Info Header - No Logo */}
                                            <div className="flex flex-col px-3 py-2.5">
                                                <h4 className={`text-sm font-semibold ${textPrimary} truncate leading-none mb-1`}>Sumit Sharma</h4>
                                                <p className={`text-xs ${textSecondary} truncate leading-none`}>sumitsharma9128@gmail.com</p>
                                            </div>

                                            <div className={`h-px ${isDarkMode ? 'bg-white/10' : 'bg-black/5'} mx-3 mb-2`} />

                                            {/* Actions */}
                                            <div className="space-y-0.5 px-1">
                                                <a
                                                    href="mailto:sumitsharma9128@gmail.com"
                                                    className={`w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl ${textSecondary} hover:${bgSecondary} hover:${textPrimary} transition-colors cursor-pointer group`}
                                                >
                                                    <Mail className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                                    <span>Send Email</span>
                                                </a>

                                                <a
                                                    href="https://www.linkedin.com/in/sumitsharma4/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl ${textSecondary} hover:${bgSecondary} hover:${textPrimary} transition-colors cursor-pointer group`}
                                                >
                                                    <Linkedin className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                                                    <span>LinkedIn</span>
                                                </a>

                                                <div className={`h-px ${isDarkMode ? 'bg-white/10' : 'bg-black/5'} mx-2 my-2`} />

                                                <button
                                                    data-cal-link="sumit-sharma/15min"
                                                    data-cal-namespace="15min"
                                                    data-cal-config='{"layout":"month_view"}'
                                                    className={`w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl ${textSecondary} hover:${bgSecondary} hover:${textPrimary} transition-colors cursor-pointer group`}
                                                >
                                                    <span className="w-5 h-5 flex items-center justify-center text-[10px] font-bold border border-current rounded-[6px] opacity-70 group-hover:opacity-100">K</span>
                                                    <span>Schedule Call</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </header>

                {/* Center Stage with Dynamic Background */}
                <div className={`flex-1 flex items-center justify-center p-8 md:p-12 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>

                    {/* Background Visuals */}
                    {isDarkMode ? (
                        /* Dark Mode: Pure Black Radial with Grain */
                        <>
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle at 50% 50%, #111111 0%, #000000 100%)',
                                }}
                            />
                            <div
                                className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat',
                                }}
                            />
                        </>
                    ) : (
                        /* Light Mode: Organic Mesh Gradient Animation */
                        <>
                            <div className="absolute inset-0 z-0 bg-white" />
                            <div
                                className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat',
                                }}
                            />
                        </>
                    )}

                    <div className="w-full max-w-3xl relative z-10 h-full flex flex-col justify-start pt-10 md:justify-center md:pt-0">

                        <AnimatePresence mode="wait">
                            {activeProject ? (
                                <motion.div
                                    key="preview"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar scroll-smooth"
                                >
                                    <div className={`max-w-4xl mx-auto px-6 md:px-12 ${selectedProject ? 'min-h-full flex flex-col justify-center pt-6 pb-24' : 'h-full flex flex-col justify-center'}`}>

                                        {/* Project Title & Actions (Only visible when Selected) */}
                                        {selectedProject && (
                                            <div className="flex justify-between items-start mb-4 text-black dark:text-white animate-in fade-in slide-in-from-bottom-2 duration-300">
                                                <div className="space-y-1">
                                                    <h1 className="text-3xl font-bold tracking-tight">
                                                        {activeProject.title}
                                                    </h1>
                                                    <p className="text-base opacity-60 font-medium">
                                                        {activeProject.description || activeProject.category}
                                                    </p>
                                                </div>

                                                {/* Close Button at top-right of content */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedProject(null);
                                                        setHoveredProject(null);
                                                    }}
                                                    className={`
                                                    p-2 rounded-full
                                                    transition-all duration-200 hover:scale-110 active:scale-95
                                                    bg-black/5 dark:bg-white/10 text-black dark:text-white
                                                    hover:bg-black/10 dark:hover:bg-white/20
                                                `}
                                                    title="Close Project"
                                                >
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}

                                        {/* Main Visual Preview (Video Box) */}
                                        <div className={`
                                            w-full rounded-xl overflow-hidden shadow-2xl ring-1 relative
                                            bg-black/5 dark:bg-white/5
                                            ${activeProject?.video ? 'aspect-video' : 'h-auto'}
                                            ${isDarkMode ? 'ring-white/10' : 'ring-black/10'}
                                            ${selectedProject ? 'mb-6' : ''}
                                        `}>
                                            {activeProject?.video ? (
                                                <video
                                                    key={activeProject.video}
                                                    src={activeProject.video}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                            ) : null}

                                            <img
                                                src={activeProject?.image}
                                                alt={activeProject?.title}
                                                className={`w-full h-auto block ${activeProject?.video ? 'hidden' : ''}`}
                                            />
                                        </div>

                                        {/* Detailed Content (Only visible when Selected/Clicked) */}
                                        {selectedProject && (
                                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                                                {/* Action Buttons */}
                                                <div className="flex flex-wrap justify-center gap-4 mb-10 w-full">
                                                    {activeProject?.link && (
                                                        <a
                                                            href={activeProject.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`
                                                                inline-flex items-center justify-center h-10 rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                                                                ${isDarkMode
                                                                    ? 'bg-white text-black hover:bg-white/90 ring-offset-black'
                                                                    : 'bg-black text-white hover:bg-black/90 ring-offset-white'}
                                                            `}
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            See it in action
                                                        </a>
                                                    )}

                                                    <button
                                                        onClick={() => {
                                                            document.getElementById('case-study-section')?.scrollIntoView({ behavior: 'smooth' });
                                                        }}
                                                        className={`
                                                            inline-flex items-center justify-center h-10 rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border
                                                            ${isDarkMode
                                                                ? 'border-white/20 hover:bg-white/10 text-white ring-offset-black'
                                                                : 'border-black/20 hover:bg-black/5 text-black ring-offset-white'}
                                                        `}
                                                    >
                                                        More About This
                                                    </button>
                                                </div>

                                                {/* Case Study Section (Below Fold) */}
                                                <div id="case-study-section" className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                                    <div className={`h-px w-full ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`} />

                                                    {/* NDA Notice */}
                                                    {activeProject.isNDA && (
                                                        <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-50 border-red-200 text-red-600'} flex items-start gap-3`}>
                                                            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                            </svg>
                                                            <div className="text-sm">
                                                                <strong className="block font-semibold mb-1">Non-Disclosure Agreement</strong>
                                                                This project is protected under an NDA. Some specific details and sensitive data have been omitted or obfuscated. The visual represented here is a conceptualized version of the final delivered product.
                                                            </div>
                                                        </div>
                                                    )}

                                                    {(() => {
                                                        const allBlocks = [
                                                            ...(activeProject.overview || "").split('\n\n'),
                                                            ...(activeProject.process || "").split('\n\n')
                                                        ].filter(Boolean);

                                                        // Extract Metadata (Role, Stack, etc.)
                                                        const metaIndex = allBlocks.findIndex(b => b.includes('Role:') && b.includes('|'));
                                                        const metaBlock = metaIndex !== -1 ? allBlocks[metaIndex] : null;
                                                        const distinctBlocks = allBlocks.filter((_, i) => i !== metaIndex);

                                                        // Keywords to treat as headers
                                                        const headerKeywords = ['Problem', 'User', 'Outcome', 'Design Principle', 'Experience Flow', 'Key Design Decisions', 'Engineering Decisions'];

                                                        return (
                                                            <div className="space-y-10">
                                                                {/* Hoisted Metadata */}
                                                                {metaBlock && (
                                                                    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'}`}>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                                            {metaBlock.split('|').map((item, i) => {
                                                                                const [label, value] = item.split(':').map(s => s.trim());
                                                                                if (!value) return <span key={i} className={`text-sm ${textSecondary}`}>{item}</span>;
                                                                                return (
                                                                                    <div key={i}>
                                                                                        <span className={`text-xs font-semibold uppercase tracking-wider opacity-50 block mb-1 ${textSecondary}`}>{label}</span>
                                                                                        <span className={`text-sm font-medium ${textPrimary}`}>{value}</span>
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Main Content */}
                                                                <div className={`text-lg leading-relaxed space-y-8 ${textSecondary}`}>
                                                                    {distinctBlocks.map((block, i) => {
                                                                        // Check for "Keyword: Content" pattern
                                                                        const keywordMatch = block.match(/^([A-Za-z ]+):\s*(.+)/s);
                                                                        if (keywordMatch) {
                                                                            const [_, title, content] = keywordMatch;
                                                                            if (headerKeywords.some(k => title.includes(k))) {
                                                                                return (
                                                                                    <div key={i} className="space-y-3">
                                                                                        <h3 className={`text-xl font-bold ${textPrimary}`}>{title}</h3>
                                                                                        <div className="leading-relaxed opacity-90">{content}</div>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        }

                                                                        // Fallback parsing (e.g. for simple paragraphs)
                                                                        return <p key={i}>{block}</p>;
                                                                    })}
                                                                </div>
                                                            </div>
                                                        );
                                                    })()}

                                                    {!activeProject.process && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                            <div className={`aspect-square rounded-2xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-8 flex items-center justify-center`}>
                                                                <span className={`${textSecondary} text-sm`}>Feature Placeholder 1</span>
                                                            </div>
                                                            <div className={`aspect-square rounded-2xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} p-8 flex items-center justify-center`}>
                                                                <span className={`${textSecondary} text-sm`}>Feature Placeholder 2</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="intro"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-md md:max-w-2xl text-left w-full h-full md:h-auto overflow-y-auto md:overflow-visible no-scrollbar pb-24 md:pb-0"
                                >
                                    <h1 className={`text-xl md:text-3xl font-bold ${textPrimary} leading-tight mb-2 tracking-tight`}>
                                        Sumit Sharma
                                    </h1>
                                    <p className={`text-lg md:text-xl font-medium ${textSecondary} mb-6 md:whitespace-nowrap`}>
                                        <span className="text-red-500">Design engineer</span> - designing, learning and developing
                                    </p>


                                    <div className={`flex gap-4 text-sm ${textSecondary} font-medium items-center`}>
                                        <button onClick={() => setShowMobileProjects(true)} className={`md:hidden hover:${textPrimary} transition-colors`}>Projects</button>
                                        <a href="/about" className={`hover:${textPrimary} transition-colors`}>About</a>
                                        <a href="https://github.com/sumitttt4" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors`}>GitHub</a>
                                        <Link to="/blog" className={`hover:${textPrimary} transition-colors`}>Blog</Link>
                                        <a href="https://x.com/Sumitthq" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors flex items-center gap-1`}>
                                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                    </div>

                                    {/* Work Experience Section */}
                                    <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
                                        <h3 className={`text-xs font-semibold ${textSecondary} mb-3 uppercase tracking-wider`}>
                                            Experience
                                        </h3>
                                        <div className="space-y-4">
                                            {workExperience.map((job) => {
                                                const isExpanded = expandedJobId === job.id;
                                                return (
                                                    <div
                                                        key={job.id}
                                                        className="group cursor-pointer"
                                                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                                                    >
                                                        <div className="flex items-baseline justify-between">
                                                            <div className="flex items-center gap-2">
                                                                {/* Chevron that appears on hover, rotates when expanded */}
                                                                <svg
                                                                    className={`w-3 h-3 text-red-500 transition-all duration-200 
                                                                    ${isExpanded ? 'rotate-90 opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}
                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                                </svg>
                                                                <div className={`font-medium transition-colors ${isExpanded ? 'text-red-500' : `${textPrimary} group-hover:text-red-500`}`}>
                                                                    {job.company}
                                                                </div>
                                                            </div>
                                                            <div className={`text-xs font-monoSync ${isDarkMode ? 'text-white/40' : 'text-black/50'} text-right shrink-0 ml-4`}>{job.date}</div>
                                                        </div>

                                                        <div className="flex items-start justify-between mt-0.5 pl-5">
                                                            <div className={`text-sm ${textSecondary} pr-4`}>{job.role}</div>
                                                            {/* @ts-ignore */}
                                                            {job.location && <div className={`text-[10px] ${isDarkMode ? 'text-white/30' : 'text-black/40'} text-right shrink-0 whitespace-nowrap`}>{job.location}</div>}
                                                        </div>

                                                        {/* Expanded Description */}
                                                        <AnimatePresence>
                                                            {isExpanded && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <p className={`text-xs leading-relaxed ${textSecondary} mt-3 pl-5 border-l-2 ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
                                                                        {job.description}
                                                                    </p>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="mt-10 md:hidden space-y-2">
                                        {visibleProjects.map((project) => (
                                            <div
                                                key={project.id}
                                                onClick={() => {
                                                    if (project.type === 'folder') {
                                                        setCurrentFolderId(project.id);
                                                    } else {
                                                        setSelectedProject(project.id);
                                                    }
                                                }}
                                                className={`
                                                    group flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
                                                    border border-transparent
                                                    ${selectedProject === project.id
                                                        ? (isDarkMode ? 'bg-white/10 text-white border-white/5' : 'bg-black/5 text-black border-black/5')
                                                        : `hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white ${isDarkMode ? 'hover:border-white/5' : 'hover:border-black/5'}`
                                                    }
                                                `}
                                            >
                                                <div className="flex items-center gap-3 overflow-hidden">
                                                    {project.type === 'folder' && (
                                                        <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                        </svg>
                                                    )}
                                                    <span className="text-base font-medium truncate">{project.title}</span>
                                                </div>
                                                <span className={`text-xs ${selectedProject === project.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'} transition-opacity whitespace-nowrap ml-2`}>
                                                    {project.year}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div >

            </main >
        </div >
    );
};

export default DashboardLayout;
