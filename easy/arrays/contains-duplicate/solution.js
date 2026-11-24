import { runSolution } from '../../../run-solution.js';

/**
 * Contains Duplicate (Easy)
 *
 * Given an array of integers nums, determine whether any value appears at least twice.
 *
 * Worked example
 * For nums = [1, 2, 3, 1], return true because the value 1 occurs at indices
 * 0 and 3. The equal values do not have to be adjacent.
 *
 * Function: containsDuplicate(nums)
 * Returns: A boolean indicating whether the array contains a duplicate.
 *
 * Expected time complexity: O(n) average-case, where n is nums.length.
 *
 * Constraints:
 * - 0 <= nums.length <= 100,000
 * - -10^9 <= nums[i] <= 10^9
 *
 * Examples are available as commented assertions below.
 */
export function containsDuplicate(nums) {
  const map = new Map()
  for (let i = 0 ;i<nums.length;i++){
    if (map.has(nums[i])) return true
    map.set(nums[i])
  }

  return false
}

runSolution(import.meta.url, containsDuplicate, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(containsDuplicate([1, 2, 3, 1]), true);
    // assert.equal(containsDuplicate([1, 2, 3, 4]), false);
    // assert.equal(containsDuplicate([]), false);
    // assert.equal(containsDuplicate([-1, -1]), true);
    // assert.equal(containsDuplicate([42]), false);
    // assert.equal(containsDuplicate([0, 1, 0]), true);
    // assert.equal(containsDuplicate([-2, 2, 0]), false);
    // assert.equal(containsDuplicate([4, 6, 8, 10, 8]), true);
    // assert.equal(containsDuplicate([-1000000000, 1000000000, -1000000000]), true);
    // assert.equal(containsDuplicate([7, 7, 7, 7]), true);
    // assert.equal(containsDuplicate([1000000000,999999999]), false);
    // assert.equal(containsDuplicate([10,-3,7,0,-3]), true);
    // assert.equal(containsDuplicate([-1000000000,0]), false);
    // assert.equal(containsDuplicate([1000000000]), false);
    // assert.equal(containsDuplicate([0,-1,4,0]), true);
  },
});
