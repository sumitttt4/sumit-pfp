"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import GridBackground from '@/components/ui/GridBackground';

const MinimalLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    const navLinks = [
        { name: 'Me', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-200 font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white relative">
            {/* Decorative Background */}
            <GridBackground />

            {/* Structural Main Container with Vertical Rails */}
            <div className="max-w-5xl mx-auto border-x border-black/5 dark:border-white/5 min-h-screen relative">

                {/* Navigation */}
                <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
                    {/* Header Crosshairs */}
                    <div className="absolute -left-1.5 -bottom-1.5 text-black/20 dark:text-white/20 text-[10px]">+</div>
                    <div className="absolute -right-1.5 -bottom-1.5 text-black/20 dark:text-white/20 text-[10px]">+</div>

                    <div className="px-6 h-16 flex items-center justify-end">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-4 sm:gap-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className={`text-sm font-medium transition-colors relative ${isActive ? 'text-zinc-900 dark:text-white' : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'}`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute -bottom-5 left-0 right-0 h-[1px] bg-zinc-900 dark:bg-white"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                            <a
                                href={pathname === '/' ? '#contact' : '/#contact'}
                                className="text-sm font-medium px-4 py-1.5 rounded-full border border-black/20 text-black/70 hover:text-black hover:border-black/40 hover:bg-black/5 dark:border-white/20 dark:text-white/70 dark:hover:text-white dark:hover:border-white/40 dark:hover:bg-white/5 transition-all"
                            >
                                Hire Me
                            </a>
                            {/* Theme Toggle */}
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="p-2 rounded-full text-black/40 hover:text-black hover:bg-black/5 dark:text-white/40 dark:hover:text-white dark:hover:bg-white/5 transition-all"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? (
                                        <Sun className="w-4 h-4" />
                                    ) : (
                                        <Moon className="w-4 h-4" />
                                    )}
                                </button>
                            )}
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
        </div>
    );
};

export default MinimalLayout;
