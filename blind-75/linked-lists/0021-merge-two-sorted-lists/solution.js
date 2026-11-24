import { runSolution } from '../../../run-solution.js';

/**
 * 21. Merge Two Sorted Lists (Easy)
 *
 * Merge two nondecreasing singly linked lists into one sorted list and return
 * its head. Nodes have `val` and `next`. Either input can be null. You may
 * relink existing nodes.
 *
 * Worked example
 * Merging 1 → 4 with 1 → 3 gives 1 → 1 → 3 → 4. The two 1s are separate input
 * nodes and both values must occur in the output.
 *
 * Function: mergeTwoLists(list1, list2)
 * Expected complexity: O(n + m), where n and m are the node counts of list1 and
 * list2.
 */
export function mergeTwoLists(list1, list2) {
  throw new Error('Implement mergeTwoLists');
}

runSolution(import.meta.url, mergeTwoLists, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(structuredClone(mergeTwoLists({ val: 2, next: null }, { val: 1, next: null })), { val: 1, next: { val: 2, next: null } });
    // assert.equal(mergeTwoLists(null,null), null);
    // assert.deepEqual(structuredClone(mergeTwoLists({ val: 1, next: null }, { val: 1, next: null })), {"val": 1, "next": {"val": 1, "next": null}});
    // assert.deepEqual(structuredClone(mergeTwoLists(null, { val: -2, next: null })), {"val": -2, "next": null});
    // assert.deepEqual(structuredClone(mergeTwoLists({val:0,next:null},{val:-4,next:{val:-1,next:null}})), {"val": -4, "next": {"val": -1, "next": {"val": 0, "next": null}}});
    // assert.deepEqual(structuredClone(mergeTwoLists({val:6,next:null},null)), {"val": 6, "next": null});
  },
});
