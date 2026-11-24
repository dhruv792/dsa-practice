import { runSolution } from '../../../run-solution.js';

/**
 * 125. Valid Palindrome (Easy)
 *
 * Ignore punctuation, spaces, and letter case. Return whether the
 * remaining sequence reads identically in both directions. An empty filtered
 * sequence is a palindrome.
 *
 * Input is an ASCII string. Letters and digits are the only characters kept.
 *
 * Worked example
 * In s = "A man, a plan, a canal: Panama", the letters normalize to
 * "amanaplanacanalpanama", which reads the same both ways. Return true. In
 * "0P", the digit 0 is kept and differs from p, so return false.
 *
 * Function: isPalindrome(s)
 * Expected complexity: O(n) time and O(1) extra space, where n is s.length.
 */
export function isPalindrome(s) {
	const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	for(let i=0;i<=cleaned.length/2;i++){
		if (cleaned[i] != cleaned[cleaned.length-i-1]) return false
	}
	return true
}

runSolution(import.meta.url, isPalindrome, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
    // assert.equal(isPalindrome("No 'x' in Nixon"), true);
    // assert.equal(isPalindrome("0P"), false);
    // assert.equal(isPalindrome(".,!"), true);
    // assert.equal(isPalindrome("1a_A1"), true);
    // assert.equal(isPalindrome("a1:2A"), false);
  },
});


