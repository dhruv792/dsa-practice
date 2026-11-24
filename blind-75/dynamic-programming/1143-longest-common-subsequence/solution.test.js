import assert from 'node:assert/strict';
import test from 'node:test';
import { longestCommonSubsequence } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(longestCommonSubsequence("abcde", "ace"), 3);
});

test("can skip characters in both inputs", () => {
  assert.equal(longestCommonSubsequence("xaybz", "pabq"), 2);
});

test("returns zero for disjoint alphabets", () => {
  assert.equal(longestCommonSubsequence("abc", "def"), 0);
});

test("handles an empty input", () => {
  assert.equal(longestCommonSubsequence("", "abc"), 0);
});

test("counts repeated common characters", () => {
  assert.equal(longestCommonSubsequence("aaaa","aa"), 2);
});

test("does not reorder common characters", () => {
  assert.equal(longestCommonSubsequence("abc","cba"), 1);
});
