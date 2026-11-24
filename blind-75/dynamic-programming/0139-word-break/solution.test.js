import assert from 'node:assert/strict';
import test from 'node:test';
import { wordBreak } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(wordBreak("leetcode", ["leet", "code"]), true);
});

test("rejects an unsegmentable suffix", () => {
  assert.equal(wordBreak("catsandog", ["cats","dog","sand","and","cat"]), false);
});

test("can reuse the same word", () => {
  assert.equal(wordBreak("appleapple", ["apple"]), true);
});

test("accepts empty input with no dictionary", () => {
  assert.equal(wordBreak("", []), true);
});

test("finds a valid split after a shorter prefix fails", () => {
  assert.equal(wordBreak("aaaaab",["aaa","aaaa","ab"]), true);
});

test("rejects nonempty text when there are no dictionary words", () => {
  assert.equal(wordBreak("a",[]), false);
});
