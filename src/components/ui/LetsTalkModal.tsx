import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, 
    Mail, 
    Calendar, 
    Twitter, 
    ArrowUpRight, 
    Check
} from 'lucide-react';

interface LetsTalkModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LetsTalkModal: React.FC<LetsTalkModalProps> = ({ isOpen, onClose }) => {
    const [feedback, setFeedback] = useState<string | null>(null);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setFeedback(null);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle ESC key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isOpen && e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const handleCopyEmail = () => {
        const email = 'sumitsharma9128@gmail.com';
        navigator.clipboard.writeText(email);
        setFeedback('Email copied to clipboard!');
        
        setTimeout(() => {
            window.location.href = `mailto:${email}`;
        }, 100);

        setTimeout(() => setFeedback(null), 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-[4px]"
                        onClick={onClose}
                    />

                    {/* Contact Hub Modal Container */}
                    <motion.div
                        initial={{ scale: 0.97, opacity: 0, y: 8 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.97, opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="relative w-full max-h-screen sm:max-h-none h-full sm:h-auto sm:max-w-[540px] bg-white dark:bg-[#0c0c0e] border-0 sm:border border-zinc-200 dark:border-zinc-800/80 rounded-none sm:rounded-xl overflow-hidden shadow-2xl flex flex-col z-10 font-sans"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button (Fixed top right) */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Centered Header Section */}
                        <div className="flex flex-col items-center text-center px-6 pt-12 pb-6 space-y-3.5">
                            {/* Pulsing Status Badge */}
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold font-mono bg-brandAccent/5 dark:bg-brandAccent/10 text-brandAccent border border-brandAccent/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-brandAccent animate-pulse" />
                                Available now
                            </span>
                            
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Let&apos;s build something.</h2>
                            <p className="text-[13px] text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                                Available for full-time roles, freelance projects and startup collaborations.
                            </p>
                        </div>

                        {/* Single-Column Contact Cards Area */}
                        <div className="px-6 pb-6 space-y-3 flex-1 overflow-y-auto">
                            {/* 1. Email Card */}
                            <button
                                onClick={handleCopyEmail}
                                className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c0c0e] hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left w-full min-h-[72px]"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-2 gap-y-0.5">
                                            <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-none">Email</span>
                                            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono truncate leading-none">sumitsharma9128@gmail.com</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-1 leading-none">Usually replies within 24 hours</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                            </button>

                            {/* 2. Book a Call Card */}
                            <button
                                onClick={() => {
                                    window.open('https://cal.com/sumit-sharma/15min', '_blank');
                                    setFeedback('Opening Cal.com in a new tab...');
                                    setTimeout(() => setFeedback(null), 3000);
                                }}
                                className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c0c0e] hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left w-full min-h-[72px]"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors shrink-0">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-2 gap-y-0.5">
                                            <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-none">Book a Call</span>
                                            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono truncate leading-none">15 minute intro call</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-1 leading-none">Open Cal.com booking link</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                            </button>

                            {/* 3. X / Twitter Card */}
                            <button
                                onClick={() => {
                                    window.open('https://x.com/sumitdotme', '_blank');
                                    setFeedback('Opening Twitter in a new tab...');
                                    setTimeout(() => setFeedback(null), 3000);
                                }}
                                className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c0c0e] hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-left w-full min-h-[72px]"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors shrink-0">
                                        <Twitter className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-2 gap-y-0.5">
                                            <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 leading-none">X / Twitter</span>
                                            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono truncate leading-none">@sumitdotme</span>
                                        </div>
                                        <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-1 leading-none">Follow my work and send a DM</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                            </button>

                            {/* Bottom row (Metadata checklist) */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-x-4 gap-y-2 text-[10px] text-zinc-400 dark:text-zinc-500 font-mono pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    Based in Bengaluru
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    Open to remote work
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    Open to freelance projects
                                </span>
                            </div>
                        </div>

                        {/* Footer / ESC hint */}
                        <div className="px-6 py-3 bg-zinc-50 dark:bg-[#08080a] border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between min-h-[38px] shrink-0">
                            {feedback ? (
                                <motion.div 
                                    initial={{ opacity: 0, y: 3 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[11px] text-green-600 dark:text-green-400 font-medium flex items-center gap-1.5"
                                >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>{feedback}</span>
                                </motion.div>
                            ) : (
                                <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                                    Press <kbd className="px-1 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[9px] font-mono">esc</kbd> to close
                                </div>
                            )}
                            <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                                Sumit Sharma
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LetsTalkModal;
