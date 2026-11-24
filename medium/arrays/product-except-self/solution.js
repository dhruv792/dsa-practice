import { runSolution } from '../../../run-solution.js';

/**
 * Product of Array Except Self (Medium)
 *
 * For each index i, compute the product of all input elements except nums[i].
 * Return the products in input order. Do not use division.
 *
 * Worked example
 * For nums = [1, 2, 3, 4], return [24, 12, 8, 6]. The first result multiplies
 * 2 × 3 × 4, and the second multiplies 1 × 3 × 4. Each index leaves out only
 * its own value.
 *
 * Function: productExceptSelf(nums)
 * Returns: An array of integers with the same length as nums.
 *
 * Expected time complexity: O(n), where n is nums.length. Aim for O(1) extra space excluding the returned array.
 *
 * Constraints:
 * - 2 <= nums.length <= 100,000
 * - -30 <= nums[i] <= 30
 * - All prefix and suffix products and output values fit in signed 32-bit integers.
 *
 * Examples are available as commented assertions below.
 */
export function productExceptSelf(nums) {
  // const forward = new Array(nums.length).fill(1)
  // const back = new Array(nums.length).fill(1)
  const res = new Array(nums.length)

  let leftProduct = 1
  for (let i = 0; i<nums.length;i++){
    res[i] = leftProduct
    leftProduct = leftProduct * nums[i]
  }
  
  let rightProduct = 1
  for (let i=nums.length-1;i>=0;i--){
    res[i] *=rightProduct
    rightProduct*=nums[i]
  }


  return res
  

}


// productExceptSelf([2, 3, 0])

runSolution(import.meta.url, productExceptSelf, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
    // assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]).map(value => value === 0 ? 0 : value), [0, 0, 9, 0, 0]);
    // assert.deepEqual(productExceptSelf([0, 2, 0, 4]).map(value => value === 0 ? 0 : value), [0, 0, 0, 0]);
    // assert.deepEqual(productExceptSelf([2, 3]), [3, 2]);
    // assert.deepEqual(productExceptSelf([0, 0]).map(value => value === 0 ? 0 : value), [0, 0]);
    // assert.deepEqual(productExceptSelf([-1, 2, -3]), [-6, 3, -2]);
    // assert.deepEqual(productExceptSelf([2, 2, 2]), [4, 4, 4]);
    // assert.deepEqual(productExceptSelf([1, 1, 1]), [1, 1, 1]);
    // assert.deepEqual(productExceptSelf([2, 3, 0]).map(value => value === 0 ? 0 : value), [0, 0, 6]);
    // assert.deepEqual(productExceptSelf([0, -2, 3]).map(value => value === 0 ? 0 : value), [-6, 0, 0]);
    // assert.deepEqual(productExceptSelf([-2,-3,-4]), [12,8,6]);
    // assert.deepEqual(productExceptSelf([-2,0,3,5]).map(value => value === 0 ? 0 : value), [0,-30,0,0]);
    // assert.deepEqual(productExceptSelf([-1,1,-1,1]), [-1,1,-1,1]);
    // assert.deepEqual(productExceptSelf([0,-2,2,3]).map(value => value === 0 ? 0 : value), [-12, 0, 0, 0]);
    // assert.deepEqual(productExceptSelf([-1,-2,-3,-4]), [-24, -12, -8, -6]);
  },
});
