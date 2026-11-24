import { runSolution } from '../../../run-solution.js';

/**
 * 1143. Longest Common Subsequence (Medium)
 *
 * Return the maximum length of a sequence that occurs in both strings in the
 * same relative order. Characters may be skipped. Return 0 if nothing is
 * shared.
 *
 * Worked example
 * For text1 = "abcde" and text2 = "ace", return 3. The characters "ace"
 * appear in order in both inputs. In the first input they skip b and d, which
 * is allowed for a subsequence.
 *
 * Function: longestCommonSubsequence(text1, text2)
 * Expected complexity: O(n × m) for nonempty inputs, where n is text1.length
 * and m is text2.length.
 */
export function longestCommonSubsequence(text1, text2) {
  throw new Error('Implement longestCommonSubsequence');
}

runSolution(import.meta.url, longestCommonSubsequence, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(longestCommonSubsequence("abcde", "ace"), 3);
    // assert.equal(longestCommonSubsequence("xaybz", "pabq"), 2);
    // assert.equal(longestCommonSubsequence("abc", "def"), 0);
    // assert.equal(longestCommonSubsequence("", "abc"), 0);
    // assert.equal(longestCommonSubsequence("aaaa","aa"), 2);
    // assert.equal(longestCommonSubsequence("abc","cba"), 1);
  },
});
