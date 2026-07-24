import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  image?: string;
  category?: string;
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  layout?: 'list' | 'grid';
  isHovered?: boolean;
  isAnyHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 8 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

export default function ProjectCard({
  name,
  description,
  image,
  liveUrl,
  githubUrl,
  layout = 'list',
  isHovered = false,
  isAnyHovered = false,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}: ProjectCardProps) {
  // Determine opacity and transform state based on hover spotlight
  const opacityClass = isAnyHovered
    ? isHovered
      ? 'opacity-100'
      : 'opacity-30'
    : 'opacity-100';

  const transformClass = isHovered ? '-translate-y-[2px]' : 'translate-y-0';

  if (layout === 'grid') {
    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={0}
        className={`group space-y-2 flex flex-col h-full outline-none focus:outline-none transition-all duration-200 ease-out ${opacityClass} ${transformClass}`}
      >
        {/* Compact Editorial Image Container */}
        {image && (
          <div className={`aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/[0.03] dark:bg-white/[0.04] border relative transition-all duration-200 ${
            isHovered
              ? 'border-black/25 dark:border-white/30 shadow-sm'
              : 'border-black/10 dark:border-white/10'
          }`}>
            <img
              src={image}
              alt={name}
              className={`w-full h-full object-cover transition-opacity duration-200 ease-out ${
                isHovered ? 'opacity-100' : 'opacity-90'
              }`}
            />
          </div>
        )}

        {/* Title & Icon Links */}
        <div className="flex items-center justify-between gap-3 pt-0.5">
          <h3 className={`text-[13.5px] font-semibold tracking-tight transition-colors duration-200 ${
            isHovered
              ? 'text-brandAccent dark:text-brandAccent'
              : 'text-zinc-900 dark:text-white'
          }`}>
            {name}
          </h3>

          <div className={`flex items-center gap-2.5 transition-colors duration-200 ${
            isHovered ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'
          }`}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors active:scale-[0.95]"
                title="Visit Live Site"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors active:scale-[0.95]"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={`text-[13px] leading-relaxed font-normal line-clamp-2 transition-colors duration-200 ${
          isHovered ? 'text-zinc-800 dark:text-zinc-300' : 'text-zinc-500 dark:text-zinc-400'
        }`}>
          {description}
        </p>
      </motion.div>
    );
  }

  // Default List View (picture-less text rows)
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
      className={`group py-3 border-b border-zinc-200/80 dark:border-zinc-800/80 space-y-1 last:border-b-0 outline-none focus:outline-none transition-all duration-200 ease-out ${opacityClass} ${transformClass}`}
    >
      {/* Top Header: Title & Action Links */}
      <div className="flex items-center justify-between gap-4">
        <h3 className={`text-[14.5px] font-semibold tracking-tight transition-colors duration-200 ${
          isHovered
            ? 'text-brandAccent dark:text-brandAccent'
            : 'text-zinc-900 dark:text-white'
        }`}>
          {name}
        </h3>

        <div className={`flex items-center gap-4 text-xs font-medium transition-colors duration-200 ${
          isHovered ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
        }`}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-all active:scale-[0.97]"
            >
              Website <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-all active:scale-[0.97]"
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className={`text-[13px] leading-relaxed font-normal max-w-2xl transition-colors duration-200 ${
        isHovered ? 'text-zinc-900 dark:text-zinc-200' : 'text-zinc-600 dark:text-zinc-400'
      }`}>
        {description}
      </p>
    </motion.div>
  );
}
