import { runSolution } from '../../../run-solution.js';

/**
 * 57. Insert Interval (Medium)
 *
 * The input contains closed, disjoint intervals sorted by start. Insert a new
 * closed interval and merge all resulting overlaps, including shared endpoints.
 * Return sorted, disjoint intervals.
 *
 * Each start is at most its end. The input interval list may be empty.
 *
 * Worked example
 * Insert [2, 8] into [[1, 2], [4, 5], [8, 9]]. The new interval touches the
 * first interval at 2, contains the second, and touches the last at 8. Return
 * [[1, 9]].
 *
 * Function: insert(intervals, newInterval)
 * Expected complexity: O(n), where n is intervals.length.
 */
export function insert(intervals, newInterval) {
  throw new Error('Implement insert');
}

runSolution(import.meta.url, insert, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(insert([[1,3],[6,9]], [2,5]), [[1,5],[6,9]]);
    // assert.deepEqual(insert([], [2,3]), [[2, 3]]);
    // assert.deepEqual(insert([[1,2],[4,5],[8,9]], [2,8]), [[1, 9]]);
    // assert.deepEqual(insert([[5,7],[9,10]], [1,2]), [[1, 2], [5, 7], [9, 10]]);
    // assert.deepEqual(insert([[1,10]],[3,4]), [[1, 10]]);
    // assert.deepEqual(insert([[1,2],[4,5]],[6,7]), [[1, 2], [4, 5], [6, 7]]);
  },
});
