import assert from 'node:assert/strict';
import snapshot from '../data/github-contributions.json' with { type: 'json' };
import { buildGrid, chooseDir, keyOf, opposite, spawn, step, tickMs } from './snake-game.ts';

const grid = buildGrid(snapshot.contributions);
assert.ok(grid.cols > 40);
assert.equal(grid.rows, 7);
assert.ok(grid.food.length > 50);
assert.equal(grid.total, snapshot.contributions.reduce((sum, entry) => sum + entry.count, 0));

const food = new Set(grid.food);
const spawned = spawn(grid.cols, grid.rows, food);
assert.ok(spawned);
assert.equal(spawned.snake.length, 3);
assert.ok(spawned.snake.every((point) => !food.has(keyOf(point))));

const right = step(spawned.snake, 'right', food, grid.cols, grid.rows);
assert.equal(right.type, 'move');
if (right.type === 'move') {
  assert.equal(right.snake[0].c, spawned.snake[0].c + 1);
  assert.equal(right.snake.length, right.ate ? 4 : 3);
}

const wall = step([{ c: 0, r: 0 }, { c: 1, r: 0 }, { c: 2, r: 0 }], 'left', new Set(), 10, 7);
assert.equal(wall.type, 'dead');

const meal = new Set(['1,0']);
const ate = step([{ c: 0, r: 0 }, { c: 0, r: 1 }, { c: 0, r: 2 }], 'right', meal, 5, 7);
assert.equal(ate.type, 'clear');

const self = step(
  [{ c: 2, r: 1 }, { c: 2, r: 2 }, { c: 1, r: 2 }, { c: 1, r: 1 }, { c: 1, r: 0 }],
  'down',
  new Set(),
  6,
  7,
);
assert.equal(self.type, 'dead');

assert.equal(opposite('left', 'right'), true);
assert.equal(opposite('left', 'up'), false);
assert.ok(tickMs(0) > tickMs(10));
assert.ok(tickMs(100) >= 82);

let snake = spawned.snake;
let dir = spawned.dir;
let alive = 0;
for (let i = 0; i < 240; i++) {
  dir = chooseDir(snake, dir, food, grid.cols, grid.rows);
  const result = step(snake, dir, food, grid.cols, grid.rows);
  if (result.type === 'dead') break;
  if (result.type === 'clear' || result.ate) food.delete(keyOf(result.snake[0]));
  snake = result.snake;
  alive += 1;
}
assert.ok(alive > 20, `attract snake died too soon (${alive} steps)`);

console.log(`snake ok · ${grid.food.length} meals · attract lived ${alive} steps`);
