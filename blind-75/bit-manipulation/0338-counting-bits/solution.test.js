import assert from 'node:assert/strict';
import test from 'node:test';
import { countBits } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(countBits(5), [0,1,1,2,1,2]);
});

test("includes index zero when n is zero", () => {
  assert.deepEqual(countBits(0), [0]);
});

test("counts around a power of two", () => {
  assert.deepEqual(countBits(8), [0, 1, 1, 2, 1, 2, 2, 3, 1]);
});

test("includes every index immediately below a power of two", () => {
  assert.deepEqual(countBits(3), [0, 1, 1, 2]);
});

test("counts each value through the next power of two", () => {
  assert.deepEqual(countBits(4), [0, 1, 1, 2, 1]);
});

test("handles one as the upper bound", () => {
  assert.deepEqual(countBits(1), [0, 1]);
});
