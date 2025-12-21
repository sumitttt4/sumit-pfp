import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();

    // Forced Light Mode
    const bgPrimary = 'bg-white';
    const textPrimary = 'text-black';
    const textSecondary = 'text-black/60';
    const borderColor = 'border-black/10';

    return (
        <div className={`h-screen flex flex-col ${bgPrimary} ${textPrimary} font-sans transition-colors duration-300 overflow-hidden`}>
            {/* Header / Navigation */}
            <header className={`h-16 flex-none border-b ${borderColor} flex items-center justify-between px-6 md:px-8 bg-transparent z-20`}>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="p-2 rounded-full hover:bg-black/5 transition-colors"
                    >
                        <ArrowLeft className={`w-5 h-5 ${textPrimary}`} />
                    </button>
                    <div className="flex items-center gap-2 text-sm">
                        <span className={textSecondary}>Sumit /</span>
                        <span className={`font-medium ${textPrimary}`}>Blog</span>
                    </div>
                </div>
            </header>

            {/* Main Content - Centered Animation */}
            <main className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-lg aspect-square">
                    <DotLottieReact
                        src="https://lottie.host/9c9a12bd-88f0-4597-9028-225a74b305f2/6QsdFmRSkM.lottie"
                        loop
                        autoplay
                    />
                </div>
                <div className="mt-8 text-center space-y-2">
                    <h1 className={`text-2xl font-bold tracking-tight ${textPrimary}`}>Writing Desk</h1>
                    <p className={`text-sm ${textSecondary}`}>Cooking up some thoughts. Stay tuned.</p>
                </div>
            </main>
        </div>
    );
};

export default Blog;
