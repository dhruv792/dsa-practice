import assert from 'node:assert/strict';
import test from 'node:test';
import { mergeIntervals } from './solution.js';

test('merges unsorted intervals', () => {
  assert.deepEqual(mergeIntervals([[8, 10], [2, 6], [1, 3], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
});

test('merges touching intervals', () => {
  assert.deepEqual(mergeIntervals([[1, 4], [4, 5]]), [[1, 5]]);
});

test('handles a contained interval', () => {
  assert.deepEqual(mergeIntervals([[1, 10], [2, 3]]), [[1, 10]]);
});

test('handles empty input', () => {
  assert.deepEqual(mergeIntervals([]), []);
});

test('handles one interval', () => {
  assert.deepEqual(mergeIntervals([[2, 5]]), [[2, 5]]);
});

test('sorts disjoint intervals without merging them', () => {
  assert.deepEqual(mergeIntervals([[5, 7], [1, 3]]), [[1, 3], [5, 7]]);
});

test('merges a chain of overlapping intervals', () => {
  assert.deepEqual(mergeIntervals([[5, 9], [1, 3], [2, 6]]), [[1, 9]]);
});

test('merges intervals with the same start', () => {
  assert.deepEqual(mergeIntervals([[1, 2], [1, 8], [1, 4]]), [[1, 8]]);
});

test('handles identical point intervals and negative endpoints', () => {
  assert.deepEqual(mergeIntervals([[-3, -3], [-3, -3], [-2, 0]]), [[-3, -3], [-2, 0]]);
});

test('does not merge consecutive integer endpoints', () => {
  assert.deepEqual(mergeIntervals([[1, 2], [3, 4]]), [[1, 2], [3, 4]]);
});

test('keeps the longer end after nesting, then merges a later overlap', () => {
  assert.deepEqual(mergeIntervals([[9, 12], [3, 4], [1, 10]]), [[1, 12]]);
});

test('merges duplicate ranges and a point at their endpoint', () => {
  assert.deepEqual(mergeIntervals([[4, 4], [1, 4], [1, 4]]), [[1, 4]]);
});

test('merges separate groups without bridging the gap', () => {
  assert.deepEqual(mergeIntervals([[8, 11], [0, 2], [10, 12], [2, 5]]), [[0, 5], [8, 12]]);
});

test('merges across zero while preserving an isolated point', () => {
  assert.deepEqual(mergeIntervals([[2, 6], [-5, 2], [-7, -7]]), [[-7, -7], [-5, 6]]);
});

test('handles both endpoint limits', () => {
  assert.deepEqual(mergeIntervals([[0, 1_000_000_000], [-1_000_000_000, 0]]), [[-1_000_000_000, 1_000_000_000]]);
});

test('merges 10,000 intervals in a reverse-ordered chain', () => {
  const intervals = Array.from({ length: 10_000 }, (_, index) => [9_999 - index, 10_000 - index]);
  assert.deepEqual(mergeIntervals(intervals), [[0, 10_000]]);
});

test("keeps a large interval across several contained intervals", () => {
  assert.deepEqual(mergeIntervals([[2,3],[6,7],[1,10],[4,5]]), [[1, 10]]);
});

test("handles separated point intervals in unsorted order", () => {
  assert.deepEqual(mergeIntervals([[8,8],[-1,-1],[4,4]]), [[-1, -1], [4, 4], [8, 8]]);
});

test("merges a point linking equal endpoints", () => {
  assert.deepEqual(mergeIntervals([[2,4],[2,2],[0,2]]), [[0, 4]]);
});

test("does not merge distinct intervals with a gap", () => {
  assert.deepEqual(mergeIntervals([[5,9],[-4,-1],[1,4]]), [[-4, -1], [1, 4], [5, 9]]);
});

test("merges a chain spanning negative and positive endpoints", () => {
  assert.deepEqual(mergeIntervals([[-3,-1],[-1,2],[2,4]]), [[-3, 4]]);
});
