import { runSolution } from '../../../run-solution.js';

/**
 * 269. Alien Dictionary (Hard)
 *
 * Words are sorted under an unknown lowercase-letter alphabet. Return any
 * ordering of every distinct letter consistent with the words. Return an empty
 * string if the order is impossible, including when a longer word precedes its
 * own prefix.
 *
 * Each word is nonempty and contains lowercase English letters. Whenever two
 * words first differ, the letter in the earlier word must precede the other
 * letter.
 *
 * Compare words from left to right under the unknown alphabet. A shorter word
 * comes first if it is a prefix of the longer word.
 *
 * Worked example
 * With words = ["z", "x", "z"], the first pair requires z before x. The
 * second pair requires x before z. No alphabet can satisfy both constraints,
 * so return "".
 *
 * Function: alienOrder(words)
 * Expected complexity: O(C + V + E), where C is the total number of input
 * characters, V is the number of distinct letters, and E is the number of
 * distinct precedence constraints between letters. Words are nonempty, so their
 * count is at most C.
 */
export function alienOrder(words) {
  throw new Error('Implement alienOrder');
}

runSolution(import.meta.url, alienOrder, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]), "wertf");
    // assert.equal(alienOrder(["abc","ab"]), "");
    // assert.equal(alienOrder(["z","x","z"]), "");
    // assert.deepEqual(alienOrder(["abc"]).split("").sort(), ["a","b","c"]);
    // assert.deepEqual(alienOrder(["ab","abc"]).split("").sort(), ["a","b","c"]);
    // assert.equal(alienOrder(["c","b","a"]), "cba");
  },
});
