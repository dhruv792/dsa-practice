import { runSolution } from '../../../run-solution.js';

/**
 * 49. Group Anagrams (Medium)
 *
 * Group words composed of lowercase English letters so each group contains
 * words with identical letter counts. Keep repeated inputs. You may return
 * groups and words in any order.
 *
 * Worked example
 * For strs = ["eat", "tea", "tan", "ate", "nat", "bat"], one answer is
 * [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]. The first group shares
 * exactly one a, one e, and one t. A repeated input word would remain as a
 * repeated entry in its group.
 *
 * Function: groupAnagrams(strs)
 * Expected time complexity: O(C + n), where n is strs.length and C is the
 * total number of characters across all strings in strs. With fixed-alphabet
 * frequency keys, each string takes constant work to group beyond scanning
 * its characters. Empty strings still count toward n.
 */
export function groupAnagrams(strs) {

	const groups = {

	}
	
	for(const str of strs){
		const frequencyCounter = new Array(26).fill(0)
		for(let s of str){
			frequencyCounter[s.charCodeAt(0) - 97]++
		}
		const group_name = frequencyCounter.join(",")
		if (!groups[group_name]) { groups[group_name] = [str] } else groups[group_name].push(str)
	}

	return Object.values(groups);

}

runSolution(import.meta.url, groupAnagrams, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    assert.deepEqual(groupAnagrams(["eat","tea","tan","ate","nat","bat"]).map(group => group.sort()).sort(), [["ate","eat","tea"],["bat"],["nat","tan"]]);
    // { const a = "a".repeat(12) + "b"; const b = "a" + "b".repeat(12); const reverseA = [...a].reverse().join(""); const groups = groupAnagrams([a,b,reverseA]); assert.deepEqual(groups.map(group => group.slice().sort()).sort(), [[a,reverseA].sort(),[b]].sort()); }
    // assert.deepEqual(groupAnagrams(["zzz","zzz"]), [["zzz", "zzz"]]);
  },
});
