"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AsciiHeroContainer from '@/components/ui/AsciiHeroContainer';

export default function GlyphCaseStudy() {
    return (
        <AsciiHeroContainer className="w-full">
            <div className="max-w-2xl mx-auto py-12 animate-fade-in px-4">
            {/* Back Button */}
            <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Blog
            </Link>

            <article className="space-y-8 prose prose-zinc dark:prose-invert">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-900/60 dark:text-white/40 font-mono">
                    <span>Jul 8, 2026</span>
                    <span>•</span>
                    <span>6 min read</span>
                    <span>•</span>
                    <span className="text-zinc-900/70 dark:text-white/60">Startups</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2 leading-tight">
                    How I Built and Launched a Branding SaaS to $427 in Solo Revenue
                </h1>
                
                <p className="text-zinc-500 dark:text-zinc-400 font-normal text-lg italic leading-relaxed">
                    A case study on solo execution, why developers get stuck on design, and why &quot;design engineering&quot; is a startup superpower.
                </p>

                <hr className="border-zinc-200 dark:border-zinc-800" />

                {/* Content */}
                <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-6 text-[15px] font-normal">
                    <p>
                        Like most developers, I had no trouble writing the code. If I wanted to spin up a new project, I could set up a Next.js app in minutes, deploy to Vercel, connect Stripe, and configure databases. 
                    </p>
                    <p>
                        But every single time I tried to ship something, I hit the exact same brick wall: <strong>branding</strong>.
                    </p>
                    <p>
                        I would sit in front of a blank screen and lose hours to questions that had nothing to do with database queries or API endpoints:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                        <li>What primary color makes this brand feel professional instead of boring?</li>
                        <li>Which font pairing establishes the right tone without looking like a generic template?</li>
                        <li>Does the logo I spent two hours drawing look cheap?</li>
                        <li>Does the overall layout feel clean and premium, or just confusing and unfinished?</li>
                    </ul>
                    <p>
                        I realized that branding was the ultimate bottleneck. It wasn&apos;t that developers couldn&apos;t build features—it was that they didn&apos;t know how to package them with <strong>taste</strong>.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white pt-4">
                        The Idea: Productizing My Own Friction
                    </h2>
                    <p>
                        I decided to build a simple tool to solve my own problem. I called it <strong>Glyph</strong>. 
                    </p>
                    <p>
                        The goal was simple: generate cohesive logos, color palettes, typography scales, and full branding systems in seconds. But I didn&apos;t want it to generate the usual generic AI templates. I wanted it to look like it was designed by a professional who values layout constraints and typography grids.
                    </p>
                    <p>
                        I designed the initial UI/UX layouts in Figma. As a Design Engineer, this is where the magic happens: because I write the code, I don&apos;t design things in Figma that are impossible or annoying to build. I design with layout limits, grid units, and theme variables in mind. 
                    </p>
                    <p>
                        I built the app with <strong>React, Next.js, TailwindCSS, and Supabase</strong>.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white pt-4">
                        Launching Solo (No Ad Budget, Just Storytelling)
                    </h2>
                    <p>
                        Once Glyph was ready, I didn&apos;t buy ads or hire a copywriter. I just launched on Twitter/X and Product Hunt, explaining the exact problem I had faced:
                    </p>
                    <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-600 dark:text-zinc-400 my-4">
                        &quot;I can build the product, write the landing page, and ship features. But I kept getting stuck on branding. So I built Glyph to fix it.&quot;
                    </blockquote>
                    <p>
                        The response was immediate. It turned out that hundreds of builders were facing the exact same problem.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white pt-4">
                        The Validation: $427 in Revenue
                    </h2>
                    <p>
                        Within the first month, over <strong>400 users</strong> signed up. 
                        More importantly, <strong>15 paying customers</strong> purchased a premium pass to unlock high-resolution exports and advanced branding kits. 
                    </p>
                    <p>
                        It generated exactly <strong>$427 in solo revenue</strong>. 
                    </p>
                    <p>
                        While $427 isn&apos;t enough to retire on, it represents something far more valuable: <strong>validation</strong>. It proved that other builders are willing to pay for speed, convenience, and clean execution.
                    </p>

                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white pt-4">
                        Why This Matters for Startup Product Teams
                    </h2>
                    <p>
                        Building Glyph taught me that in the early stages of a startup, the biggest risk is moving too slowly or building something that looks unpolished. 
                    </p>
                    <p>
                        This is why startup teams need <strong>Design Engineers</strong>. Having one person who can hold the aesthetic vision in their head, create the layout in Figma, and write the clean, production-ready React code themselves is a massive accelerator. It removes the feedback loops, prevents details from being lost in translation, and ensures the product launches with taste from day one.
                    </p>
                    <p>
                        If you&apos;re building a startup team and want to ship fast without sacrificing design quality, I&apos;d love to chat.
                    </p>
                </div>

                <hr className="border-zinc-200 dark:border-zinc-800 pt-4" />

                {/* Footer Section */}
                <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Sumit Sharma</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Design Engineer for Startup Teams</p>
                    </div>
                    <Link 
                        href="/#lets-talk" 
                        className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 text-xs font-semibold rounded-lg transition-colors"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>
            </article>
        </div>
        </AsciiHeroContainer>
    );
}
