import assert from 'node:assert/strict';
import test from 'node:test';
import { countReachable } from './solution.js';

test('counts the source and every vertex in its component', () => {
  assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4]], 0), 4);
});

test('counts a different component in the same graph', () => {
  assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4]], 6), 3);
});

test('counts an isolated source in a graph with other components', () => {
  assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4]], 7), 1);
});

test('handles a graph with a single vertex', () => {
  assert.equal(countReachable(1, [], 0), 1);
});

test('counts only the source when there are no edges', () => {
  assert.equal(countReachable(5, [], 3), 1);
});

test('traverses undirected edges in either direction', () => {
  assert.equal(countReachable(5, [[1, 0], [2, 1], [3, 2], [4, 3]], 0), 5);
});

test('counts each vertex once in a cycle with a branch', () => {
  assert.equal(countReachable(7, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4], [5, 6]], 1), 5);
});

test('handles self-loops and repeated edges', () => {
  assert.equal(countReachable(4, [[0, 0], [0, 1], [0, 1], [1, 2], [2, 2]], 0), 3);
});

test('counts a fully connected component with multiple routes', () => {
  assert.equal(countReachable(5, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 3]], 2), 5);
});

test('follows an added bridge between components', () => {
  assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4], [3, 4]], 0), 7);
});

test('handles a chain with 100,000 vertices', () => {
  const n = 100_000;
  const edges = Array.from({ length: n - 1 }, (_, i) => [i, i + 1]);
  assert.equal(countReachable(n, edges, n - 1), n);
});

test("counts a dense component while ignoring another group", () => {
  assert.equal(countReachable(6, [[0,1],[1,2],[2,0],[0,3],[1,3],[4,5]], 2), 4);
});

test("an isolated vertex with a self-loop counts once", () => {
  assert.equal(countReachable(4, [[0,1],[3,3]],3), 1);
});

test("can start at the greatest vertex label", () => {
  assert.equal(countReachable(6, [[1,5],[4,2],[0,1]],5), 3);
});

test("follows a bridge joining several branches", () => {
  assert.equal(countReachable(7,[[2,0],[2,1],[5,3],[5,4],[1,5]],4), 6);
});

test("ignores parallel edges in the size of a two-node component", () => {
  assert.equal(countReachable(4,[[0,2],[0,2],[0,2],[1,3]],2), 2);
});
