/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { LogIn, Moon, Sun, Command, Mail, Copy, Linkedin } from 'lucide-react';
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
    screenshots?: string[];
}

const projects: Project[] = [
    {
        id: 9,
        title: "GetLockedIN",
        year: "2025",
        category: "Productivity OS",
        image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2661&auto=format&fit=crop",
        video: "/videos/getlockedin.mp4",
        link: "https://getlockedin.live",
        description: "The Anti-Performative Productivity OS.",
        overview: "Productivity tools often create a false sense of progress. We make lists and organize boards, but this 'meta-work' frequently replaces actual output. GetLockedIN is a mobile-first accountability protocol built for people who want to track real results rather than intentions.\n\nThe system is built on 'Proof of Work' rather than self-reporting. Unlike standard habit trackers where you check a box yourself, GetLockedIN requires verification. It integrates with platforms like GitHub, Stripe, and Vercel to automatically log your activity. If you don't ship code or close a sale, the streak doesn't update. This creates an objective, immutable record of your consistency, free from manual editing or gamification.",
        process: "We designed the core loop around the concept of 'Loss Aversion'—the idea that the fear of losing progress is a stronger motivator than the promise of a future reward. This drives the 'Dead Man’s Switch' feature: missing a scheduled check-in doesn't just pause your streak, it resets it.\n\nTechnically, this required an event-driven architecture capable of processing webhooks from multiple third-party services in real-time. Reliability was critical; the system needed to distinguish between a user missing a deadline and a service outage.\n\nVisually, we moved away from the standard dark modes common in SaaS. The interface uses a crisp, high-contrast 'Titanium & Paper' aesthetic. We focused on distinct borders and sharp shadows to give the digital elements a physical, tactile quality. Animations are weighty and deliberate, reinforcing the idea that every action in the app is significant.",
    },
    {
        id: 10,
        title: "Vibe Market",
        year: "2025",
        category: "E-Commerce",
        image: "/images/vibe-market-landing.png",
        screenshots: ["/images/vibe-market-submit.png"],
        link: "https://vibemarket.tech",
        description: "A discovery layer for vibe-coded apps.",
        overview: "Building software has become incredibly fast with modern AI tools, leading to a flood of new micro-apps. The challenge is no longer creation, but discovery. Traditional platforms like Product Hunt struggle to filter this volume effectively, often burying improved tools under marketing lists.\n\nVibe Market is a curated gallery for these new, aesthetic-first micro-apps. It is designed for software that prioritizes unique visual styles and novel interactions over extensive feature lists. We focus on tools that feel crafted, not just assembled. It connects users looking for specific, often niche utilities with creators who treat software design as an expressive medium.",
        process: "Quality control was our primary design challenge. To address this, we implemented the 'Prompt DNA' submission flow. Instead of just a URL, creators share the context behind their app—the design constraints and the specific problems they solved. This adds a layer of depth to the marketplace, making it a resource for learning as well as discovery.\n\nThe frontend uses a 'Cyber-Archivist' aesthetic with a dark palette and neon accents, referencing the culture of late-night development. To make browsing efficient, we built 'Live Preview' cards. These allow users to interact with a secure, sandboxed version of the app directly in the feed, removing the friction of clicking through to external sites just to test a feature.\n\nThe search functionality uses vector embeddings to understand abstract queries. This allows users to search by 'feeling' or intended use case (e.g., 'focus tools for night interactions') rather than just matching keywords.",
    },
    {
        id: 8,
        title: "MonoQr",
        year: "2025",
        category: "Web Tool",
        image: "https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop",
        video: "/videos/MonoQr.mp4",
        link: "https://mono-qr.vercel.app/",
        description: "Instant QR Codes for Modern Brands.",
        overview: "QR codes are essential bridges between physical and digital spaces, yet the tools to create them are often user-hostile, filled with ads, tracking, and subscription traps. MonoQr was built to be the exact opposite: a professional, reliable utility.\n\nIt generates vector-quality, custom-branded QR codes directly in the browser. There are no signups, no tracking pixels, and no expiration dates. The focus is entirely on producing high-quality assets that designers can use in production environments. It provides enterprise-grade control over the visual output without the enterprise complexity.",
        process: "The interface design follows a strict philosophy of subtraction. We removed any element that didn't support the core task of generating a code, resulting in a clean, tool-like workspace.\n\nTechnically, we moved all generation logic to the client-side. This ensures privacy—no user data touches a server—and speed. We created a custom rendering engine that creates 'Liquid' QR designs, where the data modules flow together for a smoother look, rather than the standard blocky pixel grid. This required complex SVG path manipulation to maintain the code's readability while altering its shape.\n\nWe also implemented real-time error correction controls. This allows designers to adjust the density of the code to withstand damage or printing on difficult materials, balancing aesthetic needs with functional reliability.",
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
        overview: "We frequently agree to Terms of Service without reading them, largely because they are designed to be long and difficult to parse. This leaves users vulnerable to hidden clauses regarding data usage, forced arbitration, and privacy rights.\n\nSafeAgree acts as an automated analysis layer for these documents. It scans Terms of Service and Privacy Policies instantly, converting dense legal text into a clear, understandable summary and a 'Trust Score.' It gives users the information they need to evaluate a service's safety in seconds, rather than hours.",
        process: "The system is built on a natural language processing pipeline trained on legal texts. The main design challenge was ensuring accuracy while simplifying the language. We wanted to translate the legal risk, not just summarize the words.\n\nWe organized the output into a dashboard that flags issues as 'Critical Risks' (Red), 'Cautionary' (Yellow), and 'User Protections' (Green). A split-screen view shows the summary alongside the original text. We added 'Evidence Linking,' so hovering over a summary point highlights the exact sentence in the contract that triggered the flag. This transparency builds trust in the analysis.\n\nThe 'Trust Score' is a calculated metric (0-100) based on the severity and frequency of flagged clauses. We spent significant time calibrating this to be fair, ensuring it penalizes predatory practices without flagging standard legal boilerplate.",
    },
    {
        id: 3,
        title: "Linkease",
        year: "2025",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        video: "/videos/Linkease.mp4",
        link: "https://link-ease-omega.vercel.app/",
        description: "A centralized platform for collecting and managing links with a single click.",
        overview: "Browser bookmarks often become cluttered and unorganized, making it difficult to find content later. Linkease transforms bookmarking from a simple storage list into an active knowledge management system.\n\nIt serves as a centralized hub for collecting, categorizing, and retrieving digital content. The goal was to remove the friction of saving and organizing, creating a tool that helps users actually revisit and use the information they save, rather than just hoarding it.",
        process: "Speed was the priority for the design. We built a browser extension that saves a URL, metadata, and main content tags with a single click. To prevent the 'digital graveyard' effect, the dashboard uses an algorithm to resurface old saved items that are relevant to current activity.\n\nVisually, the application is dark-mode first to support long sessions of reading and organization. We used Framer Motion to add subtle feedback to interactions; for example, saving a link triggers a distinct animation to confirm the action. We also implemented an auto-tagging system that proposes categories based on page content, reducing the manual effort required to keep the library organized.",
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
        overview: "Backend automation logic is often invisible and hard to explain to non-technical stakeholders. This project focuses on visualizing n8n automation workflows, turning abstract JSON logic into clear, readable diagrams.\n\nThe goal was to bridge the gap between developers and project managers. We needed a view that maintained the technical accuracy required for debugging but offered the high-level clarity needed for monitoring the system's health.",
        process: "We started by breaking down automation patterns into their visual components. The interface uses a node-based design similar to the n8n editor but simplified for monitoring purposes.\n\nWe implemented a status system where success, failure, and pending states are communicated through distinct colors and animations. This allows operators to quickly assess the status of a workflow. A key feature is the 'Replay View,' which lets users step through a past execution node by node. By visualizing the data payload at each step, users can identify exactly where a process failed or where data was corrupted.\n\nThe canvas supports infinite panning and zooming, optimized to handle workflows with hundreds of nodes without performance lag.",
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
                overview: "Financial applications, especially those for international payments, can often feel cold and confusing. Trust is essential when money is moving across borders. This Digital Wallet project redesigns the peer-to-peer payment experience to be simple and reassuring.\n\nThe focus was on abstracting away the complexities of exchange rates and fees. We wanted to make the process of sending money internationally feel as straightforward and personal as handing cash to a friend.",
                process: "We centered the design on 'Trust Signals.' Every step of the transaction provides clear feedback. We used a card-based interface to separate different currencies, treating them as distinct, tangible assets. \n\nMotion design was key to building confidence. Skeuomorphic details, like the gloss on a card or the resistance when swiping, give the digital objects a sense of reality. The 'Payment Sent' success animation is designed to be a definitive release of tension, confirming to the user that the action is complete. We also simplified the currency conversion into a transparent slider that updates fees in real-time, eliminating surprise costs.",
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
                overview: "Enterprise file managers often sacrifice usability for density, presenting users with overwhelming lists of data. File Showcase attempts to solve this density problem without hiding information. \n\nIt is a system designed for high-volume file management, balancing the need to see metadata—like file owners, sizes, and permissions—with the need for a clean, navigable interface. It is built for power users who need to move quickly through deep directory structures.",
                process: "We used a responsive modular grid that changes density based on screen size. It provides a detailed card view on larger screens and a compact list on mobile. \n\nWe realized that browsing by folder structure is often inefficient, so we introduced 'Contextual Views.' These allow users to filter files by 'Recently Edited,' 'Shared with Team,' or file type, which is often how people actually look for work.\n\nThe visual style relies on typography and whitespace to create hierarchy, rather than heavy lines or boxes. We also added a 'Quick Look' modal to preview file contents without leaving the main view, keeping the user focused on their task.",
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
                overview: "This project involved redesigning a major retail loyalty program to improve user retention. The goal was to move beyond a simple point-collection system, which users often find unengaging.\n\nWe introduced a gamified structure that rewards engagement as well as spending. Users earn progress through streaks, social interaction, and checking in, not just transactions. This creates a more active relationship between the user and the brand.",
                process: "We focused on identifying and enhancing 'Delight Moments' in the user journey, specifically the reward redemption phase. We didn't want redemption to feel like a transaction, but like a reward.\n\nWe prototyped specific animations for when a user unlocks a reward to trigger a positive emotional response. The visual language uses vibrant colors and bold accents to differentiate 'Reward Mode' from the standard app interface. We also streamlined the claim process from five clicks down to two, removing friction and significantly increasing the rate at which users actually claimed their rewards.",
            },
            {
                id: 5,
                title: "Admin Panel Dashboard",
                year: "2025",
                category: "Web App",
                image: "/images/admin-dashboard-kyc.png",
                isNDA: true,
                description: "A comprehensive KYC management dashboard for merchant verification.",
                overview: "This project is a high-volume KYC (Know Your Customer) dashboard for a fintech platform. It is designed for operations teams who need to verify merchant documents like tax IDs and business registrations rapidly and accurately.\n\nThe interface is built to minimize errors and fatigue. It is not just a data viewer; it is a workflow tool designed to help operators process hundreds of applications a day without losing focus.",
                process: "We prioritized efficiency and scannability. We used a consistent color-coding system—Green for Verified, Red for Rejected, Yellow for Review—to allow operators to assess a queue's status at a glance.\n\nWe implemented keyboard shortcuts for all primary actions, allowing experienced users to process records without switching between mouse and keyboard. The layout groups related information—such as placing an ID photo directly next to the extracted text—to reduce eye movement and make comparison easier.",
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
    const [showMobileProjects, setShowMobileProjects] = useState(false);

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

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-40
                w-64 border-r ${borderColor}
                ${bgPrimary}
                flex flex-col h-full
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
                        <div className="absolute inset-0 z-0 bg-white" />
                    )}

                    <div className="w-full max-w-3xl relative z-10 h-full flex flex-col justify-start pt-10 md:justify-center md:pt-0">

                        <AnimatePresence mode="wait">
                            {showMobileProjects && !activeProject ? (
                                <motion.div
                                    key="mobile-projects"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-full flex flex-col md:hidden"
                                >
                                    <div className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-70 transition-opacity self-start" onClick={() => setShowMobileProjects(false)}>
                                        <svg className={`w-5 h-5 ${textSecondary}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7 7-7" />
                                        </svg>
                                        <span className={`text-sm font-medium ${textSecondary}`}>Back</span>
                                    </div>

                                    <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>Projects</h2>

                                    <div className="flex-1 overflow-y-auto space-y-2 no-scrollbar pb-24">
                                        {currentFolderId && (
                                            <button
                                                onClick={() => setCurrentFolderId(null)}
                                                className={`w-full text-left px-4 py-3 rounded-xl mb-2 flex items-center gap-3 ${isDarkMode ? 'bg-white/5 text-white/70' : 'bg-black/5 text-black/70'} transition-colors group`}
                                            >
                                                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent border border-current opacity-50 group-hover:opacity-100">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </span>
                                                <span className="font-medium text-sm">Back to Folders</span>
                                            </button>
                                        )}

                                        {visibleProjects.map((project) => {
                                            const isFolderExpanded = project.type === 'folder' && (hoveredProject === project.id || project.items?.some(p => p.id === hoveredProject));

                                            if (project.items && isFolderExpanded) {
                                                return (
                                                    <div key={project.id} className="space-y-1 pl-4 border-l border-white/10 ml-2">
                                                        {project.items.map((item) => (
                                                            <div
                                                                key={item.id}
                                                                onClick={() => setSelectedProject(item.id)}
                                                                className={`
                                                                flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
                                                                ${selectedProject === item.id
                                                                        ? (isDarkMode ? 'bg-white/10 text-white' : 'bg-black/5 text-black')
                                                                        : 'hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                                                                    }
                                                            `}
                                                            >
                                                                <span className="text-base font-medium truncate">{item.title}</span>
                                                                <span className="text-xs opacity-50">{item.year}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )
                                            }

                                            return (
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
                                                    ${selectedProject === project.id
                                                            ? (isDarkMode ? 'bg-white/10 text-white' : 'bg-black/5 text-black')
                                                            : 'hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                                                        }
                                                `}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        {project.type === 'folder' && (
                                                            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                            </svg>
                                                        )}
                                                        <span className="text-base font-medium truncate">{project.title}</span>
                                                    </div>
                                                    <span className="text-xs opacity-50">{project.year}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ) : activeProject ? (
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
                                                        <div className={`text-lg leading-relaxed ${textSecondary}`}>
                                                            {(activeProject.overview || "This project was conceived to solve a specific problem in the industry. By leveraging modern web technologies, we created a seamless experience that allows users to capture data efficiently. The focus was on minimalism and speed, ensuring that the interface never gets in the way of the user's task.").split('\n\n').map((paragraph, i) => (
                                                                <p key={i} className="mb-6 last:mb-0">{paragraph}</p>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {activeProject.process && (
                                                        <div className="space-y-6">
                                                            <h2 className={`text-2xl font-bold ${textPrimary}`}>The Process</h2>
                                                            <div className={`text-lg leading-relaxed ${textSecondary}`}>
                                                                {activeProject.process.split('\n\n').map((paragraph, i) => (
                                                                    <p key={i} className="mb-6 last:mb-0">{paragraph}</p>
                                                                ))}
                                                            </div>
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
                                    className="max-w-md text-left w-full h-full md:h-auto overflow-y-auto md:overflow-visible no-scrollbar pb-24 md:pb-0"
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
