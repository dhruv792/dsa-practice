import { runSolution } from '../../../run-solution.js';

/**
 * 143. Reorder List (Medium)
 *
 * Given singly linked nodes L0 through Ln with fields `val` and `next`, relink
 * them in place as L0, Ln, L1, Ln-1, and so on. Do not change values. Return
 * nothing.
 *
 * The head may be null. Preserve every original node and terminate the
 * reordered list with null.
 *
 * Worked example
 * For 1 → 2 → 3 → 4, relink the original nodes as 1 → 4 → 2 → 3. The node
 * with value 3 becomes the tail and must point to null. Keep each node's
 * value as it was.
 *
 * Function: reorderList(head)
 * Expected complexity: O(n) time and O(1) extra space, where n is the number of
 * list nodes.
 */
export function reorderList(head) {
  throw new Error('Implement reorderList');
}

runSolution(import.meta.url, reorderList, {
  outputArgument: 0,
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // { const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } }; reorderList(head); assert.deepEqual(head, { val: 1, next: { val: 3, next: { val: 2, next: null } } }); }
    // { assert.doesNotThrow(() => reorderList(null)); }
    // { const head = { val: 1, next: { val: 2, next: null } }; reorderList(head); assert.deepEqual(head, { val: 1, next: { val: 2, next: null } }); }
    // { const d = { val: 4, next: null }; const c = { val: 3, next: d }; const b = { val: 2, next: c }; const a = { val: 1, next: b }; reorderList(a); assert.equal(a.next, d); assert.equal(d.next, b); assert.equal(b.next, c); assert.equal(c.next, null); assert.deepEqual([a.val,b.val,c.val,d.val], [1,2,3,4]); }
    // { const head = {val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:null}}}}}; reorderList(head); assert.deepEqual(head,{val:1,next:{val:5,next:{val:2,next:{val:4,next:{val:3,next:null}}}}}); }
    // { const head = {val:9,next:null}; reorderList(head); assert.deepEqual(head,{val:9,next:null}); }
  },
});
