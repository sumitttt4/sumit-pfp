import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { LogIn, Moon, Sun, Command, Mail, Copy } from 'lucide-react';

// Sample Project Data
interface Project {
    id: number;
    title: string;
    year: string;
    category: string;
    image: string;
    video?: string;
    link?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Digital Wallet",
        year: "2024",
        category: "Fintech",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        video: "/videos/Wallet.mp4",
        link: "https://filecard-delta.vercel.app/"
    },
    {
        id: 2,
        title: "n8n workflow",
        year: "2024",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop",
        video: "/videos/n8n.mp4",
        link: "https://n8n-workflow-eta.vercel.app/"
    },
    {
        id: 3,
        title: "Linkease",
        year: "2023",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        video: "/videos/Linkease.mp4",
        link: "https://link-ease-omega.vercel.app/"
    },
    {
        id: 4,
        title: "Loyalty rewards",
        year: "2023",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1560066984-1fa980fab5aa?q=80&w=1992&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Admin Panel Dashboard",
        year: "2023",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Future World (Concept)",
        year: "2022",
        category: "3D Art",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "File Showcase",
        year: "2022",
        category: "System Design",
        image: "/images/file-showcase-fallback.png",
        video: "/videos/FileShowcase.mp4",
        link: "https://file-showcase.vercel.app/"
    },
    {
        id: 8,
        title: "MicroHabbit",
        year: "2022",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    }
];

