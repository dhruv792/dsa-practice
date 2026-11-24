import assert from 'node:assert/strict';
import test from 'node:test';
import { searchRotated } from './solution.js';

test('finds the smallest value after rotation', () => {
  assert.deepEqual(searchRotated([4, 5, 6, 7, 0, 1, 2], 0), 4);
});

test('finds a value before the rotation point', () => {
  assert.deepEqual(searchRotated([4, 5, 6, 7, 0, 1, 2], 6), 2);
});

test('finds the last value', () => {
  assert.deepEqual(searchRotated([4, 5, 6, 7, 0, 1, 2], 2), 6);
});

test('rejects a missing value between the two ranges', () => {
  assert.deepEqual(searchRotated([4, 5, 6, 7, 0, 1, 2], 3), -1);
});

test('handles an unrotated array', () => {
  assert.deepEqual(searchRotated([-3, 0, 2, 5], 0), 1);
});

test('handles an empty array', () => {
  assert.deepEqual(searchRotated([], 10), -1);
});

test('finds a single matching value', () => {
  assert.deepEqual(searchRotated([8], 8), 0);
});

test('rejects a single nonmatching value', () => {
  assert.deepEqual(searchRotated([8], 7), -1);
});

test('finds the second value of a two-element rotation', () => {
  assert.deepEqual(searchRotated([8, 2], 2), 1);
});

test('handles a rotation with the maximum at the first index', () => {
  assert.deepEqual(searchRotated([9, -4, -2, 0], 9), 0);
});

test("finds a value in the sorted right half when the midpoint is low", () => {
  assert.equal(searchRotated([8,9,1,2,3,4,5], 4), 5);
});

test("finds the high value in a two-element rotation", () => {
  assert.equal(searchRotated([8,2], 8), 0);
});

test("rejects a target above every value", () => {
  assert.equal(searchRotated([3,4,1,2], 9), -1);
});

test("finds a value in a heavily rotated negative array", () => {
  assert.equal(searchRotated([2,-9,-4,-1,0],-9), 1);
});

test("finds the final value of an unrotated array", () => {
  assert.equal(searchRotated([-3,-1,2,4],4), 3);
});
