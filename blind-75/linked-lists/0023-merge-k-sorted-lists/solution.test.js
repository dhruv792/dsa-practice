import assert from 'node:assert/strict';
import test from 'node:test';
import { mergeKLists } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(structuredClone(mergeKLists([null, { val: 2, next: null }, { val: 1, next: null }])), { val: 1, next: { val: 2, next: null } });
});

test("handles no lists", () => {
  assert.equal(mergeKLists([]), null);
});

test("handles several empty lists", () => {
  assert.equal(mergeKLists([null,null]), null);
});

test("merges interleaved lists with negative and repeated values", () => {
  assert.deepEqual(structuredClone(mergeKLists([{ val: -2, next: { val: 3, next: null } }, { val: -2, next: { val: 0, next: null } }, null])), {"val": -2, "next": {"val": -2, "next": {"val": 0, "next": {"val": 3, "next": null}}}});
});

test("handles a single list among empty lists", () => {
  assert.deepEqual(structuredClone(mergeKLists([null,{val:4,next:null},null])), {"val": 4, "next": null});
});

test("preserves identical heads from three lists", () => {
  assert.deepEqual(structuredClone(mergeKLists([{val:1,next:null},{val:1,next:null},{val:1,next:null}])), {"val": 1, "next": {"val": 1, "next": {"val": 1, "next": null}}});
});
