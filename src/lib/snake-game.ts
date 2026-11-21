/** Snake on a GitHub contribution grid. Green days (level > 0) are the food. */

export type Contribution = { date: string; count: number; level: number };
export type Point = { c: number; r: number };
export type DirName = 'up' | 'down' | 'left' | 'right';

export const DIRS: Record<DirName, Point> = {
  up: { c: 0, r: -1 },
  down: { c: 0, r: 1 },
  left: { c: -1, r: 0 },
  right: { c: 1, r: 0 },
};

export const ROWS = 7;
export const BEST_KEY = 'sumit-snake-best';

export type Cell = Contribution & { col: number; row: number; key: string };

export type Grid = {
  cells: Cell[];
  cols: number;
  rows: number;
  food: string[];
  months: { col: number; label: string }[];
  total: number;
};

export function keyOf(point: Point) {
  return `${point.c},${point.r}`;
}

export function opposite(a: DirName, b: DirName) {
  const left = DIRS[a];
  const right = DIRS[b];
  return left.c === -right.c && left.r === -right.r;
}

export function buildGrid(contributions: Contribution[]): Grid {
  const first = new Date(`${contributions[0].date}T00:00:00Z`).getUTCDay();
  const cells: Cell[] = contributions.map((entry, index) => {
    const col = Math.floor((index + first) / 7);
    const row = (index + first) % 7;
    return { ...entry, col, row, key: `${col},${row}` };
  });
  const cols = cells.reduce((max, cell) => Math.max(max, cell.col + 1), 0);
  const months: Grid['months'] = [];
  let lastCol = -10;
  for (const cell of cells) {
    const monthStart = cell.date.endsWith('-01');
    if ((months.length === 0 || monthStart) && cell.col - lastCol >= 3) {
      months.push({
        col: cell.col,
        label: new Date(`${cell.date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }),
      });
      lastCol = cell.col;
    }
  }
  return {
    cells,
    cols,
    rows: ROWS,
    food: cells.filter((cell) => cell.level > 0).map((cell) => cell.key),
    months,
    total: contributions.reduce((sum, entry) => sum + entry.count, 0),
  };
}

export type StepResult =
  | { type: 'move'; snake: Point[]; ate: boolean }
  | { type: 'clear'; snake: Point[] }
  | { type: 'dead' };

export function step(snake: Point[], dir: DirName, food: Set<string>, cols: number, rows: number): StepResult {
  const head = snake[0];
  const delta = DIRS[dir];
  const next = { c: head.c + delta.c, r: head.r + delta.r };
  if (next.c < 0 || next.r < 0 || next.c >= cols || next.r >= rows) return { type: 'dead' };
  const id = keyOf(next);
  const ate = food.has(id);
  const body = ate ? snake : snake.slice(0, -1);
  if (body.some((part) => part.c === next.c && part.r === next.r)) return { type: 'dead' };
  const grown = [next, ...snake];
  if (!ate) grown.pop();
  if (ate && food.size === 1) return { type: 'clear', snake: grown };
  return { type: 'move', snake: grown, ate };
}

/** Slower at first, then a little quicker with each meal. Never frantic. */
export function tickMs(score: number) {
  return Math.max(82, 214 - score * 6);
}

export function spawn(cols: number, rows: number, food: Set<string>): { snake: Point[]; dir: DirName } | null {
  const order = [3, 2, 4, 1, 5, 0, 6].filter((row) => row < rows);
  let bestSnake: Point[] | null = null;
  let bestRoom = -1;
  for (const row of order) {
    let run: Point[] = [];
    for (let c = 0; c <= cols; c++) {
      const point = { c, r: row };
      if (c < cols && !food.has(keyOf(point))) {
        run.push(point);
        continue;
      }
      if (run.length >= 3) {
        const room = cols - run[2].c - 1;
        if (room > bestRoom) {
          bestRoom = room;
          bestSnake = [run[2], run[1], run[0]];
        }
      }
      run = [];
    }
  }
  return bestSnake ? { snake: bestSnake, dir: 'right' } : null;
}

function nearestFood(point: Point, food: Set<string>) {
  let best = Infinity;
  for (const id of Array.from(food)) {
    const [c, r] = id.split(',').map(Number);
    const dist = Math.abs(c - point.c) + Math.abs(r - point.r);
    if (dist < best) best = dist;
    if (best <= 1) break;
  }
  return best;
}

function openSpace(start: Point, snake: Point[], cols: number, rows: number) {
  const blocked = new Set(snake.slice(0, -1).map(keyOf));
  const seen = new Set<string>();
  const queue = [start];
  let count = 0;
  while (queue.length && count < 28) {
    const point = queue.shift()!;
    const id = keyOf(point);
    if (seen.has(id) || blocked.has(id)) continue;
    if (point.c < 0 || point.r < 0 || point.c >= cols || point.r >= rows) continue;
    seen.add(id);
    count += 1;
    queue.push(
      { c: point.c + 1, r: point.r },
      { c: point.c - 1, r: point.r },
      { c: point.c, r: point.r + 1 },
      { c: point.c, r: point.r - 1 },
    );
  }
  return count;
}

/** A calm attract-mode player: prefer food, refuse walls, and keep some open grid ahead. */
export function chooseDir(snake: Point[], dir: DirName, food: Set<string>, cols: number, rows: number): DirName {
  const names: DirName[] = ['up', 'down', 'left', 'right'];
  const head = snake[0];
  const options = names.filter((name) => {
    if (opposite(dir, name)) return false;
    const delta = DIRS[name];
    const next = { c: head.c + delta.c, r: head.r + delta.r };
    if (next.c < 0 || next.r < 0 || next.c >= cols || next.r >= rows) return false;
    return !snake.slice(0, -1).some((part) => part.c === next.c && part.r === next.r);
  });
  if (!options.length) return dir;
  let best = options[0];
  let bestScore = -Infinity;
  for (const name of options) {
    const delta = DIRS[name];
    const next = { c: head.c + delta.c, r: head.r + delta.r };
    const distance = nearestFood(next, food);
    const room = openSpace(next, snake, cols, rows);
    const straight = name === dir ? 0.6 : 0;
    const score = (distance === Infinity ? 0 : 36 - Math.min(distance, 36)) + room + straight;
    if (score > bestScore) {
      bestScore = score;
      best = name;
    }
  }
  return best;
}
