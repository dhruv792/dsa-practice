import assert from 'node:assert/strict';
import test from 'node:test';
import { longestPalindrome } from './solution.js';

test('accepts either longest palindrome when tied', () => {
  assert.ok(["bab", "aba"].includes(longestPalindrome("babad")));
});

test('finds an even-length palindrome', () => {
  assert.equal(longestPalindrome("cbbd"), "bb");
});

test('handles empty input', () => {
  assert.equal(longestPalindrome(""), "");
});

test('handles a single character', () => {
  assert.equal(longestPalindrome("x"), "x");
});

test('finds a palindrome at the beginning', () => {
  assert.equal(longestPalindrome("racecarxyz"), "racecar");
});

test('finds a palindrome at the end', () => {
  assert.equal(longestPalindrome("xyzracecar"), "racecar");
});

test('uses the entire string when it is a palindrome', () => {
  assert.equal(longestPalindrome("abccba"), "abccba");
});

test('handles an all-equal string', () => {
  assert.equal(longestPalindrome("aaaaa"), "aaaaa");
});

test('treats case as significant', () => {
  assert.ok(["A", "a"].includes(longestPalindrome("Aa")));
});

test('handles digits and ignores shorter palindromes', () => {
  assert.equal(longestPalindrome("x121y2332z"), "2332");
});

test("finds an even palindrome that is also the whole string", () => {
  assert.equal(longestPalindrome("aa"), "aa");
});

test("finds a long odd palindrome surrounded by different letters", () => {
  assert.equal(longestPalindrome("zabacabay"), "abacaba");
});

test("accepts any of several single-character maxima", () => {
  assert.ok(["a","b","c","d"].includes(longestPalindrome("abcd")));
});

test("handles a longer even palindrome inside other text", () => {
  assert.equal(longestPalindrome("xredderq"), "redder");
});

test("finds an entire palindrome that contains digits", () => {
  assert.equal(longestPalindrome("a1a"), "a1a");
});
