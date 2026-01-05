import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Linkedin, Twitter, Mail } from 'lucide-react';

interface LetsTalkModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LetsTalkModal: React.FC<LetsTalkModalProps> = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('sumitsharma9128@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                >
                    {/* Backdrop with Blur */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white bg-black/20 hover:bg-white/10 rounded-full transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-full p-6 flex flex-col gap-3 bg-[#050505]">
                            <h2 className="text-2xl font-bold text-white mb-4 font-playfair italic text-center">Let's build something.</h2>

                            {/* 1. Cal.com Card */}
                            <a
                                href="https://cal.com/sumit-sharma/15min"
                                target="_blank"
                                rel="noreferrer"
                                className="relative group h-20 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all cursor-pointer overflow-hidden flex items-center px-6 gap-4 hover:border-white/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-green-400 group-hover:bg-green-500/10 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white group-hover:text-green-400 transition-colors">Book a Discovery Call</h3>
                                    <p className="text-xs text-white/40">15 min intro chat via Cal.com</p>
                                </div>
                                <div className="text-white/20 group-hover:translate-x-1 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                                </div>
                            </a>

                            {/* 2. Email Card */}
                            <div
                                onClick={handleCopyEmail}
                                className="relative group h-20 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all cursor-pointer overflow-hidden flex items-center px-6 gap-4 hover:border-white/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">Email Me</h3>
                                    <p className="text-xs text-white/40">sumitsharma9128@gmail.com</p>
                                </div>
                                <div className="text-white/20">
                                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 group-hover:text-cyan-400" />}
                                </div>
                            </div>

                            {/* 3. Socials Bar */}
                            <div className="grid grid-cols-2 gap-3 mt-1">
                                <a
                                    href="https://linkedin.com/in/sumitsharma4"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-16 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Linkedin className="w-5 h-5 text-white/40 group-hover:text-[#0077b5] transition-colors" />
                                    <span className="text-sm font-medium text-white/40 group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
                                </a>
                                <a
                                    href="https://twitter.com/Sumitthq"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-16 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Twitter className="w-5 h-5 text-white/40 group-hover:text-[#1DA1F2] transition-colors" />
                                    <span className="text-sm font-medium text-white/40 group-hover:text-[#1DA1F2] transition-colors">Twitter</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LetsTalkModal;
