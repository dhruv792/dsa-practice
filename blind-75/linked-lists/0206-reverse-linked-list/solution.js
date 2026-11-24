import { runSolution } from '../../../run-solution.js';

/**
 * 206. Reverse Linked List (Easy)
 *
 * Reverse a singly linked list and return its new head. Nodes have `val` and
 * `next`; null is an empty list.
 *
 * Worked example
 * For 1 → 2 → 3, return the node with value 3 as the new head. Following next
 * should give 3 → 2 → 1, and the original head's next should now be null.
 *
 * Function: reverseList(head)
 * Expected complexity: O(n) time and O(1) extra space, where n is the number of
 * list nodes.
 */
export function reverseList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

runSolution(import.meta.url, reverseList, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(structuredClone(reverseList({ val: 1, next: { val: 2, next: null } })), { val: 2, next: { val: 1, next: null } });
    // assert.equal(reverseList(null), null);
    // assert.deepEqual(structuredClone(reverseList({ val: 7, next: null })), {"val": 7, "next": null});
    // assert.deepEqual(structuredClone(reverseList({ val: 1, next: { val: 1, next: { val: 3, next: null } } })), {"val": 3, "next": {"val": 1, "next": {"val": 1, "next": null}}});
    // assert.deepEqual(structuredClone(reverseList({val:0,next:{val:-2,next:null}})), {"val": -2, "next": {"val": 0, "next": null}});
    // assert.deepEqual(structuredClone(reverseList({val:1,next:{val:2,next:{val:3,next:{val:4,next:null}}}})), {"val": 4, "next": {"val": 3, "next": {"val": 2, "next": {"val": 1, "next": null}}}});
  },
});
