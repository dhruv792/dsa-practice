import { runSolution } from '../../../run-solution.js';

/**
 * 70. Climbing Stairs (Easy)
 *
 * Count distinct ordered ways to climb n stairs when each move takes one or two
 * stairs. Assume 1 <= n <= 45.
 *
 * Each arrangement of steps is counted separately. For example, steps of 1 then
 * 2 differ from steps of 2 then 1.
 *
 * Worked example
 * For n = 3, return 3. The step sequences are [1, 1, 1], [1, 2], and [2, 1].
 * The last two are different ways to climb because the steps occur in
 * different orders.
 *
 * Function: climbStairs(n)
 * Expected complexity: O(n) time and O(1) extra space, where n is the number of
 * stairs.
 */
export function climbStairs(n) {
  throw new Error('Implement climbStairs');
}

runSolution(import.meta.url, climbStairs, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(climbStairs(5), 8);
    // assert.equal(climbStairs(1), 1);
    // assert.equal(climbStairs(2), 2);
    // assert.equal(climbStairs(45), 1836311903);
    // assert.equal(climbStairs(3), 3);
    // assert.equal(climbStairs(4), 5);
  },
});
