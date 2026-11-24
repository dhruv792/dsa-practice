import { runSolution } from '../../../run-solution.js';

/**
 * 211. Design Add and Search Words Data Structure (Medium)
 *
 * Implement WordDictionary with addWord(word) and search(pattern). Words use
 * lowercase letters, and a dot in a pattern matches exactly one letter. Search
 * matches whole words. The runner returns null for construction and additions,
 * and booleans for searches.
 *
 * The first operation is the constructor, with a matching argument array.
 *
 * The operations and args arrays have the same length. Each args entry is an
 * array of arguments for its operation.
 *
 * Worked example
 * After adding "bad" and "cat", search(".at") returns true because the dot
 * can match c in "cat". search("..") returns false because the pattern has
 * two positions and both stored words have three.
 *
 * Function: runWordDictionary(operations, args)
 * Expected complexity: O(L) per insertion for word length L. Search takes O(S)
 * where S is the number of trie states explored for the pattern. Wildcards can
 * cause branching.
 */
export class WordDictionary {
  addWord(word) {
    throw new Error('Implement WordDictionary.addWord');
  }

  search(pattern) {
    throw new Error('Implement WordDictionary.search');
  }
}

export function runWordDictionary(operations, args) {
  const instance = new WordDictionary(...args[0]);
  return operations.map((operation, index) => {
    if (index === 0) return null;
    return instance[operation](...args[index]) ?? null;
  });
}

runSolution(import.meta.url, runWordDictionary, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(runWordDictionary(["WordDictionary","addWord","search","search"], [[],["bad"],[".ad"],["b..e"]]), [null,null,true,false]);
    // assert.deepEqual(runWordDictionary(["WordDictionary","addWord","search","search","search"], [[],["abc"],["."],["..."],["...."]]), [null, null, false, true, false]);
    // assert.deepEqual(runWordDictionary(["WordDictionary","addWord","addWord","search"], [[],["bad"],["cat"],[".at"]]), [null, null, null, true]);
    // assert.deepEqual(runWordDictionary(["WordDictionary","addWord","addWord","search","search"], [[],["one"],["one"],["one"],["two"]]), [null, null, null, true, false]);
    // assert.deepEqual(runWordDictionary(["WordDictionary","search"],[[],["."]]), [null, false]);
    // assert.deepEqual(runWordDictionary(["WordDictionary","addWord","search","search"],[[],["moon"],["moo."],["mo."]]), [null, null, true, false]);
  },
});
