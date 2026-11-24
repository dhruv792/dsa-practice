import { runSolution } from '../../../run-solution.js';

/**
 * Daily Temperatures (Medium)
 *
 * For each day i, find the next day j > i whose temperature is strictly higher.
 * Report how many days you must wait. Equal temperatures are not warmer.
 *
 * Worked example
 * For temperatures = [70, 70, 71], return [2, 1, 0]. The first day waits two
 * days because the second reading equals the first. The last day has no later
 * day and gets zero.
 *
 * Function: dailyTemperatures(temperatures)
 * Returns: An array where entry i is j - i, or 0 if no warmer day follows.
 *
 * Expected time complexity: O(n), where n is temperatures.length.
 *
 * Constraints:
 * - 0 <= temperatures.length <= 100,000
 * - 0 <= temperatures[i] <= 150
 *
 * Examples are available as commented assertions below.
 */
export function dailyTemperatures(temperatures) {
  
  const stack = []
  const res = new Array(temperatures.length).fill(0)
  for(let i=0;i<temperatures.length;i++){
    
    const curr = temperatures[i]
    while(stack.length){
      const top = stack.at(-1)
      if (curr <= top.temp){
        break
      } else {
        const popped = stack.pop()
        res[popped.index] = i - popped.index

      }
    }
    stack.push({ temp: curr, index: i })


  }
  return res

}

runSolution(import.meta.url, dailyTemperatures, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.deepEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
    // assert.deepEqual(dailyTemperatures([]), []);
    // assert.deepEqual(dailyTemperatures([42]), [0]);
    // assert.deepEqual(dailyTemperatures([30, 40, 50]), [1, 1, 0]);
    // assert.deepEqual(dailyTemperatures([50, 40, 30]), [0, 0, 0]);
    // assert.deepEqual(dailyTemperatures([70, 70, 70]), [0, 0, 0]);
    // assert.deepEqual(dailyTemperatures([70, 70, 71]), [2, 1, 0]);
    // assert.deepEqual(dailyTemperatures([90, 80, 70, 100]), [3, 2, 1, 0]);
    // assert.deepEqual(dailyTemperatures([20, 25, 30, 40]), [1, 1, 1, 0]);
    // assert.deepEqual(dailyTemperatures([150, 0, 150, 0]), [0, 1, 0, 0]);
    // assert.deepEqual(dailyTemperatures([50,50,49,50,51]), [4, 3, 1, 1, 0]);
    // assert.deepEqual(dailyTemperatures([70,71,90,65,80]), [1, 1, 0, 1, 0]);
    // assert.deepEqual(dailyTemperatures([0,150,150]), [1, 0, 0]);
    // assert.deepEqual(dailyTemperatures([19,20,20,20]), [1, 0, 0, 0]);
    // assert.deepEqual(dailyTemperatures([6,1,2,7]), [3, 1, 1, 0]);
  },
});
