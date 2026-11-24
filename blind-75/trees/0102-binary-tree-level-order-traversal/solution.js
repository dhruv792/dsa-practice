import { runSolution } from '../../../run-solution.js';

/**
 * 102. Binary Tree Level Order Traversal (Medium)
 *
 * Return node values grouped by depth from root to leaves. Within a level, use
 * left-to-right order. Nodes have `val`, `left`, and `right`; null gives an
 * empty array.
 *
 * The root is at depth 0. Each child is one level deeper than its parent.
 *
 * Worked example
 * For a tree with root 1, children 2 and 3, and a right child 4 under node 2,
 * return [[1], [2, 3], [4]]. All nodes at the same depth belong to the same
 * array, read from left to right.
 *
 * Function: levelOrder(root)
 * Expected complexity: O(n), where n is the number of tree nodes.
 */
export function levelOrder(root) {
  throw new Error('Implement levelOrder');
}

runSolution(import.meta.url, levelOrder, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(levelOrder({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }), [[1],[2,3]]);
    // assert.deepEqual(levelOrder(null), []);
    // assert.deepEqual(levelOrder({val:1,left:{val:2,left:null,right:{val:4,left:null,right:null}},right:{val:3,left:{val:5,left:null,right:null},right:null}}), [[1], [2, 3], [4, 5]]);
    // assert.deepEqual(levelOrder({val:1,left:{val:2,left:{val:3,left:null,right:null},right:null},right:null}), [[1], [2], [3]]);
    // assert.deepEqual(levelOrder({val:7,left:null,right:null}), [[7]]);
    // assert.deepEqual(levelOrder({val:0,left:{val:1,left:null,right:null},right:{val:1,left:null,right:null}}), [[0], [1, 1]]);
  },
});
