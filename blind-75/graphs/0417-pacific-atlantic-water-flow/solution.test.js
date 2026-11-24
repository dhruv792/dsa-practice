import assert from 'node:assert/strict';
import test from 'node:test';
import { pacificAtlantic } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(pacificAtlantic([[1,2],[4,3]]).sort(), [[0,1],[1,0],[1,1]]);
});

test("both oceans touch every cell in one row", () => {
  assert.deepEqual(pacificAtlantic([[3,1,2]]).sort(), [[0, 0], [0, 1], [0, 2]]);
});

test("equal heights permit water flow in both directions", () => {
  assert.deepEqual(pacificAtlantic([[2,2],[2,2]]).sort(), [[0,0],[0,1],[1,0],[1,1]]);
});

test("does not flow uphill from a low interior cell", () => {
  assert.deepEqual(pacificAtlantic([[5,5,5],[5,1,5],[5,5,5]]).sort(), [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);
});

test("interior high cells can reach both oceans", () => {
  assert.deepEqual(pacificAtlantic([[1,1,1],[1,9,1],[1,1,1]]).sort(), [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]);
});

test("returns the only coordinate for a single cell", () => {
  assert.deepEqual(pacificAtlantic([[7]]), [[0, 0]]);
});
