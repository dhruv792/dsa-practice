import { runSolution } from '../../../run-solution.js';

/**
 * Valid Anagram (Easy)
 *
 * Given strings s and t, determine whether rearranging the characters of s
 * can produce t. Each letter must appear the same number of times in both strings.
 *
 * Worked example
 * For s = "aab" and t = "abb", return false. They contain the same letters
 * and have the same length, but s contains two copies of a while t contains
 * one. Anagrams must also match each letter's count.
 *
 * Function: isAnagram(s, t)
 * Returns: A boolean indicating whether the strings are anagrams.
 *
 * Expected time complexity: O(n + m), where n and m are the lengths of s and t.
 *
 * Constraints:
 * - 0 <= s.length, t.length <= 100,000
 * - Both strings contain only lowercase English letters.
 *
 * Examples are available as commented assertions below.
 */
export function isAnagram(s, t) {
  if (s.length != t.length){
    return false
  }
  const map1 = {}
  for (let i = 0;i<s.length;i++){
    const char = s.charAt(i)
    if(map1[char] != undefined){
      map1[char]++
    }else{
      map1[s.charAt(i)] = 1
    }
  }
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i)
    if (map1[char] != undefined) {
      map1[char]--
      if (map1[char] == 0){
        delete map1[char]
      }
    }else {
      return false
    }
  }

return true


}

runSolution(import.meta.url, isAnagram, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(isAnagram("anagram", "nagaram"), true);
    // assert.equal(isAnagram("rat", "car"), false);
    // assert.equal(isAnagram("aab", "abb"), false);
    // assert.equal(isAnagram("", ""), true);
    // assert.equal(isAnagram("a", "aa"), false);
    // assert.equal(isAnagram("", "a"), false);
    // assert.equal(isAnagram("z", "z"), true);
    // assert.equal(isAnagram("zzzzaa", "azazzz"), true);
    // assert.equal(isAnagram("aabbcc", "abbbcc"), false);
    // assert.equal(isAnagram("azbycx", "xcybza"), true);
    // assert.equal(isAnagram("aaaazzz","zzzaaaa"), true);
    // assert.equal(isAnagram("yyzz","yzzz"), false);
    // assert.equal(isAnagram("abcdef","fedcba"), true);
    // assert.equal(isAnagram("ab","abb"), false);
    // assert.equal(isAnagram("zzaz","zzaz"), true);
  },
});
