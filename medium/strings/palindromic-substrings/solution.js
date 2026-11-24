import { runSolution } from '../../../run-solution.js';

/**
 * Palindromic Substrings (Medium)
 *
 * Count all nonempty contiguous substrings of s that read the same forward
 * and backward. Count each occurrence by its start and end indices. For
 * example, "aaa" contains three occurrences of "a", two of "aa", and one
 * of "aaa", for a total of 6. Characters are case-sensitive.
 *
 * Worked example
 * For s = "aaa", return 6. There are three length-one ranges, two length-two
 * ranges, and one length-three range. Each range counts once even when
 * another range has identical text.
 *
 * Function: countSubstrings(s)
 * Returns: The number of palindromic substrings, or 0 if s is empty.
 *
 * Expected time complexity: O(n²) or better, where n is s.length.
 *
 * Constraints:
 * - 0 <= s.length <= 1,000
 * - s contains only ASCII letters and digits.
 *
 * Examples are available as commented assertions below.
 */
export function countSubstrings(s) {
  let total = 0

  function expand(left, right) {

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      total++
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++){
    expand(i,i)
    expand(i,i+1)
  }

  return total

}

runSolution(import.meta.url, countSubstrings, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(countSubstrings(""), 0);
    // assert.equal(countSubstrings("x"), 1);
    // assert.equal(countSubstrings("abc"), 3);
    // assert.equal(countSubstrings("aaa"), 6);
    // assert.equal(countSubstrings("aba"), 4);
    // assert.equal(countSubstrings("abba"), 6);
    // assert.equal(countSubstrings("ababa"), 9);
    // assert.equal(countSubstrings("aabbaa"), 11);
    // assert.equal(countSubstrings("Aa"), 2);
    // assert.equal(countSubstrings("x121x"), 7);
    // assert.equal(countSubstrings("abacdc"), 8);
    // assert.equal(countSubstrings("aabb"), 6);
    // assert.equal(countSubstrings("00100"), 9);
    // assert.equal(countSubstrings("aaaa"), 10);
    // assert.equal(countSubstrings("AaA"), 4);
  },
});
