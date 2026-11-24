import { runSolution } from '../../../run-solution.js';

/**
 * 19. Remove Nth Node From End of List (Medium)
 *
 * Given a singly linked list with fields `val` and `next`, remove the nth node
 * from the end and return the possibly new head. n is valid and starts at 1.
 *
 * Worked example
 * For 1 → 2 → 3 and n = 2, remove the second node counting backward from the
 * tail. That is the node with value 2, so return the head of 1 → 3. If the
 * head is removed, return the new head.
 *
 * Function: removeNthFromEnd(head, n)
 * Expected complexity: O(L) time and O(1) extra space, where L is the number of
 * list nodes.
 */
export function removeNthFromEnd(head, n) {
  throw new Error('Implement removeNthFromEnd');
}

runSolution(import.meta.url, removeNthFromEnd, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(structuredClone(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 2)), { val: 2, next: null });
    // assert.equal(removeNthFromEnd({ val: 7, next: null },1), null);
    // assert.deepEqual(structuredClone(removeNthFromEnd({ val: 1, next: { val: 2, next: null } },1)), {"val": 1, "next": null});
    // assert.deepEqual(structuredClone(removeNthFromEnd({ val: 1, next: { val: 2, next: { val: 3, next: null } } },2)), {"val": 1, "next": {"val": 3, "next": null}});
    // assert.deepEqual(structuredClone(removeNthFromEnd({val:1,next:{val:2,next:{val:3,next:null}}},3)), {"val": 2, "next": {"val": 3, "next": null}});
    // assert.deepEqual(structuredClone(removeNthFromEnd({val:2,next:{val:2,next:{val:3,next:null}}},2)), {"val": 2, "next": {"val": 3, "next": null}});
  },
});
