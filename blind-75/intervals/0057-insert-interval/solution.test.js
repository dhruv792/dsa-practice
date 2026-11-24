import assert from 'node:assert/strict';
import test from 'node:test';
import { insert } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(insert([[1,3],[6,9]], [2,5]), [[1,5],[6,9]]);
});

test("inserts into an empty interval list", () => {
  assert.deepEqual(insert([], [2,3]), [[2, 3]]);
});

test("merges a new interval that bridges existing intervals", () => {
  assert.deepEqual(insert([[1,2],[4,5],[8,9]], [2,8]), [[1, 9]]);
});

test("inserts before every existing interval", () => {
  assert.deepEqual(insert([[5,7],[9,10]], [1,2]), [[1, 2], [5, 7], [9, 10]]);
});

test("leaves a contained interval unchanged", () => {
  assert.deepEqual(insert([[1,10]],[3,4]), [[1, 10]]);
});

test("appends after the last interval", () => {
  assert.deepEqual(insert([[1,2],[4,5]],[6,7]), [[1, 2], [4, 5], [6, 7]]);
});
