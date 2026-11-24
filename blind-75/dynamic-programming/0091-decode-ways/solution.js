import { runSolution } from '../../../run-solution.js';

/**
 * 91. Decode Ways (Medium)
 *
 * Decode digit strings with 1 → A through 26 → Z. Count the valid decodings of
 * the nonempty digit string s. A code cannot have a leading zero. Assume the
 * answer fits a signed 32-bit integer.
 *
 * Worked example
 * For s = "226", return 3. Valid splits are 2|2|6, 22|6, and 2|26, yielding
 * "BBF", "VF", and "BZ" respectively. The unsplit number 226 exceeds 26.
 *
 * Function: numDecodings(s)
 * Expected complexity: O(n) time and O(1) extra space, where n is s.length.
 */
export function numDecodings(s) {
  throw new Error('Implement numDecodings');
}

runSolution(import.meta.url, numDecodings, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(numDecodings("226"), 3);
    // assert.equal(numDecodings("06"), 0);
    // assert.equal(numDecodings("101"), 1);
    // assert.equal(numDecodings("27"), 1);
    // assert.equal(numDecodings("30"), 0);
    // assert.equal(numDecodings("1010"), 1);
  },
});
