import assert from 'node:assert/strict';
import test from 'node:test';
import { uniquePaths } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(uniquePaths(3, 7), 28);
});

test("has one path along one row", () => {
  assert.equal(uniquePaths(1,8), 1);
});

test("counts both ways across a square", () => {
  assert.equal(uniquePaths(2,2), 2);
});

test("handles one column", () => {
  assert.equal(uniquePaths(8,1), 1);
});

test("starts at its destination on a one-cell grid", () => {
  assert.equal(uniquePaths(1,1), 1);
});

test("counts routes on a three by three grid", () => {
  assert.equal(uniquePaths(3,3), 6);
});
