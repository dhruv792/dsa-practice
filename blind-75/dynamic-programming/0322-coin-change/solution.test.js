import assert from 'node:assert/strict';
import test from 'node:test';
import { coinChange } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(coinChange([1, 2, 5], 11), 3);
});

test("returns minus one when a total is impossible", () => {
  assert.equal(coinChange([2],3), -1);
});

test("returns zero when no coins are needed", () => {
  assert.equal(coinChange([],0), 0);
});

test("chooses a better answer than the largest coin first", () => {
  assert.equal(coinChange([1,3,4],6), 2);
});

test("returns minus one for a positive amount without coins", () => {
  assert.equal(coinChange([],7), -1);
});

test("compares repeated denominations without changing the minimum", () => {
  assert.equal(coinChange([2,2,3],7), 3);
});
