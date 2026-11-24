import assert from 'node:assert/strict';
import test from 'node:test';
import { maxDepth } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(maxDepth({ val: 1, left: null, right: { val: 2, left: null, right: null } }), 2);
});

test("empty tree has depth zero", () => {
  assert.equal(maxDepth(null), 0);
});

test("one node has depth one", () => {
  assert.equal(maxDepth({val:1,left:null,right:null}), 1);
});

test("takes the deeper branch", () => {
  assert.equal(maxDepth({val:1,left:{val:2,left:null,right:null},right:{val:3,left:{val:4,left:null,right:null},right:null}}), 3);
});

test("counts an unbalanced left chain", () => {
  assert.equal(maxDepth({val:0,left:{val:1,left:{val:2,left:null,right:null},right:null},right:{val:3,left:null,right:null}}), 3);
});

test("uses the distant leaf on a right chain", () => {
  assert.equal(maxDepth({val:0,left:null,right:{val:1,left:null,right:{val:2,left:null,right:null}}}), 3);
});
