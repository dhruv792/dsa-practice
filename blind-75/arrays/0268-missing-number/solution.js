import { runSolution } from '../../../run-solution.js';

/**
 * 268. Missing Number (Easy)
 *
 * An array of length n contains distinct integers from 0 through n. Return the
 * unique missing integer.
 *
 * If nums is empty, its length is zero and the missing value is 0.
 *
 * Worked example
 * With nums = [3, 0, 1], there are three entries, so the full range is 0
 * through 3. The array contains 0, 1, and 3, which leaves 2 as the missing
 * value.
 *
 * Function: missingNumber(nums)
 * Expected complexity: O(n) time and O(1) extra space, where n is nums.length.
 */
export function missingNumber(nums) {
  throw new Error('Implement missingNumber');
}

runSolution(import.meta.url, missingNumber, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(missingNumber([3, 0, 1]), 2);
    // assert.equal(missingNumber([1,2,3]), 0);
    // assert.equal(missingNumber([2,0,1]), 3);
    // assert.equal(missingNumber([]), 0);
    // assert.equal(missingNumber([5,4,3,1,0]), 2);
    // assert.equal(missingNumber([0]), 1);
  },
});
