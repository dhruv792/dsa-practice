import assert from 'node:assert/strict';
import test from 'node:test';
import { validPath } from './solution.js';

test('finds an indirect path in a cycle', () => {
  assert.deepEqual(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2), true);
});

test('rejects a path across disconnected components', () => {
  assert.deepEqual(validPath(6, [[0, 1], [1, 2], [3, 4], [4, 5]], 0, 5), false);
});

test('reaches the same isolated vertex', () => {
  assert.deepEqual(validPath(1, [], 0, 0), true);
});

test('rejects distinct vertices without edges', () => {
  assert.deepEqual(validPath(2, [], 0, 1), false);
});

test('traverses an edge in reverse order', () => {
  assert.deepEqual(validPath(2, [[0, 1]], 1, 0), true);
});

test('reaches the end of a chain', () => {
  assert.deepEqual(validPath(5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 4), true);
});

test('handles an isolated destination', () => {
  assert.deepEqual(validPath(4, [[0, 1], [1, 2]], 0, 3), false);
});

test('handles a self-loop', () => {
  assert.deepEqual(validPath(3, [[0, 0], [0, 1], [1, 2]], 0, 2), true);
});

test('handles parallel edges', () => {
  assert.deepEqual(validPath(3, [[0, 1], [0, 1], [1, 2]], 0, 2), true);
});

test('terminates in a cycle with an unreachable destination', () => {
  assert.deepEqual(validPath(4, [[0, 1], [1, 2], [2, 0]], 0, 3), false);
});

test('finds a path inside a component amid unrelated edges', () => {
  assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8]], 2, 3), true);
});

test('rejects endpoints that both have neighbors in different components', () => {
  assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8]], 2, 7), false);
});

test('rejects a route between a chain and a disconnected cycle', () => {
  assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8]], 3, 10), false);
});

test('reaches the other component after adding a bridge', () => {
  assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8], [4, 6]], 2, 7), true);
});

test('finds a route between branches in a separate component', () => {
  assert.equal(validPath(12, [[5, 8], [2, 0], [9, 6], [6, 7], [3, 1], [8, 4], [2, 3], [6, 10], [4, 9]], 5, 10), true);
});

test('returns false from an isolated source even when the destination has neighbors', () => {
  assert.equal(validPath(12, [[5, 8], [2, 0], [9, 6], [6, 7], [3, 1], [8, 4], [2, 3], [6, 10], [4, 9]], 11, 10), false);
});

test("source equals destination inside a cycle", () => {
  assert.equal(validPath(5, [[0,1],[1,2],[2,0],[3,4]],2,2), true);
});

test("self-loops at both endpoints do not connect them", () => {
  assert.equal(validPath(4, [[0,0],[0,1],[3,3],[2,3]],0,3), false);
});

test("reaches a leaf through a branching component", () => {
  assert.equal(validPath(7, [[1,2],[5,6],[3,1],[4,1],[2,0]],4,0), true);
});

test("finds a path whose edges appear in reverse order", () => {
  assert.equal(validPath(4,[[3,2],[2,1],[1,0]],0,3), true);
});

test("rejects an isolated source with a non-isolated destination", () => {
  assert.equal(validPath(5,[[1,2],[2,3],[3,4]],0,3), false);
});
