import { runSolution } from '../../../run-solution.js';

/**
 * 198. House Robber (Medium)
 *
 * Each nonnegative value is the money in a house on a street. Return the
 * largest total achievable without robbing adjacent houses. An empty street
 * yields zero.
 *
 * The caller may choose zero houses.
 *
 * The street is a straight line, so the first and last houses are adjacent
 * only when there are exactly two houses.
 *
 * Worked example
 * With nums = [2, 7, 9, 3, 1], return 12. Rob houses at indices 0, 2, and 4
 * for 2 + 9 + 1. A plan using the houses with 7 and 9 would be invalid
 * because they are adjacent.
 *
 * Function: rob(nums)
 * Expected complexity: O(n) time and O(1) extra space, where n is nums.length.
 */
export function rob(nums) {
  throw new Error('Implement rob');
}

runSolution(import.meta.url, rob, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(rob([2, 7, 9, 3, 1]), 12);
    // assert.equal(rob([]), 0);
    // assert.equal(rob([8]), 8);
    // assert.equal(rob([2,1,1,2]), 4);
    // assert.equal(rob([4,10]), 10);
    // assert.equal(rob([4,0,3,0,2]), 9);
  },
});
