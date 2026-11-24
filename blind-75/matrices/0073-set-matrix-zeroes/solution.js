import { runSolution } from '../../../run-solution.js';

/**
 * 73. Set Matrix Zeroes (Medium)
 *
 * If a rectangular matrix cell originally contains zero, set its entire row and
 * column to zero. Modify the matrix in place and return nothing.
 *
 * A zero written during the operation does not trigger another row or column.
 *
 * If several cells originally contain zero, apply the row and column rule to
 * all of them.
 *
 * Worked example
 * For [[1, 2, 3], [4, 0, 6], [7, 8, 9]], the original zero is at row 1 and
 * column 1. Clear both to get [[1, 0, 3], [0, 0, 0], [7, 0, 9]]. Newly
 * written zeros do not clear additional rows or columns.
 *
 * Function: setZeroes(matrix)
 * Expected complexity: O(rows × cols) time and O(1) extra space, where rows and
 * cols are the matrix dimensions.
 */
export function setZeroes(matrix) {
  throw new Error('Implement setZeroes');
}

runSolution(import.meta.url, setZeroes, {
  outputArgument: 0,
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // { const matrix = [[1,1,1],[1,0,1],[1,1,1]]; setZeroes(matrix); assert.deepEqual(matrix, [[1,0,1],[0,0,0],[1,0,1]]); }
    // { const matrix = [[0,2,3],[4,5,6],[7,0,9]]; setZeroes(matrix); assert.deepEqual(matrix, [[0,0,0],[0,0,6],[0,0,0]]); }
    // { const matrix = [[1,2],[3,4]]; setZeroes(matrix); assert.deepEqual(matrix, [[1,2],[3,4]]); }
    // { const matrix = [[1,0,3]]; setZeroes(matrix); assert.deepEqual(matrix, [[0,0,0]]); }
    // { const matrix = [[1],[0],[3]]; setZeroes(matrix); assert.deepEqual(matrix,[[0],[0],[0]]); }
    // { const matrix = [[1,2],[3,0]]; setZeroes(matrix); assert.deepEqual(matrix,[[1,0],[0,0]]); }
  },
});
