import assert from 'node:assert/strict';
import test from 'node:test';
import { spiralOrder } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5]);
});

test("handles one row without revisiting it", () => {
  assert.deepEqual(spiralOrder([[1,2,3]]), [1, 2, 3]);
});

test("handles one column", () => {
  assert.deepEqual(spiralOrder([[1],[2],[3]]), [1, 2, 3]);
});

test("follows a rectangular matrix edge and the remaining center", () => {
  assert.deepEqual(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});

test("does not revisit corners in a two-column matrix", () => {
  assert.deepEqual(spiralOrder([[1,2],[3,4],[5,6]]), [1, 2, 4, 6, 5, 3]);
});

test("handles a matrix with no rows", () => {
  assert.deepEqual(spiralOrder([]), []);
});
