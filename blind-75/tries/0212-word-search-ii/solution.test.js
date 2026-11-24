import assert from 'node:assert/strict';
import test from 'node:test';
import { findWords } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(findWords([["a","b"],["c","d"]], ["ab","ac","ad","ab"]).sort(), ["ab","ac"]);
});

test("does not reuse the only cell", () => {
  assert.deepEqual(findWords([["a"]], ["aa","a"]), ["a"]);
});

test("does not report the same word twice from different starts", () => {
  assert.deepEqual(findWords([["a","a"]], ["a","aa"]).sort(), ["a", "aa"]);
});

test("returns several words that share a path prefix", () => {
  assert.deepEqual(findWords([["c","a","t","s"]], ["ca","cat","cats","car"]).sort(), ["ca", "cat", "cats"]);
});

test("finds a word upward through a single column", () => {
  assert.deepEqual(findWords([["c"],["b"],["a"]],["abc","acd"]), ["abc"]);
});

test("returns an empty result when no word exists", () => {
  assert.deepEqual(findWords([["a","b"]],["ac","baab"]), []);
});
