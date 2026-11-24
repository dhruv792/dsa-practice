import assert from 'node:assert/strict';
import test from 'node:test';
import { lengthOfLIS } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(lengthOfLIS([10,9,2,5,3,7,101,18]), 4);
});

test("does not count equal numbers as increasing", () => {
  assert.equal(lengthOfLIS([7,7,7,7]), 1);
});

test("handles decreasing input", () => {
  assert.equal(lengthOfLIS([5,4,3,2,1]), 1);
});

test("handles an empty array", () => {
  assert.equal(lengthOfLIS([]), 0);
});

test("can recover after a high first value", () => {
  assert.equal(lengthOfLIS([9,1,2,3]), 3);
});

test("keeps original order across positive and negative values", () => {
  assert.equal(lengthOfLIS([3,4,-1,0,6,2,3]), 4);
});
