import { runSolution } from '../../../run-solution.js';

/**
 * 338. Counting Bits (Easy)
 *
 * For n >= 0, return an array of length n + 1 whose entry i is the number of
 * set bits in i.
 *
 * The input n is a nonnegative integer.
 *
 * Worked example
 * For n = 5, return [0, 1, 1, 2, 1, 2]. These entries count the ones in 0, 1,
 * 10, 11, 100, and 101 in binary, respectively. The first entry belongs to
 * the number 0.
 *
 * Function: countBits(n)
 * Expected complexity: O(n) time, where n is the maximum input value to include
 * and the result has n + 1 entries.
 */
export function countBits(n) {
  throw new Error('Implement countBits');
}

runSolution(import.meta.url, countBits, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(countBits(5), [0,1,1,2,1,2]);
    // assert.deepEqual(countBits(0), [0]);
    // assert.deepEqual(countBits(8), [0, 1, 1, 2, 1, 2, 2, 3, 1]);
    // assert.deepEqual(countBits(3), [0, 1, 1, 2]);
    // assert.deepEqual(countBits(4), [0, 1, 1, 2, 1]);
    // assert.deepEqual(countBits(1), [0, 1]);
  },
});
