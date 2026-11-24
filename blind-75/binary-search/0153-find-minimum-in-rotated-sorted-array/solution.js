import { runSolution } from '../../../run-solution.js';

/**
 * 153. Find Minimum in Rotated Sorted Array (Medium)
 *
 * A nonempty strictly increasing array has been rotated an unknown number of
 * times, possibly zero. Return its smallest value.
 *
 * Worked example
 * The sorted array [0, 1, 2, 4, 5, 6, 7] can rotate to [4, 5, 6, 7, 0, 1, 2].
 * Return 0 because it is the smallest value. Its position in the rotated
 * array is 4.
 *
 * Function: findMin(nums)
 * Expected complexity: O(log n), where n is nums.length.
 */
export function findMin(nums) {
  throw new Error('Implement findMin');
}

runSolution(import.meta.url, findMin, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
    // assert.equal(findMin([1,2,3,4]), 1);
    // assert.equal(findMin([2,3,4,1]), 1);
    // assert.equal(findMin([-7]), -7);
    // assert.equal(findMin([3,2]), 2);
    // assert.equal(findMin([0,7,-8,-3]), -8);
  },
});
