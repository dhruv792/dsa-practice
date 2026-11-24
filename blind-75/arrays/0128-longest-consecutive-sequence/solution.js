import { runSolution } from '../../../run-solution.js';

/**
 * 128. Longest Consecutive Sequence (Medium)
 *
 * Return the length of the longest run of consecutive integers in an unsorted
 * array. Duplicates do not extend a run. Return 0 for an empty array.
 *
 * The input may be empty and may contain duplicates. Each value is an integer
 * between -10⁹ and 10⁹, inclusive.
 *
 * Worked example
 * For nums = [100, 4, 200, 1, 3, 2], return 4. The values 1, 2, 3, and 4 form
 * a run even though they appear out of order. Values 100 and 200 each form
 * runs of length 1.
 *
 * Function: longestConsecutive(nums)
 * Expected complexity: O(n) average-case, where n is nums.length.
 */
export function longestConsecutive(nums) {
	if (nums.length == 0) return 0
	const numsSet = new Set(nums)
	let longest = 1
	for (const n of numsSet){
		if (numsSet.has(n-1)) continue
		let nextNum = n+1
		while (numsSet.has(nextNum)){
			nextNum++
		}
		longest = longest > (nextNum - n ) ? longest : (nextNum - n)
	}

	return longest

}

runSolution(import.meta.url, longestConsecutive, {
	examples(assert) {
		// Uncomment an assertion and run this file without arguments.
		// assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
		// assert.equal(longestConsecutive([]), 0);
		// assert.equal(longestConsecutive([42]), 1);
		// assert.equal(longestConsecutive([7, 7, 7]), 1);
		// assert.equal(longestConsecutive([9, -4, 2, 20]), 1);
		// assert.equal(longestConsecutive([-4, -7, -5, -6, -12]), 4);
		// assert.equal(longestConsecutive([2, -2, 1, 0, -1, -2, 2, 9]), 5);
		assert.equal(longestConsecutive([1, 2, 3, 10, 11]), 3);
		// assert.equal(longestConsecutive([10, 11, 4, 2, 3, 1]), 4);
		// assert.equal(longestConsecutive([10, 11, 12, 1, 2, 3]), 3);
		// assert.equal(longestConsecutive([-5,-4,-2,-1,0]), 3);
		// assert.equal(longestConsecutive([1000000000,999999998,999999999,-1000000000]), 3);
		// assert.equal(longestConsecutive([20,1,4,21,1,2,22,3,20,2]), 4);
		// assert.equal(longestConsecutive([5,4,2,1,2]), 2);
		// assert.equal(longestConsecutive([-1000000000,-999999999,0]), 2);
	},
});
