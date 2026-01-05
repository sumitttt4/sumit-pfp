import React from 'react';

/**
 * A decorative background grid with subtle '+' markers scattered across the page.
 * Apply this as a fixed background layer in your layout.
 */
const GridBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]" aria-hidden="true">
            {/* 1. The Mesh Gradient Base (Atmospheric Glow) */}
            <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-950/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-slate-900/10 rounded-full blur-[100px] mix-blend-screen opacity-20" />

            {/* 2. The Dot Grid (Engineered Feel) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            />

            {/* 3. Grain Overlay (Tactile Texture) */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
};

export default GridBackground;
