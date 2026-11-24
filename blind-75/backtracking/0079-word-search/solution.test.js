import assert from 'node:assert/strict';
import test from 'node:test';
import { exist } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(exist([["A","B"],["C","D"]], "ABD"), true);
});

test("cannot reuse a cell to complete a word", () => {
  assert.equal(exist([["A","B"]], "ABA"), false);
});

test("diagonal cells do not form a path", () => {
  assert.equal(exist([["A","X"],["X","B"]], "AB"), false);
});

test("can backtrack from the first matching start", () => {
  assert.equal(exist([["A","B","X"],["X","X","X"],["A","B","C"]], "ABC"), true);
});

test("accepts the empty word on a nonempty board", () => {
  assert.equal(exist([["A"]],""), true);
});

test("can traverse a valid path upward and leftward", () => {
  assert.equal(exist([["A","B"],["C","D"]],"DBA"), true);
});
