import assert from 'node:assert/strict';
import test from 'node:test';
import { maxProduct } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(maxProduct([2, 3, -2, 4]), 6);
});

test("negative values can produce the largest product", () => {
  assert.equal(maxProduct([-2,3,-4]), 24);
});

test("does not multiply across zero", () => {
  assert.equal(maxProduct([-2,0,-1]), 0);
});

test("handles one negative value", () => {
  assert.equal(maxProduct([-3]), -3);
});

test("finds a positive product after an initial zero", () => {
  assert.equal(maxProduct([0,-2,-3]), 6);
});

test("excludes the first of three negative factors", () => {
  assert.equal(maxProduct([-1,-2,-3]), 6);
});
