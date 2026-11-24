import { runSolution } from '../../../run-solution.js';

/**
 * Two Sum (Easy)
 *
 * Given an array of integers nums and an integer target, find two elements
 * whose values add up to target. Exactly one valid pair of distinct indices
 * exists. A value may appear more than once, and each index can be used once.
 *
 * Worked example
 * For nums = [2, 7, 11, 15] and target = 9, return [0, 1] or [1, 0]. The
 * values at indices 0 and 1 are 2 and 7, and their sum is 9. The output
 * contains the indices.
 *
 * Function: twoSum(nums, target)
 * Returns: An array of two zero-based indices in either order.
 *
 * Expected time complexity: O(n) average-case, where n is nums.length.
 *
 * Constraints:
 * - 2 <= nums.length <= 10,000
 * - -10^9 <= nums[i], target <= 10^9
 *
 * Examples are available as commented assertions below.
 */
export function twoSum(nums, target) {
    let map = new Map()
    let a,b, bIndex
    for (let i=0;i<nums.length;i++){
        a= nums[i]
        b = target - a
        bIndex = map.get(b)
        if (bIndex != undefined) return [i, bIndex]
        map.set(a, i)
    }
}

runSolution(import.meta.url, twoSum, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.deepEqual(twoSum([2, 7, 11, 15], 9).slice().sort((a, b) => a - b), [0, 1]);
    // assert.deepEqual(twoSum([3, 3], 6).slice().sort((a, b) => a - b), [0, 1]);
    // assert.deepEqual(twoSum([4, -3, 8, 2], -1).slice().sort((a, b) => a - b), [1, 3]);
    // assert.deepEqual(twoSum([1, 5, 8, 10], 11).slice().sort((a, b) => a - b), [0, 3]);
    // assert.deepEqual(twoSum([4, 1, 7], 8).slice().sort((a, b) => a - b), [1, 2]);
    // assert.deepEqual(twoSum([0, 9, 4], 4).slice().sort((a, b) => a - b), [0, 2]);
    // assert.deepEqual(twoSum([5, 0, 0], 0).slice().sort((a, b) => a - b), [1, 2]);
    // assert.deepEqual(twoSum([-8, -4, 3, -1], -12).slice().sort((a, b) => a - b), [0, 1]);
    // assert.deepEqual(twoSum([2, 2, 3, 7], 10).slice().sort((a, b) => a - b), [2, 3]);
    // assert.deepEqual(twoSum([1000000000, 1, -1000000000], 0).slice().sort((a, b) => a - b), [0, 2]);
    // assert.deepEqual(twoSum([6,-5,0,11], -5).slice().sort((a,b) => a-b), [1,2]);
    // assert.deepEqual(twoSum([6,-7,12,-2], -9).slice().sort((a,b) => a-b), [1,3]);
    // assert.deepEqual(twoSum([8,10,3,4], 7).slice().sort((a,b) => a-b), [2,3]);
    // assert.deepEqual(twoSum([0,4,0],0).slice().sort((a,b) => a-b),[0,2]);
    // assert.deepEqual(twoSum([-6,9,2,1],-5).slice().sort((a,b) => a-b),[0,3]);
  },
});
