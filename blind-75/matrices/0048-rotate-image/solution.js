import { runSolution } from '../../../run-solution.js';

/**
 * 48. Rotate Image (Medium)
 *
 * Rotate a square matrix 90 degrees clockwise by modifying it in place. Return
 * nothing. Use constant extra space.
 *
 * The matrix has n rows, each with n entries.
 *
 * Worked example
 * For [[1, 2], [3, 4]], update the matrix to [[3, 1], [4, 2]]. The original
 * top-left value 1 moves to the top-right position, and the original top-
 * right value 2 moves to the bottom-right.
 *
 * Function: rotate(matrix)
 * Expected complexity: O(n²) time and O(1) extra space, where n is the number
 * of rows and columns.
 */
export function rotate(matrix) {
  throw new Error('Implement rotate');
}

runSolution(import.meta.url, rotate, {
  outputArgument: 0,
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // { const matrix = [[1,2],[3,4]]; rotate(matrix); assert.deepEqual(matrix, [[3,1],[4,2]]); }
    // { const matrix = [[7]]; rotate(matrix); assert.deepEqual(matrix, [[7]]); }
    // { const matrix = [[1,2,3],[4,5,6],[7,8,9]]; rotate(matrix); assert.deepEqual(matrix, [[7,4,1],[8,5,2],[9,6,3]]); }
    // { const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; rotate(matrix); assert.deepEqual(matrix, [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]); }
    // { const matrix = [[1,0],[0,2]]; rotate(matrix); assert.deepEqual(matrix,[[0,1],[2,0]]); }
    // { const matrix = [[-2,-2],[1,0]]; rotate(matrix); assert.deepEqual(matrix,[[1,-2],[0,-2]]); }
  },
});
