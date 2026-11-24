import assert from 'node:assert/strict';
import test from 'node:test';
import { reverseBits } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(reverseBits(1), 2147483648);
});

test("reverses the top bit into the lowest bit", () => {
  assert.equal(reverseBits(2147483648), 1);
});

test("keeps zero unchanged", () => {
  assert.equal(reverseBits(0), 0);
});

test("reverses the lowest two bits into an unsigned result", () => {
  assert.equal(reverseBits(3), 3221225472);
});

test("preserves the all-ones unsigned value", () => {
  assert.equal(reverseBits(4294967295), 4294967295);
});

test("reverses alternating bits", () => {
  assert.equal(reverseBits(2863311530), 1431655765);
});
