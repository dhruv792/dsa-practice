import { runSolution } from '../../../run-solution.js';

/**
 * 300. Longest Increasing Subsequence (Medium)
 *
 * Return the length of the longest strictly increasing subsequence. A
 * subsequence may skip values but preserves their relative order. Return 0 for
 * an empty array.
 *
 * Worked example
 * For nums = [10, 9, 2, 5, 3, 7, 101, 18], return 4. One longest subsequence
 * is [2, 3, 7, 18]. These values stay in their original order, but they can
 * skip elements between them.
 *
 * Function: lengthOfLIS(nums)
 * Expected complexity: O(n log n), where n is nums.length.
 */
export function lengthOfLIS(nums) {
  throw new Error('Implement lengthOfLIS');
}

runSolution(import.meta.url, lengthOfLIS, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(lengthOfLIS([10,9,2,5,3,7,101,18]), 4);
    // assert.equal(lengthOfLIS([7,7,7,7]), 1);
    // assert.equal(lengthOfLIS([5,4,3,2,1]), 1);
    // assert.equal(lengthOfLIS([]), 0);
    // assert.equal(lengthOfLIS([9,1,2,3]), 3);
    // assert.equal(lengthOfLIS([3,4,-1,0,6,2,3]), 4);
  },
});
