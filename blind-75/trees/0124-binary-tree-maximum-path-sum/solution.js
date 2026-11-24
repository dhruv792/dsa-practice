import { runSolution } from '../../../run-solution.js';

/**
 * 124. Binary Tree Maximum Path Sum (Hard)
 *
 * Given a nonempty binary tree of integer values, return the maximum sum of any
 * nonempty simple path. The path can start and end anywhere, moving along
 * parent-child edges. Nodes have `val`, `left`, and `right`.
 *
 * Worked example
 * Suppose root -10 has children 9 and 20, and node 20 has children 15 and 7.
 * The best path is 15 → 20 → 7, giving 42. The path need not go through the
 * root, and it cannot use any node twice.
 *
 * Function: maxPathSum(root)
 * Expected complexity: O(n), where n is the number of tree nodes.
 */
export function maxPathSum(root) {
  throw new Error('Implement maxPathSum');
}

runSolution(import.meta.url, maxPathSum, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(maxPathSum({ val: -3, left: null, right: null }), -3);
    // assert.equal(maxPathSum({val:-10,left:{val:9,left:null,right:null},right:{val:20,left:{val:15,left:null,right:null},right:{val:7,left:null,right:null}}}), 42);
    // assert.equal(maxPathSum({val:-8,left:{val:-3,left:null,right:null},right:{val:-5,left:null,right:null}}), -3);
    // assert.equal(maxPathSum({val:1,left:{val:2,left:null,right:null},right:{val:3,left:null,right:null}}), 6);
    // assert.equal(maxPathSum({val:3,left:{val:-4,left:null,right:null},right:{val:5,left:null,right:null}}), 8);
    // assert.equal(maxPathSum({val:0,left:null,right:null}), 0);
  },
});
