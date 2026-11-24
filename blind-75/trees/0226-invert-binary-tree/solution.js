import { runSolution } from '../../../run-solution.js';

/**
 * 226. Invert Binary Tree (Easy)
 *
 * Mirror the tree by swapping left and right children at every node and return
 * the root. Nodes have `val`, `left`, and `right`. Empty trees are null.
 *
 * Worked example
 * If root 1 has left child 2 and right child 3, the inverted tree has root 1,
 * left child 3, and right child 2. Apply the same swap at every lower node so
 * the full tree is mirrored.
 *
 * Function: invertTree(root)
 * Expected complexity: O(n), where n is the number of tree nodes.
 */
export function invertTree(root) {
  throw new Error('Implement invertTree');
}

runSolution(import.meta.url, invertTree, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(structuredClone(invertTree({ val: 1, left: { val: 2, left: null, right: null }, right: null })), { val: 1, left: null, right: { val: 2, left: null, right: null } });
    // assert.equal(invertTree(null), null);
    // assert.deepEqual(structuredClone(invertTree({val:1,left:null,right:{val:2,left:null,right:{val:3,left:null,right:null}}})), {"val": 1, "left": {"val": 2, "left": {"val": 3, "left": null, "right": null}, "right": null}, "right": null});
    // assert.deepEqual(structuredClone(invertTree({val:0,left:null,right:null})), {"val": 0, "left": null, "right": null});
    // assert.deepEqual(structuredClone(invertTree({val:7,left:{val:2,left:null,right:null},right:{val:9,left:null,right:null}})), {"val": 7, "left": {"val": 9, "left": null, "right": null}, "right": {"val": 2, "left": null, "right": null}});
    // assert.deepEqual(structuredClone(invertTree({val:1,left:{val:0,left:{val:-1,left:null,right:null},right:null},right:null})), {"val": 1, "left": null, "right": {"val": 0, "left": null, "right": {"val": -1, "left": null, "right": null}}});
  },
});
