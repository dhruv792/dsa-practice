import { runSolution } from '../../../run-solution.js';

/**
 * 23. Merge k Sorted Lists (Hard)
 *
 * Merge k nondecreasing singly linked lists and return one sorted list. Nodes
 * have `val` and `next`. An empty list is null, and there may be no lists.
 *
 * Worked example
 * Given lists [-2 → 3, -2 → 0, null], return the head of -2 → -2 → 0 → 3. The
 * empty list contributes no nodes, and the repeated -2 from different lists
 * is kept twice.
 *
 * Function: mergeKLists(lists)
 * Expected complexity: O(k + N log(k + 1)), where k is lists.length (including
 * empty lists) and N is the total number of nodes.
 */
export function mergeKLists(lists) {
  throw new Error('Implement mergeKLists');
}

runSolution(import.meta.url, mergeKLists, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(structuredClone(mergeKLists([null, { val: 2, next: null }, { val: 1, next: null }])), { val: 1, next: { val: 2, next: null } });
    // assert.equal(mergeKLists([]), null);
    // assert.equal(mergeKLists([null,null]), null);
    // assert.deepEqual(structuredClone(mergeKLists([{ val: -2, next: { val: 3, next: null } }, { val: -2, next: { val: 0, next: null } }, null])), {"val": -2, "next": {"val": -2, "next": {"val": 0, "next": {"val": 3, "next": null}}}});
    // assert.deepEqual(structuredClone(mergeKLists([null,{val:4,next:null},null])), {"val": 4, "next": null});
    // assert.deepEqual(structuredClone(mergeKLists([{val:1,next:null},{val:1,next:null},{val:1,next:null}])), {"val": 1, "next": {"val": 1, "next": {"val": 1, "next": null}}});
  },
});
