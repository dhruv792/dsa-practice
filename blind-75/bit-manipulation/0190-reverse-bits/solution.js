import { runSolution } from '../../../run-solution.js';

/**
 * 190. Reverse Bits (Easy)
 *
 * Reverse all 32 bits of an unsigned input integer, including leading zeros.
 * Return the result as an unsigned JavaScript number.
 *
 * The input n is an integer from 0 through 4,294,967,295.
 *
 * Worked example
 * For n = 1, the 32-bit representation ends in 1 and has 31 leading zeros.
 * Reversing all 32 positions puts the 1 at the leftmost position, which
 * represents 2^31. Return 2147483648.
 *
 * Function: reverseBits(n)
 * Expected complexity: O(w) time and O(1) extra space, where w is the fixed bit
 * width of 32.
 */
export function reverseBits(n) {
  throw new Error('Implement reverseBits');
}

runSolution(import.meta.url, reverseBits, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(reverseBits(1), 2147483648);
    // assert.equal(reverseBits(2147483648), 1);
    // assert.equal(reverseBits(0), 0);
    // assert.equal(reverseBits(3), 3221225472);
    // assert.equal(reverseBits(4294967295), 4294967295);
    // assert.equal(reverseBits(2863311530), 1431655765);
  },
});
