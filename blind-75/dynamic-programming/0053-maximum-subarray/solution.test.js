import assert from 'node:assert/strict';
import test from 'node:test';
import { maxSubArray } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
});

test("returns the largest negative for all-negative input", () => {
  assert.equal(maxSubArray([-8,-3,-6]), -3);
});

test("handles a single negative number", () => {
  assert.equal(maxSubArray([-2]), -2);
});

test("keeps an internal loss if the whole range gains more", () => {
  assert.equal(maxSubArray([4,-1,2,1]), 6);
});

test("takes a range that starts after a larger loss", () => {
  assert.equal(maxSubArray([3,-10,4,5]), 9);
});

test("takes a zero over negative values", () => {
  assert.equal(maxSubArray([-3,0,-2]), 0);
});
