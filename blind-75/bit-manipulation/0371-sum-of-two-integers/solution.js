import { runSolution } from '../../../run-solution.js';

/**
 * 371. Sum of Two Integers (Medium)
 *
 * Add two signed 32-bit integers without using addition or subtraction
 * operators. Return the signed 32-bit result. The mathematical sum fits that
 * range.
 *
 * Worked example
 * For a = -8 and b = 11, return 3. In 32-bit binary, the carry out of the
 * highest position is discarded, leaving the representation of 3. The
 * restriction on + and - applies to your implementation.
 *
 * Function: getSum(a, b)
 * Expected complexity: O(w) time and O(1) extra space, where w is the fixed bit
 * width of 32.
 */
export function getSum(a, b) {
  throw new Error('Implement getSum');
}

runSolution(import.meta.url, getSum, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(getSum(-8, 11), 3);
    // assert.equal(getSum(1023,1), 1024);
    // assert.equal(getSum(-7,-9), -16);
    // assert.equal(getSum(12345,-12345), 0);
    // assert.equal(getSum(2147483647,0), 2147483647);
    // assert.equal(getSum(-2147483647,-1), -2147483648);
  },
});
