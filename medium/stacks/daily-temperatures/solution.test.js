import assert from 'node:assert/strict';
import test from 'node:test';
import { dailyTemperatures } from './solution.js';

test('finds the first warmer day', () => {
  assert.deepEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
});

test('handles empty input', () => {
  assert.deepEqual(dailyTemperatures([]), []);
});

test('handles a single day', () => {
  assert.deepEqual(dailyTemperatures([42]), [0]);
});

test('handles rising temperatures', () => {
  assert.deepEqual(dailyTemperatures([30, 40, 50]), [1, 1, 0]);
});

test('handles falling temperatures', () => {
  assert.deepEqual(dailyTemperatures([50, 40, 30]), [0, 0, 0]);
});

test('rejects equal temperatures as warmer', () => {
  assert.deepEqual(dailyTemperatures([70, 70, 70]), [0, 0, 0]);
});

test('waits past an equal temperature', () => {
  assert.deepEqual(dailyTemperatures([70, 70, 71]), [2, 1, 0]);
});

test('resolves multiple waits on the same day', () => {
  assert.deepEqual(dailyTemperatures([90, 80, 70, 100]), [3, 2, 1, 0]);
});

test('uses the nearest warmer day', () => {
  assert.deepEqual(dailyTemperatures([20, 25, 30, 40]), [1, 1, 1, 0]);
});

test('handles repeated highs and temperature limits', () => {
  assert.deepEqual(dailyTemperatures([150, 0, 150, 0]), [0, 1, 0, 0]);
});

test("skips equal temperatures before the next strictly warmer day", () => {
  assert.deepEqual(dailyTemperatures([50,50,49,50,51]), [4, 3, 1, 1, 0]);
});

test("nearer warmth beats a hotter but later day", () => {
  assert.deepEqual(dailyTemperatures([70,71,90,65,80]), [1, 1, 0, 1, 0]);
});

test("handles a minimum and repeated maximum", () => {
  assert.deepEqual(dailyTemperatures([0,150,150]), [1, 0, 0]);
});

test("handles a plateau after an earlier increase", () => {
  assert.deepEqual(dailyTemperatures([19,20,20,20]), [1, 0, 0, 0]);
});

test("resolves a recent cooler day while an earlier warm one keeps waiting", () => {
  assert.deepEqual(dailyTemperatures([6,1,2,7]), [3, 1, 1, 0]);
});
