import { runSolution } from '../../../run-solution.js';

/**
 * 435. Non-overlapping Intervals (Medium)
 *
 * Return the minimum number of intervals to remove so no remaining intervals
 * overlap. Each interval satisfies start < end. Intervals that only touch at an
 * endpoint may both remain.
 *
 * The intervals may be unsorted. Return zero when the input is empty.
 *
 * Worked example
 * For intervals = [[0, 10], [1, 2], [2, 3], [3, 4]], return 1. Removing [0,
 * 10] leaves three intervals that only touch at endpoints and can all remain.
 *
 * Function: eraseOverlapIntervals(intervals)
 * Expected complexity: O(n log n), where n is intervals.length.
 */
export function eraseOverlapIntervals(intervals) {
  throw new Error('Implement eraseOverlapIntervals');
}

runSolution(import.meta.url, eraseOverlapIntervals, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]), 1);
    // assert.equal(eraseOverlapIntervals([[1,2],[2,3],[3,4]]), 0);
    // assert.equal(eraseOverlapIntervals([[1,3],[1,3],[1,3]]), 2);
    // assert.equal(eraseOverlapIntervals([[0,10],[1,2],[2,3],[3,4]]), 1);
    // assert.equal(eraseOverlapIntervals([]), 0);
    // assert.equal(eraseOverlapIntervals([[2,4],[-3,3]]), 1);
  },
});
