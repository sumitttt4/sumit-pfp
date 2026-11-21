'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, type ComponentType } from 'react';
import { useTheme } from 'next-themes';
import f from './Frame.module.css';

type WashShader = ComponentType<{
  className?: string;
  colorBack?: string;
  colorFront?: string;
  shape?: 'simplex' | 'warp' | 'dots' | 'wave' | 'ripple' | 'swirl' | 'sphere';
  type?: 'random' | '2x2' | '4x4' | '8x8';
  size?: number;
  speed?: number;
  scale?: number;
  width?: string | number;
  height?: string | number;
  minPixelRatio?: number;
  maxPixelCount?: number;
}>;

const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering as unknown as WashShader),
  { ssr: false },
);

/** A short Paper dither above the column. The still gradient is the static fallback. */
export default function PaperWash() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let supported = false;
    let checked = false;
    const compute = () => {
      if (motion.matches || document.hidden || !visible) {
        setReady(false);
        return;
      }
      if (!checked) {
        checked = true;
        try {
          const canvas = document.createElement('canvas');
          const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
          supported = Boolean(gl);
          gl?.getExtension('WEBGL_lose_context')?.loseContext();
        } catch {
          supported = false;
        }
      }
      setReady(supported);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      compute();
    });
    observer.observe(el);
    motion.addEventListener('change', compute);
    document.addEventListener('visibilitychange', compute);
    compute();
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', compute);
      document.removeEventListener('visibilitychange', compute);
    };
  }, []);

  return (
    <div ref={ref} className={f.wash} data-shader={ready ? '' : undefined} aria-hidden="true">
      <div className={f.washStill} />
      {ready && resolvedTheme && (
        <Dithering
          className={f.washShader}
          colorBack={dark ? '#121210' : '#f7f4ee'}
          colorFront={dark ? '#24312a' : '#d5e2d6'}
          shape="simplex"
          type="4x4"
          size={2.2}
          speed={0.06}
          scale={1.1}
          width="100%"
          height="100%"
          minPixelRatio={1}
          maxPixelCount={140000}
        />
      )}
    </div>
  );
}
