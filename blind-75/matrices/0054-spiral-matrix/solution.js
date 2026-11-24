import { runSolution } from '../../../run-solution.js';

/**
 * 54. Spiral Matrix (Medium)
 *
 * Return all values from a rectangular matrix in clockwise spiral order,
 * starting at the upper-left corner. Return an empty array for an empty matrix.
 *
 * Worked example
 * For matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], return [1, 2, 3, 6, 9, 8,
 * 7, 4, 5]. The first eight values go clockwise around the outside. The
 * spiral then turns inward to the center, 5.
 *
 * Function: spiralOrder(matrix)
 * Expected complexity: O(rows × cols) for a nonempty matrix, where rows and
 * cols are its dimensions.
 */
export function spiralOrder(matrix) {
  throw new Error('Implement spiralOrder');
}

runSolution(import.meta.url, spiralOrder, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5]);
    // assert.deepEqual(spiralOrder([[1,2,3]]), [1, 2, 3]);
    // assert.deepEqual(spiralOrder([[1],[2],[3]]), [1, 2, 3]);
    // assert.deepEqual(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    // assert.deepEqual(spiralOrder([[1,2],[3,4],[5,6]]), [1, 2, 4, 6, 5, 3]);
    // assert.deepEqual(spiralOrder([]), []);
  },
});
