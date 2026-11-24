import { runSolution } from '../../../run-solution.js';

/**
 * 55. Jump Game (Medium)
 *
 * Given a nonempty array of nonnegative integers, start at index 0. Each value
 * gives the maximum forward jump from its index. Return whether the last index
 * is reachable.
 *
 * Worked example
 * With nums = [3, 2, 1, 0, 4], return false. Starting at index 0, you can
 * reach indices 1, 2, and 3. Every route stops on or before index 3 because a
 * jump from an earlier index can go no farther than 3, and nums[3] is zero.
 *
 * Function: canJump(nums)
 * Expected complexity: O(n), where n is nums.length.
 */
export function canJump(nums) {
  throw new Error('Implement canJump');
}

runSolution(import.meta.url, canJump, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(canJump([3,2,1,0,4]), false);
    // assert.equal(canJump([0]), true);
    // assert.equal(canJump([0,1]), false);
    // assert.equal(canJump([2,0,2,0,1]), true);
    // assert.equal(canJump([5,0,0,0]), true);
    // assert.equal(canJump([1,1,0,2]), false);
  },
});
