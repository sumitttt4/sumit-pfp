"use client";

import React, { useRef, useEffect } from 'react';

interface AsciiHeroContainerProps {
    children: React.ReactNode;
    className?: string;
}

const charSet = "0101<>{}[]/\\+=*-~!?=;()".split("");

const AsciiHeroContainer: React.FC<AsciiHeroContainerProps> = ({
    children,
    className = ''
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef<{ x: number; y: number | null }>({ x: 0, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let cols = 0;
        let rows = 0;
        let grid: string[] = [];

        // Grid cell sizing for hero background (slightly larger cells for a cleaner background look)
        const cellWidth = 10;
        const cellHeight = 10;

        const resize = () => {
            const rect = container.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            cols = Math.ceil(width / cellWidth);
            rows = Math.ceil(height / cellHeight);

            grid = [];
            for (let i = 0; i < cols * rows; i++) {
                grid.push(charSet[Math.floor(Math.random() * charSet.length)]);
            }
        };

        resize();

        const resizeObserver = new ResizeObserver(() => {
            resize();
        });
        resizeObserver.observe(container);

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.classList.contains('dark');
            
            // Set base opacities: extremely subtle ambient state (near-invisible until hovered)
            const baseAlpha = isDark ? 0.012 : 0.006;
            
            ctx.font = "6px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const hasMouse = my !== null;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const idx = r * cols + c;

                    // Subtle shimmer effect
                    if (Math.random() < 0.008) {
                        grid[idx] = charSet[Math.floor(Math.random() * charSet.length)];
                    }

                    const cx = c * cellWidth + cellWidth / 2;
                    const cy = r * cellHeight + cellHeight / 2;

                    let charOpacity = baseAlpha;
                    
                    // Draw base gray/zinc colors
                    let textRGB = isDark ? "161, 161, 170" : "113, 113, 122";

                    if (hasMouse) {
                        const distance = Math.hypot(cx - mx, cy - my);
                        const maxRadius = 120; // Larger reveal radius for the hero section

                        if (distance < maxRadius) {
                            const factor = 1 - distance / maxRadius;
                            const easeFactor = factor * factor; // smooth gradient
                            
                            // Increase opacity near cursor (maxing out at a clean, legible level)
                            charOpacity = baseAlpha + (0.35 - baseAlpha) * easeFactor;
                            
                            // Let the light spotlight highlight closer to white/dark zinc
                            textRGB = isDark ? "228, 228, 231" : "39, 39, 42";
                        }
                    }

                    ctx.fillStyle = `rgba(${textRGB}, ${charOpacity})`;
                    ctx.fillText(grid[idx], cx, cy);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseRef.current = { x, y };
    };

    const handleMouseLeave = () => {
        mouseRef.current = { x: 0, y: null };
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Background Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />
            {/* Foreground Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default AsciiHeroContainer;
