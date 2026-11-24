import { runSolution } from '../../../run-solution.js';

/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal (Medium)
 *
 * Given valid preorder and inorder value sequences for one binary tree,
 * reconstruct it. Values are distinct. Return nodes with `val`, `left`, and
 * `right`, using null for empty children.
 *
 * Preorder visits the node, then the left subtree, then the right subtree.
 * Inorder visits the left subtree, then the node, then the right subtree.
 *
 * Worked example
 * With preorder = [2, 1, 3] and inorder = [1, 2, 3], the first preorder value
 * makes 2 the root. Values before and after 2 in inorder become its left and
 * right subtrees, so return a root with left child 1 and right child 3.
 *
 * Function: buildTree(preorder, inorder)
 * Expected complexity: O(n) average-case, where n is preorder.length (equal to
 * inorder.length).
 */
export function buildTree(preorder, inorder) {
  throw new Error('Implement buildTree');
}

runSolution(import.meta.url, buildTree, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(structuredClone(buildTree([2, 1, 3], [1, 2, 3])), { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } });
    // assert.equal(buildTree([],[]), null);
    // assert.deepEqual(structuredClone(buildTree([1,2,3],[1,2,3])), {"val": 1, "left": null, "right": {"val": 2, "left": null, "right": {"val": 3, "left": null, "right": null}}});
    // assert.deepEqual(structuredClone(buildTree([3,2,1],[1,2,3])), {"val": 3, "left": {"val": 2, "left": {"val": 1, "left": null, "right": null}, "right": null}, "right": null});
    // assert.deepEqual(structuredClone(buildTree([-5],[-5])), {"val": -5, "left": null, "right": null});
    // assert.deepEqual(structuredClone(buildTree([3,1,2,4],[1,2,3,4])), {"val": 3, "left": {"val": 1, "left": null, "right": {"val": 2, "left": null, "right": null}}, "right": {"val": 4, "left": null, "right": null}});
  },
});
