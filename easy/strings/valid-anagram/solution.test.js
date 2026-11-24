import assert from 'node:assert/strict';
import test from 'node:test';
import { isAnagram } from './solution.js';

test('accepts an anagram', () => {
  assert.deepEqual(isAnagram("anagram", "nagaram"), true);
});

test('rejects different letters', () => {
  assert.deepEqual(isAnagram("rat", "car"), false);
});

test('checks letter frequencies', () => {
  assert.deepEqual(isAnagram("aab", "abb"), false);
});

test('handles empty strings', () => {
  assert.deepEqual(isAnagram("", ""), true);
});

test('rejects unequal lengths', () => {
  assert.deepEqual(isAnagram("a", "aa"), false);
});

test('rejects one empty string', () => {
  assert.deepEqual(isAnagram("", "a"), false);
});

test('accepts identical strings', () => {
  assert.deepEqual(isAnagram("z", "z"), true);
});

test('accepts repeated letters in a different order', () => {
  assert.deepEqual(isAnagram("zzzzaa", "azazzz"), true);
});

test('rejects equal lengths with different counts', () => {
  assert.deepEqual(isAnagram("aabbcc", "abbbcc"), false);
});

test('uses both ends of the alphabet', () => {
  assert.deepEqual(isAnagram("azbycx", "xcybza"), true);
});

test("matches two long runs in reverse order", () => {
  assert.equal(isAnagram("aaaazzz","zzzaaaa"), true);
});

test("rejects a shifted count at the end of the alphabet", () => {
  assert.equal(isAnagram("yyzz","yzzz"), false);
});

test("accepts distinct letters in reverse order", () => {
  assert.equal(isAnagram("abcdef","fedcba"), true);
});

test("rejects unequal lengths when the shorter word is a prefix", () => {
  assert.equal(isAnagram("ab","abb"), false);
});

test("accepts an unchanged word with repeated letters", () => {
  assert.equal(isAnagram("zzaz","zzaz"), true);
});
