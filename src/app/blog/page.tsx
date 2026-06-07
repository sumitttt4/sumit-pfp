import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import staticPosts from '@/data/blog';

function formatDate(dateString: string) {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    } catch {
        return dateString;
    }
}

export default async function Blog() {
    const reader = createReader(process.cwd(), keystaticConfig);
    let allPosts = [...staticPosts];

    try {
        const keystaticPosts = await reader.collections.posts.all();
        const localPosts = keystaticPosts.map(p => ({
            id: p.slug as unknown as number,
            title: p.entry.title,
            excerpt: p.entry.excerpt,
            date: p.entry.date,
            readTime: p.entry.readTime,
            slug: p.slug,
            tags: [p.entry.tag],
            link: undefined
        }));
        allPosts = [...localPosts, ...staticPosts];
        // Sort by date descending
        allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
        console.error('Error fetching Keystatic posts:', error);
    }

    return (
        <div className="space-y-12 animate-fade-in">
            {/* Main Content */}
            <div className="space-y-16">
                {/* Main Feed (Left Column) */}
                <div className="space-y-16">
                    {/* Intro */}
                    <div className="space-y-3">
                        <h1 className="text-[17px] font-semibold text-zinc-900 dark:text-white tracking-tight">
                            Thoughts on <span className="text-zinc-900/60 dark:text-white/40">design</span>, engineering, and <span className="text-zinc-900/60 dark:text-white/40">Life</span>.
                        </h1>
                        <p className="text-[15px] text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                            A collection of essays exploring the intersection of visual design and software engineering. No fluff, just the lessons learned.
                        </p>
                    </div>

                    {/* Post List */}
                    <div className="space-y-8">
                        {allPosts.map((post) => (
                            post.link ? (
                                <a key={post.id} href={post.link} target="_blank" rel="noreferrer" className="group block cursor-pointer space-y-1">
                                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-normal text-zinc-900/40 dark:text-white/30">
                                        <span>{formatDate(post.date)}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-[15px] font-semibold text-zinc-900 dark:text-gray-100 group-hover:text-zinc-600 dark:group-hover:text-white transition-colors">{post.title}</h2>
                                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">{post.excerpt}</p>
                                    <div className="pt-0.5 flex items-center gap-1 text-[13px] font-medium text-zinc-900/50 dark:text-white/40 group-hover:gap-2 group-hover:text-zinc-950 dark:group-hover:text-zinc-100 transition-all">
                                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </a>
                            ) : (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="group block cursor-pointer space-y-1">
                                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-normal text-zinc-900/40 dark:text-white/30">
                                        <span>{formatDate(post.date)}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-[15px] font-semibold text-zinc-900 dark:text-gray-100 group-hover:text-zinc-600 dark:group-hover:text-white transition-colors">{post.title}</h2>
                                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">{post.excerpt}</p>
                                    <div className="pt-0.5 flex items-center gap-1 text-[13px] font-medium text-zinc-900/50 dark:text-white/40 group-hover:gap-2 group-hover:text-zinc-950 dark:group-hover:text-zinc-100 transition-all">
                                        Read Article <ArrowRight className="w-3.5 h-3.5" />
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
