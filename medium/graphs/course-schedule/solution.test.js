import assert from 'node:assert/strict';
import test from 'node:test';
import { canFinish } from './solution.js';

test('finishes a single prerequisite chain', () => {
  assert.deepEqual(canFinish(4, [[1, 0], [2, 1], [3, 2]]), true);
});

test('rejects two courses that require each other', () => {
  assert.deepEqual(canFinish(2, [[1, 0], [0, 1]]), false);
});

test('handles zero courses', () => {
  assert.deepEqual(canFinish(0, []), true);
});

test('handles courses without prerequisites', () => {
  assert.deepEqual(canFinish(4, []), true);
});

test('rejects a self-prerequisite', () => {
  assert.deepEqual(canFinish(1, [[0, 0]]), false);
});

test('rejects a longer directed cycle', () => {
  assert.deepEqual(canFinish(3, [[1, 0], [2, 1], [0, 2]]), false);
});

test('finds a cycle in a disconnected component', () => {
  assert.deepEqual(canFinish(5, [[1, 0], [3, 2], [4, 3], [2, 4]]), false);
});

test('allows courses with shared prerequisites', () => {
  assert.deepEqual(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]]), true);
});

test('handles repeated prerequisite pairs', () => {
  assert.deepEqual(canFinish(3, [[1, 0], [1, 0], [2, 1]]), true);
});

test('finishes disconnected acyclic components', () => {
  assert.deepEqual(canFinish(6, [[1, 0], [3, 2], [4, 3]]), true);
});

test("accepts a diamond with a shared transitive prerequisite", () => {
  assert.equal(canFinish(5, [[4,2],[4,3],[2,1],[3,1],[1,0]]), true);
});

test("rejects an acyclic-looking lead-in that reaches a cycle", () => {
  assert.equal(canFinish(5, [[0,1],[1,2],[2,3],[3,2]]), false);
});

test("rejects a cycle even when its edge is repeated", () => {
  assert.equal(canFinish(4, [[1,0],[1,0],[2,1],[0,2]]), false);
});

test("allows a chain whose first course depends on a higher label", () => {
  assert.equal(canFinish(4,[[0,1],[1,2],[2,3]]), true);
});

test("rejects a cycle even with an unrelated available course", () => {
  assert.equal(canFinish(4,[[0,2],[2,1],[1,0]]), false);
});
