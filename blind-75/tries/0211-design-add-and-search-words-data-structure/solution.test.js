import assert from 'node:assert/strict';
import test from 'node:test';
import { runWordDictionary } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(runWordDictionary(["WordDictionary","addWord","search","search"], [[],["bad"],[".ad"],["b..e"]]), [null,null,true,false]);
});

test("dot matches exactly one character", () => {
  assert.deepEqual(runWordDictionary(["WordDictionary","addWord","search","search","search"], [[],["abc"],["."],["..."],["...."]]), [null, null, false, true, false]);
});

test("explores another branch after a wildcard dead end", () => {
  assert.deepEqual(runWordDictionary(["WordDictionary","addWord","addWord","search"], [[],["bad"],["cat"],[".at"]]), [null, null, null, true]);
});

test("handles repeated insertions and rejects an absent word", () => {
  assert.deepEqual(runWordDictionary(["WordDictionary","addWord","addWord","search","search"], [[],["one"],["one"],["one"],["two"]]), [null, null, null, true, false]);
});

test("no word matches an empty dictionary", () => {
  assert.deepEqual(runWordDictionary(["WordDictionary","search"],[[],["."]]), [null, false]);
});

test("requires a whole-word match with a trailing wildcard", () => {
  assert.deepEqual(runWordDictionary(["WordDictionary","addWord","search","search"],[[],["moon"],["moo."],["mo."]]), [null, null, true, false]);
});
