"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import posts from '@/data/blog';

export default function Blog() {
    const textSecondary = 'text-gray-600 dark:text-gray-400';


    return (
        <div className="space-y-12">
            {/* Main Content */}
            <div className="space-y-16">
                {/* Main Feed (Left Column) */}
                <div className="space-y-16">
                    {/* Intro */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-white">
                            Thoughts on <span className="text-zinc-900/60 dark:text-white/40">design</span>, <br />
                            engineering, and <span className="text-zinc-900/60 dark:text-white/40">Life</span>.
                        </h1>
                        <p className={`text-lg ${textSecondary} max-w-xl leading-relaxed`}>
                            A collection of essays exploring the intersection of visual design and software engineering. No fluff, just the lessons learned.
                        </p>
                    </div>

                    {/* Post List */}
                    <div className="space-y-12">
                        {posts.map((post) => (
                            post.link ? (
                                <a key={post.id} href={post.link} target="_blank" rel="noreferrer" className="group block cursor-pointer space-y-3">
                                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-900/60 dark:text-white/40">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100 group-hover:text-zinc-600 dark:group-hover:text-white transition-colors">{post.title}</h2>
                                    <p className={`${textSecondary} leading-relaxed`}>{post.excerpt}</p>
                                    <div className="pt-2 flex items-center gap-2 text-sm font-medium text-zinc-900/70 dark:text-white/60 group-hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </div>
                                </a>
                            ) : (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="group block cursor-pointer space-y-3">
                                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-zinc-900/60 dark:text-white/40">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100 group-hover:text-zinc-600 dark:group-hover:text-white transition-colors">{post.title}</h2>
                                    <p className={`${textSecondary} leading-relaxed`}>{post.excerpt}</p>
                                    <div className="pt-2 flex items-center gap-2 text-sm font-medium text-zinc-900/70 dark:text-white/60 group-hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
