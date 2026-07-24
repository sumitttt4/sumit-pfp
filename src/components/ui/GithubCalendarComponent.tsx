"use client";

import React, { useEffect, useState, useRef, ReactElement } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { Calendar, Mail, ArrowUpRight } from 'lucide-react';

interface GithubCalendarComponentProps {
  username?: string;
  onOpenLetsTalk?: () => void;
}

interface Activity {
  date: string;
  count: number;
  level: number;
}

interface TooltipState {
  count: number;
  date: string;
  x: number;
  y: number;
}

export default function GithubCalendarComponent({
  username = "sumitttt4",
  onOpenLetsTalk
}: GithubCalendarComponentProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && scrollRef.current) {
      // Automatically scroll to the rightmost side to show most recent months
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="w-full p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 animate-pulse h-48" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const customTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const formatDate = (dateStr: string) => {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateStr;
  };

  return (
    <section className="w-full pt-2">
      {/* Calendar Box */}
      <div 
        ref={containerRef}
        className="w-full p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 backdrop-blur-md space-y-6 relative"
      >
        <div 
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex justify-start sm:justify-center py-2"
        >
          <GitHubCalendar
            username={username}
            colorScheme={isDark ? 'dark' : 'light'}
            theme={customTheme}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
            style={{
              color: isDark ? '#a1a1aa' : '#71717a',
            }}
            renderBlock={(block: ReactElement, activity: Activity) =>
              React.cloneElement(block, {
                onMouseEnter: (e: React.MouseEvent<SVGRectElement>) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const containerRect = containerRef.current?.getBoundingClientRect();
                  if (containerRect) {
                    setTooltip({
                      count: activity.count,
                      date: activity.date,
                      x: rect.left - containerRect.left + rect.width / 2,
                      y: rect.top - containerRect.top,
                    });
                  }
                },
                onMouseLeave: () => {
                  setTooltip(null);
                },
              })
            }
          />
        </div>

        {/* Floating Custom Hover Tooltip */}
        {tooltip && (
          <div
            className="absolute z-50 pointer-events-none -translate-x-1/2 -translate-y-full pb-2 transition-all duration-75 ease-out"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
            }}
          >
            <div className="bg-white text-zinc-900 font-semibold text-[12px] px-3 py-1.5 rounded-xl shadow-xl border border-zinc-200/80 whitespace-nowrap flex flex-col items-center relative tracking-tight">
              <span>
                {tooltip.count === 0
                  ? `No contributions on ${formatDate(tooltip.date)}`
                  : `${tooltip.count} contribution${tooltip.count === 1 ? '' : 's'} on ${formatDate(tooltip.date)}`}
              </span>
              {/* Downward Arrow Tip */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white" />
            </div>
          </div>
        )}

        {/* CTA Footer inside Calendar Box */}
        <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            Interested in working together?{' '}
            <a
              href="https://drive.google.com/file/d/1rEQ2cCs-dJg18AEAcPp4AU5LHI4iTI9u/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-900 dark:text-white font-semibold underline underline-offset-4 hover:text-brandAccent transition-colors inline-flex items-center gap-0.5 active:scale-[0.97]"
            >
              Check out my Resume <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-[0.97] shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              View GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://cal.com/sumit-sharma/15min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-900 dark:text-white text-xs font-medium border border-black/5 dark:border-white/5 transition-all active:scale-[0.97]"
            >
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              Book an intro call
            </a>
            <button
              onClick={onOpenLetsTalk}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-900 dark:text-white text-xs font-medium border border-black/5 dark:border-white/5 transition-all active:scale-[0.97]"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              Send an email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
