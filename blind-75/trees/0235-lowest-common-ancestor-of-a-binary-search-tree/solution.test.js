import assert from 'node:assert/strict';
import test from 'node:test';
import { lowestCommonAncestor } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(lowestCommonAncestor({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, 1, 3), 2);
});

test("one target is the ancestor of the other", () => {
  assert.equal(lowestCommonAncestor({val:5,left:{val:3,left:{val:2,left:null,right:null},right:null},right:null},3,2), 3);
});

test("accepts targets supplied in descending order", () => {
  assert.equal(lowestCommonAncestor({val:5,left:{val:2,left:null,right:null},right:{val:8,left:null,right:null}},8,2), 5);
});

test("returns the shared target when both values match", () => {
  assert.equal(lowestCommonAncestor({val:5,left:null,right:null},5,5), 5);
});

test("finds an ancestor inside the right subtree", () => {
  assert.equal(lowestCommonAncestor({val:4,left:null,right:{val:8,left:{val:6,left:null,right:null},right:{val:9,left:null,right:null}}},6,9), 8);
});

test("handles one target equal to the root", () => {
  assert.equal(lowestCommonAncestor({val:4,left:{val:2,left:null,right:null},right:null},2,4), 4);
});
