import assert from 'node:assert/strict';
import test from 'node:test';
import { eraseOverlapIntervals } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]), 1);
});

test("adjacent intervals can all remain", () => {
  assert.equal(eraseOverlapIntervals([[1,2],[2,3],[3,4]]), 0);
});

test("removes all but one of identical intervals", () => {
  assert.equal(eraseOverlapIntervals([[1,3],[1,3],[1,3]]), 2);
});

test("removing one broad interval can retain several smaller ones", () => {
  assert.equal(eraseOverlapIntervals([[0,10],[1,2],[2,3],[3,4]]), 1);
});

test("handles an empty list", () => {
  assert.equal(eraseOverlapIntervals([]), 0);
});

test("keeps one of two overlapping ranges", () => {
  assert.equal(eraseOverlapIntervals([[2,4],[-3,3]]), 1);
});
