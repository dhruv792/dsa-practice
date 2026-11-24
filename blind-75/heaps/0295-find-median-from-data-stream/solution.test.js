import assert from 'node:assert/strict';
import test from 'node:test';
import { runMedianFinder } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"], [[],[1],[2],[],[3],[]]), [null,null,null,1.5,null,2]);
});

test("median of one negative number", () => {
  assert.deepEqual(runMedianFinder(["MedianFinder","addNum","findMedian"], [[],[-3],[]]), [null, null, -3]);
});

test("handles duplicate values", () => {
  assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","addNum","findMedian"], [[],[5],[5],[9],[]]), [null, null, null, null, 5]);
});

test("rebalance after descending inserts", () => {
  assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","findMedian","addNum","addNum","findMedian"], [[],[6],[4],[],[2],[0],[]]), [null, null, null, 5, null, null, 3]);
});

test("finds a negative fractional median", () => {
  assert.deepEqual(runMedianFinder(["MedianFinder","addNum","addNum","findMedian"], [[],[-2],[-1],[]]), [null, null, null, -1.5]);
});

test("a query does not change the stored values", () => {
  assert.deepEqual(runMedianFinder(["MedianFinder","addNum","findMedian","findMedian"], [[],[5],[],[]]), [null, null, 5, 5]);
});
