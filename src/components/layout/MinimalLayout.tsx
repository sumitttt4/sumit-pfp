import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GridBackground from '@/components/ui/GridBackground';

const MinimalLayout = ({ children }: { children?: React.ReactNode }) => {
    const location = useLocation();

    const navLinks = [
        { name: 'Me', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-cyan-500/20 selection:text-cyan-400 relative">
            {/* Decorative Background */}
            <GridBackground />

            {/* Structural Main Container with Vertical Rails */}
            <div className="max-w-5xl mx-auto border-x border-white/5 min-h-screen relative">

                {/* Navigation */}
                <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                    {/* Header Crosshairs */}
                    <div className="absolute -left-1.5 -bottom-1.5 text-white/20 text-[10px]">+</div>
                    <div className="absolute -right-1.5 -bottom-1.5 text-white/20 text-[10px]">+</div>

                    <div className="px-6 h-16 flex items-center justify-end gap-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors relative ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-5 left-0 right-0 h-[1px] bg-cyan-400"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </header>

                {/* Main Content */}
                <main className="py-20 px-6 sm:px-12 relative">
                    {children || <Outlet />}
                </main>

                {/* Footer */}
                <footer className="border-t border-white/5 w-full relative">
                    {/* Footer Top Crosshairs */}
                    <div className="absolute -left-1.5 -top-1.5 text-white/20 text-[10px]">+</div>
                    <div className="absolute -right-1.5 -top-1.5 text-white/20 text-[10px]">+</div>

                    <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-2 text-center md:text-left">
                            <div className="text-gray-200 font-medium">Sumit Sharma</div>
                            <div className="text-xs text-gray-500">
                                © {new Date().getFullYear()} All rights reserved.
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-4">
                            <p className="text-sm text-gray-400">Stay updated with my latest projects</p>
                            <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-gray-600"
                                />
                                <button
                                    type="submit"
                                    className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
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
