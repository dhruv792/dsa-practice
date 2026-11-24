import assert from 'node:assert/strict';
import test from 'node:test';
import { kthSmallest } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(kthSmallest({ val: 2, left: { val: 1, left: null, right: null }, right: null }, 1), 1);
});

test("finds the middle value", () => {
  assert.equal(kthSmallest({val:3,left:{val:1,left:null,right:{val:2,left:null,right:null}},right:{val:4,left:null,right:null}},2), 2);
});

test("finds the largest value with k equal to node count", () => {
  assert.equal(kthSmallest({val:2,left:{val:1,left:null,right:null},right:{val:3,left:null,right:null}},3), 3);
});

test("handles a single-node tree", () => {
  assert.equal(kthSmallest({val:-9,left:null,right:null},1), -9);
});

test("finds a value in a right-only chain", () => {
  assert.equal(kthSmallest({val:1,left:null,right:{val:2,left:null,right:{val:3,left:null,right:null}}},2), 2);
});

test("finds the minimum after descending several times", () => {
  assert.equal(kthSmallest({val:0,left:{val:-1,left:{val:-2,left:null,right:null},right:null},right:null},1), -2);
});
