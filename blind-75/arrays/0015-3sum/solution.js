import { runSolution } from '../../../run-solution.js';

/**
 * 15. 3Sum (Medium)
 *
 * Return all distinct value triplets from three different indices whose sum is
 * zero. Return each triplet in ascending order, with the outer list in any
 * order.
 *
 * The input may contain duplicates. Return an empty list if no such triplet
 * exists.
 *
 * Worked example
 * With nums = [-1, 0, 1, 2, -1, -4], the answer is [[-1, -1, 2], [-1, 0, 1]].
 * The first triplet uses the two -1 entries at different indices. Either -1
 * could be used in the second triplet, but it appears only once in the answer
 * because the values are the same.
 *
 * Function: threeSum(nums)
 * Expected complexity: O(n²), where n is nums.length.
 */
export function threeSum(nums) {
  throw new Error('Implement threeSum');
}

runSolution(import.meta.url, threeSum, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(threeSum([-1,0,1,2,-1,-4]).sort(), [[-1,-1,2],[-1,0,1]]);
    // assert.deepEqual(threeSum([-1,1]), []);
    // assert.deepEqual(threeSum([0,0,0,0]), [[0, 0, 0]]);
    // assert.deepEqual(threeSum([-2,0,1,1,2]).sort(), [[-2,0,2],[-2,1,1]]);
    // assert.deepEqual(threeSum([1,2,3,4]), []);
    // assert.deepEqual(threeSum([4,-4,0,5]), [[-4, 0, 4]]);
  },
});
