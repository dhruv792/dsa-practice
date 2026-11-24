import { runSolution } from '../../../run-solution.js';

/**
 * 98. Validate Binary Search Tree (Medium)
 *
 * Return whether each node value is strictly greater than every value in its
 * left subtree and strictly less than every value in its right subtree. Nodes
 * have `val`, `left`, and `right`. An empty tree is valid.
 *
 * Worked example
 * Suppose the root is 5, its left child is 3, and 3's right child is 6. The
 * answer is false. Although 6 is greater than its parent 3, it is in the left
 * subtree of 5 and must also be less than 5.
 *
 * Function: isValidBST(root)
 * Expected complexity: O(n), where n is the number of tree nodes.
 */
export function isValidBST(root) {
  throw new Error('Implement isValidBST');
}

runSolution(import.meta.url, isValidBST, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(isValidBST({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }), true);
    // assert.equal(isValidBST({val:5,left:{val:3,left:null,right:{val:6,left:null,right:null}},right:null}), false);
    // assert.equal(isValidBST({val:2,left:{val:2,left:null,right:null},right:null}), false);
    // assert.equal(isValidBST(null), true);
    // assert.equal(isValidBST({val:0,left:{val:-2147483648,left:null,right:null},right:{val:2147483647,left:null,right:null}}), true);
    // assert.equal(isValidBST({val:3,left:null,right:{val:5,left:{val:3,left:null,right:null},right:null}}), false);
  },
});
