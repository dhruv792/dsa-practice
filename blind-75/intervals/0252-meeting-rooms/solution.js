import { runSolution } from '../../../run-solution.js';

/**
 * 252. Meeting Rooms (Easy)
 *
 * Return whether one person can attend all meetings. Each interval has start <
 * end. A meeting ending at a time does not overlap one starting at the same
 * time.
 *
 * The intervals may be unsorted and an empty schedule is possible.
 *
 * Worked example
 * For intervals = [[5, 8], [1, 5]], return true. Attend [1, 5] first and
 * start [5, 8] as soon as it ends. A shared endpoint does not require two
 * commitments at the same time.
 *
 * Function: canAttendMeetings(intervals)
 * Expected complexity: O(n log n), where n is intervals.length.
 */
export function canAttendMeetings(intervals) {
  throw new Error('Implement canAttendMeetings');
}

runSolution(import.meta.url, canAttendMeetings, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(canAttendMeetings([[7,10],[2,4]]), true);
    // assert.equal(canAttendMeetings([[5,8],[1,5]]), true);
    // assert.equal(canAttendMeetings([[3,5],[0,4]]), false);
    // assert.equal(canAttendMeetings([]), true);
    // assert.equal(canAttendMeetings([[2,5],[2,3]]), false);
    // assert.equal(canAttendMeetings([[6,9],[2,4],[4,6]]), true);
  },
});
