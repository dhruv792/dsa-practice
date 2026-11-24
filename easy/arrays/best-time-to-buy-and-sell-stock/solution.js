import { runSolution } from '../../../run-solution.js';

/**
 * Best Time to Buy and Sell Stock (Easy)
 *
 * The integer prices[i] is the price of a stock on day i. You may buy once
 * and sell once on a later day. Find the largest possible profit.
 *
 * Worked example
 * For prices = [7, 1, 5, 3, 6, 4], return 5. Buying at index 1 for 1 and
 * selling at index 4 for 6 gives that profit. A sale must occur after the
 * buy.
 *
 * Function: maxProfit(prices)
 * Returns: The maximum profit, or 0 if no profitable trade exists.
 *
 * Expected time complexity: O(n), where n is prices.length.
 *
 * Constraints:
 * - 1 <= prices.length <= 100,000
 * - 0 <= prices[i] <= 10,000
 *
 * Examples are available as commented assertions below.
 */
export function maxProfit(prices) {
  
  let buy = 10_000, maxProfit = 0
    for (let i=0;i<prices.length;i++){
      if (prices[i] < buy) buy = prices[i] 
      maxProfit = maxProfit > prices[i] - buy ? maxProfit : prices[i] - buy
    }
    return maxProfit
}

runSolution(import.meta.url, maxProfit, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
    // assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
    // assert.equal(maxProfit([5, 9, 1, 2]), 4);
    // assert.equal(maxProfit([4]), 0);
    // assert.equal(maxProfit([1, 2, 3, 4]), 3);
    // assert.equal(maxProfit([5, 5, 5]), 0);
    // assert.equal(maxProfit([2, 9, 1]), 7);
    // assert.equal(maxProfit([0, 10000]), 10000);
    // assert.equal(maxProfit([5, 8, 2, 9]), 7);
    // assert.equal(maxProfit([1, 5, 2, 8]), 7);
    // assert.equal(maxProfit([10,1,2]), 1);
    // assert.equal(maxProfit([6,6,2,6]), 4);
    // assert.equal(maxProfit([2,4,1,3,2,5]), 4);
    // assert.equal(maxProfit([4,2,3,7]), 5);
    // assert.equal(maxProfit([8,7,0,1]), 1);
  },
});
