import { runSolution } from '../../../run-solution.js';

/**
 * 11. Container With Most Water (Medium)
 *
 * You are given an array height, where height[i] is the height of a vertical
 * line drawn at position i on the x-axis. Pick two lines to serve as the
 * walls of a container. The x-axis is its floor. The walls stay vertical,
 * and the lines between them do not affect how much water the pair holds.
 *
 * For indices i < j, the width is j - i. Water spills over the shorter
 * wall, so the water level is min(height[i], height[j]). Multiply the width
 * by this water level to get the area. Return the largest area over all
 * possible pairs.
 *
 * Example: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * The lines at indices 1 and 8 have heights 8 and 7. Their width is 7,
 * and the water level is 7, so they hold an area of 49. This is the maximum.
 *
 * Constraints:
 * - height contains at least two entries.
 * - Every height is a nonnegative safe integer.
 * - The area of any pair fits in JavaScript's safe integer range.
 *
 * Function: maxArea(height)
 * Returns: The largest area as a number.
 * Expected time complexity: O(n), where n is height.length.
 */
export function maxArea(height) {
	const n = height.length
	let left = 0
  	let right = n-1
	let maxArea = 0
	let localArea
	while(left < right){
		localArea = (right-left)*Math.min(height[left], height[right])

		maxArea = maxArea>localArea?maxArea:localArea
		
		if(height[left]<height[right]){
			left++
		}else {
			right--
		}
		
	}
	

	return maxArea



}

runSolution(import.meta.url, maxArea, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    assert.equal(maxArea([1,8,6,2,5,4,8,3,7]), 49);
    assert.equal(maxArea([1,1]), 1);
    assert.equal(maxArea([0,0,0]), 0);
    assert.equal(maxArea([1,5,2,5,1]), 10);
    // assert.equal(maxArea([5,9,9,1,1,1,5]), 30);
    // assert.equal(maxArea([7,7]), 7);
    // assert.equal(maxArea([0,6,0,5,0]), 10);
    // assert.equal(maxArea([1,2,3,4,5,6]), 9);
    // assert.equal(maxArea([6,5,4,3,2,1]), 9);
    // assert.equal(maxArea(new Array(10000).fill(4)), 39996);
  },
});
