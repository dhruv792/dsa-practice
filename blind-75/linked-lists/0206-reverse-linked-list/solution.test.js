import assert from 'node:assert/strict';
import test from 'node:test';
import { reverseList } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(structuredClone(reverseList({ val: 1, next: { val: 2, next: null } })), { val: 2, next: { val: 1, next: null } });
});

test("reverses an empty list", () => {
  assert.equal(reverseList(null), null);
});

test("handles one node", () => {
  assert.deepEqual(structuredClone(reverseList({ val: 7, next: null })), {"val": 7, "next": null});
});

test("reverses three nodes with repeated values", () => {
  assert.deepEqual(structuredClone(reverseList({ val: 1, next: { val: 1, next: { val: 3, next: null } } })), {"val": 3, "next": {"val": 1, "next": {"val": 1, "next": null}}});
});

test("reverses a pair with a negative value", () => {
  assert.deepEqual(structuredClone(reverseList({val:0,next:{val:-2,next:null}})), {"val": -2, "next": {"val": 0, "next": null}});
});

test("reverses a four-node list", () => {
  assert.deepEqual(structuredClone(reverseList({val:1,next:{val:2,next:{val:3,next:{val:4,next:null}}}})), {"val": 4, "next": {"val": 3, "next": {"val": 2, "next": {"val": 1, "next": null}}}});
});
