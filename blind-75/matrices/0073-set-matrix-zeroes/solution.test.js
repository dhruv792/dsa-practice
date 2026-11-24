import assert from 'node:assert/strict';
import test from 'node:test';
import { setZeroes } from './solution.js';

test('matches practice example 1', () => {
  { const matrix = [[1,1,1],[1,0,1],[1,1,1]]; setZeroes(matrix); assert.deepEqual(matrix, [[1,0,1],[0,0,0],[1,0,1]]); }
});

test("sets the first row and first column from original zeros", () => {
  { const matrix = [[0,2,3],[4,5,6],[7,0,9]]; setZeroes(matrix); assert.deepEqual(matrix, [[0,0,0],[0,0,6],[0,0,0]]); }
});

test("leaves a matrix without zeros unchanged", () => {
  { const matrix = [[1,2],[3,4]]; setZeroes(matrix); assert.deepEqual(matrix, [[1,2],[3,4]]); }
});

test("zeros the whole row of a single-row matrix", () => {
  { const matrix = [[1,0,3]]; setZeroes(matrix); assert.deepEqual(matrix, [[0,0,0]]); }
});

test("clears one column without creating cascading zeros", () => {
  { const matrix = [[1],[0],[3]]; setZeroes(matrix); assert.deepEqual(matrix,[[0],[0],[0]]); }
});

test("clears the final row and final column", () => {
  { const matrix = [[1,2],[3,0]]; setZeroes(matrix); assert.deepEqual(matrix,[[1,0],[0,0]]); }
});
