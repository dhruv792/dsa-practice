import assert from 'node:assert/strict';
import test from 'node:test';
import { missingNumber } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(missingNumber([3, 0, 1]), 2);
});

test("missing first value", () => {
  assert.equal(missingNumber([1,2,3]), 0);
});

test("missing last value", () => {
  assert.equal(missingNumber([2,0,1]), 3);
});

test("empty array still has one missing value", () => {
  assert.equal(missingNumber([]), 0);
});

test("detects a missing interior value in descending input", () => {
  assert.equal(missingNumber([5,4,3,1,0]), 2);
});

test("handles a single zero", () => {
  assert.equal(missingNumber([0]), 1);
});
