import assert from 'node:assert/strict';
import test from 'node:test';
import { runTrie } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(runTrie(["Trie","insert","search","search","startsWith"], [[],["apple"],["apple"],["app"],["app"]]), [null,null,true,false,true]);
});

test("distinguishes a complete word from a prefix", () => {
  assert.deepEqual(runTrie(["Trie","insert","startsWith","search","insert","search"], [[],["car"],["ca"],["ca"],["ca"],["ca"]]), [null, null, true, false, null, true]);
});

test("rejects missing branches", () => {
  assert.deepEqual(runTrie(["Trie","insert","search","startsWith"], [[],["cat"],["dog"],["co"]]), [null, null, false, false]);
});

test("shares prefixes between distinct words", () => {
  assert.deepEqual(runTrie(["Trie","insert","insert","search","search"], [[],["cat"],["can"],["cat"],["can"]]), [null, null, null, true, true]);
});

test("searches an empty trie", () => {
  assert.deepEqual(runTrie(["Trie","search","startsWith"],[[],["a"],["a"]]), [null, false, false]);
});

test("inserting the same word twice keeps it searchable", () => {
  assert.deepEqual(runTrie(["Trie","insert","insert","search"],[[],["a"],["a"],["a"]]), [null, null, null, true]);
});
