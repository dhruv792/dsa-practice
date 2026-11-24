import assert from 'node:assert/strict';
import test from 'node:test';
import { getSum } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(getSum(-8, 11), 3);
});

test("propagates carry across many bits", () => {
  assert.equal(getSum(1023,1), 1024);
});

test("adds two negative inputs", () => {
  assert.equal(getSum(-7,-9), -16);
});

test("cancels opposite signed values", () => {
  assert.equal(getSum(12345,-12345), 0);
});

test("handles the largest positive signed integer plus zero", () => {
  assert.equal(getSum(2147483647,0), 2147483647);
});

test("handles the smallest permitted sum", () => {
  assert.equal(getSum(-2147483647,-1), -2147483648);
});
