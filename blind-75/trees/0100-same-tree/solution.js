import { runSolution } from '../../../run-solution.js';

/**
 * 100. Same Tree (Easy)
 *
 * Return whether p and q have identical shape and values. Nodes have `val`,
 * `left`, and `right`; null represents absence.
 *
 * Worked example
 * Both roots have value 1. In the first tree, its only child is a left
 * child with value 2. In the second tree, its only child is a right child
 * with value 2. Return false because the child positions differ.
 *
 * Function: isSameTree(p, q)
 * Expected complexity: O(n + m) as an upper bound, where n and m are the node
 * counts of p and q.
 */
export function isSameTree(p, q) {
  throw new Error('Implement isSameTree');
}

runSolution(import.meta.url, isSameTree, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(isSameTree({ val: 1, left: null, right: null }, { val: 2, left: null, right: null }), false);
    // assert.equal(isSameTree(null,null), true);
    // assert.equal(isSameTree({val:1,left:{val:2,left:null,right:null},right:null},{val:1,left:null,right:{val:2,left:null,right:null}}), false);
    // assert.equal(isSameTree({val:-1,left:null,right:null},{val:-1,left:null,right:null}), true);
    // assert.equal(isSameTree(null,{val:0,left:null,right:null}), false);
    // assert.equal(isSameTree({val:0,left:null,right:{val:1,left:null,right:null}},{val:0,left:null,right:{val:2,left:null,right:null}}), false);
  },
});
