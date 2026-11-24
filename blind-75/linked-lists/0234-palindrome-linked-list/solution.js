import { runSolution } from '../../../run-solution.js';

/**
 * 234. Palindrome Linked List (Easy)
 *
 * Given the head of a singly linked list, return whether the node values
 * read the same from head to tail as from tail to head. Each node has a val
 * field and a next field. The tail points to null. An empty list and a
 * single-node list are palindromes.
 *
 * The input list is acyclic. Node values are integers. You may change the
 * links in place to compare the two halves.
 *
 * Worked example
 * In 1 → 2 → 3 → 2 → 1, the outer values are both 1 and the inner pair are
 * both 2. The lone middle value does not need a match, so return true.
 * In 1 → 2 → 3 → 1, the ends match but 2 differs from 3, so return false.
 *
 * Function: isPalindrome(head)
 * Returns: A boolean.
 * Expected time complexity: O(n), where n is the number of nodes.
 * Aim for O(1) extra space.
 */
export function isPalindrome(head) {
	let slow = head
	let fast = head
	while(fast != null && fast.next != null){
		slow = slow.next
		fast = fast.next.next
	}

	let prev = null
	while(slow){
		const tmp = slow.next
		slow.next = prev
		prev = slow
		slow = tmp
	}


	let left = head
	let right = prev

	while (right){
		if (left.val != right.val) return false
		left = left.next
		right = right.next
	}

	return true

}

// The CLI accepts an array of node values and builds the list for you.
export function isPalindromeValues(values) {
	let head = null;
	for (let index = values.length - 1; index >= 0; index--) {
		head = { val: values[index], next: head };
	}
	return isPalindrome(head);
}

runSolution(import.meta.url, isPalindromeValues, {
	examples(assert) {
		// Uncomment an assertion and run this file without arguments.
		assert.equal(isPalindromeValues([]), true);
		assert.equal(isPalindromeValues([7]), true);
		assert.equal(isPalindromeValues([2, 2]), true);
		assert.equal(isPalindromeValues([2, 3]), false);
		assert.equal(isPalindromeValues([1, 2, 2, 1]), true);
		assert.equal(isPalindromeValues([1, 2, 3, 2, 1]), true);
		assert.equal(isPalindromeValues([1, 2, 3, 4, 1]), false);
		assert.equal(isPalindromeValues([1, 2, 3, 1]), false);
		assert.equal(isPalindromeValues([-1, -1, 0, -1, -1]), true);
		assert.equal(isPalindromeValues([4, 4, 4, 4, 4, 4]), true);
	},
});
