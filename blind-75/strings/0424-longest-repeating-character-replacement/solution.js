import { runSolution } from '../../../run-solution.js';

/**
 * 424. Longest Repeating Character Replacement (Medium)
 *
 * Given uppercase English letters and k >= 0, return the maximum length of a
 * contiguous substring that can be made all one letter by changing at most k
 * characters.
 *
 * The empty string yields zero. The character budget counts total replacements
 * in the chosen substring.
 *
 * Each replacement can change one character to any uppercase English letter.
 *
 * Worked example
 * For s = "AABBA" and k = 1, return 3. You can turn "AAB" into "AAA" with one
 * replacement. Both length-four windows ("AABB" and "ABBA") have two As and
 * two Bs, so either needs two replacements.
 *
 * Function: characterReplacement(s, k)
 * Expected complexity: O(n), where n is s.length.
 */
export function characterReplacement(s, k) {
  throw new Error('Implement characterReplacement');
}

runSolution(import.meta.url, characterReplacement, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(characterReplacement("AABABBA", 1), 4);
    // assert.equal(characterReplacement("AABBA",0), 2);
    // assert.equal(characterReplacement("ABCD",3), 4);
    // assert.equal(characterReplacement("ABBBAC",1), 4);
    // assert.equal(characterReplacement("ABCBBB",1), 5);
    // assert.equal(characterReplacement("",2), 0);
  },
});
