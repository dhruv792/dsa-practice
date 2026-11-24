import assert from 'node:assert/strict';
import test from 'node:test';
import { removeDuplicates } from './solution.js';

test('removes newly adjacent pairs', () => {
  assert.deepEqual(removeDuplicates("abbaca"), "ca");
});

test('handles a chain of removals', () => {
  assert.deepEqual(removeDuplicates("azxxzy"), "ay");
});

test('preserves a string with no pairs', () => {
  assert.deepEqual(removeDuplicates("abc"), "abc");
});

test('handles complete removal', () => {
  assert.deepEqual(removeDuplicates("abba"), "");
});

test('handles an empty string', () => {
  assert.deepEqual(removeDuplicates(""), "");
});

test('keeps a single character', () => {
  assert.deepEqual(removeDuplicates("a"), "a");
});

test('reduces an odd run to one character', () => {
  assert.deepEqual(removeDuplicates("aaaaa"), "a");
});

test('removes an even run completely', () => {
  assert.deepEqual(removeDuplicates("aaaaaa"), "");
});

test('leaves equal characters separated by a survivor', () => {
  assert.deepEqual(removeDuplicates("abcca"), "aba");
});

test('cascades through all remaining characters', () => {
  assert.deepEqual(removeDuplicates("abccba"), "");
});

test("cascades before preserving an unmatched suffix", () => {
  assert.equal(removeDuplicates("aabccbde"), "de");
});

test("keeps equal characters when separated", () => {
  assert.equal(removeDuplicates("aba"), "aba");
});

test("cancels matching endpoints after a triple-wide cascade", () => {
  assert.equal(removeDuplicates("abcddcba"), "");
});

test("preserves an odd run beside a surviving letter", () => {
  assert.equal(removeDuplicates("baaaaac"), "bac");
});

test("removes multiple runs followed by a cascade", () => {
  assert.equal(removeDuplicates("xaabccby"), "xy");
});
