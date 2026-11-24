import assert from 'node:assert/strict';
import test from 'node:test';
import { shortestPath } from './solution.js';

test('prefers a short route over a longer route listed first', () => {
  assert.deepEqual(shortestPath(6, [[0, 1], [1, 2], [2, 3], [3, 5], [0, 4], [4, 5]], 0, 5), 2);
});

test('counts a direct edge as one step', () => {
  assert.deepEqual(shortestPath(3, [[0, 1], [1, 2], [0, 2]], 0, 2), 1);
});

test('returns zero for the same isolated vertex', () => {
  assert.deepEqual(shortestPath(1, [], 0, 0), 0);
});

test('returns -1 for disconnected vertices', () => {
  assert.deepEqual(shortestPath(4, [[0, 1], [2, 3]], 0, 3), -1);
});

test('handles distinct vertices and no edges', () => {
  assert.deepEqual(shortestPath(2, [], 0, 1), -1);
});

test('traverses edges in reverse order', () => {
  assert.deepEqual(shortestPath(3, [[0, 1], [1, 2]], 2, 0), 2);
});

test('finds the distance along a chain', () => {
  assert.deepEqual(shortestPath(5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 4), 4);
});

test('handles parallel edges and self-loops', () => {
  assert.deepEqual(shortestPath(3, [[0, 0], [0, 1], [0, 1], [1, 2]], 0, 2), 2);
});

test('terminates when a cycle cannot reach the destination', () => {
  assert.deepEqual(shortestPath(4, [[0, 1], [1, 2], [2, 0]], 0, 3), -1);
});

test('handles two shortest routes of equal length', () => {
  assert.deepEqual(shortestPath(4, [[0, 1], [0, 2], [1, 3], [2, 3]], 0, 3), 2);
});

test("finds the shorter path across a dense component", () => {
  assert.equal(shortestPath(6, [[0,1],[1,2],[2,3],[3,4],[0,5],[5,4],[2,4]], 0, 4), 2);
});

test("returns minus one between vertices with separate neighbors", () => {
  assert.equal(shortestPath(6, [[0,1],[1,2],[3,4],[4,5]],2,4), -1);
});

test("finds an endpoint near the other end of a branch", () => {
  assert.equal(shortestPath(7, [[0,1],[1,2],[1,3],[3,4],[4,5],[4,6]],2,6), 4);
});

test("chooses a route that uses an edge in reverse", () => {
  assert.equal(shortestPath(5,[[0,4],[3,4],[0,1],[1,2],[2,3]],4,3), 1);
});

test("returns zero for a vertex with edges when the endpoints agree", () => {
  assert.equal(shortestPath(3,[[0,1],[1,2]],1,1), 0);
});
