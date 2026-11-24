import { runSolution } from '../../../run-solution.js';

/**
 * 322. Coin Change (Medium)
 *
 * Given positive coin values and a nonnegative amount, return the fewest coins
 * that sum to amount, or -1 if impossible. Each value can be used any number of
 * times.
 *
 * The coin list may be empty. An amount of zero requires zero coins.
 *
 * Worked example
 * For coins = [1, 3, 4] and amount = 6, return 2. Two 3-value coins make the
 * total. Starting with a 4 would require two more 1-value coins and use three
 * coins overall.
 *
 * Function: coinChange(coins, amount)
 * Expected complexity: O(1 + amount × k) time for nonempty coins, where k is
 * coins.length. Handle an empty coin list directly.
 */
export function coinChange(coins, amount) {
  throw new Error('Implement coinChange');
}

runSolution(import.meta.url, coinChange, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(coinChange([1, 2, 5], 11), 3);
    // assert.equal(coinChange([2],3), -1);
    // assert.equal(coinChange([],0), 0);
    // assert.equal(coinChange([1,3,4],6), 2);
    // assert.equal(coinChange([],7), -1);
    // assert.equal(coinChange([2,2,3],7), 3);
  },
});
