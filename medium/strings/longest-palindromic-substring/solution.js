import { runSolution } from '../../../run-solution.js';

/**
 * Longest Palindromic Substring (Medium)
 *
 * Find a longest contiguous substring that reads the same forward and backward.
 * Characters are case-sensitive. If multiple substrings tie for the maximum
 * length, return any one of them.
 *
 * Worked example
 * For s = "babad", either "bab" or "aba" is a valid answer. Both occupy three
 * consecutive characters and read the same backward, and no longer contiguous
 * substring has that property.
 *
 * Function: longestPalindrome(s)
 * Returns: A longest palindromic substring, or the empty string if s is empty.
 *
 * Expected time complexity: O(n²) or better, where n is s.length. For a stretch goal, aim for O(n).
 *
 * Constraints:
 * - 0 <= s.length <= 1,000
 * - s contains only ASCII letters and digits.
 *
 * Examples are available as commented assertions below.
 */
export function longestPalindrome(s) {

	let bestStart = 0
	let longestLength = 0

	
	function expand(left, right) {

		while(left>=0&& right<s.length&& s[left]===s[right]){
			left--
			right++
		}
		
		const length = right-left-1
		if(length>longestLength){
			longestLength=length
			bestStart = left+1
		}
	}

	for(let i=0;i<s.length;i++){
		expand(i, i)
		expand(i,i+1)
	}

	return s.slice(bestStart, bestStart+longestLength)



}

runSolution(import.meta.url, longestPalindrome, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.ok(["bab", "aba"].includes(longestPalindrome("babad")));
    // assert.equal(longestPalindrome("cbbd"), "bb");
    // assert.equal(longestPalindrome(""), "");
    // assert.equal(longestPalindrome("x"), "x");
    // assert.equal(longestPalindrome("racecarxyz"), "racecar");
    // assert.equal(longestPalindrome("xyzracecar"), "racecar");
    // assert.equal(longestPalindrome("abccba"), "abccba");
    // assert.equal(longestPalindrome("aaaaa"), "aaaaa");
    // assert.ok(["A", "a"].includes(longestPalindrome("Aa")));
    // assert.equal(longestPalindrome("x121y2332z"), "2332");
    // assert.equal(longestPalindrome("aa"), "aa");
    // assert.equal(longestPalindrome("zabacabay"), "abacaba");
    // assert.ok(["a","b","c","d"].includes(longestPalindrome("abcd")));
    // assert.equal(longestPalindrome("xredderq"), "redder");
    // assert.equal(longestPalindrome("a1a"), "a1a");
  },
});
