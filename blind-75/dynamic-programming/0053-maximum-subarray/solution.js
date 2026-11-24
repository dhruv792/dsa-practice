import { runSolution } from '../../../run-solution.js';

/**
 * 53. Maximum Subarray (Medium)
 *
 * Given a nonempty integer array, return the maximum sum of a nonempty
 * contiguous subarray.
 *
 * Worked example
 * For nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4], return 6. The best range is [4,
 * -1, 2, 1]. The -1 is included because all values between the two chosen
 * endpoints must be kept.
 *
 * Function: maxSubArray(nums)
 * Expected complexity: O(n), where n is nums.length.
 */
export function maxSubArray(nums) {
  throw new Error('Implement maxSubArray');
}

runSolution(import.meta.url, maxSubArray, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
    // assert.equal(maxSubArray([-8,-3,-6]), -3);
    // assert.equal(maxSubArray([-2]), -2);
    // assert.equal(maxSubArray([4,-1,2,1]), 6);
    // assert.equal(maxSubArray([3,-10,4,5]), 9);
    // assert.equal(maxSubArray([-3,0,-2]), 0);
  },
});
