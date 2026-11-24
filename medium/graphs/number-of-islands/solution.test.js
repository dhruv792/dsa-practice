import assert from 'node:assert/strict';
import test from 'node:test';
import { numIslands } from './solution.js';

test('counts multiple components', () => {
  assert.deepEqual(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]), 3);
});

test('counts a single connected component', () => {
  assert.deepEqual(numIslands([["1", "1", "1"], ["1", "0", "1"], ["1", "1", "1"]]), 1);
});

test('handles no rows', () => {
  assert.deepEqual(numIslands([]), 0);
});

test('handles no columns', () => {
  assert.deepEqual(numIslands([[], []]), 0);
});

test('returns zero for all water', () => {
  assert.deepEqual(numIslands([["0", "0", "0"], ["0", "0", "0"]]), 0);
});

test('counts a single cell of land', () => {
  assert.deepEqual(numIslands([["1"]]), 1);
});

test('keeps diagonal land separate', () => {
  assert.deepEqual(numIslands([["1", "0"], ["0", "1"]]), 2);
});

test('counts separate runs in one row', () => {
  assert.deepEqual(numIslands([["1", "1", "0", "1", "0", "1", "1"]]), 3);
});

test('counts separate runs in one column', () => {
  assert.deepEqual(numIslands([["1"], ["1"], ["0"], ["1"]]), 2);
});

test('counts a surrounded island separately from the outer ring', () => {
  assert.deepEqual(numIslands([["1", "1", "1", "1", "1"], ["1", "0", "0", "0", "1"], ["1", "0", "1", "0", "1"], ["1", "0", "0", "0", "1"], ["1", "1", "1", "1", "1"]]), 2);
});

test("counts isolated checkerboard land cells", () => {
  assert.equal(numIslands([["1","0","1"],["0","1","0"],["1","0","1"]]), 5);
});

test("follows a bent land corridor", () => {
  assert.equal(numIslands([["1","1","1"],["0","0","1"],["1","1","1"]]), 1);
});

test("counts multiple full-width land rows separated by water", () => {
  assert.equal(numIslands([["1","1"],["0","0"],["1","1"]]), 2);
});

test("counts a surrounding island and an isolated center", () => {
  assert.equal(numIslands([["1","1","1","1","1"],["1","0","0","0","1"],["1","0","1","0","1"],["1","0","0","0","1"],["1","1","1","1","1"]]), 2);
});

test("handles one column with multiple separated islands", () => {
  assert.equal(numIslands([["1"],["0"],["1"],["0"],["1"]]), 3);
});
