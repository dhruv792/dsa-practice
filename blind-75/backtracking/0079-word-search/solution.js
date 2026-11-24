import { runSolution } from '../../../run-solution.js';

/**
 * 79. Word Search (Medium)
 *
 * Return whether word can be formed by a path through side-adjacent cells in a
 * rectangular letter grid. Each cell may be used at most once per path. The
 * empty word is valid.
 *
 * Board cells are single characters and matches are case-sensitive.
 *
 * You can start from any cell. Each move must stay within the board.
 *
 * Worked example
 * In board = [["A", "B"], ["C", "D"]], the word "ABD" exists. Start at (0,
 * 0), move right to B at (0, 1), then down to D at (1, 1). The word "AD" is
 * absent because those cells only touch diagonally.
 *
 * Function: exist(board, word)
 * Expected complexity: O(rows × cols × 3^L) worst-case time for L >= 1, where
 * rows and cols are the board dimensions and L is word.length.
 */
export function exist(board, word) {
  throw new Error('Implement exist');
}

runSolution(import.meta.url, exist, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(exist([["A","B"],["C","D"]], "ABD"), true);
    // assert.equal(exist([["A","B"]], "ABA"), false);
    // assert.equal(exist([["A","X"],["X","B"]], "AB"), false);
    // assert.equal(exist([["A","B","X"],["X","X","X"],["A","B","C"]], "ABC"), true);
    // assert.equal(exist([["A"]],""), true);
    // assert.equal(exist([["A","B"],["C","D"]],"DBA"), true);
  },
});
