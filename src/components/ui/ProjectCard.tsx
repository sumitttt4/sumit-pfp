import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  isSpotlight?: boolean;
}

export default function ProjectCard({
  name,
  description,
  image,
  category,
  metrics,
  liveUrl,
  githubUrl,
  isSpotlight = false,
}: ProjectCardProps) {
  if (isSpotlight) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center w-full"
      >
        {/* Large Project Image */}
        <div className="md:col-span-7 aspect-video w-full rounded-2xl overflow-hidden bg-black/[0.02] border border-zinc-200/80 dark:border-white/10 backdrop-blur-md relative shadow-sm group-hover:shadow-md transition-all duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500 ease-out"
          />
        </div>

        {/* Info & Spacing */}
        <div className="md:col-span-5 px-1 flex flex-col justify-center space-y-4">
          <div className="space-y-3">
            {/* Category Badge & Metrics */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold font-mono bg-zinc-100 text-zinc-700 border border-zinc-200/60 uppercase tracking-wider whitespace-nowrap dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700/50">
                {category}
              </span>
              {metrics && (
                <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1 whitespace-nowrap dark:text-zinc-400">
                  <span className="text-[10px]">↗</span> {metrics}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-brandAccent dark:group-hover:text-brandAccent transition-colors tracking-tight leading-tight">
              {name}
            </h3>

            <p className="text-[15px] text-zinc-700 dark:text-zinc-400 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Action Links */}
          {(liveUrl || githubUrl) && (
            <div className="pt-2 flex items-center gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-900 dark:text-white hover:text-brandAccent dark:hover:text-brandAccent transition-colors pb-0.5 border-b border-zinc-900/10 hover:border-brandAccent/30 dark:border-white/20 dark:hover:border-white/40"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" /> Live Preview
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-900 dark:text-white hover:text-brandAccent dark:hover:text-brandAccent transition-colors pb-0.5 border-b border-zinc-900/10 hover:border-brandAccent/30 dark:border-white/20 dark:hover:border-white/40"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group space-y-4 flex flex-col h-full"
    >
      {/* Small Project Image */}
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/[0.02] border border-zinc-200/80 dark:border-white/10 backdrop-blur-md relative shadow-sm group-hover:shadow-md transition-all duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 ease-out"
        />
      </div>

      {/* Info & Spacing */}
      <div className="px-1 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          {/* Category Badge & Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold font-mono bg-zinc-100 text-zinc-700 border border-zinc-200/60 uppercase tracking-wider whitespace-nowrap dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700/50">
              {category}
            </span>
            {metrics && (
              <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1 whitespace-nowrap dark:text-zinc-400">
                <span className="text-[10px]">↗</span> {metrics}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-brandAccent dark:group-hover:text-brandAccent transition-colors tracking-tight leading-snug">
            {name}
          </h3>

          <p className="text-[14px] text-zinc-700 dark:text-zinc-400 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Action Links */}
        {(liveUrl || githubUrl) && (
          <div className="pt-2 flex items-center gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-900 dark:text-white hover:text-brandAccent dark:hover:text-brandAccent transition-colors pb-0.5 border-b border-zinc-900/10 hover:border-brandAccent/30 dark:border-white/20 dark:hover:border-white/40"
              >
                <ArrowUpRight className="w-3.5 h-3.5" /> Live Preview
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-900 dark:text-white hover:text-brandAccent dark:hover:text-brandAccent transition-colors pb-0.5 border-b border-zinc-900/10 hover:border-brandAccent/30 dark:border-white/20 dark:hover:border-white/40"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
