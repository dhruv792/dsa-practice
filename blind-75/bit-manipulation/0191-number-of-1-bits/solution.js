import { runSolution } from '../../../run-solution.js';

/**
 * 191. Number of 1 Bits (Easy)
 *
 * Return the number of set bits in the 32-bit unsigned representation of n.
 *
 * The input n is an integer from 0 through 4,294,967,295.
 *
 * Worked example
 * For n = 42, the binary representation is 101010. Three positions contain 1,
 * and padding to 32 bits only adds zeros. Return 3.
 *
 * Function: hammingWeight(n)
 * Expected complexity: O(w) time and O(1) extra space, where w is the fixed bit
 * width of 32.
 */
export function hammingWeight(n) {
  throw new Error('Implement hammingWeight');
}

runSolution(import.meta.url, hammingWeight, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(hammingWeight(4294967295), 32);
    // assert.equal(hammingWeight(0), 0);
    // assert.equal(hammingWeight(2147483648), 1);
    // assert.equal(hammingWeight(42), 3);
    // assert.equal(hammingWeight(2147483649), 2);
    // assert.equal(hammingWeight(4294967294), 31);
  },
});
