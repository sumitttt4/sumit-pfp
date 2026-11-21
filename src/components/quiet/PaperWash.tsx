'use client';

import dynamic from 'next/dynamic';
import { Component, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react';
import { useTheme } from 'next-themes';
import f from './Frame.module.css';

type WashShader = ComponentType<{
  className?: string;
  colors?: string[];
  distortion?: number;
  swirl?: number;
  grainMixer?: number;
  grainOverlay?: number;
  speed?: number;
  scale?: number;
  width?: string | number;
  height?: string | number;
  minPixelRatio?: number;
  maxPixelCount?: number;
}>;

const MeshGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.MeshGradient as unknown as WashShader),
  { ssr: false },
);

function webgl2Works() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl || (typeof gl.isContextLost === 'function' && gl.isContextLost())) return false;
    const version = gl.getParameter(gl.VERSION);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return Boolean(version);
  } catch {
    return false;
  }
}

function isShaderFailure(reason: unknown) {
  const message = reason instanceof Error ? reason.message : String(reason ?? '');
  return /paper shaders|webgl/i.test(message);
}

class ShaderBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** Colour mesh above the column. The still gradient stays when WebGL cannot run. */
export default function PaperWash() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
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
      if (motion.matches || document.hidden || !visible || failed) {
        setReady(false);
        return;
      }
      if (!checked) {
        checked = true;
        supported = webgl2Works();
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
    const onError = (event: ErrorEvent) => {
      if (!isShaderFailure(event.error ?? event.message)) return;
      event.preventDefault();
      setFailed(true);
      setReady(false);
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      if (!isShaderFailure(event.reason)) return;
      event.preventDefault();
      setFailed(true);
      setReady(false);
    };
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);
    compute();
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', compute);
      document.removeEventListener('visibilitychange', compute);
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, [failed]);

  const colors = dark
    ? ['#ff6a3d', '#6d7cff', '#f0b429', '#e15b8a']
    : ['#ff8a5b', '#7aa2ff', '#ffd36a', '#f08bb0'];

  return (
    <div ref={ref} className={f.wash} data-shader={ready && !failed ? '' : undefined} aria-hidden="true">
      <div className={f.washStill} />
      {ready && !failed && resolvedTheme && (
        <ShaderBoundary onError={() => { setFailed(true); setReady(false); }}>
          <MeshGradient
            className={f.washShader}
            colors={colors}
            distortion={0.55}
            swirl={0.22}
            grainMixer={0.18}
            grainOverlay={0.06}
            speed={0.18}
            scale={1.05}
            width="100%"
            height="100%"
            minPixelRatio={1}
            maxPixelCount={140000}
          />
        </ShaderBoundary>
      )}
    </div>
  );
}
