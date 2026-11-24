import assert from 'node:assert/strict';
import test from 'node:test';
import { countComponents } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(countComponents(6, [[0,1],[1,2],[3,4]]), 3);
});

test("counts every isolated vertex", () => {
  assert.equal(countComponents(4, []), 4);
});

test("handles an empty graph", () => {
  assert.equal(countComponents(0, []), 0);
});

test("a bridge connects two previously separate groups", () => {
  assert.equal(countComponents(5, [[0,1],[2,3],[3,4],[1,4]]), 1);
});

test("does not count a cycle as several components", () => {
  assert.equal(countComponents(4,[[0,1],[1,2],[2,0]]), 2);
});

test("counts a graph with all vertices connected", () => {
  assert.equal(countComponents(4,[[1,0],[3,2],[2,0]]), 1);
});
