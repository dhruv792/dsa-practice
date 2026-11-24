import { runSolution } from '../../../run-solution.js';

/**
 * 141. Linked List Cycle (Easy)
 *
 * Return whether following `next` ever revisits the same node. A node has `val`
 * and `next`. Compare nodes by identity and treat null as the end of the list.
 *
 * For CLI input, pass the node values and the index the tail links back to. Use
 * -1 for no cycle.
 *
 * The function receives the head node. In the CLI adapter, pos is a valid zero-
 * based index into values, or -1.
 *
 * Worked example
 * Consider nodes A → B → C where C.next points to B. Following next visits B
 * a second time, so return true. If C.next is null, the traversal ends and
 * the answer is false, even if several node values are equal.
 *
 * Function: hasCycle(head)
 * Expected complexity: O(n) time and O(1) extra space for hasCycle, where n is
 * the number of distinct nodes reachable from head. The CLI adapter constructs
 * a list separately.
 */
export function hasCycle(head) {
	let slow = head
	let fast = head
	while(fast != null && fast.next != null){
		slow = slow.next
		fast = fast.next.next
		if(fast == slow) return true
	}

	return false
}

function hasCycleFromValues(values, pos) {
  const nodes = values.map(val => ({ val, next: null }));
  for (let i = 0; i + 1 < nodes.length; i++) nodes[i].next = nodes[i + 1];
  if (nodes.length > 0 && pos >= 0) nodes[nodes.length - 1].next = nodes[pos];
  return hasCycle(nodes[0] ?? null);
}

runSolution(import.meta.url, hasCycleFromValues, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(hasCycle({ val: 1, next: null }), false);
    // { const node = { val: 1, next: null }; node.next = node; assert.equal(hasCycle(node), true); }
    // assert.equal(hasCycle(null), false);
    // assert.equal(hasCycle({ val: 1, next: { val: 1, next: null } }), false);
    // { const tail = { val: 3, next: null }; const middle = { val: 2, next: tail }; const head = { val: 1, next: middle }; tail.next = middle; assert.equal(hasCycle(head), true); }
    // assert.equal(hasCycle({val:7,next:null}), false);
    // { const head = { val: 1, next: null }; const tail = { val: 2, next: head }; head.next = tail; assert.equal(hasCycle(head),true); }
  },
});
