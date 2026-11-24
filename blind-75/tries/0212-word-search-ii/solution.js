import { runSolution } from '../../../run-solution.js';

/**
 * 212. Word Search II (Hard)
 *
 * Return all distinct dictionary words found in a rectangular grid. Each word
 * follows side-adjacent cells without reusing a cell in its own path. Output
 * order is irrelevant.
 *
 * Board cells and dictionary words use lowercase English letters. Words are
 * nonempty, and duplicates in the dictionary count once.
 *
 * Worked example
 * For board = [["a", "b"], ["c", "d"]] and words = ["ab", "ac", "ad", "ab"],
 * return "ab" and "ac" in either order. The moves to b and c share a side
 * with a. The move to d would be diagonal, and "ab" is returned only once.
 *
 * Function: findWords(board, words)
 * Expected complexity: O(C + rows × cols × 3^L) worst-case traversal time with
 * a trie, where C is the total dictionary character count, rows and cols are
 * the board dimensions, and L is the maximum dictionary word length. This bound
 * assumes nonempty words and excludes copying individual output strings.
 */
export function findWords(board, words) {
  throw new Error('Implement findWords');
}

runSolution(import.meta.url, findWords, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(findWords([["a","b"],["c","d"]], ["ab","ac","ad","ab"]).sort(), ["ab","ac"]);
    // assert.deepEqual(findWords([["a"]], ["aa","a"]), ["a"]);
    // assert.deepEqual(findWords([["a","a"]], ["a","aa"]).sort(), ["a", "aa"]);
    // assert.deepEqual(findWords([["c","a","t","s"]], ["ca","cat","cats","car"]).sort(), ["ca", "cat", "cats"]);
    // assert.deepEqual(findWords([["c"],["b"],["a"]],["abc","acd"]), ["abc"]);
    // assert.deepEqual(findWords([["a","b"]],["ac","baab"]), []);
  },
});
