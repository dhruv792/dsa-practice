import assert from 'node:assert/strict';
import test from 'node:test';
import { longestConsecutive } from './solution.js';

test('finds a run in unsorted input', () => {
  assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
});

test('returns zero for empty input', () => {
  assert.equal(longestConsecutive([]), 0);
});

test('counts a single value as a sequence', () => {
  assert.equal(longestConsecutive([42]), 1);
});

test('counts all duplicates as one distinct value', () => {
  assert.equal(longestConsecutive([7, 7, 7]), 1);
});

test('returns one when every value is isolated', () => {
  assert.equal(longestConsecutive([9, -4, 2, 20]), 1);
});

test('finds a run entirely below zero', () => {
  assert.equal(longestConsecutive([-4, -7, -5, -6, -12]), 4);
});

test('finds a run across zero with duplicates', () => {
  assert.equal(longestConsecutive([2, -2, 1, 0, -1, -2, 2, 9]), 5);
});

test('preserves the best length when a later run is one shorter', () => {
  assert.equal(longestConsecutive([1, 2, 3, 10, 11]), 3);
});

test('updates the best length when the longest run comes later', () => {
  assert.equal(longestConsecutive([10, 11, 4, 2, 3, 1]), 4);
});

test('counts one of two equally long runs', () => {
  assert.equal(longestConsecutive([10, 11, 12, 1, 2, 3]), 3);
});

test('handles a long reverse-ordered run with repeated starts', () => {
  const length = 10_000;
  const nums = Array.from({ length }, (_, i) => length - 1 - i);
  for (let i = 0; i < 500; i++) nums.push(0);

  assert.equal(longestConsecutive(nums), length);
});

test("does not join runs across a missing negative value", () => {
  assert.equal(longestConsecutive([-5,-4,-2,-1,0]), 3);
});

test("finds a run near the upper input bound", () => {
  assert.equal(longestConsecutive([1000000000,999999998,999999999,-1000000000]), 3);
});

test("handles competing runs mixed with repeated starts", () => {
  assert.equal(longestConsecutive([20,1,4,21,1,2,22,3,20,2]), 4);
});

test("retains a gap between consecutive runs of equal length", () => {
  assert.equal(longestConsecutive([5,4,2,1,2]), 2);
});

test("handles the lower bound without losing its successor", () => {
  assert.equal(longestConsecutive([-1000000000,-999999999,0]), 2);
});
