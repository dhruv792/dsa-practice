import { runSolution } from '../../../run-solution.js';

/**
 * Search in Rotated Sorted Array (Medium)
 *
 * An ascending array of distinct integers was rotated by an unknown amount.
 * A rotation moves a prefix to the end in the same order. The array may also be
 * unrotated. Find target in the array as given.
 *
 * Worked example
 * The sorted array [0, 1, 2, 4, 5, 6, 7] can rotate to [4, 5, 6, 7, 0, 1, 2].
 * For target = 0, return 4, its index in the rotated input.
 *
 * Function: searchRotated(nums, target)
 * Returns: The zero-based index of target in nums, or -1 if it is absent.
 *
 * Expected time complexity: O(log n), where n is nums.length.
 *
 * Constraints:
 * - 0 <= nums.length <= 100,000
 * - -10^9 <= nums[i], target <= 10^9
 * - All input values are distinct.
 *
 * Examples are available as commented assertions below.
 */
export function searchRotated(nums, target) {
  // len = nums.length
  let left = 0;
  let right = nums.length -1;

  while(left<=right){
    console.log("left::"+left)
    console.log("right::"+right)
    const mid = Math.floor((left + right)/2)

    if (target == nums[mid]){
      return mid
    }

    if (nums[left] <= nums[mid]){
      if(nums[left] <= target && target < nums[mid]){
        right = mid - 1
      } else {
        left = mid +1
      }
    } else {
      if (nums[right]>=target && target>nums[mid]){
        left = mid +1
      } else {
        right = mid -1
      }

    }

  }

return -1

}

runSolution(import.meta.url, searchRotated, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(searchRotated([4, 5, 6, 7, 0, 1, 2], 0), 4);
    // assert.equal(searchRotated([4, 5, 6, 7, 0, 1, 2], 6), 2);
    // assert.equal(searchRotated([4, 5, 6, 7, 0, 1, 2], 2), 6);
    // assert.equal(searchRotated([4, 5, 6, 7, 0, 1, 2], 3), -1);
    // assert.equal(searchRotated([-3, 0, 2, 5], 0), 1);
    // assert.equal(searchRotated([], 10), -1);
    // assert.equal(searchRotated([8], 8), 0);
    // assert.equal(searchRotated([8], 7), -1);
    // assert.equal(searchRotated([8, 2], 2), 1);
    // assert.equal(searchRotated([9, -4, -2, 0], 9), 0);
    // assert.equal(searchRotated([8,9,1,2,3,4,5], 4), 5);
    // assert.equal(searchRotated([8,2], 8), 0);
    // assert.equal(searchRotated([3,4,1,2], 9), -1);
    // assert.equal(searchRotated([2,-9,-4,-1,0],-9), 1);
    // assert.equal(searchRotated([-3,-1,2,4],4), 3);
  },
});
