import assert from 'node:assert/strict';
import test from 'node:test';
import { removeNthFromEnd } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(structuredClone(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 2)), { val: 2, next: null });
});

test("removes the only node", () => {
  assert.equal(removeNthFromEnd({ val: 7, next: null },1), null);
});

test("removes the tail and preserves the head", () => {
  assert.deepEqual(structuredClone(removeNthFromEnd({ val: 1, next: { val: 2, next: null } },1)), {"val": 1, "next": null});
});

test("removes a middle node", () => {
  assert.deepEqual(structuredClone(removeNthFromEnd({ val: 1, next: { val: 2, next: { val: 3, next: null } } },2)), {"val": 1, "next": {"val": 3, "next": null}});
});

test("removes a head from a three-node list", () => {
  assert.deepEqual(structuredClone(removeNthFromEnd({val:1,next:{val:2,next:{val:3,next:null}}},3)), {"val": 2, "next": {"val": 3, "next": null}});
});

test("preserves equal values when deleting one occurrence", () => {
  assert.deepEqual(structuredClone(removeNthFromEnd({val:2,next:{val:2,next:{val:3,next:null}}},2)), {"val": 2, "next": {"val": 3, "next": null}});
});
