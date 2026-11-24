import { runSolution } from '../../../run-solution.js';

/**
 * 295. Find Median from Data Stream (Hard)
 *
 * Implement a MedianFinder class with addNum(value) and findMedian(). For an
 * even count, take the mean of the middle two values. The runner receives
 * aligned operation and argument arrays and returns null for the constructor
 * and each insertion, and the median for each query. Queries follow at least
 * one insertion.
 *
 * The first operation is the constructor, with a matching argument array.
 *
 * The operations and args arrays have the same length. Each args entry is an
 * array of arguments for its operation.
 *
 * Worked example
 * After adding 1 and 2, findMedian() returns 1.5 because there are two middle
 * values. After adding 3, it returns 2 because the sorted values [1, 2, 3]
 * have a single middle value. The runner outputs null for the constructor and
 * each insertion.
 *
 * Function: runMedianFinder(operations, args)
 * Expected complexity: O(log(n + 1)) insertion time and O(1) query time, where
 * n is the number of values inserted so far.
 */
export class MedianFinder {
  addNum(value) {
    throw new Error('Implement MedianFinder.addNum');
  }

  findMedian() {
    throw new Error('Implement MedianFinder.findMedian');
  }
}

export function runMedianFinder(operations, args) {
  const instance = new MedianFinder(...args[0]);
  return operations.map((operation, index) => {
    if (index === 0) return null;
    return instance[operation](...args[index]) ?? null;
  });
}

runSolution(import.meta.url, runMedianFinder, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"], [[],[1],[2],[],[3],[]]), [null,null,null,1.5,null,2]);
    // assert.deepEqual(runMedianFinder(["MedianFinder","addNum","findMedian"], [[],[-3],[]]), [null, null, -3]);
    // assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","addNum","findMedian"], [[],[5],[5],[9],[]]), [null, null, null, null, 5]);
    // assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","findMedian","addNum","addNum","findMedian"], [[],[6],[4],[],[2],[0],[]]), [null, null, null, 5, null, null, 3]);
    // assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","findMedian"], [[],[-2],[-1],[]]), [null, null, null, -1.5]);
    // assert.deepEqual(runMedianFinder(["MedianFinder","addNum","findMedian","findMedian"], [[],[5],[],[]]), [null, null, 5, 5]);
  },
});
