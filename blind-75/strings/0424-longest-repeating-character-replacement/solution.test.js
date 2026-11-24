import assert from 'node:assert/strict';
import test from 'node:test';
import { characterReplacement } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(characterReplacement("AABABBA", 1), 4);
});

test("handles zero changes", () => {
  assert.equal(characterReplacement("AABBA",0), 2);
});

test("can convert the entire string when k is large enough", () => {
  assert.equal(characterReplacement("ABCD",3), 4);
});

test("shrinks the window when the budget is exhausted", () => {
  assert.equal(characterReplacement("ABBBAC",1), 4);
});

test("counts a final window that needs exactly one change", () => {
  assert.equal(characterReplacement("ABCBBB",1), 5);
});

test("handles a string with no letters", () => {
  assert.equal(characterReplacement("",2), 0);
});
