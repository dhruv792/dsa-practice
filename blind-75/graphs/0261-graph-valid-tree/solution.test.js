import assert from 'node:assert/strict';
import test from 'node:test';
import { validTree } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(validTree(5, [[0,1],[0,2],[0,3],[1,4]]), true);
});

test("a single vertex is a tree", () => {
  assert.equal(validTree(1, []), true);
});

test("a cycle plus an isolated vertex is not a tree", () => {
  assert.equal(validTree(4, [[0,1],[1,2],[2,0]]), false);
});

test("rejects two acyclic but disconnected components", () => {
  assert.equal(validTree(4, [[0,1],[2,3]]), false);
});

test("accepts an unsorted connected tree", () => {
  assert.equal(validTree(5,[[4,2],[1,3],[0,4],[4,1]]), true);
});

test("rejects two vertices without an edge", () => {
  assert.equal(validTree(2,[]), false);
});
