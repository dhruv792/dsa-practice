import assert from 'node:assert/strict';
import test from 'node:test';
import { subarraySum } from './solution.js';

test('counts overlapping ranges', () => {
  assert.deepEqual(subarraySum([1, 1, 1], 2), 2);
});

test('counts ranges of different lengths', () => {
  assert.deepEqual(subarraySum([1, 2, 3], 3), 2);
});

test('counts no subarrays for empty input', () => {
  assert.deepEqual(subarraySum([], 0), 0);
});

test('does not count the empty subarray', () => {
  assert.deepEqual(subarraySum([1], 0), 0);
});

test('counts every range in an all-zero array', () => {
  assert.deepEqual(subarraySum([0, 0, 0], 0), 6);
});

test('handles alternating signs', () => {
  assert.deepEqual(subarraySum([1, -1, 1, -1], 0), 4);
});

test('handles a negative target', () => {
  assert.deepEqual(subarraySum([-2, 1, -1, -2], -2), 4);
});

test('counts a matching single element', () => {
  assert.deepEqual(subarraySum([-5], -5), 1);
});

test('handles a zero next to a matching number', () => {
  assert.deepEqual(subarraySum([0, 3], 3), 2);
});

test('returns zero when there is no match', () => {
  assert.deepEqual(subarraySum([2, 4, 6], 3), 0);
});

test('counts more matches than a signed 32-bit integer can hold', () => {
  assert.equal(subarraySum(new Array(100_000).fill(0), 0), 5_000_050_000);
});

test("counts multiple prefixes with the same sum", () => {
  assert.equal(subarraySum([3,0,0,3],3), 6);
});

test("negative values can bring the sum back to target", () => {
  assert.equal(subarraySum([4,-2,-1,2,3],3), 2);
});

test("does not count empty ranges for zero target", () => {
  assert.equal(subarraySum([1,2,3],0), 0);
});

test("counts start and end ranges separately after repeated prefixes", () => {
  assert.equal(subarraySum([-1,1,-1,1],0), 4);
});

test("finds zero-sum ranges of different lengths", () => {
  assert.equal(subarraySum([0,-1,1],0), 3);
});
