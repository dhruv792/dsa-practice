import assert from 'node:assert/strict';
import test from 'node:test';
import { threeSum } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(threeSum([-1,0,1,2,-1,-4]).sort(), [[-1,-1,2],[-1,0,1]]);
});

test("returns no triplets when a third element is unavailable", () => {
  assert.deepEqual(threeSum([-1,1]), []);
});

test("deduplicates all-zero triplets", () => {
  assert.deepEqual(threeSum([0,0,0,0]), [[0, 0, 0]]);
});

test("finds multiple triplets with repeated values", () => {
  assert.deepEqual(threeSum([-2,0,1,1,2]).sort(), [[-2,0,2],[-2,1,1]]);
});

test("rejects an input that contains only positive values", () => {
  assert.deepEqual(threeSum([1,2,3,4]), []);
});

test("finds a triplet that uses one zero", () => {
  assert.deepEqual(threeSum([4,-4,0,5]), [[-4, 0, 4]]);
});
