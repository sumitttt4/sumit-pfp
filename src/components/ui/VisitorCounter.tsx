"use client";

import React, { useEffect, useState } from 'react';

function getOrdinalSuffix(i: number) {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
        return "st";
    }
    if (j === 2 && k !== 12) {
        return "nd";
    }
    if (j === 3 && k !== 13) {
        return "rd";
    }
    return "th";
}

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                // Increment on every mount
                const res = await fetch('https://api.counterapi.dev/v1/sumitsharmaa/visitors/up');
                if (res.ok) {
                    const data = await res.json();
                    setCount(data.count);
                }
            } catch (err) {
                console.error('Error fetching visitor count:', err);
            }
        };

        fetchCount();
    }, []);

    if (count === null) return null;

    return (
        <div className="select-none text-[13px] text-zinc-500 dark:text-zinc-400 font-normal py-1">
            You are the <span className="font-semibold text-zinc-800 dark:text-white">{count.toLocaleString()}</span><sup>{getOrdinalSuffix(count)}</sup> visitor
        </div>
    );
}
