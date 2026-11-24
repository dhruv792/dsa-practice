import assert from 'node:assert/strict';
import test from 'node:test';
import { levelOrder } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(levelOrder({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }), [[1],[2,3]]);
});

test("returns no levels for an empty tree", () => {
  assert.deepEqual(levelOrder(null), []);
});

test("preserves order across uneven branches", () => {
  assert.deepEqual(levelOrder({val:1,left:{val:2,left:null,right:{val:4,left:null,right:null}},right:{val:3,left:{val:5,left:null,right:null},right:null}}), [[1], [2, 3], [4, 5]]);
});

test("returns one level per node on a chain", () => {
  assert.deepEqual(levelOrder({val:1,left:{val:2,left:{val:3,left:null,right:null},right:null},right:null}), [[1], [2], [3]]);
});

test("returns one array for a leaf", () => {
  assert.deepEqual(levelOrder({val:7,left:null,right:null}), [[7]]);
});

test("keeps duplicate values at the same depth", () => {
  assert.deepEqual(levelOrder({val:0,left:{val:1,left:null,right:null},right:{val:1,left:null,right:null}}), [[0], [1, 1]]);
});
