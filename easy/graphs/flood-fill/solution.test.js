import assert from 'node:assert/strict';
import test from 'node:test';
import { floodFill } from './solution.js';

test('fills the connected region', () => {
  assert.deepEqual(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2), [[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
});

test('returns the same colors when the replacement matches', () => {
  assert.deepEqual(floodFill([[1, 1], [1, 0]], 0, 0, 1), [[1, 1], [1, 0]]);
});

test('fills a single pixel', () => {
  assert.deepEqual(floodFill([[3]], 0, 0, 0), [[0]]);
});

test('does not cross a diagonal', () => {
  assert.deepEqual(floodFill([[1, 0], [0, 1]], 0, 0, 2), [[2, 0], [0, 1]]);
});

test('stops at a different color in one row', () => {
  assert.deepEqual(floodFill([[1, 1, 0, 1]], 0, 1, 2), [[2, 2, 0, 1]]);
});

test('fills along one column', () => {
  assert.deepEqual(floodFill([[1], [1], [0], [0]], 3, 0, 2), [[1], [1], [2], [2]]);
});

test('fills every pixel in a uniform image', () => {
  assert.deepEqual(floodFill([[7, 7, 7], [7, 7, 7]], 1, 2, 8), [[8, 8, 8], [8, 8, 8]]);
});

test('does not cross a full barrier', () => {
  assert.deepEqual(floodFill([[1, 5, 1], [1, 5, 1]], 0, 0, 2), [[2, 5, 1], [2, 5, 1]]);
});

test('does not travel through existing pixels of the replacement color', () => {
  assert.deepEqual(floodFill([[1, 2, 1]], 0, 0, 2), [[2, 2, 1]]);
});

test('preserves a hole inside a connected region', () => {
  assert.deepEqual(floodFill([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 2, 2, 9), [[9, 9, 9], [9, 1, 9], [9, 9, 9]]);
});

test("fills a path that bends around a barrier", () => {
  assert.deepEqual(floodFill([[1,1,0],[0,1,0],[0,1,1]],0,0,3), [[3, 3, 0], [0, 3, 0], [0, 3, 3]]);
});

test("handles color 255 and an isolated pixel", () => {
  assert.deepEqual(floodFill([[255,0,255]],0,2,1), [[255, 0, 1]]);
});

test("replacement color appears next to the original region", () => {
  assert.deepEqual(floodFill([[1,2,1],[1,2,1]],1,0,2), [[2, 2, 1], [2, 2, 1]]);
});

test("starts from the center of an enclosed region", () => {
  assert.deepEqual(floodFill([[9,9,9],[9,0,9],[9,9,9]],1,1,2), [[9, 9, 9], [9, 2, 9], [9, 9, 9]]);
});

test("leaves matching replacement color as reported", () => {
  assert.deepEqual(floodFill([[7,0,7]],0,2,7), [[7, 0, 7]]);
});
