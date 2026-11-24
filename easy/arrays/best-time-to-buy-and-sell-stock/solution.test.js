import assert from 'node:assert/strict';
import test from 'node:test';
import { maxProfit } from './solution.js';

test('finds the best trade', () => {
  assert.deepEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
});

test('handles falling prices', () => {
  assert.deepEqual(maxProfit([7, 6, 4, 3, 1]), 0);
});

test('requires buying before selling', () => {
  assert.deepEqual(maxProfit([5, 9, 1, 2]), 4);
});

test('handles a single day', () => {
  assert.deepEqual(maxProfit([4]), 0);
});

test('uses the first and last days in a rising market', () => {
  assert.deepEqual(maxProfit([1, 2, 3, 4]), 3);
});

test('handles a flat market', () => {
  assert.deepEqual(maxProfit([5, 5, 5]), 0);
});

test('keeps the best profit when a new low comes last', () => {
  assert.deepEqual(maxProfit([2, 9, 1]), 7);
});

test('handles a zero price and the maximum price', () => {
  assert.deepEqual(maxProfit([0, 10000]), 10000);
});

test('uses a later minimum for a better trade', () => {
  assert.deepEqual(maxProfit([5, 8, 2, 9]), 7);
});

test('does not add gains from multiple trades', () => {
  assert.deepEqual(maxProfit([1, 5, 2, 8]), 7);
});

test("ignores a prior high price when the trade must sell later", () => {
  assert.equal(maxProfit([10,1,2]), 1);
});

test("tracks a valley between equal highs", () => {
  assert.equal(maxProfit([6,6,2,6]), 4);
});

test("does not add profits across separate recoveries", () => {
  assert.equal(maxProfit([2,4,1,3,2,5]), 4);
});

test("finds the best sale on the last day", () => {
  assert.equal(maxProfit([4,2,3,7]), 5);
});

test("does not count an earlier high after prices fall", () => {
  assert.equal(maxProfit([8,7,0,1]), 1);
});
