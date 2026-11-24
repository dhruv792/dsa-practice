import assert from 'node:assert/strict';
import test from 'node:test';
import { findMin } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
});

test("does not require a rotation", () => {
  assert.equal(findMin([1,2,3,4]), 1);
});

test("finds a minimum at the final index", () => {
  assert.equal(findMin([2,3,4,1]), 1);
});

test("handles one negative value", () => {
  assert.equal(findMin([-7]), -7);
});

test("handles a two-value rotation", () => {
  assert.equal(findMin([3,2]), 2);
});

test("handles a rotated array with negative minimum", () => {
  assert.equal(findMin([0,7,-8,-3]), -8);
});
