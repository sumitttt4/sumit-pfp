"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

const XIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                    Today I&apos;m building <a href="https://glyph.software" target="_blank" rel="noreferrer" className="text-brandAccent hover:text-brandAccent-hover font-medium hover:underline whitespace-nowrap">Glyph</a>, an AI-powered brand identity generator, while also running <a href="https://www.blurr.design/" target="_blank" rel="noreferrer" className="text-brandAccent hover:text-brandAccent-hover font-medium hover:underline whitespace-nowrap">Blurr Design</a> where I help startups design and build modern digital products.
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
                        className="flex items-center gap-2.5 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
                    >
                        <Mail className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                        Email
                    </a>
                    <a
                        href="https://x.com/sumitdotme"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
                    >
                        <XIcon />
                        Twitter
                    </a>
                    <a
                        href="https://github.com/sumitttt4"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
                    >
                        <Github className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
