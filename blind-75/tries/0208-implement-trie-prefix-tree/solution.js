import { runSolution } from '../../../run-solution.js';

/**
 * 208. Implement Trie (Prefix Tree) (Medium)
 *
 * Implement a Trie class for lowercase words with insert(word), search(word)
 * for exact matches, and startsWith(prefix). The runner returns null for
 * construction and insertions, and booleans for queries.
 *
 * The first operation is the constructor, with a matching argument array.
 *
 * The operations and args arrays have the same length. Each args entry is an
 * array of arguments for its operation.
 *
 * Worked example
 * Insert "apple". search("app") returns false because "app" was never
 * inserted as a complete word. startsWith("app") returns true because those
 * characters begin "apple".
 *
 * Function: runTrie(operations, args)
 * Expected complexity: O(L) per operation, where L is the length of the
 * supplied word or prefix.
 */
export class Trie {
  insert(word) {
    throw new Error('Implement Trie.insert');
  }

  search(word) {
    throw new Error('Implement Trie.search');
  }

  startsWith(prefix) {
    throw new Error('Implement Trie.startsWith');
  }
}

export function runTrie(operations, args) {
  const instance = new Trie(...args[0]);
  return operations.map((operation, index) => {
    if (index === 0) return null;
    return instance[operation](...args[index]) ?? null;
  });
}

runSolution(import.meta.url, runTrie, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(runTrie(["Trie","insert","search","search","startsWith"], [[],["apple"],["apple"],["app"],["app"]]), [null,null,true,false,true]);
    // assert.deepEqual(runTrie(["Trie","insert","startsWith","search","insert","search"], [[],["car"],["ca"],["ca"],["ca"],["ca"]]), [null, null, true, false, null, true]);
    // assert.deepEqual(runTrie(["Trie","insert","search","startsWith"], [[],["cat"],["dog"],["co"]]), [null, null, false, false]);
    // assert.deepEqual(runTrie(["Trie","insert","insert","search","search"], [[],["cat"],["can"],["cat"],["can"]]), [null, null, null, true, true]);
    // assert.deepEqual(runTrie(["Trie","search","startsWith"],[[],["a"],["a"]]), [null, false, false]);
    // assert.deepEqual(runTrie(["Trie","insert","insert","search"],[[],["a"],["a"],["a"]]), [null, null, null, true]);
  },
});
