"use client";

import React, { useEffect, useState } from 'react';

interface SpotifyData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    songUrl?: string;
}

export default function SpotifyNowPlaying() {
    const [data, setData] = useState<SpotifyData | null>(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const res = await fetch('/api/now-playing');
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                }
            } catch (err) {
                console.error('Error fetching Spotify now playing:', err);
            }
        };

        fetchNowPlaying();
        // Poll every 15 seconds for updates
        const interval = setInterval(fetchNowPlaying, 15000);
        return () => clearInterval(interval);
    }, []);

    const isPlaying = data?.isPlaying;
    const title = data?.title;
    const artist = data?.artist;
    const songUrl = data?.songUrl;

    return (
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-normal py-1 select-none">
            {/* Spotify Green Icon */}
            <svg
                viewBox="0 0 24 24"
                className={`w-4 h-4 fill-[#1ED760] shrink-0 ${isPlaying ? 'animate-pulse' : 'opacity-85'}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-1.007-.336.075-.67-.14-.744-.478-.075-.338.14-.673.478-.747 3.856-.88 7.15-.502 9.812 1.13.295.18.387.563.207.865zm1.224-2.722c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.082-1.182-.413.125-.85-.107-.975-.52-.125-.413.107-.85.52-.975 3.678-1.117 8.243-.574 11.35 1.337.368.226.488.708.26 1.075zm.107-2.846C14.793 8.924 9.643 8.75 6.677 9.652c-.482.146-.988-.128-1.134-.61-.147-.483.128-.988.61-1.135 3.447-1.047 9.13-.852 13.064 1.48.435.258.577.817.32 1.25-.258.434-.817.578-1.25.32z" />
            </svg>
            <div className="truncate">
                {isPlaying ? (
                    <span className="text-zinc-500">
                        Now Playing <span className="mx-1 text-zinc-400 dark:text-zinc-600 font-light">—</span>{' '}
                        <a
                            href={songUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium transition-colors"
                        >
                            {title}
                        </a>{' '}
                        <span className="text-zinc-400 dark:text-zinc-600 font-light">·</span>{' '}
                        <span className="text-zinc-500 dark:text-zinc-400 font-light">{artist}</span>
                    </span>
                ) : title ? (
                    <span className="text-zinc-500">
                        Last Played <span className="mx-1 text-zinc-400 dark:text-zinc-600 font-light">—</span>{' '}
                        <a
                            href={songUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium transition-colors"
                        >
                            {title}
                        </a>{' '}
                        <span className="text-zinc-400 dark:text-zinc-600 font-light">·</span>{' '}
                        <span className="text-zinc-500 dark:text-zinc-400 font-light">{artist}</span>
                    </span>
                ) : (
                    <span className="text-zinc-500">
                        Offline <span className="mx-1 text-zinc-400 dark:text-zinc-600 font-light">—</span> Spotify
                    </span>
                )}
            </div>
        </div>
    );
}
