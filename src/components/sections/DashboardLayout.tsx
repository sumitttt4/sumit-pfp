/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { LogIn, Moon, Sun, Command, Mail, Copy } from 'lucide-react';
import { toast } from "sonner";

import robotImg from '@/assets/images/robot.png';

// Sample Project Data
interface Project {
    id: number;
    title: string;
    year: string;
    category: string;
    image: string;
    video?: string;
    link?: string;
    type?: 'project' | 'folder';
    items?: Project[];
    description?: string;
    isNDA?: boolean;
    overview?: string;
    process?: string;
}

const projects: Project[] = [
    {
        id: 8,
        title: "MonoQr",
        year: "2025",
        category: "Web Tool",
        image: "https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop",
        video: "/videos/MonoQr.mp4",
        link: "https://mono-qr.vercel.app/",
        description: "Instant QR Codes for Modern Brands.",
        overview: "Create vector-quality, custom-branded QR codes instantly in your browser. No sign-up required for basics. Enterprise-grade privacy included.",
        process: "The interface is designed for speed, allowing users to generate codes in milliseconds. We stripped away complex 'marketing' fluff to focus on the core utility: a reliable, privacy-first QR generator that supports multiple data types including WiFi credentials and VCards.",
    },
    {
        id: 6,
        title: "SafeAgree",
        year: "2025",
        category: "Privacy Tool",
        image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop",
        video: "/videos/Safeagree.mp4",
        link: "https://safe-agree.vercel.app/",
        description: "The Privacy Shield for the 'I Agree' Era.",
        overview: "The Problem: We all do it. We click \"I Agree\" on 50 page legal contracts without reading a single word. Companies know this, and they hide predatory clauses like selling your data, hidden fees, and forced arbitration deep in the fine print.\n\nThe Solution: SafeAgree is an intelligence engine that reads the fine print for you in seconds. It transforms dense legal jargon into a simple, high-fidelity Trust Score, giving you the clarity to sign up (or walk away) with confidence.",
        process: "The design emphasizes immediate comprehension. We replaced endless scrolling with a clear, dashboard-style summary. Key risks are highlighted in red, while safe clauses are green. The 'Trust Score' works as a quick heuristic for users who want to make fast but informed decisions.",
    },
    /*
    {
        id: 7,
        title: "DayZero",
        year: "2025",
        category: "Productivity OS",
        image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2661&auto=format&fit=crop",
        description: "The Anti-Performative Productivity OS.",
        overview: "DayZero is a mobile-first accountability protocol designed to solve the 'Build in Public' crisis. While traditional tools rely on self-reported data, DayZero introduces 'Automated Verification' and 'Social Consequence,' shifting focus to undeniable proof of work. The design rejects standard SaaS dark modes for a strictly premium 'Titanium & Paper' light mode aesthetic.",
        process: "The UX is built on 'Weaponized Psychology' and API-first verification. Key features include the 'Truth Engine' which verifies streaks via actual deployment events (Vercel/Stripe), and the 'Dead Man’s Switch' for reputation staking. Visually, we prioritized 'Haptic Visuals' using Framer Motion to give digital cards a tactile, spring-physics feel, mixing Google Sans with Geist Mono for a high-density, gallery-like mobile experience.",
    },
    */
    {
        id: 3,
        title: "Linkease",
        year: "2025",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        video: "/videos/Linkease.mp4",
        link: "https://link-ease-omega.vercel.app/",
        description: "A centralized platform for collecting and managing links with a single click.",
        overview: "Linkease solves the problem of digital clutter by providing a minimalistic yet powerful interface for bookmark management. The goal was to create a 'save-for-later' experience that feels instant and effortless, removing the friction typical of standard browser bookmarks.",
        process: "The design approach prioritized speed. I implemented a one-click save extension and a dashboard that automatically categorizes links based on metadata. The UI is dark-mode first, reducing eye strain for power users. We used Framer Motion for subtle interactions, making the act of organizing links feel satisfying rather than tedious.",
    },
    {
        id: 2,
        title: "n8n workflow",
        year: "2025",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop",
        video: "/videos/n8n.mp4",
        link: "https://n8n-workflow-eta.vercel.app/",
        description: "Visualizing complex automation workflows with clarity and precision.",
        overview: "This project focuses on the visualization of n8n automation workflows. The challenge was to take complex, multi-step backend logic and present it in a way that is easily understandable for non-technical stakeholders throughout the monitoring dashboard.",
        process: "I started by deconstructing common automation patterns. The design uses a node-based interface metaphor but simplified for status monitoring. Color coding indicates success, failure, or pending states. A key feature is the 'replay' view, allowing users to step through a workflow execution visually to identify bottlenecks.",
    },
    {
        id: 100,
        title: "Design",
        year: "2025",
        category: "Folder",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop",
        type: 'folder',
        items: [
            {
                id: 1,
                title: "Digital Wallet",
                year: "2025",
                category: "Fintech",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
                video: "/videos/Wallet.mp4",
                link: "https://filecard-delta.vercel.app/",
                description: "Next-gen digital wallet focused on cross-border payments.",
                overview: "Digital Wallet re-imagines the peer-to-peer payment experience for a global audience. The primary goal was to abstract away the complexities of currency conversion and international fees, presenting users with a simple 'send and receive' interface.",
                process: "We focused heavily on trust signals. The UI uses biometric authentication cues and clear transaction states to reassure users. The 'cards' interface allows users to manage multiple currencies as distinct entities. Motion design plays a huge role here—swiping a card feels physical and responsive, adding a layer of tactile feedback to digital finance.",
            },
            {
                id: 7,
                title: "File Showcase",
                year: "2025",
                category: "System Design",
                image: "/images/file-showcase-fallback.png",
                video: "/videos/File.mp4",
                link: "https://file-showcase.vercel.app/",
                description: "A robust file management system for enterprise collaboration.",
                overview: "File Showcase is a design study in information density. Enterprise file managers often suffer from clutter. This project aims to maximize data visibility—showing file types, sizes, and owners at a glance—without making the interface feel crowded.",
                process: "I utilized a modular grid system that adapts to different screen sizes. The 'smart-filter' feature was a key design innovation, allowing users to view files by context (e.g., 'recently edited by me') rather than just directory structure. The visual style is strictly functional, relying on typography and spacing rather than decoration to create hierarchy.",
            }
        ]
    },
    {
        id: 101,
        title: "Client Work",
        year: "2025",
        category: "Folder",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        type: 'folder',
        items: [
            {
                id: 4,
                title: "Loyalty rewards",
                year: "2025",
                category: "Product Design",
                image: "/images/loyalty-rewards.png",
                isNDA: true,
                description: "Gamified loyalty program for high-retention user engagement.",
                overview: "This project is covered by a Non-Disclosure Agreement. The goal was to revamp an existing loyalty system into a gamified experience to boost user retention. We focused on clear progress indicators, rewarding micro-interactions, and a tier-based achievement system. The challenge was to balance the fun, gamified elements with the clear utility of a financial reward system.",
                process: "Due to confidentiality, I cannot share specific flows, but the process involved extensive user journey mapping to identify 'delight moments'. We prototyped high-fidelity animations for reward unlocking to test emotional response. The visual language moved away from standard corporate colors to a more vibrant, energetic palette while maintaining brand consistency. We conducted A/B testing on the claim process to minimize friction.",
            },
            {
                id: 5,
                title: "Admin Panel Dashboard",
                year: "2025",
                category: "Web App",
                image: "/images/admin-dashboard-kyc.png",
                isNDA: true,
                description: "A comprehensive KYC management dashboard for merchant verification.",
                overview: "This project operates under a strict Non-Disclosure Agreement (NDA). The dashboard is designed to streamline the KYC (Know Your Customer) process for onboarding merchants, allowing administrators to verify PAN, GST, and FSSAI documents efficiently. The interface focuses on clarity, speed, and handling large volumes of data without overwhelming the user.",
                process: "The design process focused on heavy data hierarchy management. Start by analyzing the verification workflow: Request -> Review -> Approve/Reject. We implemented a 'Master KYC Database' view for quick searching and status filtering. Color-coded badges (Verified, Rejected, Under Review) were essential for scannability. The 'Action' column uses minimal icons to keep the table clean. I will write the detailed process behind this design below...",
            }
        ]
    }
];

