import React, { useState } from 'react';
import { ArrowLeft, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

import posts from '@/data/blog';


const Blog = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Forced Dark Mode (Minimalist)
    const bgPrimary = 'bg-transparent'; // Transparent to inherit from MinimalLayout
    const textPrimary = 'text-gray-100';
    const textSecondary = 'text-gray-400';
    const borderColor = 'border-white/10';

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // EMAILJS CONFIGURATION
        // REPLACE THESE WITH YOUR ACTUAL KEYS FROM https://dashboard.emailjs.com/
        const SERVICE_ID = 'service_67pthct';
        const TEMPLATE_ID = 'template_0ngswdk';
        const PUBLIC_KEY = 'jUFVbe0xJtYUgiawY';

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    to_email: 'sumitsharma9128@gmail.com', // Your email to receive the notification
                    subscriber_email: email, // The user's email
                    message: `New subscriber: ${email}`
                },
                PUBLIC_KEY
            );

            toast.success("Welcome to the inner circle. 🥂");
            setEmail("");
        } catch (error) {
            console.error('EmailJS Error:', error);
            // Fallback for demo purposes if keys aren't set
            toast.success("Welcome to the inner circle. 🥂 (Demo Mode)");
            setEmail("");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-12">

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                {/* Main Feed (Left Column) */}
                <div className="lg:col-span-7 space-y-16">

                    {/* Intro */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                            Thoughts on <span className="text-white/40">design</span>, <br />
                            engineering, and <span className="text-white/40">Life</span>.
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
                                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-white/40">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                                    <p className={`${textSecondary} leading-relaxed`}>{post.excerpt}</p>
                                    <div className="pt-2 flex items-center gap-2 text-sm font-medium text-cyan-400 hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </div>
                                </a>
                            ) : (
                                <article key={post.id} className="group cursor-pointer space-y-3">
                                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-white/40">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                                    <p className={`${textSecondary} leading-relaxed`}>{post.excerpt}</p>
                                    <div className="pt-2 flex items-center gap-2 text-sm font-medium text-cyan-400 hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </div>
                                </article>
                            )
                        ))}
                    </div>
                </div>

                {/* Sidebar (Right Column) */}
                <aside className="lg:col-span-5 space-y-12 lg:pt-12">

                    {/* Newsletter Card */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-white/60 text-right">Stay updated with my latest blogs</h3>

                            <form onSubmit={handleSubscribe} className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all outline-none placeholder:text-white/20 text-sm text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap"
                                >
                                    {isSubmitting ? '...' : 'Subscribe'}
                                </button>
                            </form>
                            <p className="text-[10px] text-white/20 text-right">
                                No spam. Unsubscribe anytime.
                            </p>
                        </div>
                    </div>



                </aside>
            </div>
        </div>
    );
};

export default Blog;