const DashboardLayout = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);

    useEffect(() => {
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

    const activeProject = projects.find(p => p.id === (hoveredProject || selectedProject));

    // Strict 3-color palette
    const textPrimary = isDarkMode ? 'text-white' : 'text-black';
    const textSecondary = isDarkMode ? 'text-white/50' : 'text-black/50';
    const bgPrimary = isDarkMode ? 'bg-black' : 'bg-white';
    const bgSecondary = isDarkMode ? 'bg-white/5' : 'bg-black/5';
    const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';

    return (
        <div className={`min-h-screen flex font-sans transition-colors duration-300 ${bgPrimary} ${textPrimary} relative`}>

            {/* Hire Me Modal - Full Screen Overlay with Hover Detection */}
            <AnimatePresence>
                {isHirePopupOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            key="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
                            onMouseEnter={() => setIsHirePopupOpen(false)}
                        />

                        {/* Shadcn-Styled Hire Me Card */}
                        <motion.div
                            key="modal-card"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                            onMouseLeave={() => setIsHirePopupOpen(false)}
                        >
                            {/* Card Container */}
                            <div className="w-96 rounded-lg border border-black/10 bg-white shadow-lg relative">

                                {/* Close Button - Shadcn Ghost Style */}
                                {/* Magnetic Close Button */}
                                <motion.button
                                    onClick={() => setIsHirePopupOpen(false)}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 hover:bg-black/5 text-black/40 hover:text-black h-8 w-8"
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
                                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png"
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
                                    <div className="flex gap-2">
                                        <a
                                            href="mailto:sumitsharma9128@gmail.com?subject=Let's Talk - Job Opportunity"
                                            className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90 h-10 px-4 py-2"
                                        >
                                            Let's Talk →
                                        </a>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText("sumitsharma9128@gmail.com");
                                                // Ideally show a toast here
                                            }}
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 bg-gray-100 text-black hover:bg-gray-200 h-10 w-10"
                                            title="Copy Email"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </>
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

                {/* Scrollable Projects List Only */}
                <div className="flex-1 overflow-y-auto px-4 py-4">
                    <nav className="space-y-1">
                        {projects.map((project) => (
                            <button
                                key={project.id}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
                                className={`
                                    w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-md transition-all duration-200 group relative
                                    ${(project.id === selectedProject)
                                        ? `${bgSecondary} ${textPrimary} font-semibold shadow-sm`
                                        : (hoveredProject === project.id)
                                            ? `${bgSecondary} ${textPrimary} translate-x-1`
                                            : `${textSecondary} hover:${textPrimary}`
                                    }
                                `}
                            >
                                {/* Active Indicator Line */}
                                {project.id === selectedProject && (
                                    <motion.div
                                        layoutId="activeProjectIndicator"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-red-500 rounded-r-md"
                                    />
                                )}

                                <span className={project.id === selectedProject ? "ml-2" : ""}>{project.title}</span>
                                <span className={`text-[10px] ${textSecondary} opacity-0 group-hover:opacity-100 transition-opacity`}>{project.year}</span>
                            </button>
                        ))}
                    </nav>
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
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors`}>GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors`}>LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`hover:${textPrimary} transition-colors`}>Twitter</a>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 flex flex-col h-screen overflow-hidden ${bgPrimary} transition-colors duration-300`}>

                {/* Header */}
                <header className={`h-16 border-b ${borderColor} flex items-center justify-between px-8 bg-transparent relative z-20`}>

                    {/* Breadcrumbs / Title */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className={textSecondary}>Sumit</span>
                        <span className={textSecondary}>/</span>
                        <span className={textPrimary}>{activeProject ? activeProject.title : "Main"}</span>
                    </div>
                    <div className="flex items-center gap-4">
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
                                className="group relative outline-none"
                            >
                                <div className={`w-8 h-8 rounded-full overflow-hidden border-2 ${isDarkMode ? 'border-white/10' : 'border-black/5'} bg-blue-600 flex items-center justify-center transition-all group-hover:scale-105 group-hover:border-black/20 group-active:scale-95`}>
                                    <span className="text-white font-semibold text-[10px]">SS</span>
                                </div>
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
                                            initial={{ opacity: 0, scale: 0.90, y: 8, transformOrigin: 'top right' }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.90, y: 8 }}
                                            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }} // Smooth "pop" ease
                                            className={`absolute right-0 top-full mt-2 w-72 rounded-2xl border ${borderColor} ${bgPrimary} p-2 shadow-2xl z-50 overflow-hidden ring-1 ring-black/5`}
                                        >
                                            {/* User Info Header */}
                                            <div className="flex items-center gap-3 p-3 mb-1">
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center text-white font-semibold text-sm shadow-inner shrink-0">
                                                    SS
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <h4 className={`text-sm font-bold ${textPrimary} truncate leading-tight`}>Sumit Sharma</h4>
                                                    <p className={`text-xs ${textSecondary} truncate leading-tight mt-0.5`}>sumitsharma9128@gmail.com</p>
                                                </div>
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
                    <div className="w-full max-w-3xl relative z-10">

                        <AnimatePresence mode="wait">
                            {activeProject ? (
                                <motion.div
                                    key="preview"
                                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className={`
                                        fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                                        md:relative md:p-0 md:bg-transparent md:block md:inset-auto md:z-auto
                                    `}
                                >
                                    <div className={`
                                        w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 relative
                                        ${isDarkMode ? 'ring-white/10' : 'ring-black/10'}
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
                                            className={`w-full h-full object-cover ${activeProject?.video ? 'hidden' : ''}`}
                                        />

                                        {/* Home / Close Button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedProject(null);
                                                setHoveredProject(null);
                                            }}
                                            className={`
                                            absolute top-6 right-6 md:top-4 md:right-4 z-50 
                                            p-4 md:p-2 rounded-full shadow-2xl 
                                            transition-all duration-200 hover:scale-105 active:scale-95 
                                            flex items-center justify-center
                                            bg-black text-white
                                            ${isDarkMode
                                                    ? 'md:bg-white md:text-black md:hover:bg-gray-200'
                                                    : 'md:bg-black md:text-white md:hover:bg-gray-800'
                                                }
                                        `}
                                            title="Go Home"
                                        >
                                            <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 md:p-8 pb-12 md:pb-8">
                                            <div>
                                                <h3 className="text-3xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-2 md:mb-0">{activeProject?.title}</h3>
                                                <p className="text-white/80 text-base md:text-sm mt-1 font-medium">{activeProject?.category} — {activeProject?.year}</p>
                                                {activeProject?.link && (
                                                    <a
                                                        href={activeProject.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 mt-4 md:mt-3 px-4 py-2 md:px-0 md:py-0 bg-white/10 md:bg-transparent rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none text-sm font-semibold text-white hover:bg-white/20 md:hover:bg-transparent md:hover:text-white md:hover:underline transition-all"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        See it in action
                                                        <svg className="w-4 h-4 md:w-3 md:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
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
                                        <span className="whitespace-nowrap">on a journey to <span className="text-red-500">design engineer</span> at <span
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

                                    <div className={`flex gap-4 text-sm ${textSecondary} font-medium`}>
                                        <a href="/about" className={`hover:${textPrimary} transition-colors`}>About</a>
                                        <a href="mailto:sumitsharma9128@gmail.com" className={`hover:${textPrimary} transition-colors`}>Email</a>
                                        <a href="https://linkedin.com" className={`hover:${textPrimary} transition-colors`}>LinkedIn</a>
                                        <a href="https://twitter.com" className={`hover:${textPrimary} transition-colors`}>Twitter</a>
                                    </div>

                                    {/* Mobile Project List (Hidden on Desktop) */}
                                    <div className="mt-16 md:hidden space-y-6">
                                        {projects.map((project) => (
                                            <div
                                                key={project.id}
                                                onClick={() => setSelectedProject(project.id)}
                                                className="group flex items-baseline justify-between cursor-pointer"
                                            >
                                                <h4 className={`text-lg font-medium ${textPrimary} group-hover:opacity-60 transition-opacity`}>
                                                    {project.title}
                                                </h4>
                                                <span className={`text-sm ${textSecondary} font-normal`}>
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
