import { runSolution } from '../../../run-solution.js';

/**
 * 230. Kth Smallest Element in a BST (Medium)
 *
 * Given a nonempty binary search tree of distinct values, return the kth
 * smallest value. k starts at 1 and is valid. Nodes have `val`, `left`, and
 * `right`.
 *
 * A value’s rank is its position in the ascending order of all tree values.
 *
 * Worked example
 * In the BST with root 3, left child 1, right child 4, and a right child 2
 * under node 1, the values in sorted order are [1, 2, 3, 4]. For k = 2,
 * return 2.
 *
 * Function: kthSmallest(root, k)
 * Expected complexity: O(h + k), where h is the tree height and k is the
 * requested one-based rank.
 */
export function kthSmallest(root, k) {
  throw new Error('Implement kthSmallest');
}

runSolution(import.meta.url, kthSmallest, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(kthSmallest({ val: 2, left: { val: 1, left: null, right: null }, right: null }, 1), 1);
    // assert.equal(kthSmallest({val:3,left:{val:1,left:null,right:{val:2,left:null,right:null}},right:{val:4,left:null,right:null}},2), 2);
    // assert.equal(kthSmallest({val:2,left:{val:1,left:null,right:null},right:{val:3,left:null,right:null}},3), 3);
    // assert.equal(kthSmallest({val:-9,left:null,right:null},1), -9);
    // assert.equal(kthSmallest({val:1,left:null,right:{val:2,left:null,right:{val:3,left:null,right:null}}},2), 2);
    // assert.equal(kthSmallest({val:0,left:{val:-1,left:{val:-2,left:null,right:null},right:null},right:null},1), -2);
  },
});
