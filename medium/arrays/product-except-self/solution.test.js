import assert from 'node:assert/strict';
import test from 'node:test';
import { productExceptSelf } from './solution.js';

test('computes products in input order', () => {
  assert.deepEqual(productExceptSelf([1, 2, 3, 4]).map(value => value === 0 ? 0 : value), [24, 12, 8, 6]);
});

test('handles a single zero', () => {
  assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]).map(value => value === 0 ? 0 : value), [0, 0, 9, 0, 0]);
});

test('handles two zeros', () => {
  assert.deepEqual(productExceptSelf([0, 2, 0, 4]).map(value => value === 0 ? 0 : value), [0, 0, 0, 0]);
});

test('handles the minimum array length', () => {
  assert.deepEqual(productExceptSelf([2, 3]).map(value => value === 0 ? 0 : value), [3, 2]);
});

test('handles two zeros at the minimum length', () => {
  assert.deepEqual(productExceptSelf([0, 0]).map(value => value === 0 ? 0 : value), [0, 0]);
});

test('handles mixed signs', () => {
  assert.deepEqual(productExceptSelf([-1, 2, -3]).map(value => value === 0 ? 0 : value), [-6, 3, -2]);
});

test('handles repeated factors', () => {
  assert.deepEqual(productExceptSelf([2, 2, 2]).map(value => value === 0 ? 0 : value), [4, 4, 4]);
});

test('handles all ones', () => {
  assert.deepEqual(productExceptSelf([1, 1, 1]).map(value => value === 0 ? 0 : value), [1, 1, 1]);
});

test('handles a zero at the end', () => {
  assert.deepEqual(productExceptSelf([2, 3, 0]).map(value => value === 0 ? 0 : value), [0, 0, 6]);
});

test('handles a zero at the start', () => {
  assert.deepEqual(productExceptSelf([0, -2, 3]).map(value => value === 0 ? 0 : value), [-6, 0, 0]);
});

test("keeps output signs when there are three negatives", () => {
  assert.deepEqual(productExceptSelf([-2,-3,-4]), [12,8,6]);
});

test("returns zero at nonzero entries with one zero present", () => {
  assert.deepEqual(productExceptSelf([-2,0,3,5]).map(value => value === 0 ? 0 : value), [0,-30,0,0]);
});

test("handles repeated positive and negative ones", () => {
  assert.deepEqual(productExceptSelf([-1,1,-1,1]), [-1,1,-1,1]);
});

test("handles a leading zero with a negative product", () => {
  assert.deepEqual(productExceptSelf([0,-2,2,3]).map(value => value === 0 ? 0 : value), [-12, 0, 0, 0]);
});

test("preserves signs across a chain of four negatives", () => {
  assert.deepEqual(productExceptSelf([-1,-2,-3,-4]), [-24, -12, -8, -6]);
});
