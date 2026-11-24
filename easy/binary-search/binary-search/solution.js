import { runSolution } from '../../../run-solution.js';

/**
 * Binary Search (Easy)
 *
 * Given nums, an array of distinct integers sorted in ascending order,
 * find the position of target.
 *
 * Worked example
 * For nums = [-4, 0, 3, 9, 12] and target = 9, return 3, the zero-based index
 * of 9. If the target is 8 instead, return -1 because it is absent.
 *
 * Function: binarySearch(nums, target)
 * Returns: The zero-based index of target, or -1 if it is absent.
 *
 * Expected time complexity: O(log n), where n is nums.length.
 *
 * Constraints:
 * - 0 <= nums.length <= 100,000
 * - -10^9 <= nums[i], target <= 10^9
 *
 * Examples are available as commented assertions below.
 */
export function binarySearch(nums, target) {

  let l = 0
  let h = nums.length - 1
  while (l <= h){
    const m = Math.floor((l + h)/2 )
    const num = nums[m]
    if (target > num){
      l = m + 1
    } else if (target < num){
      h = m - 1
    } else {
      return m
    }
  }
  return -1
}

runSolution(import.meta.url, binarySearch, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(binarySearch([-4, 0, 3, 9, 12], 9), 3);
    // assert.equal(binarySearch([-4, 0, 3], -4), 0);
    // assert.equal(binarySearch([1, 3, 5], 2), -1);
    // assert.equal(binarySearch([], 10), -1);
    // assert.equal(binarySearch([1, 3, 5, 7], 7), 3);
    // assert.equal(binarySearch([4], 4), 0);
    // assert.equal(binarySearch([4], 3), -1);
    // assert.equal(binarySearch([1, 3, 5], 0), -1);
    // assert.equal(binarySearch([1, 3, 5], 6), -1);
    // assert.equal(binarySearch([-8, -2], -2), 1);
    // assert.equal(binarySearch([-2,0,9],0), 1);
    // assert.equal(binarySearch([1,4],2), -1);
    // assert.equal(binarySearch([-1000000000,-5,4,1000000000],-1000000000), 0);
    // assert.equal(binarySearch([-3,-1,1,2,3,8],3), 4);
    // assert.equal(binarySearch([0,5,6],-1), -1);
  },
});
