import { runSolution } from '../../../run-solution.js';

/**
 * 104. Maximum Depth of Binary Tree (Easy)
 *
 * Return the number of nodes on the longest root-to-leaf path. Nodes have
 * `val`, `left`, and `right`. A null root has depth zero.
 *
 * Worked example
 * If root 1 has children 2 and 3, and node 3 has a child 4, return 3. The
 * longest root-to-leaf path is 1 → 3 → 4 and contains three nodes.
 *
 * Function: maxDepth(root)
 * Expected complexity: O(n), where n is the number of tree nodes.
 */
export function maxDepth(root) {
  throw new Error('Implement maxDepth');
}

runSolution(import.meta.url, maxDepth, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(maxDepth({ val: 1, left: null, right: { val: 2, left: null, right: null } }), 2);
    // assert.equal(maxDepth(null), 0);
    // assert.equal(maxDepth({val:1,left:null,right:null}), 1);
    // assert.equal(maxDepth({val:1,left:{val:2,left:null,right:null},right:{val:3,left:{val:4,left:null,right:null},right:null}}), 3);
    // assert.equal(maxDepth({val:0,left:{val:1,left:{val:2,left:null,right:null},right:null},right:{val:3,left:null,right:null}}), 3);
    // assert.equal(maxDepth({val:0,left:null,right:{val:1,left:null,right:{val:2,left:null,right:null}}}), 3);
  },
});
