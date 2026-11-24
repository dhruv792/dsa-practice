import assert from 'node:assert/strict';
import test from 'node:test';
import { isPalindrome } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
});

test("ignores punctuation and case", () => {
  assert.equal(isPalindrome("No 'x' in Nixon"), true);
});

test("keeps digits when comparing", () => {
  assert.equal(isPalindrome("0P"), false);
});

test("handles an empty filtered string", () => {
  assert.equal(isPalindrome(".,!"), true);
});

test("matches digits and mixed case around punctuation", () => {
  assert.equal(isPalindrome("1a_A1"), true);
});

test("rejects a near palindrome with a digit mismatch", () => {
  assert.equal(isPalindrome("a1:2A"), false);
});
