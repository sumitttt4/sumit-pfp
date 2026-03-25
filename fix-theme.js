const fs = require('fs');

function fixLightModeClasses(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // Make an array of text replacements to apply to the class names string.
    // Instead of regex replacing the whole file, we will parse out className="[...]"
    // and replace only inside them to avoid breaking TSX logic/comments.

    content = content.replace(/className=(["`])(.*?)\1/g, (match, quote, classes) => {
        let cls = classes.trim().split(/\s+/);
        
        cls = cls.map(c => {
            // Already dark modified?
            if (c.includes('dark:')) return c;

            // Simple mappings
            if (c === 'text-white') return 'text-zinc-900 dark:text-white';
            if (c === 'bg-[#050505]') return 'bg-zinc-50 dark:bg-[#050505]';
            if (c === 'bg-[#0a0a0a]') return 'bg-white dark:bg-[#0a0a0a]';
            if (c === 'bg-black') return 'bg-zinc-100 dark:bg-black';

            // Exact opacities
            const exactMatches = {
                'text-white/20': 'text-zinc-900/40 dark:text-white/20',
                'text-white/25': 'text-zinc-900/50 dark:text-white/25',
                'text-white/30': 'text-zinc-900/50 dark:text-white/30',
                'text-white/40': 'text-zinc-900/60 dark:text-white/40',
                'text-white/50': 'text-zinc-900/70 dark:text-white/50',
                'text-white/60': 'text-zinc-900/80 dark:text-white/60',
                'text-white/70': 'text-zinc-900/80 dark:text-white/70',
                'text-white/80': 'text-zinc-900/90 dark:text-white/80',
                'text-white/90': 'text-zinc-900 dark:text-white/90',

                'bg-white/5': 'bg-black/5 dark:bg-white/5',
                'bg-white/10': 'bg-black/10 dark:bg-white/10',
                'bg-white/20': 'bg-black/20 dark:bg-white/20',
                'bg-white/[0.02]': 'bg-black/[0.02] dark:bg-white/[0.02]',
                'bg-white/[0.03]': 'bg-black/[0.03] dark:bg-white/[0.03]',
                'bg-white/[0.04]': 'bg-black/[0.04] dark:bg-white/[0.04]',
                'bg-white/[0.05]': 'bg-black/[0.05] dark:bg-white/[0.05]',

                'border-white/5': 'border-black/5 dark:border-white/5',
                'border-white/10': 'border-black/10 dark:border-white/10',
                'border-white/15': 'border-black/15 dark:border-white/15',
                'border-white/20': 'border-black/20 dark:border-white/20',

                'hover:text-white': 'hover:text-zinc-900 dark:hover:text-white',
                
                'hover:border-white/10': 'hover:border-black/10 dark:hover:border-white/10',
                'hover:border-white/20': 'hover:border-black/20 dark:hover:border-white/20',
                'hover:border-white/40': 'hover:border-black/40 dark:hover:border-white/40',
                
                'hover:bg-white/5': 'hover:bg-black/5 dark:hover:bg-white/5',
                'hover:bg-white/[0.04]': 'hover:bg-black/[0.04] dark:hover:bg-white/[0.04]',
                'hover:bg-white/[0.05]': 'hover:bg-black/[0.05] dark:hover:bg-white/[0.05]',
                
                'decoration-white/15': 'decoration-black/15 dark:decoration-white/15',
                'decoration-white/30': 'decoration-black/30 dark:decoration-white/30',

                // Gray texts
                'text-gray-200': 'text-gray-900 dark:text-gray-200',
                'text-gray-300': 'text-gray-700 dark:text-gray-300',
                'text-gray-400': 'text-gray-600 dark:text-gray-400',
                'text-gray-500': 'text-gray-500 dark:text-gray-500',
                
                'bg-black/20': 'bg-zinc-100 dark:bg-black/20',
                'bg-black/60': 'bg-white/40 dark:bg-black/60',
            };

            return exactMatches[c] || c;
        });

        return `className=${quote}${cls.join(' ')}${quote}`;
    });

    fs.writeFileSync(filepath, content);
    console.log(`Fixed ${filepath}`);
}

['src/components/ui/LetsTalkModal.tsx', 'src/app/page.tsx', 'src/app/projects/page.tsx', 'src/app/blog/page.tsx', 'src/app/blog/[slug]/page.tsx'].forEach(p => {
    fixLightModeClasses(p);
});
