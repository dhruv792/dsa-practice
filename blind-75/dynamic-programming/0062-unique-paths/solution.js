import { runSolution } from '../../../run-solution.js';

/**
 * 62. Unique Paths (Medium)
 *
 * Count routes from the top-left to the bottom-right of a positive m-by-n grid.
 * Each step moves either right or down. Assume the answer is a safe JavaScript
 * integer.
 *
 * Worked example
 * In a 2-by-2 grid, return 2. From the top-left cell you can go right then
 * down, or down then right. A route that leaves the grid or moves diagonally
 * is invalid.
 *
 * Function: uniquePaths(m, n)
 * Expected complexity: O(m × n) or better, where m is the number of rows and n
 * is the number of columns.
 */
export function uniquePaths(m, n) {
  throw new Error('Implement uniquePaths');
}

runSolution(import.meta.url, uniquePaths, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(uniquePaths(3, 7), 28);
    // assert.equal(uniquePaths(1,8), 1);
    // assert.equal(uniquePaths(2,2), 2);
    // assert.equal(uniquePaths(8,1), 1);
    // assert.equal(uniquePaths(1,1), 1);
    // assert.equal(uniquePaths(3,3), 6);
  },
});
