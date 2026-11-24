import assert from 'node:assert/strict';
import test from 'node:test';
import { rotate } from './solution.js';

test('matches practice example 1', () => {
  { const matrix = [[1,2],[3,4]]; rotate(matrix); assert.deepEqual(matrix, [[3,1],[4,2]]); }
});

test("keeps a one-cell matrix", () => {
  { const matrix = [[7]]; rotate(matrix); assert.deepEqual(matrix, [[7]]); }
});

test("rotates all rings of an odd matrix clockwise", () => {
  { const matrix = [[1,2,3],[4,5,6],[7,8,9]]; rotate(matrix); assert.deepEqual(matrix, [[7,4,1],[8,5,2],[9,6,3]]); }
});

test("rotates an even matrix with an inner ring", () => {
  { const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; rotate(matrix); assert.deepEqual(matrix, [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]); }
});

test("rotates a diagonal matrix", () => {
  { const matrix = [[1,0],[0,2]]; rotate(matrix); assert.deepEqual(matrix,[[0,1],[2,0]]); }
});

test("rotates repeated and negative values", () => {
  { const matrix = [[-2,-2],[1,0]]; rotate(matrix); assert.deepEqual(matrix,[[1,-2],[0,-2]]); }
});
