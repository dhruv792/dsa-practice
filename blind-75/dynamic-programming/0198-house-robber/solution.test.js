import assert from 'node:assert/strict';
import test from 'node:test';
import { rob } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(rob([2, 7, 9, 3, 1]), 12);
});

test("handles an empty street", () => {
  assert.equal(rob([]), 0);
});

test("handles one house", () => {
  assert.equal(rob([8]), 8);
});

test("combines nonadjacent endpoint houses", () => {
  assert.equal(rob([2,1,1,2]), 4);
});

test("chooses the larger of two adjacent houses", () => {
  assert.equal(rob([4,10]), 10);
});

test("handles zero-value houses between positive ones", () => {
  assert.equal(rob([4,0,3,0,2]), 9);
});
