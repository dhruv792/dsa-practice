import assert from 'node:assert/strict';
import test from 'node:test';
import { searchInsert } from './solution.js';

test('finds an existing interior target', () => {
  const nums = Object.freeze([1, 3, 5, 6]);
  assert.equal(searchInsert(nums, 5), 2);
});

test('inserts between two values', () => {
  const nums = Object.freeze([1, 3, 5, 6]);
  assert.equal(searchInsert(nums, 2), 1);
});

test('inserts after the last value', () => {
  const nums = Object.freeze([1, 3, 5, 6]);
  assert.equal(searchInsert(nums, 7), 4);
});

test('inserts before the first value', () => {
  const nums = Object.freeze([1, 3, 5, 6]);
  assert.equal(searchInsert(nums, 0), 0);
});

test('handles an empty array', () => {
  const nums = Object.freeze([]);
  assert.equal(searchInsert(nums, 10), 0);
});

test('finds a single matching value', () => {
  const nums = Object.freeze([4]);
  assert.equal(searchInsert(nums, 4), 0);
});

test('inserts after a single value', () => {
  const nums = Object.freeze([4]);
  assert.equal(searchInsert(nums, 5), 1);
});

test('inserts before a single value', () => {
  const nums = Object.freeze([4]);
  assert.equal(searchInsert(nums, 3), 0);
});

test('finds the last of two values', () => {
  const nums = Object.freeze([-8, -2]);
  assert.equal(searchInsert(nums, -2), 1);
});

test('inserts between negative numbers', () => {
  const nums = Object.freeze([-8, -2]);
  assert.equal(searchInsert(nums, -5), 1);
});

test("inserts in an even-sized array just before zero", () => {
  assert.equal(searchInsert([-10,-5,0,4],-1), 2);
});

test("finds the first value in a frozen array", () => {
  assert.equal(searchInsert(Object.freeze([-3,0,2]),-3), 0);
});

test("inserts near the upper bound", () => {
  assert.equal(searchInsert([-1000000000,1000000000],999999999), 1);
});

test("returns the lower bound for a negative absent value", () => {
  assert.equal(searchInsert([-8,-4,0],-6), 1);
});

test("returns the length for a target greater than a negative maximum", () => {
  assert.equal(searchInsert([-5,-4],0), 2);
});
