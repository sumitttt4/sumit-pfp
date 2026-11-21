'use client';

import { useEffect, useRef, useState } from 'react';
import m from './GlyphMark.module.css';

/** Small identities Glyph might draw. Click, or wait, and it draws another. */
const marks = [
  ['M12 5.2a6.8 6.8 0 1 0 0.1 0', 'M12 8.4v7.2'],
  ['M6.2 16.6 12 6.4l5.8 10.2', 'M8.4 13.2h7.2'],
  ['M5.6 15.8c1.2-7.2 11.6-7.2 12.8 0', 'M12 9.2a1.15 1.15 0 1 0 0.1 0'],
  ['M6.4 6.4h11.2v11.2H6.4z', 'M6.4 12h11.2'],
  ['M5.2 12h13.6', 'M12 5.2v13.6'],
  ['M7 7.2h6.4v6.4H7z', 'M13.2 10.4h3.6v6.4h-6.4'],
];

export default function GlyphMark() {
  const [index, setIndex] = useState(0);
  const hover = useRef(false);

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let timer = 0;
    const arm = () => {
      window.clearInterval(timer);
      if (motion.matches) return;
      timer = window.setInterval(() => {
        if (!document.hidden && !hover.current) setIndex((current) => (current + 1) % marks.length);
      }, 8400);
    };
    arm();
    motion.addEventListener('change', arm);
    return () => {
      window.clearInterval(timer);
      motion.removeEventListener('change', arm);
    };
  }, []);

  return (
    <button
      type="button"
      className={m.mark}
      aria-label="Draw another mark. Glyph turns an idea into a brand mark."
      title="Draw another mark"
      onMouseEnter={() => { hover.current = true; }}
      onMouseLeave={() => { hover.current = false; }}
      onFocus={() => { hover.current = true; }}
      onBlur={() => { hover.current = false; }}
      onClick={() => setIndex((current) => (current + 1) % marks.length)}
    >
      <svg key={index} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        {marks[index].map((d) => (
          <path key={d} d={d} pathLength={1} />
        ))}
      </svg>
    </button>
  );
}
