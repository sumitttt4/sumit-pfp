import React from 'react';

interface BorderGridProps {
    children: React.ReactNode[];
    columns?: 1 | 2 | 3;
    className?: string;
}

const BorderGrid: React.FC<BorderGridProps> = ({ children, columns = 2, className = '' }) => {
    // Grid configuration based on columns
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
    };

    return (
        <div className={`grid ${gridCols[columns]} ${className}`}>
            {children.map((child, index) => (
                <div
                    key={index}
                    className="relative border border-white/5 p-8 group transition-colors hover:bg-white/[0.02]"
                >
                    {/* Corner Markers */}
                    {/* Top Left */}
                    <span className="absolute -top-1.5 -left-1.5 text-white/20 text-[10px] select-none pointer-events-none">+</span>
                    {/* Top Right */}
                    <span className="absolute -top-1.5 -right-1.5 text-white/20 text-[10px] select-none pointer-events-none">+</span>
                    {/* Bottom Left */}
                    <span className="absolute -bottom-1.5 -left-1.5 text-white/20 text-[10px] select-none pointer-events-none">+</span>
                    {/* Bottom Right */}
                    <span className="absolute -bottom-1.5 -right-1.5 text-white/20 text-[10px] select-none pointer-events-none">+</span>

                    {/* Content */}
                    {child}
                </div>
            ))}
        </div>
    );
};

export default BorderGrid;
