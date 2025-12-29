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
        id: 6,
        title: "SafeAgree",
        year: "2025",
        category: "Privacy Tool",
        image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop",
        video: "/videos/Safeagree.mp4",
        link: "https://safe-agree.vercel.app/",
        description: "Making consent understandable, not skippable",
        overview: "SafeAgree is a web app that helps users understand Terms and Conditions before agreeing to them. Instead of forcing people to blindly click 'I agree,' it transforms long, legal text into clear risk signals and readable summaries.\n\nProblem: Terms and Conditions are intentionally long, dense, and unreadable. Most users accept them under time pressure without understanding what rights they’re giving up or what risks they’re accepting.\n\nUser: People signing up for digital products who want clarity and confidence before accepting mandatory legal terms not legal advice, just understandable information.\n\nOutcome: SafeAgree turns opaque legal text into readable insights, helping users make more informed consent decisions instead of blindly agreeing.",
        process: "Role: Design Engineer | Type: UX-driven web application | Stack: Next.js, React, Tailwind, AI integration, Figma.\n\nDesign Principle: Clarity over speed. The interface introduces intentional friction to slow users down and make consent a conscious decision rather than a reflex.\n\nExperience Flow: The product follows a linear, low cognitive load flow: Paste a URL or raw Terms text -> Parse and analyze the content -> Surface a high-level trust signal -> Break down clauses with clear risk indicators -> Let users decide with context.\n\nKey Design Decisions: Used a single typeface to maintain consistency and reduce visual noise while reading dense content. Applied a semantic color system: Red for high-risk clauses, Green for user-friendly terms, Gray for neutral information, and Yellow sparingly to draw attention without urgency. Kept the layout minimal to avoid distracting from critical information.\n\nEngineering Decisions: Implemented URL parsing with a fallback to manual text input for invalid links. Designed the system to handle very large inputs (up to ~300,000 words). Added clear loading, empty, and error states to maintain user trust during analysis.",
    },
    {
        id: 9,
        title: "GetLockedIN",
        year: "2025",
        category: "Productivity OS",
        image: "https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2661&auto=format&fit=crop",
        video: "/videos/getlockedin.mp4",
        link: "https://getlockedin.live",
        description: "The Anti-Performative Productivity OS",
        overview: "GetLockedIN is a mobile-first accountability protocol built for people who want to track real results rather than intentions. It operates on 'Proof of Work' rather than self-reporting.\n\nProblem: Productivity tools often create a false sense of progress. We make lists and organize boards, but this 'meta-work' frequently replaces actual output. Traditional habit trackers rely on the honor system, which is easily gamified.\n\nUser: Builders and makers tired of 'performative productivity' who want an objective, immutable record of their consistency.\n\nOutcome: A system that integrates with GitHub, Stripe, and Vercel to automatically log activity, creating a verifiable reputation score that cannot be faked.",
        process: "Role: Product Designer & Engineer | Type: Mobile Web App | Stack: React, Next.js, Framer Motion, Supabase, APIs (GitHub, Stripe).\n\nDesign Principle: Weaponized Psychology. We used Loss Aversion—the pain of losing a streak—as a stronger motivator than the pleasure of gaining one. This drives the 'Dead Man’s Switch' mechanic.\n\nExperience Flow: Connect external accounts -> Define shipping goals -> System auto-verifies work -> Miss a deadline? The system publicly tweets your failure -> Ship code to keep the streak alive.\n\nKey Design Decisions: Rejected standard 'SaaS Dark Mode' for a premium 'Titanium & Paper' aesthetic. High-contrast borders and sharp 90-degree corners give digital cards a tactile, physical presence. Animations are weighty and momentum-based.\n\nEngineering Decisions: Built a robust Event-Driven Architecture to handle real-time webhooks. Implemented a 'Replay & Verify' queue system to ensure fairness, distinguishing between a user missing a deadline and a service API outage.",
    },
    {
        id: 10,
        title: "Vibe Market",
        year: "2025",
        category: "E-Commerce",
        image: "/images/vibe-market-landing.png",
        screenshots: ["/images/vibe-market-submit.png"],
        link: "https://vibemarket.tech",
        description: "A discovery layer for vibe-coded apps",
        overview: "Vibe Market is a curated gallery for new, aesthetic-first micro-apps, designed to solve the discovery problem in the AI era.\n\nProblem: Building software is now incredibly fast, leading to a flood of micro-apps. Traditional platforms like Product Hunt are built for enterprise marketing, burying niche, high-craft tools under lists of generic SaaS.\n\nUser: Design-conscious users looking for specific, 'vibe-coded' utilities, and creators who treat software design as an expressive medium.\n\nOutcome: A discovery layer that filters for 'Soul' and 'Craft,' connecting specific user needs with unique, visually distinct tools.",
        process: "Role: Frontend Engineer & Curator | Type: Marketplace | Stack: Next.js, Typescript, Tailwind, Vector Embeddings.\n\nDesign Principle: Gallery over Directory. The interface treats each app as an art piece, prioritizing visual distinctiveness and interactive trials over feature lists.\n\nExperience Flow: Browse curated feed -> Hover for Live Preview -> View 'Prompt DNA' to see the build context -> One-click access.\n\nKey Design Decisions: Adopted a 'Cyber-Archivist' aesthetic with dark palettes and neon accents. Developed 'Live Preview' cards that allow users to interact with a sandboxed version of the app directly in the feed, removing click-through friction.\n\nEngineering Decisions: Implemented the 'Prompt DNA' submission flow to capture the AI context behind apps. Used vector embeddings for 'Vibe Match' search, allowing users to search by abstract feelings (e.g., 'night focus') rather than just keywords.",
    },
    {
        id: 8,
        title: "MonoQr",
        year: "2025",
        category: "Web Tool",
        image: "https://images.unsplash.com/photo-1595079676339-1534801fafde?q=80&w=2070&auto=format&fit=crop",
        video: "/videos/MonoQr.mp4",
        link: "https://mono-qr.vercel.app/",
        description: "Instant QR Codes for Modern Brands",
        overview: "MonoQr is a professional QR code generator that focuses on privacy, design quality, and reliability.\n\nProblem: The QR ecosystem is user-hostile, filled with ads, hidden tracking pixels, and subscription traps that hold physical prints hostage.\n\nUser: Designers and brands who need vector-quality, reliable assets for production environments without 'enshittification.'\n\nOutcome: A pure utility tool that delivers enterprise-grade design control and absolute privacy, for free.",
        process: "Role: Full Stack Engineer | Type: Web Utility | Stack: React, Canvas API, SVG manipulation.\n\nDesign Principle: Radical Subtraction. We removed every element that didn't serve the core task of generating a code, creating a professional, tool-like workspace.\n\nExperience Flow: Enter URL -> Real-time vector preview -> Adjust error correction & density -> Download SVG/PNG.\n\nKey Design Decisions: Created 'Liquid' QR designs where modules flow together for a smoother aesthetic. Added real-time error correction controls to allow designers to balance data density with visual resilience for difficult print materials.\n\nEngineering Decisions: Moved all generation logic to the client-side. No user data touches a server, ensuring privacy and speed. Built a custom rendering engine for instant high-fidelity vector previews.",
    },
    {
        id: 3,
        title: "Linkease",
        year: "2025",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        video: "/videos/Linkease.mp4",
        link: "https://link-ease-omega.vercel.app/",
        description: "A centralized platform for collecting and managing links",
        overview: "Linkease transforms bookmarking from a passive storage list into an active knowledge management system.\n\nProblem: Browser bookmarks are clutter magnets. We save things to read later, but bad organization and high-friction retrieval turn these lists into 'digital graveyards.'\n\nUser: Researchers, developers, and power users who need to organize massive amounts of digital content without breaking their workflow.\n\nOutcome: A centralized hub that not only saves links but helps users categorize, synthesize, and actually revisit them using active recall.",
        process: "Role: Product Designer | Type: SaaS / Extension | Stack: React, Node.js, NLP.\n\nDesign Principle: Flow State Functionality. Saving a link must be instant (<1s) to prevent breaking the user's current focus.\n\nExperience Flow: One-click extension save -> Auto-tagging based on content -> 'Active Recall' dashboard resurfaces relevant links -> Read & Archive.\n\nKey Design Decisions: Dark-mode first UI to support long research sessions. Used Framer Motion to add satisfying 'snap' animations to interactions. \n\nEngineering Decisions: Built a 'Categorization Engine' using NLP to auto-suggest tags, reducing the cognitive load of manual organization. Implemented an extraction algorithm to capture robust metadata and cover images."
    },
    {
        id: 2,
        title: "n8n workflow",
        year: "2025",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop",
        video: "/videos/n8n.mp4",
        link: "https://n8n-workflow-eta.vercel.app/",
        description: "Visualizing complex automation workflows with clarity",
        overview: "This project focuses on visualizing n8n automation workflows, turning abstract JSON logic into clear, readable diagrams for system monitoring.\n\nProblem: Backend automation is a 'black box' to non-technical stakeholders. JSON logs are useful for debugging code but terrible for explaining system health to project managers or clients.\n\nUser: Project Managers needing high-level status updates, and Developers needing a clear visual debugger.\n\nOutcome: A 'Rosetta Stone' visualization that bridges the gap between technical logic and business process visibility.",
        process: "Role: Front-End Developer | Type: Data Visualization | Stack: Vue.js, D3.js (Graphing), n8n API.\n\nDesign Principle: Clarity through Status. Success, Failure, and Pending states must be instantly recognizable from a distance using color and motion.\n\nExperience Flow: View Workflow Map -> See real-time node status (pulsing/glowing) -> Click node for 'Time Travel' data inspection -> Replay execution.\n\nKey Design Decisions: Simplified the node editor view for *monitoring* rather than editing. Used motion (pulsing, shaking) to convey status health intuitively.\n\nEngineering Decisions: Implemented 'Time Travel' debugging to step through past executions payload-by-payload. Optimized canvas rendering to handle infinite panning on workflows with hundreds of nodes."
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
                description: "Next-gen digital wallet focused on cross-border payments",
                overview: "A digital wallet concept re-imagining the peer-to-peer payment experience to be simple, human-centric, and reassuring.\n\nProblem: International money transfer is often stressful, confusing, and opaque. Users face hidden fees and cold, banking-style interfaces that induce anxiety.\n\nUser: Global citizens sending money to friends and family who value ease of use and emotional reassurance over banking jargon.\n\nOutcome: A payment experience that builds trust at every step, making moving money feel as instant and intimate as handing cash to a friend.",
                process: "Role: Design Engineer | Type: Mobile App Concept | Stack: React Native, Reanimated, Figma.\n\nDesign Principle: Trust Signals. Every interaction must provide clear, tangible feedback to reassure the user that their money is safe.\n\nKey Design Decisions: Used skeuomorphic 'card' metaphors for currencies to make them feel tangible. Motion design is central—swipes have resistance, success states are celebratory. Simplified currency conversion to a transparent real-time slider.\n\nEngineering Decisions: Focused on fluid 60fps animations using Reanimated to ensure the app felt responsive and native, which is crucial for building trust in financial applications.",
            },
            {
                id: 7,
                title: "File Showcase",
                year: "2025",
                category: "System Design",
                image: "/images/file-showcase-fallback.png",
                video: "/videos/File.mp4",
                link: "https://file-showcase.vercel.app/",
                description: "A robust file management system for enterprise collaboration",
                overview: "A design study in solving the 'density vs. usability' paradox in high-volume enterprise file management.\n\nProblem: Enterprise tools often dump data on users with zero hierarchy, or hide it behind too many clicks. Finding the right file in a deep tree is painful and slow.\n\nUser: Enterprise power users managing thousands of assets who need both speed and rich context.\n\nOutcome: A balanced interface that maximizes data visibility without causing cognitive overload.",
                process: "Role: UI/UX Designer | Type: System Design | Stack: React, Grid Layouts.\n\nDesign Principle: Context over Location. Users find files by 'who sent it' or 'when,' not just 'where it is.'\n\nKey Design Decisions: 'Smart-Filter' views (Recently Edited, Shared with Team). Responsive modular grid that shifts from card to list view based on density needs. Typography-driven hierarchy.\n\nEngineering Decisions: Implemented a 'Quick Look' modal for instant file previews without navigation, preserving user context and flow.",
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
                description: "Gamified loyalty program for high-retention user engagement",
                overview: "A gamified loyalty program redesign for a major retailer, shifting from a transactional model to an engagement-based one.\n\nProblem: Users find standard point systems boring and transactional. Retention drops because the reward feels too distant and the process too passive.\n\nUser: Retail customers seeking recognition and fun value from their brand interactions.\n\nOutcome: A system that increased retention by rewarding engagement streaks and social actions, not just spending.",
                process: "Role: Product Designer (NDA) | Type: Mobile Feature | Stack: N/A (Design only).\n\nDesign Principle: Engagement Engineering. Reward the action, delight the user.\n\nKey Design Decisions: 'Delight Moments' in redemption—unlocking a reward feels like a loot box event. Vibrant 'Reward Mode' aesthetic distinct from the main app.\n\nEngineering Decisions: (Design Focus) Streamlined claim flow from 5 clicks to 2, removing friction from the most positive user interaction.",
            },
            {
                id: 5,
                title: "Admin Panel Dashboard",
                year: "2025",
                category: "Web App",
                image: "/images/admin-dashboard-kyc.png",
                isNDA: true,
                description: "A comprehensive KYC management dashboard for merchant verification",
                overview: "A high-volume KYC (Know Your Customer) verification dashboard designed for speed, accuracy, and operator ergonomics.\n\nProblem: Compliance operators suffer from fatigue using slow, clunky interfaces, leading to errors and bottlenecks in merchant onboarding.\n\nUser: Operations teams processing hundreds of verifications daily.\n\nOutcome: An 'Operator's Cockpit' that reduces time-per-verification and fatigue through keyboard-first design.",
                process: "Role: UI Designer (NDA) | Type: Web App | Stack: React, React Table.\n\nDesign Principle: Efficiency First. Minimize eye travel and mouse usage.\n\nKey Design Decisions: Consistent color coding (Green/Red/Yellow) for instant scanning. 'Eye-Tennis' reduction by grouping ID photos next to data.\n\nEngineering Decisions: Implemented global keyboard shortcuts for Approve/Reject actions to allow mouse-free workflows for power users.",
            }
        ]
    }
];

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