const workExperience = [
    {
        id: 1,
        company: "Bazuroo App",
        role: "Product Designer",
        date: "July 2025 - Present",
        location: "Part-time • Remote",
    },
    {
        id: 2,
        company: "Metry Ai",
        role: "Frontend designer intern",
        date: "August 2024 - Present",
        location: "Tokyo (Remote)",
    }
];

const DashboardLayout = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [currentFolderId, setCurrentFolderId] = useState<number | null>(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);

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
        <div className={`min-h-screen flex font-sans transition-colors duration-300 ${bgPrimary} ${textPrimary} relative`}>

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

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-40
                w-64 border-r ${borderColor}
                ${bgPrimary}
                flex flex-col
                transition-transform duration-300
                -translate-x-full md:translate-x-0
            `}>
                <style>
                    {`
                    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
                    `}
                </style>
                <div className={`h-16 flex items-center px-6 border-b ${borderColor}`}>
                    <div
                        onClick={() => {
                            setSelectedProject(null);
                            setHoveredProject(null);
                            setCurrentFolderId(null);
                        }}
                        className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                        <span className="text-red-500 text-xl" style={{ fontFamily: '"Pacifico", cursive' }}>Hello Stranger</span>
                    </div>
                </div>

                {/* Fixed Projects Header */}
                <div className={`px-6 py-4 border-b ${borderColor}`}>
                    <div className={`text-xs font-semibold ${textSecondary} uppercase tracking-wider`}>
                        Projects
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
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
                                                group flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
                                                ${selectedProject === item.id
                                                    ? (isDarkMode ? 'bg-white/10 text-white' : 'bg-black/5 text-black')
                                                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                                                }
                                            `}
                                        >
                                            <span className="text-sm font-medium truncate">{item.title}</span>
                                            <span className={`text-xs ${selectedProject === item.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'} transition-opacity`}>
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
                                    group flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
                                    ${selectedProject === project.id
                                        ? (isDarkMode ? 'bg-white/10 text-white' : 'bg-black/5 text-black')
                                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    {project.type === 'folder' && (
                                        <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                    )}
                                    <span className="text-sm font-medium truncate">{project.title}</span>
                                </div>
                                <span className={`text-xs ${selectedProject === project.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'} transition-opacity`}>
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
                        <div className="absolute inset-0 z-0 bg-white" />
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

                                                    <div className="space-y-6">
                                                        <h2 className={`text-2xl font-bold ${textPrimary}`}>The Overview</h2>
                                                        <p className={`text-lg leading-relaxed ${textSecondary}`}>
                                                            {activeProject.overview || "This project was conceived to solve a specific problem in the industry. By leveraging modern web technologies, we created a seamless experience that allows users to capture data efficiently. The focus was on minimalism and speed, ensuring that the interface never gets in the way of the user's task."}
                                                        </p>
                                                    </div>

                                                    {activeProject.process && (
                                                        <div className="space-y-6">
                                                            <h2 className={`text-2xl font-bold ${textPrimary}`}>The Process</h2>
                                                            <p className={`text-lg leading-relaxed ${textSecondary} whitespace-pre-line`}>
                                                                {activeProject.process}
                                                            </p>
                                                        </div>
                                                    )}

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
                                    className="max-w-md text-left"
                                >
                                    <h1 className={`text-xl md:text-3xl font-bold ${textPrimary} leading-tight mb-6 tracking-tight`}>
                                        Sumit Sharma, <br />
                                        <span className="whitespace-normal md:whitespace-nowrap">on a journey to <span className="text-red-500">design engineer</span> at <span
                                            className="relative inline-block cursor-pointer"
                                            onMouseEnter={() => setIsHirePopupOpen(true)}
                                            onClick={() => setIsHirePopupOpen(true)}
                                        >
                                            <span
                                                className={`
                                                    inline-block align-middle rounded-md transition-colors ml-1.5
                                                    w-16 h-4 
                                                    md:w-24 md:h-6
                                                    ${isDarkMode ? 'bg-white/20 hover:bg-white/40' : 'bg-black/10 hover:bg-black/20'}
                                                `}
                                            />
                                        </span></span>
                                    </h1>

                                    <div className={`flex gap-4 text-sm ${textSecondary} font-medium items-center`}>
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
                                            {workExperience.map((job) => (
                                                <div key={job.id} className="group">
                                                    <div className="flex items-baseline justify-between">
                                                        <div className={`font-medium ${textPrimary} group-hover:text-red-500 transition-colors`}>{job.company}</div>
                                                        <div className={`text-xs font-monoSync ${isDarkMode ? 'text-white/40' : 'text-black/50'} text-right shrink-0 ml-4`}>{job.date}</div>
                                                    </div>
                                                    <div className="flex items-start justify-between mt-0.5">
                                                        <div className={`text-sm ${textSecondary} pr-4`}>{job.role}</div>
                                                        {/* @ts-ignore */}
                                                        {job.location && <div className={`text-[10px] ${isDarkMode ? 'text-white/30' : 'text-black/40'} text-right shrink-0 whitespace-nowrap`}>{job.location}</div>}
                                                    </div>
                                                </div>
                                            ))}
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
                </div>

            </main>
        </div>
    );
};

export default DashboardLayout;
