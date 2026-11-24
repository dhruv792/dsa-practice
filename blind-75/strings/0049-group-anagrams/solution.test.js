import assert from 'node:assert/strict';
import test from 'node:test';
import { groupAnagrams } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(groupAnagrams(["eat","tea","tan","ate","nat","bat"]).map(group => group.sort()).sort(), [["ate","eat","tea"],["bat"],["nat","tan"]]);
});

test("keeps empty strings and duplicate inputs", () => {
  assert.deepEqual(groupAnagrams(["","a","","a"]).map(group => group.sort()).sort(), [["",""],["a","a"]]);
});

test("keeps unequal multiplicities in different groups", () => {
  assert.deepEqual(groupAnagrams(["abb","aab","bba"]).map(group => group.sort()).sort(), [["aab"],["abb","bba"]]);
});

test("returns no groups for an empty list", () => {
  assert.deepEqual(groupAnagrams([]), []);
});

test("distinguishes multi-digit counts at different letter positions", () => {
  { const a = "a".repeat(12) + "b"; const b = "a" + "b".repeat(12); const reverseA = [...a].reverse().join(""); const groups = groupAnagrams([a,b,reverseA]); assert.deepEqual(groups.map(group => group.slice().sort()).sort(), [[a,reverseA].sort(),[b]].sort()); }
});

test("groups the last letter of the alphabet repeatedly", () => {
  assert.deepEqual(groupAnagrams(["zzz","zzz"]), [["zzz", "zzz"]]);
});
