import assert from 'node:assert/strict';
import test from 'node:test';
import { isValidBST } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(isValidBST({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }), true);
});

test("rejects a violation below the root", () => {
  assert.equal(isValidBST({val:5,left:{val:3,left:null,right:{val:6,left:null,right:null}},right:null}), false);
});

test("rejects a duplicate value", () => {
  assert.equal(isValidBST({val:2,left:{val:2,left:null,right:null},right:null}), false);
});

test("accepts an empty tree", () => {
  assert.equal(isValidBST(null), true);
});

test("accepts values at signed 32-bit bounds", () => {
  assert.equal(isValidBST({val:0,left:{val:-2147483648,left:null,right:null},right:{val:2147483647,left:null,right:null}}), true);
});

test("rejects a right descendant equal to the root", () => {
  assert.equal(isValidBST({val:3,left:null,right:{val:5,left:{val:3,left:null,right:null},right:null}}), false);
});
