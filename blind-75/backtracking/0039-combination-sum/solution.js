import { runSolution } from '../../../run-solution.js';

/**
 * 39. Combination Sum (Medium)
 *
 * Given distinct positive integers, return every unique combination that sums
 * to the positive target. A value may be reused. Order within and between
 * combinations is irrelevant.
 *
 * An empty candidate list has no combinations for a positive target.
 *
 * A combination records which candidates were used and how many times each
 * was used.
 *
 * Worked example
 * With candidates = [2, 3, 6, 7] and target = 7, return [[2, 2, 3], [7]]. You
 * may use 2 twice. Reordering [2, 2, 3] to [3, 2, 2] still represents the
 * same combination and should appear only once.
 *
 * Function: combinationSum(candidates, target)
 * Expected complexity: A loose worst-case bound on candidate checks is
 * O((n + 1)^(d + 1)), where n is candidates.length and d =
 * floor(target / min(candidates)) for nonempty candidates. The time to write
 * the combinations depends on how many are returned.
 */
export function combinationSum(candidates, target) {
  throw new Error('Implement combinationSum');
}

runSolution(import.meta.url, combinationSum, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(combinationSum([2,3,6,7], 7).map(group => group.sort((a,b) => a-b)).sort(), [[2,2,3],[7]]);
    // assert.deepEqual(combinationSum([3,5], 9), [[3, 3, 3]]);
    // assert.deepEqual(combinationSum([4,8], 3), []);
    // assert.deepEqual(combinationSum([2,4], 8).map(group => [...group].sort((a,b) => a-b)).sort(), [[2,2,2,2],[2,2,4],[4,4]]);
    // assert.deepEqual(combinationSum([],5), []);
    // assert.deepEqual(combinationSum([5,9],5), [[5]]);
  },
});
