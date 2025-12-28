import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, ArrowLeft, Mail, Copy, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import robotImg from '@/assets/images/robot.png';

const About = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [isHirePopupOpen, setIsHirePopupOpen] = useState(false);

    // Strict 3-color palette
    const textPrimary = isDarkMode ? 'text-white' : 'text-black';
    const textSecondary = isDarkMode ? 'text-white/50' : 'text-black/50';
    const bgPrimary = isDarkMode ? 'bg-black' : 'bg-white';
    const bgSecondary = isDarkMode ? 'bg-white/5' : 'bg-black/5';
    const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';

    const BentoCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
        <div className={`p-5 md:p-6 rounded-2xl border ${borderColor} ${bgSecondary} hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${className}`}>
            {children}
        </div>
    );

    return (
        <div className={`h-screen flex font-sans transition-colors duration-300 ${bgPrimary} ${textPrimary} overflow-hidden`}>

            {/* Hire Me Modal */}
            <AnimatePresence>
                {isHirePopupOpen && (
                    <>
                        <motion.div
                            key="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
                            onMouseEnter={() => setIsHirePopupOpen(false)}
                        />
                        <motion.div
                            key="modal-card"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                            onMouseLeave={() => setIsHirePopupOpen(false)}
                        >
                            <div className="w-96 rounded-lg border border-black/10 bg-white shadow-lg relative">
                                <motion.button
                                    onClick={() => setIsHirePopupOpen(false)}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full hover:bg-black/5 text-black/40 hover:text-black h-8 w-8"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                                <div className="p-6 pt-4">
                                    <div className="flex justify-center mb-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-purple-400/20 blur-xl rounded-full" />
                                            <img src={robotImg} alt="Robot" className="w-20 h-20 relative z-10" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 mb-6">
                                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-center text-black">Hire me</h3>
                                        <p className="text-sm text-gray-600 text-center font-medium">So your logo could live here 👀</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="mailto:sumitsharma9128@gmail.com?subject=Let's Talk - Job Opportunity" className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-bold bg-black text-white hover:bg-black/90 h-10 px-4 py-2">Let's Talk →</a>
                                        <button onClick={() => navigator.clipboard.writeText("sumitsharma9128@gmail.com")} className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-gray-100 text-black hover:bg-gray-200 h-10 w-10">
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Sidebar - Minimal */}
            <aside className={`
                hidden md:flex flex-col z-40
                w-20 border-r ${borderColor}
                ${bgPrimary}
                items-center py-6
            `}>
                <button
                    onClick={() => navigate('/')}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors mb-4`}
                    title="Back to Home"
                >
                    <ArrowLeft className={`w-5 h-5 ${textSecondary}`} />
                </button>

                {/* Socials Removed */}
            </aside>

            {/* Main Content - Scrollable on Mobile, Centered Bento on Desktop */}
            <main className={`flex-1 h-full relative overflow-hidden ${bgPrimary} transition-colors duration-300`}>

                {/* Header - Sticky/Translucent for Premium Feel */}
                <header className={`absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 md:px-8 border-b ${borderColor} ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md z-30`}>
                    <div className="flex items-center gap-2 text-sm">
                        <span className={`${textSecondary} hover:${textPrimary} cursor-pointer transition-colors`} onClick={() => navigate('/')}>Sumit</span>
                        <span className={textSecondary}>/</span>
                        <span className={textPrimary}>About</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={toggleTheme} className={`p-2 rounded-full ${bgSecondary} ${textSecondary} hover:${textPrimary} transition-colors`}>
                            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    </div>
                </header>

                <div className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar p-4 md:p-12 pt-24 md:pt-12 relative flex flex-col items-center justify-start md:justify-center">
                    {isDarkMode && (
                        <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0 mix-blend-overlay"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                        />
                    )}

                    <div className="w-full max-w-5xl mx-auto h-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 text-pretty pb-20 md:pb-0">

                        {/* 1. Main Bio (Large) */}
                        <BentoCard className="md:col-span-2 flex flex-col justify-center min-h-auto md:min-h-[300px]">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                {/* Logo Removed as requested */}
                                <div className="space-y-6">
                                    <h1 className={`text-3xl md:text-4xl font-bold ${textPrimary} tracking-tight`}>
                                        From my pen
                                    </h1>
                                    <p className={`text-base md:text-xl leading-relaxed ${textSecondary} max-w-2xl`}>
                                        I’m Sumit Sharma, passionate about design and converting those designs into real-world sites and applications. Designing has been my go-to hobby at any time; I see the world through design and admire it, and I really wanna be one of the greats in design at the end of my time. Thanks.
                                    </p>
                                    <div className={`flex items-center gap-2 text-xs font-medium ${textSecondary} uppercase tracking-wider`}>
                                        <MapPin className="w-3 h-3" />
                                        <span>India</span>
                                    </div>
                                </div>
                            </div>
                        </BentoCard>

                        {/* 2. Status / Action */}
                        <BentoCard className="md:col-span-1 flex flex-col justify-between min-h-auto md:min-h-[300px] gap-6 md:gap-0">
                            <div>
                                <h3 className={`font-semibold ${textPrimary} mb-2`}>Writing</h3>
                                <p className={`text-sm ${textSecondary} mb-4 leading-relaxed`}>
                                    Sometimes I write about design, code, and the chaotic beauty of building products. Thoughts, tutorials, and occasional rants.
                                </p>
                            </div>
                            <a
                                href="https://medium.com/@sumitsharma9128"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-3 rounded-xl font-medium text-sm text-center flex items-center justify-center gap-2
                                    ${isDarkMode
                                        ? 'bg-white text-black hover:bg-white/90'
                                        : 'bg-black text-white hover:bg-black/90'} 
                                    transition-all`}
                            >
                                Read on Medium
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </BentoCard>

                        {/* 3. Toolkit (Wide Bottom) */}
                        <BentoCard className="md:col-span-3 flex flex-col justify-center min-h-auto md:min-h-[250px]">
                            <h3 className={`text-sm font-bold uppercase tracking-wider mb-8 ${textSecondary}`}>Toolkit</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
                                    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
                                    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
                                    { name: 'Next.js', icon: isDarkMode ? 'https://cdn.simpleicons.org/nextdotjs/white' : 'https://cdn.simpleicons.org/nextdotjs/black' },
                                    { name: 'Framer Motion', icon: isDarkMode ? 'https://cdn.simpleicons.org/framer/white' : 'https://cdn.simpleicons.org/framer/black' },
                                    { name: 'Rive', icon: 'https://cdn.simpleicons.org/rive/D7242D' },
                                    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
                                    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
                                    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
                                    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
                                    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' }
                                ].map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`px-5 py-2.5 rounded-xl text-sm font-medium border flex items-center gap-2.5 transition-all hover:scale-105
                                            ${isDarkMode
                                                ? 'bg-black/20 border-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/10'
                                                : 'bg-white/50 border-black/5 text-black/70 hover:bg-black/5 hover:text-black hover:border-black/10'}
                                        `}
                                    >
                                        <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </BentoCard>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
