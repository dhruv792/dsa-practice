import assert from 'node:assert/strict';
import test from 'node:test';
import { lengthOfLongestSubstring } from './solution.js';

test('finds the longest window', () => {
  assert.deepEqual(lengthOfLongestSubstring("pwwkew"), 3);
});

test('handles a repeated character', () => {
  assert.deepEqual(lengthOfLongestSubstring("bbbbb"), 1);
});

test('handles an overlapping repeat', () => {
  assert.deepEqual(lengthOfLongestSubstring("abba"), 2);
});

test('ignores a previous occurrence before the current window', () => {
  assert.deepEqual(lengthOfLongestSubstring("abbac"), 3);
});

test('remembers characters still in the window after moving its start', () => {
  assert.deepEqual(lengthOfLongestSubstring("dvdfv"), 3);
});

test('updates the best length when the final character repeats outside the window', () => {
  assert.deepEqual(lengthOfLongestSubstring("tmmzuxt"), 5);
});

test('handles empty input', () => {
  assert.deepEqual(lengthOfLongestSubstring(""), 0);
});

test('handles a single character', () => {
  assert.deepEqual(lengthOfLongestSubstring("x"), 1);
});

test('uses the full string when all characters differ', () => {
  assert.deepEqual(lengthOfLongestSubstring("abcd"), 4);
});

test('finds a longest window at the end', () => {
  assert.deepEqual(lengthOfLongestSubstring("dvdf"), 3);
});

test('retains a best window from earlier in the string', () => {
  assert.deepEqual(lengthOfLongestSubstring("abcdeaa"), 5);
});

test('treats case as significant', () => {
  assert.deepEqual(lengthOfLongestSubstring("aA"), 2);
});

test('counts spaces as characters', () => {
  assert.deepEqual(lengthOfLongestSubstring("a b c"), 3);
});

test("records a maximum reached on a repeat outside the window", () => {
  assert.equal(lengthOfLongestSubstring("abccdea"), 4);
});

test("considers ASCII punctuation part of the window", () => {
  assert.equal(lengthOfLongestSubstring("a!a?b"), 4);
});

test("tracks a longer window after several repeated characters", () => {
  assert.equal(lengthOfLongestSubstring("aaabccdefg"), 5);
});

test("chooses a longer suffix after a stale repeat", () => {
  assert.equal(lengthOfLongestSubstring("tmmzuxty"), 6);
});

test("counts uppercase separately from lowercase", () => {
  assert.equal(lengthOfLongestSubstring("abABa"), 4);
});
