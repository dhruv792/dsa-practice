import assert from 'node:assert/strict';
import test from 'node:test';
import { minWindow } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
});

test("requires repeated target letters", () => {
  assert.equal(minWindow("aXbYaZ", "aa"), "aXbYa");
});

test("returns empty if one required letter is missing", () => {
  assert.equal(minWindow("a", "aa"), "");
});

test("allows either equally short window", () => {
  assert.ok(["ab", "ba"].includes(minWindow("aba", "ab")));
});

test("chooses a final one-character window", () => {
  assert.equal(minWindow("xyza","a"), "a");
});

test("handles an empty target", () => {
  assert.equal(minWindow("xyz",""), "");
});
