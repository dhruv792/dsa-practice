import assert from 'node:assert/strict';
import test from 'node:test';
import { twoSum } from './solution.js';

test('finds the example pair', () => {
  const indices = twoSum([2, 7, 11, 15], 9);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [0, 1]);
});

test('handles duplicate values', () => {
  const indices = twoSum([3, 3], 6);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [0, 1]);
});

test('handles negative numbers', () => {
  const indices = twoSum([4, -3, 8, 2], -1);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [1, 3]);
});

test('finds a pair at opposite ends', () => {
  const indices = twoSum([1, 5, 8, 10], 11);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [0, 3]);
});

test('does not reuse a single element', () => {
  const indices = twoSum([4, 1, 7], 8);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [1, 2]);
});

test('uses zero in a pair', () => {
  const indices = twoSum([0, 9, 4], 4);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [0, 2]);
});

test('finds two zeros', () => {
  const indices = twoSum([5, 0, 0], 0);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [1, 2]);
});

test('handles two negative values', () => {
  const indices = twoSum([-8, -4, 3, -1], -12);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [0, 1]);
});

test('ignores repeated values outside the pair', () => {
  const indices = twoSum([2, 2, 3, 7], 10);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [2, 3]);
});

test('handles values at the numeric limits', () => {
  const indices = twoSum([1000000000, 1, -1000000000], 0);
  assert.ok(Array.isArray(indices));
  assert.deepEqual([...indices].sort((a, b) => a - b), [0, 2]);
});

test("finds a zero paired with a negative value", () => {
  assert.deepEqual(twoSum([6,-5,0,11], -5).slice().sort((a,b) => a-b), [1,2]);
});

test("finds two negative values separated by unrelated entries", () => {
  assert.deepEqual(twoSum([6,-7,12,-2], -9).slice().sort((a,b) => a-b), [1,3]);
});

test("finds the pair at the final two indices", () => {
  assert.deepEqual(twoSum([8,10,3,4], 7).slice().sort((a,b) => a-b), [2,3]);
});

test("keeps distinct indices for two zeroes", () => {
  assert.deepEqual(twoSum([0,4,0],0).slice().sort((a,b) => a-b),[0,2]);
});

test("uses the first and last indices", () => {
  assert.deepEqual(twoSum([-6,9,2,1],-5).slice().sort((a,b) => a-b),[0,3]);
});
