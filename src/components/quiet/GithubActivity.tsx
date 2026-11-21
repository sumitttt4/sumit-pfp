'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import snapshot from '@/data/github-contributions.json';
import {
  BEST_KEY,
  buildGrid,
  chooseDir,
  keyOf,
  opposite,
  spawn,
  step,
  tickMs,
  type DirName,
  type Point,
} from '@/lib/snake-game';
import s from './Snake.module.css';

type Mode = 'still' | 'attract' | 'playing' | 'paused' | 'over' | 'clear';

const KEYS: Record<string, DirName> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right',
  W: 'up',
  A: 'left',
  S: 'down',
  D: 'right',
};

const PITCH = 11;
const CELL = 8;
const INSET = (PITCH - CELL) / 2;
const TOP = 16;

export default function GithubActivity({ className, head }: { className?: string; head?: React.ReactNode }) {
  const grid = useMemo(() => buildGrid(snapshot.contributions), []);
  const boardRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);
  const reducedRef = useRef(false);
  const modeRef = useRef<Mode>('still');
  const pausedFrom = useRef<'attract' | 'playing'>('playing');
  const snakeRef = useRef<Point[]>([]);
  const dirRef = useRef<DirName>('right');
  const queuedRef = useRef<DirName>('right');
  const foodRef = useRef<Set<string>>(new Set(grid.food));
  const scoreRef = useRef(0);
  const bestRef = useRef(0);
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const [mode, setMode] = useState<Mode>('still');
  const [snake, setSnake] = useState<Point[]>([]);
  const [eaten, setEaten] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  function publish(nextSnake: Point[], nextEaten?: Set<string>) {
    snakeRef.current = nextSnake;
    setSnake(nextSnake);
    if (nextEaten) setEaten(nextEaten);
  }

  function remember(nextScore: number) {
    if (nextScore <= bestRef.current) return;
    bestRef.current = nextScore;
    setBest(nextScore);
    try { localStorage.setItem(BEST_KEY, String(nextScore)); } catch { /* private mode */ }
  }

  function begin(next: 'attract' | 'playing', steerTo?: DirName) {
    if (next === 'attract' && reducedRef.current) {
      modeRef.current = 'still';
      setMode('still');
      foodRef.current = new Set(grid.food);
      scoreRef.current = 0;
      setScore(0);
      setEaten(new Set());
      publish([]);
      return;
    }
    const placed = spawn(grid.cols, grid.rows, new Set(grid.food));
    foodRef.current = new Set(grid.food);
    scoreRef.current = 0;
    setScore(0);
    setEaten(new Set());
    if (!placed) {
      modeRef.current = 'still';
      setMode('still');
      publish([]);
      return;
    }
    const dir = steerTo && !opposite(placed.dir, steerTo) ? steerTo : placed.dir;
    dirRef.current = dir;
    queuedRef.current = dir;
    modeRef.current = next;
    setMode(next);
    publish(placed.snake);
  }

  function finish(kind: 'over' | 'clear') {
    modeRef.current = kind;
    setMode(kind);
    remember(scoreRef.current);
  }

  function tick() {
    const current = modeRef.current;
    if (current !== 'playing' && current !== 'attract') return;
    const food = foodRef.current;
    const dir = current === 'attract'
      ? chooseDir(snakeRef.current, dirRef.current, food, grid.cols, grid.rows)
      : queuedRef.current;
    const result = step(snakeRef.current, dir, food, grid.cols, grid.rows);
    if (result.type === 'dead') {
      if (current === 'attract') begin('attract');
      else finish('over');
      return;
    }
    dirRef.current = dir;
    queuedRef.current = dir;
    const ate = result.type === 'clear' || result.ate;
    if (ate) {
      const id = keyOf(result.snake[0]);
      food.delete(id);
      scoreRef.current += 1;
      setScore(scoreRef.current);
      if (current === 'playing') remember(scoreRef.current);
      setEaten((prev) => {
        const next = new Set(prev);
        next.add(id);
        return next;
      });
    }
    publish(result.snake);
    if (result.type === 'clear') {
      if (current === 'attract') begin('attract');
      else finish('clear');
    }
  }

  function steer(name: DirName) {
    const current = modeRef.current;
    if (current === 'playing') {
      if (!opposite(dirRef.current, name)) queuedRef.current = name;
      return;
    }
    if (current === 'paused') {
      modeRef.current = pausedFrom.current === 'attract' ? 'attract' : 'playing';
      setMode(modeRef.current);
      if (!opposite(dirRef.current, name)) queuedRef.current = name;
      return;
    }
    begin('playing', name);
    boardRef.current?.focus({ preventScroll: true });
  }

  function togglePause() {
    const current = modeRef.current;
    if (current === 'playing' || current === 'attract') {
      pausedFrom.current = current;
      modeRef.current = 'paused';
      setMode('paused');
      return;
    }
    if (current === 'paused') {
      modeRef.current = pausedFrom.current;
      setMode(pausedFrom.current);
    }
  }

  useEffect(() => {
    try {
      const stored = Number(localStorage.getItem(BEST_KEY));
      if (Number.isFinite(stored) && stored > 0) {
        bestRef.current = stored;
        setBest(stored);
      }
    } catch { /* private mode */ }
  }, []);

  const tickRef = useRef(tick);
  tickRef.current = tick;

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      reducedRef.current = motion.matches;
      if (motion.matches && modeRef.current === 'attract') {
        modeRef.current = 'still';
        setMode('still');
        setSnake([]);
        snakeRef.current = [];
        return;
      }
      if (!motion.matches && modeRef.current === 'still') beginRef.current('attract');
    };
    const beginRef = { current: begin };
    beginRef.current = begin;
    apply();
    motion.addEventListener('change', apply);
    return () => motion.removeEventListener('change', apply);
    // Grid is stable. begin reads refs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    observer.observe(board);
    let frame = 0;
    let last = 0;
    let elapsed = 0;
    const loop = (time: number) => {
      frame = requestAnimationFrame(loop);
      if (document.hidden || !visibleRef.current) {
        last = 0;
        return;
      }
      const current = modeRef.current;
      if (current !== 'playing' && current !== 'attract') {
        last = 0;
        return;
      }
      if (!last) {
        last = time;
        return;
      }
      elapsed += Math.min(time - last, 220);
      last = time;
      const wait = current === 'attract' ? 168 : tickMs(scoreRef.current);
      if (elapsed >= wait) {
        elapsed = 0;
        tickRef.current();
      }
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const updated = new Date(snapshot.capturedAt).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  });
  const record = Math.max(best, score);
  const line = mode === 'still'
    ? 'Still. Start to play.'
    : mode === 'attract'
      ? `Watching${best ? ` · best ${best}` : ''}`
      : mode === 'paused'
        ? `Paused · ${score} eaten${best ? ` · best ${best}` : ''}`
        : mode === 'over'
          ? `Game over · ${score} eaten · best ${record}`
          : mode === 'clear'
            ? `Cleared the year · ${score} eaten · best ${record}`
            : `${score} eaten · best ${record}`;

  const cells = useMemo(() => {
    const known = new Map(grid.cells.map((cell) => [cell.key, cell]));
    const all: { key: string; col: number; row: number; level: number; title?: string }[] = [];
    for (let col = 0; col < grid.cols; col++) {
      for (let row = 0; row < grid.rows; row++) {
        const key = `${col},${row}`;
        const cell = known.get(key);
        all.push({
          key,
          col,
          row,
          level: cell?.level ?? 0,
          title: cell ? `${cell.count} contribution${cell.count === 1 ? '' : 's'} · ${cell.date}` : undefined,
        });
      }
    }
    return all;
  }, [grid]);

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const dir = KEYS[event.key];
    if (dir) {
      event.preventDefault();
      steer(dir);
      return;
    }
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (modeRef.current === 'playing' || modeRef.current === 'paused') togglePause();
      else begin('playing');
    } else if (event.key === 'Escape' && (modeRef.current === 'playing' || modeRef.current === 'paused')) {
      event.preventDefault();
      begin('attract');
    }
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse') return;
    swipe.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (!swipe.current) return;
    const dx = event.clientX - swipe.current.x;
    const dy = event.clientY - swipe.current.y;
    swipe.current = null;
    if (Math.hypot(dx, dy) < 28) return;
    const horizontal = Math.abs(dx) > Math.abs(dy);
    if (!horizontal && modeRef.current !== 'playing' && modeRef.current !== 'paused') return;
    if (horizontal) steer(dx > 0 ? 'right' : 'left');
    else steer(dy > 0 ? 'down' : 'up');
  }

  const playing = mode === 'playing';

  return (
    <section className={className} data-github-activity>
      {head}
      <div
        ref={boardRef}
        className={s.board}
        tabIndex={0}
        role="application"
        data-mode={mode}
        data-playing={playing ? '' : undefined}
        data-score={score}
        aria-label="Snake on the GitHub contribution grid. Green squares are days with contributions, and they are the food. Focus this grid, then use the arrow keys or WASD. Swipe to turn on a touch screen. Escape returns to the idle game."
        aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight W A S D Space Escape"
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <svg
          className={s.grid}
          viewBox={`0 0 ${grid.cols * PITCH} ${TOP + grid.rows * PITCH}`}
          aria-hidden="true"
        >
          {grid.months.map((month) => (
            <text key={month.label + month.col} className={s.month} x={month.col * PITCH} y={10}>{month.label}</text>
          ))}
          {cells.map((cell) => (
            <rect
              key={cell.key}
              x={cell.col * PITCH + INSET}
              y={TOP + cell.row * PITCH + INSET}
              width={CELL}
              height={CELL}
              rx={1.6}
              fill={`var(--green-${eaten.has(cell.key) ? 0 : cell.level})`}
            >
              {cell.title && <title>{cell.title}</title>}
            </rect>
          ))}
          <g className={s.snake}>
            {[...snake].reverse().map((part) => {
              const head = part === snake[0];
              const size = head ? CELL + 1.2 : CELL - 1.6;
              const pad = (PITCH - size) / 2;
              return (
                <rect
                  key={`${part.c},${part.r}`}
                  className={head ? s.head : s.body}
                  x={part.c * PITCH + pad}
                  y={TOP + part.r * PITCH + pad}
                  width={size}
                  height={size}
                  rx={head ? 2.2 : 1.3}
                />
              );
            })}
          </g>
        </svg>
      </div>
      <div className={s.readout}>
        <p>
          <span className={s.total}>{grid.total.toLocaleString('en-US')} contributions</span>
          <span> in the past year · Updated {updated}</span>
        </p>
        <p role="status" aria-live="polite">{line}</p>
      </div>
      <div className={s.controls}>
        <button
          type="button"
          onClick={() => { begin('playing'); boardRef.current?.focus({ preventScroll: true }); }}
          disabled={playing || mode === 'paused'}
        >
          {mode === 'over' || mode === 'clear' ? 'Play again' : 'Start'}
        </button>
        <button type="button" onClick={togglePause} disabled={mode === 'still' || mode === 'over' || mode === 'clear'} aria-pressed={mode === 'paused'}>
          {mode === 'paused' ? 'Resume' : 'Pause'}
        </button>
        <button type="button" onClick={() => { begin('playing'); boardRef.current?.focus({ preventScroll: true }); }}>
          Restart
        </button>
      </div>
      <p className={s.help}>Green days are food. Arrows or WASD when the grid is focused. Swipe to turn.</p>
    </section>
  );
}
