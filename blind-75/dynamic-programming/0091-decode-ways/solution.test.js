import assert from 'node:assert/strict';
import test from 'node:test';
import { numDecodings } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(numDecodings("226"), 3);
});

test("rejects a leading zero", () => {
  assert.equal(numDecodings("06"), 0);
});

test("allows zero only in a valid pair", () => {
  assert.equal(numDecodings("101"), 1);
});

test("does not treat twenty-seven as a letter", () => {
  assert.equal(numDecodings("27"), 1);
});

test("rejects zero following an invalid prefix", () => {
  assert.equal(numDecodings("30"), 0);
});

test("allows only the two valid pairs when both end in zero", () => {
  assert.equal(numDecodings("1010"), 1);
});
