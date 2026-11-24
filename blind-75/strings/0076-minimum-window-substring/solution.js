import { runSolution } from '../../../run-solution.js';

/**
 * 76. Minimum Window Substring (Hard)
 *
 * Return a shortest contiguous substring of s containing every character of t
 * with at least its multiplicity in t. Return an empty string if no window
 * exists or t is empty. Any shortest window is valid.
 *
 * Characters are case-sensitive. For example, t = "aa" requires two a's.
 *
 * Worked example
 * For s = "ADOBECODEBANC" and t = "ABC", return "BANC". That window includes
 * A, B, and C and is shorter than the earlier window "ADOBEC". The letters
 * from t can appear in any order in the window.
 *
 * Function: minWindow(s, t)
 * Expected complexity: O(s.length + t.length) average-case.
 */
export function minWindow(s, t) {
  throw new Error('Implement minWindow');
}

runSolution(import.meta.url, minWindow, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
    // assert.equal(minWindow("aXbYaZ", "aa"), "aXbYa");
    // assert.equal(minWindow("a", "aa"), "");
    // assert.ok(["ab", "ba"].includes(minWindow("aba", "ab")));
    // assert.equal(minWindow("xyza","a"), "a");
    // assert.equal(minWindow("xyz",""), "");
  },
});
