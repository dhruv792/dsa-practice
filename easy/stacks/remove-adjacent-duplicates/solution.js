import { runSolution } from '../../../run-solution.js';

/**
 * Remove Adjacent Duplicates (Easy)
 *
 * Given a string s, repeatedly remove pairs of equal adjacent characters
 * until no such pair remains. A removal can make a new pair adjacent.
 *
 * Worked example
 * For s = "abbaca", removing bb creates "aaca". The first two a characters
 * now touch, so removing that pair leaves "ca". There are no more adjacent
 * equal characters, so return "ca".
 *
 * Function: removeDuplicates(s)
 * Returns: The remaining string. The final result is unique.
 *
 * Expected time complexity: O(n), where n is s.length.
 *
 * Constraints:
 * - 0 <= s.length <= 100,000
 * - s contains only lowercase English letters.
 *
 * Examples are available as commented assertions below.
 */
export function removeDuplicates(s) {
  const stack = []
  for (let i = 0;i<s.length;i++){
    const curr = s.charAt(i)
    const last = stack.at(-1)
    if(curr == last){
      stack.pop()
    }else{
      stack.push(curr)
    }


  }

  return stack.join('')

}

// let s = "azxxzy"
// console.log(removeDuplicates(s))
// console.log(s)

runSolution(import.meta.url, removeDuplicates, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(removeDuplicates("abbaca"), "ca");
    // assert.equal(removeDuplicates("azxxzy"), "ay");
    // assert.equal(removeDuplicates("abc"), "abc");
    // assert.equal(removeDuplicates("abba"), "");
    // assert.equal(removeDuplicates(""), "");
    // assert.equal(removeDuplicates("a"), "a");
    // assert.equal(removeDuplicates("aaaaa"), "a");
    // assert.equal(removeDuplicates("aaaaaa"), "");
    // assert.equal(removeDuplicates("abcca"), "aba");
    // assert.equal(removeDuplicates("abccba"), "");
    // assert.equal(removeDuplicates("aabccbde"), "de");
    // assert.equal(removeDuplicates("aba"), "aba");
    // assert.equal(removeDuplicates("abcddcba"), "");
    // assert.equal(removeDuplicates("baaaaac"), "bac");
    // assert.equal(removeDuplicates("xaabccby"), "xy");
  },
});
