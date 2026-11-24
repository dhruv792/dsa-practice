import assert from 'node:assert/strict';
import test from 'node:test';
import { moveZeroes } from './solution.js';

test('moves zeros and preserves order', () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  assert.deepEqual(nums, [1, 3, 12, 0, 0]);
});

test('handles negative values', () => {
  const nums = [0, -2, 0, -1];
  moveZeroes(nums);
  assert.deepEqual(nums, [-2, -1, 0, 0]);
});

test('handles an all-zero array', () => {
  const nums = [0, 0];
  moveZeroes(nums);
  assert.deepEqual(nums, [0, 0]);
});

test('handles empty input', () => {
  const nums = [];
  moveZeroes(nums);
  assert.deepEqual(nums, []);
});

test('preserves all elements when there are no zeros', () => {
  const nums = [1, 2, 3];
  moveZeroes(nums);
  assert.deepEqual(nums, [1, 2, 3]);
});

test('preserves a nonzero first element', () => {
  const nums = [1, 0, 2];
  moveZeroes(nums);
  assert.deepEqual(nums, [1, 2, 0]);
});

test('leaves already trailing zeros at the end', () => {
  const nums = [1, 2, 0, 0];
  moveZeroes(nums);
  assert.deepEqual(nums, [1, 2, 0, 0]);
});

test('moves consecutive leading zeros', () => {
  const nums = [0, 0, 2, 1];
  moveZeroes(nums);
  assert.deepEqual(nums, [2, 1, 0, 0]);
});

test('handles a single zero', () => {
  const nums = [0];
  moveZeroes(nums);
  assert.deepEqual(nums, [0]);
});

test('preserves repeated nonzero values', () => {
  const nums = [0, 2, 0, 2, 1];
  moveZeroes(nums);
  assert.deepEqual(nums, [2, 2, 1, 0, 0]);
});

test("keeps signs and relative order with zeros at both ends", () => {
  { const nums = [0,-3,2,-3,0]; moveZeroes(nums); assert.deepEqual(nums, [-3,2,-3,0,0]); }
});

test("keeps a single nonzero value", () => {
  { const nums = [6]; moveZeroes(nums); assert.deepEqual(nums, [6]); }
});

test("moves a group of zeros past the final value", () => {
  { const nums = [4,0,0,5]; moveZeroes(nums); assert.deepEqual(nums, [4,5,0,0]); }
});

test("keeps several negatives before trailing zeros", () => {
  { const nums = [-1,0,-2,0,-3,0]; moveZeroes(nums); assert.deepEqual(nums,[-1,-2,-3,0,0,0]); }
});

test("moves one zero past one nonzero", () => {
  { const nums = [0,9]; moveZeroes(nums); assert.deepEqual(nums,[9,0]); }
});
