import { runSolution } from '../../../run-solution.js';

/**
 * 235. Lowest Common Ancestor of a Binary Search Tree (Medium)
 *
 * Given a BST with distinct values and two values p and q present in it, return
 * the value of their deepest shared ancestor. A node may be its own ancestor.
 * Nodes have `val`, `left`, and `right`.
 *
 * In this local exercise, p and q are numeric values and the return value is
 * the ancestor’s numeric value. The two targets may be equal.
 *
 * Worked example
 * If root 5 has a left child 3 and node 3 has a left child 2, then the
 * ancestor shared by p = 3 and q = 2 is 3. Both share the ancestor 5 as well,
 * but 3 is deeper and counts as its own ancestor.
 *
 * Function: lowestCommonAncestor(root, p, q)
 * Expected complexity: O(h), where h is the tree height.
 */
export function lowestCommonAncestor(root, p, q) {
  throw new Error('Implement lowestCommonAncestor');
}

runSolution(import.meta.url, lowestCommonAncestor, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(lowestCommonAncestor({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, 1, 3), 2);
    // assert.equal(lowestCommonAncestor({val:5,left:{val:3,left:{val:2,left:null,right:null},right:null},right:null},3,2), 3);
    // assert.equal(lowestCommonAncestor({val:5,left:{val:2,left:null,right:null},right:{val:8,left:null,right:null}},8,2), 5);
    // assert.equal(lowestCommonAncestor({val:5,left:null,right:null},5,5), 5);
    // assert.equal(lowestCommonAncestor({val:4,left:null,right:{val:8,left:{val:6,left:null,right:null},right:{val:9,left:null,right:null}}},6,9), 8);
    // assert.equal(lowestCommonAncestor({val:4,left:{val:2,left:null,right:null},right:null},2,4), 4);
  },
});
