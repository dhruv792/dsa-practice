import assert from 'node:assert/strict';
import test from 'node:test';
import { isSameTree } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(isSameTree({ val: 1, left: null, right: null }, { val: 2, left: null, right: null }), false);
});

test("accepts two empty trees", () => {
  assert.equal(isSameTree(null,null), true);
});

test("rejects identical values in different positions", () => {
  assert.equal(isSameTree({val:1,left:{val:2,left:null,right:null},right:null},{val:1,left:null,right:{val:2,left:null,right:null}}), false);
});

test("accepts structurally equal independent trees", () => {
  assert.equal(isSameTree({val:-1,left:null,right:null},{val:-1,left:null,right:null}), true);
});

test("distinguishes an empty tree from a leaf", () => {
  assert.equal(isSameTree(null,{val:0,left:null,right:null}), false);
});

test("rejects different values below equal roots", () => {
  assert.equal(isSameTree({val:0,left:null,right:{val:1,left:null,right:null}},{val:0,left:null,right:{val:2,left:null,right:null}}), false);
});
