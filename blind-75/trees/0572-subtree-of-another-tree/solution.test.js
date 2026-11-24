import assert from 'node:assert/strict';
import test from 'node:test';
import { isSubtree } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(isSubtree({ val: 1, left: { val: 2, left: null, right: null }, right: null }, { val: 2, left: null, right: null }), true);
});

test("rejects a matching root whose subtree has an extra child", () => {
  assert.equal(isSubtree({val:1,left:{val:2,left:null,right:null},right:null},{val:1,left:null,right:null}), false);
});

test("accepts an empty candidate subtree", () => {
  assert.equal(isSubtree({val:1,left:null,right:null},null), true);
});

test("rejects a nonempty subtree in an empty tree", () => {
  assert.equal(isSubtree(null,{val:1,left:null,right:null}), false);
});

test("finds the candidate below the root", () => {
  assert.equal(isSubtree({val:0,left:null,right:{val:1,left:{val:2,left:null,right:null},right:null}},{val:1,left:{val:2,left:null,right:null},right:null}), true);
});

test("finds equal values in the wrong shape", () => {
  assert.equal(isSubtree({val:1,left:{val:2,left:null,right:null},right:null},{val:1,left:null,right:{val:2,left:null,right:null}}), false);
});
