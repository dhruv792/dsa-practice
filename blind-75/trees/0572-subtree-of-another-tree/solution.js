import { runSolution } from '../../../run-solution.js';

/**
 * 572. Subtree of Another Tree (Easy)
 *
 * Return whether some node in root begins a subtree identical in shape and
 * values to subRoot. Nodes have `val`, `left`, and `right` fields. Treat an
 * empty subRoot as a subtree.
 *
 * Worked example
 * The main tree is a chain of three left-linked nodes with values 1, 2,
 * and 3. A candidate subtree consisting of just the node 2 is not a match.
 * The main tree's node 2 has a child, so the subtree shapes differ.
 *
 * Function: isSubtree(root, subRoot)
 * Expected complexity: O(n × m) or better for nonempty trees, where n and m are
 * the node counts of root and subRoot.
 */
export function isSubtree(root, subRoot) {
  throw new Error('Implement isSubtree');
}

runSolution(import.meta.url, isSubtree, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(isSubtree({ val: 1, left: { val: 2, left: null, right: null }, right: null }, { val: 2, left: null, right: null }), true);
    // assert.equal(isSubtree({val:1,left:{val:2,left:null,right:null},right:null},{val:1,left:null,right:null}), false);
    // assert.equal(isSubtree({val:1,left:null,right:null},null), true);
    // assert.equal(isSubtree(null,{val:1,left:null,right:null}), false);
    // assert.equal(isSubtree({val:0,left:null,right:{val:1,left:{val:2,left:null,right:null},right:null}},{val:1,left:{val:2,left:null,right:null},right:null}), true);
    // assert.equal(isSubtree({val:1,left:{val:2,left:null,right:null},right:null},{val:1,left:null,right:{val:2,left:null,right:null}}), false);
  },
});
