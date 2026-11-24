import { runSolution } from '../../../run-solution.js';

/**
 * Subarray Sum Equals K (Medium)
 *
 * Count the nonempty contiguous subarrays of nums whose elements sum to k.
 * Count subarrays by their index ranges, even if their contents are identical.
 *
 * Worked example
 * For nums = [1, 1, 1] and k = 2, return 2. Both index ranges 0–1 and 1–2 sum
 * to 2, and each counts even though their values are identical. Indices 0 and
 * 2 alone are not a contiguous subarray.
 *
 * Function: subarraySum(nums, k)
 * Returns: The number of matching subarrays.
 *
 * Expected time complexity: O(n) average-case, where n is nums.length.
 *
 * Constraints:
 * - 0 <= nums.length <= 100,000
 * - -10,000 <= nums[i] <= 10,000
 * - -10^9 <= k <= 10^9
 *
 * Examples are available as commented assertions below.
 */
export function subarraySum(nums, k) {
    let left = 0
    let right = 0
    let res = 0
    let sum = 0
    while(left < nums.length && right < nums.length){
        sum +=nums[right]
        if (sum == k){
            res+=1
        }

        if (sum < k){
            right++
        } else {
            left++
        }

        if(left == right){
            right++
        }
    }

    return res

}

runSolution(import.meta.url, subarraySum, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(subarraySum([1, 1, 1], 2), 2);
    // assert.equal(subarraySum([1, 2, 3], 3), 2);
    // assert.equal(subarraySum([], 0), 0);
    // assert.equal(subarraySum([1], 0), 0);
    // assert.equal(subarraySum([0, 0, 0], 0), 6);
    // assert.equal(subarraySum([1, -1, 1, -1], 0), 4);
    // assert.equal(subarraySum([-2, 1, -1, -2], -2), 4);
    // assert.equal(subarraySum([-5], -5), 1);
    // assert.equal(subarraySum([0, 3], 3), 2);
    // assert.equal(subarraySum([2, 4, 6], 3), 0);
    // assert.equal(subarraySum([3,0,0,3],3), 6);
    // assert.equal(subarraySum([4,-2,-1,2,3],3), 2);
    // assert.equal(subarraySum([1,2,3],0), 0);
    // assert.equal(subarraySum([-1,1,-1,1],0), 4);
    // assert.equal(subarraySum([0,-1,1],0), 3);
  },
});
