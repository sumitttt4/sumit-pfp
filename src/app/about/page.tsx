"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AsciiHeroContainer from '@/components/ui/AsciiHeroContainer';

const XIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function About() {
    return (
        <AsciiHeroContainer className="w-full">
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-12 py-10"
        >
            <div className="space-y-4">
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    From ideas to products.
                </h1>
                <p className="text-[15px] text-zinc-900 dark:text-zinc-200 font-semibold leading-relaxed">
                    I&apos;m Sumit Sharma, a design engineer and product builder.
                </p>
            </div>

            <div className="space-y-5 text-[15px] text-zinc-800 dark:text-zinc-300 font-normal leading-relaxed">
                <p>
                    I enjoy turning rough ideas into products people actually use. Sometimes that&apos;s a SaaS product, sometimes a design system, sometimes a simple landing page that converts.
                </p>
                <p>
                    Over the past few years I&apos;ve worked across design, frontend development, branding, and product strategy. Instead of choosing one lane, I learned enough of each to take products from idea to launch.
                </p>
                <p>
                    Today I&apos;m building <a href="https://glyph.software" target="_blank" rel="noreferrer" className="text-brandAccent hover:text-brandAccent-hover font-medium hover:underline whitespace-nowrap">Glyph</a>, an AI-powered brand identity generator, and <a href="https://uxpulseclarity.vercel.app/" target="_blank" rel="noreferrer" className="text-brandAccent hover:text-brandAccent-hover font-medium hover:underline whitespace-nowrap">UX Pulse</a>, an AI UX engineer built for Microsoft Clarity.
                </p>
                <p>
                    What excites me most isn&apos;t the technology itself. It&apos;s the moment when an idea stops being a document and becomes something real that people can interact with.
                </p>
                <p>
                    I care about clean interfaces, thoughtful details, strong branding, and products that feel simple even when the problems behind them aren&apos;t.
                </p>
                <p>
                    Most days you&apos;ll find me building products, experimenting with AI, refining interfaces, and sharing what I learn along the way.
                </p>
                <p>
                    When I&apos;m not coding or designing, I&apos;m usually watching films. You can check out my movie diary and reviews on <a href="https://letterboxd.com/Sumit232/" target="_blank" rel="noreferrer" className="text-brandAccent hover:text-brandAccent-hover font-medium hover:underline">Letterboxd</a>.
                </p>
            </div>

            {/* Let's connect section */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 space-y-4">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Let&apos;s connect</h2>
                <p className="text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    Whether you have a project in mind, want to collaborate, or just want to chat about tech, I&apos;d love to hear from you.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                    <a
                        href="mailto:sumitsharma9128@gmail.com"
                        className="flex items-center gap-2.5 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-all active:scale-[0.97] group"
                    >
                        <svg className="w-4 h-4 fill-current text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                        </svg>
                        Email
                    </a>
                    <a
                        href="https://x.com/sumitdotme"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-all active:scale-[0.97] group"
                    >
                        <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                            <XIcon />
                        </span>
                        Twitter
                    </a>
                    <a
                        href="https://github.com/sumitttt4"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-all active:scale-[0.97] group"
                    >
                        <svg className="w-4 h-4 fill-current text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
        </AsciiHeroContainer>
    );
}
