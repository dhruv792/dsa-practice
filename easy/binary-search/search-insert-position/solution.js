import { runSolution } from '../../../run-solution.js';

/**
 * Search Insert Position (Easy)
 *
 * Given a strictly increasing array of integers nums and an integer target,
 * return the zero-based index of target if it exists. Otherwise, return the
 * index where target would need to be inserted to keep nums sorted.
 * Return 0 for an empty array and nums.length if target belongs after the last
 * element. Leave nums unchanged.
 *
 * Worked example
 * For nums = [1, 3, 5, 6] and target = 2, return 1. The value belongs between
 * 1 and 3, and inserting it at index 1 would produce [1, 2, 3, 5, 6]. The
 * function returns the index without changing nums.
 *
 * Function: searchInsert(nums, target)
 * Returns: An integer from 0 through nums.length, inclusive.
 *
 * Expected time complexity: O(log n), where n is nums.length.
 *
 * Constraints:
 * - 0 <= nums.length <= 100,000
 * - -10^9 <= nums[i], target <= 10^9
 * - nums is sorted in ascending order and all its values are distinct.
 *
 * Examples are available as commented assertions below.
 */
export function searchInsert(nums, target) {


  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left



}

runSolution(import.meta.url, searchInsert, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(searchInsert([1, 3, 5, 6], 5), 2);
    // assert.equal(searchInsert([1, 3, 5, 6], 2), 1);
    // assert.equal(searchInsert([1, 3, 5, 6], 7), 4);
    // assert.equal(searchInsert([1, 3, 5, 6], 0), 0);
    // assert.equal(searchInsert([], 10), 0);
    // assert.equal(searchInsert([4], 4), 0);
    // assert.equal(searchInsert([4], 5), 1);
    // assert.equal(searchInsert([4], 3), 0);
    // assert.equal(searchInsert([-8, -2], -2), 1);
    // assert.equal(searchInsert([-8, -2], -5), 1);
    // assert.equal(searchInsert([-10,-5,0,4],-1), 2);
    // assert.equal(searchInsert(Object.freeze([-3,0,2]),-3), 0);
    // assert.equal(searchInsert([-1000000000,1000000000],999999999), 1);
    // assert.equal(searchInsert([-8,-4,0],-6), 1);
    // assert.equal(searchInsert([-5,-4],0), 2);
  },
});
