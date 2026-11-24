import { runSolution } from '../../../run-solution.js';

/**
 * Longest Substring Without Repeating Characters (Medium)
 *
 * Given a string s, find the maximum length of a contiguous substring in
 * which every character occurs at most once. Characters are case-sensitive.
 * Spaces count as characters.
 *
 * Worked example
 * For s = "pwwkew", return 3. The contiguous substrings "wke" and "kew" have
 * no repeated characters. Although p, w, k, and e appear in that order,
 * getting "pwke" requires skipping a character.
 *
 * Function: lengthOfLongestSubstring(s)
 * Returns: The maximum substring length, or 0 if s is empty.
 *
 * Expected time complexity: O(n), where n is s.length.
 *
 * Constraints:
 * - 0 <= s.length <= 50,000
 * - s contains only ASCII characters.
 *
 * Examples are available as commented assertions below.
 */
export function lengthOfLongestSubstring(s) {
  let left = 0
  let right = 0
  let map = {}
  let longest =0
  let localLongest = 0
  while (right < s.length){
    const char = s.charAt(right)

    if (map[char] === undefined){
      map[char] = right
      right++
      localLongest++
      longest = localLongest > longest ? localLongest : longest
    } else {
      left = Math.max(left, map[char]+1)
      map[char] = right
      right++
      localLongest = right - left
      longest = localLongest > longest ? localLongest:longest
    }

  }
  return longest
}

runSolution(import.meta.url, lengthOfLongestSubstring, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(lengthOfLongestSubstring("pwwkew"), 3);
    // assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
    // assert.equal(lengthOfLongestSubstring("abba"), 2);
    // assert.equal(lengthOfLongestSubstring("abbac"), 3);
    // assert.equal(lengthOfLongestSubstring("dvdfv"), 3);
    // assert.equal(lengthOfLongestSubstring("tmmzuxt"), 5);
    // assert.equal(lengthOfLongestSubstring(""), 0);
    // assert.equal(lengthOfLongestSubstring("x"), 1);
    // assert.equal(lengthOfLongestSubstring("abcd"), 4);
    // assert.equal(lengthOfLongestSubstring("dvdf"), 3);
    // assert.equal(lengthOfLongestSubstring("abcdeaa"), 5);
    // assert.equal(lengthOfLongestSubstring("aA"), 2);
    // assert.equal(lengthOfLongestSubstring("a b c"), 3);
    // assert.equal(lengthOfLongestSubstring("abccdea"), 4);
    // assert.equal(lengthOfLongestSubstring("a!a?b"), 4);
    // assert.equal(lengthOfLongestSubstring("aaabccdefg"), 5);
    // assert.equal(lengthOfLongestSubstring("tmmzuxty"), 6);
    // assert.equal(lengthOfLongestSubstring("abABa"), 4);
  },
});
