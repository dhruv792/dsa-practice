import { runSolution } from '../../../run-solution.js';

/**
 * Merge Intervals (Medium)
 *
 * Given an array of closed intervals [start, end] in any order, merge
 * all overlapping intervals. Endpoints are included, so intervals that
 * share an endpoint overlap. The merged intervals must cover exactly the
 * same values as the input intervals.
 *
 * Worked example
 * For intervals = [[1, 4], [4, 5], [8, 10]], return [[1, 5], [8, 10]]. The
 * first two include the shared endpoint 4 and merge. A gap remains between 5
 * and 8.
 *
 * Function: mergeIntervals(intervals)
 * Returns: An array of non-overlapping intervals sorted by ascending start.
 * Return an empty array when the input is empty.
 *
 * Expected time complexity: O(n log n), where n is intervals.length.
 *
 * Constraints:
 * - 0 <= intervals.length <= 10,000
 * - Each interval has two integer endpoints.
 * - -10^9 <= start <= end <= 10^9
 *
 * Examples are available as commented assertions below.
 */
export function mergeIntervals(intervals) {

  
  // first sort the list by start time
  // use two pointer approach to merge now
  intervals.sort((a,b) => a[0]-b[0])

  // [[1, 3], [2, 6], [8, 10],[15, 18]]

  const merged = []
  for (let i=0;i<intervals.length;i++){
    const curr = intervals[i]
    if (merged.length == 0) {
      merged.push(curr) 
      continue
    }

    const last = merged.at(-1)
    if (last[1] >= curr[0]){ 
      last[1] = last[1] > curr[1] ? last[1] : curr[1]
      continue
    } else {
      merged.push(curr)
    }
  }
  return merged

}

runSolution(import.meta.url, mergeIntervals, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.deepEqual(mergeIntervals([[8, 10], [2, 6], [1, 3], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
    // assert.deepEqual(mergeIntervals([[1, 4], [4, 5]]), [[1, 5]]);
    // assert.deepEqual(mergeIntervals([[1, 10], [2, 3]]), [[1, 10]]);
    // assert.deepEqual(mergeIntervals([]), []);
    // assert.deepEqual(mergeIntervals([[2, 5]]), [[2, 5]]);
    // assert.deepEqual(mergeIntervals([[5, 7], [1, 3]]), [[1, 3], [5, 7]]);
    // assert.deepEqual(mergeIntervals([[5, 9], [1, 3], [2, 6]]), [[1, 9]]);
    // assert.deepEqual(mergeIntervals([[1, 2], [1, 8], [1, 4]]), [[1, 8]]);
    // assert.deepEqual(mergeIntervals([[-3, -3], [-3, -3], [-2, 0]]), [[-3, -3], [-2, 0]]);
    // assert.deepEqual(mergeIntervals([[1, 2], [3, 4]]), [[1, 2], [3, 4]]);
    // assert.deepEqual(mergeIntervals([[2,3],[6,7],[1,10],[4,5]]), [[1, 10]]);
    // assert.deepEqual(mergeIntervals([[8,8],[-1,-1],[4,4]]), [[-1, -1], [4, 4], [8, 8]]);
    // assert.deepEqual(mergeIntervals([[2,4],[2,2],[0,2]]), [[0, 4]]);
    // assert.deepEqual(mergeIntervals([[5,9],[-4,-1],[1,4]]), [[-4, -1], [1, 4], [5, 9]]);
    // assert.deepEqual(mergeIntervals([[-3,-1],[-1,2],[2,4]]), [[-3, 4]]);
  },
});
