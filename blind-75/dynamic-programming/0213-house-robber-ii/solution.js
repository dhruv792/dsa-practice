import { runSolution } from '../../../run-solution.js';

/**
 * 213. House Robber II (Medium)
 *
 * The houses form a circle, so the first and last houses are adjacent. Return
 * the maximum nonnegative total you can rob without taking adjacent houses.
 * Handle zero or one house.
 *
 * House values are nonnegative integers. With one house, it is eligible to be
 * robbed.
 *
 * Worked example
 * For nums = [2, 3, 2], return 3. The houses with 2 are next to each other
 * across the end of the array because the street is circular. Taking both is
 * invalid, so the best choice is the middle house.
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
    // assert.equal(rob([2, 3, 2]), 3);
    // assert.equal(rob([8,1,1,9]), 10);
    // assert.equal(rob([]), 0);
    // assert.equal(rob([8]), 8);
    // assert.equal(rob([7,4]), 7);
    // assert.equal(rob([1,2,3,1]), 4);
  },
});
