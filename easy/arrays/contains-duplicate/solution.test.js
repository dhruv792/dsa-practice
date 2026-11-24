import assert from 'node:assert/strict';
import test from 'node:test';
import { containsDuplicate } from './solution.js';

test('finds a separated duplicate', () => {
  assert.deepEqual(containsDuplicate([1, 2, 3, 1]), true);
});

test('accepts distinct values', () => {
  assert.deepEqual(containsDuplicate([1, 2, 3, 4]), false);
});

test('handles empty input', () => {
  assert.deepEqual(containsDuplicate([]), false);
});

test('finds duplicate negatives', () => {
  assert.deepEqual(containsDuplicate([-1, -1]), true);
});

test('handles a single element', () => {
  assert.deepEqual(containsDuplicate([42]), false);
});

test('finds repeated zero', () => {
  assert.deepEqual(containsDuplicate([0, 1, 0]), true);
});

test('distinguishes positive and negative values', () => {
  assert.deepEqual(containsDuplicate([-2, 2, 0]), false);
});

test('finds a duplicate at the end', () => {
  assert.deepEqual(containsDuplicate([4, 6, 8, 10, 8]), true);
});

test('finds duplicates at the numeric limits', () => {
  assert.deepEqual(containsDuplicate([-1000000000, 1000000000, -1000000000]), true);
});

test('handles an array of equal values', () => {
  assert.deepEqual(containsDuplicate([7, 7, 7, 7]), true);
});

test("handles two nearby integers without a duplicate", () => {
  assert.equal(containsDuplicate([1000000000,999999999]), false);
});

test("finds a repeated value after several distinct entries", () => {
  assert.equal(containsDuplicate([10,-3,7,0,-3]), true);
});

test("handles the lower bound and zero as distinct", () => {
  assert.equal(containsDuplicate([-1000000000,0]), false);
});

test("handles a single value at the maximum boundary", () => {
  assert.equal(containsDuplicate([1000000000]), false);
});

test("detects duplicated zeros among nonzero values", () => {
  assert.equal(containsDuplicate([0,-1,4,0]), true);
});
