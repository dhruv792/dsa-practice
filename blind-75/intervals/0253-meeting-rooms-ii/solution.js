import { runSolution } from '../../../run-solution.js';

/**
 * 253. Meeting Rooms II (Medium)
 *
 * Given meeting intervals [start, end] with start < end, return the minimum
 * rooms needed. A room frees up at end and can be reused by a meeting starting
 * at that time.
 *
 * The intervals may be unsorted. Return zero for an empty schedule.
 *
 * Meetings can use the same room at different times. Count rooms by how many
 * must be available at once.
 *
 * Worked example
 * For intervals = [[0, 30], [5, 10], [15, 20]], return 2. One meeting
 * occupies a room from 0 to 30. The two shorter meetings need a second room,
 * which they can reuse because they do not overlap.
 *
 * Function: minMeetingRooms(intervals)
 * Expected complexity: O(n log n), where n is intervals.length.
 */
export function minMeetingRooms(intervals) {
  throw new Error('Implement minMeetingRooms');
}

runSolution(import.meta.url, minMeetingRooms, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(minMeetingRooms([[0,30],[5,10],[15,20]]), 2);
    // assert.equal(minMeetingRooms([[4,7],[1,4]]), 1);
    // assert.equal(minMeetingRooms([[2,5],[2,3],[2,4]]), 3);
    // assert.equal(minMeetingRooms([]), 0);
    // assert.equal(minMeetingRooms([[1,10],[2,9],[3,8],[4,7]]), 4);
    // assert.equal(minMeetingRooms([[0,3],[1,3],[3,5],[3,6]]), 2);
  },
});
