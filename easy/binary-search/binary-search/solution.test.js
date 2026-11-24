import assert from 'node:assert/strict';
import test from 'node:test';
import { binarySearch } from './solution.js';

test('finds an interior value', () => {
  assert.deepEqual(binarySearch([-4, 0, 3, 9, 12], 9), 3);
});

test('finds the first value', () => {
  assert.deepEqual(binarySearch([-4, 0, 3], -4), 0);
});

test('returns -1 for a missing value', () => {
  assert.deepEqual(binarySearch([1, 3, 5], 2), -1);
});

test('handles empty input', () => {
  assert.deepEqual(binarySearch([], 10), -1);
});

test('finds the last value', () => {
  assert.deepEqual(binarySearch([1, 3, 5, 7], 7), 3);
});

test('finds a single matching element', () => {
  assert.deepEqual(binarySearch([4], 4), 0);
});

test('rejects a single nonmatching element', () => {
  assert.deepEqual(binarySearch([4], 3), -1);
});

test('rejects a target below the range', () => {
  assert.deepEqual(binarySearch([1, 3, 5], 0), -1);
});

test('rejects a target above the range', () => {
  assert.deepEqual(binarySearch([1, 3, 5], 6), -1);
});

test('finds the second element in a two-element array', () => {
  assert.deepEqual(binarySearch([-8, -2], -2), 1);
});

test("finds a zero at the midpoint", () => {
  assert.equal(binarySearch([-2,0,9],0), 1);
});

test("rejects a value between adjacent entries", () => {
  assert.equal(binarySearch([1,4],2), -1);
});

test("finds the lower bound value in an even-sized array", () => {
  assert.equal(binarySearch([-1000000000,-5,4,1000000000],-1000000000), 0);
});

test("finds a target near the high end", () => {
  assert.equal(binarySearch([-3,-1,1,2,3,8],3), 4);
});

test("returns minus one for a target below zero in nonnegative input", () => {
  assert.equal(binarySearch([0,5,6],-1), -1);
});
