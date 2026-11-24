import { runSolution } from '../../../run-solution.js';

/**
 * 139. Word Break (Medium)
 *
 * Return whether s can be partitioned into contiguous dictionary words.
 * Dictionary words are nonempty and can be reused. The empty string is
 * segmentable.
 *
 * Dictionary matching is case-sensitive. An empty dictionary can segment only
 * the empty string.
 *
 * Worked example
 * For s = "appleapple" and wordDict = ["apple"], return true. Both halves
 * match the same dictionary entry, which may be reused. With s = "appleap",
 * the leftover "ap" cannot be matched, so return false.
 *
 * Function: wordBreak(s, wordDict)
 * Expected complexity: O(D + n × L²) average-case time for dictionary lookups
 * that construct candidate substrings, where n is s.length, L is the maximum
 * word length (0 for an empty dictionary), and D is the total number of
 * dictionary characters. Return early for an empty dictionary. A trie can avoid
 * allocating substrings.
 */
export function wordBreak(s, wordDict) {
  throw new Error('Implement wordBreak');
}

runSolution(import.meta.url, wordBreak, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(wordBreak("leetcode", ["leet", "code"]), true);
    // assert.equal(wordBreak("catsandog", ["cats","dog","sand","and","cat"]), false);
    // assert.equal(wordBreak("appleapple", ["apple"]), true);
    // assert.equal(wordBreak("", []), true);
    // assert.equal(wordBreak("aaaaab",["aaa","aaaa","ab"]), true);
    // assert.equal(wordBreak("a",[]), false);
  },
});
