import { runSolution } from '../../../run-solution.js';

/**
 * 152. Maximum Product Subarray (Medium)
 *
 * Given a nonempty integer array, return the greatest product over all nonempty
 * contiguous subarrays. Integers may be negative or zero. Assume intermediate
 * contiguous products fit in signed 32 bits.
 *
 * The selected range can contain one element or cover the whole array.
 *
 * Worked example
 * For nums = [-2, 3, -4], return 24. Multiplying the entire range gives -2 ×
 * 3 × -4 = 24, which is greater than the product of any shorter range.
 *
 * Function: maxProduct(nums)
 * Expected complexity: O(n), where n is nums.length.
 */
export function maxProduct(nums) {
  throw new Error('Implement maxProduct');
}

runSolution(import.meta.url, maxProduct, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(maxProduct([2, 3, -2, 4]), 6);
    // assert.equal(maxProduct([-2,3,-4]), 24);
    // assert.equal(maxProduct([-2,0,-1]), 0);
    // assert.equal(maxProduct([-3]), -3);
    // assert.equal(maxProduct([0,-2,-3]), 6);
    // assert.equal(maxProduct([-1,-2,-3]), 6);
  },
});
