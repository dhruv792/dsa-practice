import assert from 'node:assert/strict';
import test from 'node:test';
import { hammingWeight } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(hammingWeight(4294967295), 32);
});

test("counts zero as having no set bits", () => {
  assert.equal(hammingWeight(0), 0);
});

test("counts the unsigned top bit", () => {
  assert.equal(hammingWeight(2147483648), 1);
});

test("counts separated set bits", () => {
  assert.equal(hammingWeight(42), 3);
});

test("counts set bits near both ends", () => {
  assert.equal(hammingWeight(2147483649), 2);
});

test("counts all bits except the low zero", () => {
  assert.equal(hammingWeight(4294967294), 31);
});
