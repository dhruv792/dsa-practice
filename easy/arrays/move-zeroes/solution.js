import { runSolution } from '../../../run-solution.js';

/**
 * Move Zeroes (Easy)
 *
 * Move every zero in nums to the end while preserving the relative order
 * of the nonzero values. Modify the input array in place using O(1) extra space.
 *
 * Worked example
 * For nums = [0, 1, 0, 3, 12], modify that array to [1, 3, 12, 0, 0]. The
 * nonzero entries keep their original relative order, and the two zeros
 * occupy the last two positions.
 *
 * Function: moveZeroes(nums)
 * Returns: Nothing. The tests inspect the input array after the call.
 *
 * Expected time complexity: O(n), where n is nums.length.
 *
 * Constraints:
 * - 0 <= nums.length <= 100,000
 * - -10^9 <= nums[i] <= 10^9
 *
 * Examples are available as commented assertions below.
 */
export function moveZeroes(nums) {
    let left = 0, right=0
    while(right < nums.length){
        if(nums[left]!=0){
          left++
          right++
          continue
        } else if(nums[right] != 0){
          nums[left] = nums[right]
          nums[right] = 0
          left++
        } else
        right++
    }
}

runSolution(import.meta.url, moveZeroes, {
  outputArgument: 0,
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // { const nums = [0, 1, 0, 3, 12]; moveZeroes(nums); assert.deepEqual(nums, [1, 3, 12, 0, 0]); }
    // { const nums = [0, -2, 0, -1]; moveZeroes(nums); assert.deepEqual(nums, [-2, -1, 0, 0]); }
    // { const nums = [0, 0]; moveZeroes(nums); assert.deepEqual(nums, [0, 0]); }
    // { const nums = []; moveZeroes(nums); assert.deepEqual(nums, []); }
    // { const nums = [1, 2, 3]; moveZeroes(nums); assert.deepEqual(nums, [1, 2, 3]); }
    // { const nums = [1, 0, 2]; moveZeroes(nums); assert.deepEqual(nums, [1, 2, 0]); }
    // { const nums = [1, 2, 0, 0]; moveZeroes(nums); assert.deepEqual(nums, [1, 2, 0, 0]); }
    // { const nums = [0, 0, 2, 1]; moveZeroes(nums); assert.deepEqual(nums, [2, 1, 0, 0]); }
    // { const nums = [0]; moveZeroes(nums); assert.deepEqual(nums, [0]); }
    // { const nums = [0, 2, 0, 2, 1]; moveZeroes(nums); assert.deepEqual(nums, [2, 2, 1, 0, 0]); }
    // { const nums = [0,-3,2,-3,0]; moveZeroes(nums); assert.deepEqual(nums, [-3,2,-3,0,0]); }
    // { const nums = [6]; moveZeroes(nums); assert.deepEqual(nums, [6]); }
    // { const nums = [4,0,0,5]; moveZeroes(nums); assert.deepEqual(nums, [4,5,0,0]); }
    // { const nums = [-1,0,-2,0,-3,0]; moveZeroes(nums); assert.deepEqual(nums,[-1,-2,-3,0,0,0]); }
    // { const nums = [0,9]; moveZeroes(nums); assert.deepEqual(nums,[9,0]); }
  },
});
