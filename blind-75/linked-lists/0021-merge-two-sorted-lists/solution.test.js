import assert from 'node:assert/strict';
import test from 'node:test';
import { mergeTwoLists } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(structuredClone(mergeTwoLists({ val: 2, next: null }, { val: 1, next: null })), { val: 1, next: { val: 2, next: null } });
});

test("merges two empty lists", () => {
  assert.equal(mergeTwoLists(null,null), null);
});

test("keeps repeated values from both lists", () => {
  assert.deepEqual(structuredClone(mergeTwoLists({ val: 1, next: null }, { val: 1, next: null })), {"val": 1, "next": {"val": 1, "next": null}});
});

test("handles an empty list and a nonempty list", () => {
  assert.deepEqual(structuredClone(mergeTwoLists(null, { val: -2, next: null })), {"val": -2, "next": null});
});

test("merges negative numbers before zero", () => {
  assert.deepEqual(structuredClone(mergeTwoLists({val:0,next:null},{val:-4,next:{val:-1,next:null}})), {"val": -4, "next": {"val": -1, "next": {"val": 0, "next": null}}});
});

test("handles a nonempty first list with no second list", () => {
  assert.deepEqual(structuredClone(mergeTwoLists({val:6,next:null},null)), {"val": 6, "next": null});
});
