"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import GridBackground from '@/components/ui/GridBackground';

import { useTheme } from 'next-themes';
import LetsTalkModal from '@/components/ui/LetsTalkModal';
import { Sun, Moon } from 'lucide-react';

const MinimalLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [isLetsTalkOpen, setIsLetsTalkOpen] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Designs', path: 'https://sumitdesigns.vercel.app/', external: true },
    ];

    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black/10 selection:text-black dark:selection:bg-white/10 dark:selection:text-white relative transition-colors duration-300">
            {/* Decorative Background */}
            <GridBackground />

            {/* Structural Main Container with Vertical Rails */}
            <div className="max-w-5xl mx-auto border-x border-black/5 dark:border-white/5 min-h-screen relative">

                {/* Navigation */}
                <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
                    {/* Header Crosshairs */}
                    <div className="absolute -left-1.5 -bottom-1.5 text-black/20 dark:text-white/20 text-[10px]">+</div>
                    <div className="absolute -right-1.5 -bottom-1.5 text-black/20 dark:text-white/20 text-[10px]">+</div>

                    <div className="px-6 h-16 flex items-center justify-between">
                        {/* Left: Navigation Links */}
                        <div className="flex items-center gap-6 sm:gap-10">
                            {navLinks.map((link) => {
                                const isActive = link.path === '/' ? pathname === '/' : pathname.startsWith(link.path);
                                if (link.external) {
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.path}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs sm:text-sm font-medium transition-colors text-gray-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                                        >
                                            {link.name}
                                        </a>
                                    );
                                }
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className={`text-xs sm:text-sm font-medium transition-colors relative ${isActive ? 'text-zinc-900 dark:text-white' : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'}`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute -bottom-5 left-0 right-0 h-[1px] bg-brandAccent"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                    aria-label="Toggle Theme"
                                >
                                    {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                                </button>
                            )}
                            <button
                                onClick={() => setIsLetsTalkOpen(true)}
                                className="px-3 sm:px-4 py-1.5 rounded-full bg-transparent border border-zinc-300 dark:border-zinc-700 hover:border-brandAccent hover:text-brandAccent active:bg-brandAccent active:text-white active:border-brandAccent text-zinc-800 dark:text-zinc-200 text-[10px] sm:text-xs font-semibold transition-all duration-200 shadow-sm"
                            >
                                Let&apos;s Talk
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="py-20 px-6 sm:px-12 relative">
                    {children}
                </main>

                {/* Footer */}
                <footer className="border-t border-black/5 dark:border-white/5 w-full relative">
                    {/* Footer Top Crosshairs */}
                    <div className="absolute -left-1.5 -top-1.5 text-black/20 dark:text-white/20 text-[10px]">+</div>
                    <div className="absolute -right-1.5 -top-1.5 text-black/20 dark:text-white/20 text-[10px]">+</div>

                    <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-2 text-center md:text-left">
                            <div className="text-gray-900 dark:text-gray-200 font-medium">Sumit Sharma</div>
                            <div className="text-xs text-gray-500">
                                © {new Date().getFullYear()} All rights reserved.
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Stay updated with my latest projects</p>
                            <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-600"
                                />
                                <button
                                    type="submit"
                                    className="bg-black/10 hover:bg-black/20 text-black dark:bg-white/10 dark:hover:bg-white/20 dark:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
            <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
        </div>
    );
};

export default MinimalLayout;
