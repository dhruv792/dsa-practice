import assert from 'node:assert/strict';
import test from 'node:test';
import { topKFrequent } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2).sort((a,b) => a-b), [1,2]);
});

test("handles negative most-frequent values", () => {
  assert.deepEqual(topKFrequent([-1,-1,2],1), [-1]);
});

test("returns all distinct values when k equals distinct count", () => {
  assert.deepEqual(topKFrequent([3,3,2,1],3).sort((a,b) => a-b), [1,2,3]);
});

test("accepts either value tied at the cutoff", () => {
  { const result = topKFrequent([4,4,7,8], 2); assert.equal(result.length, 2); assert.ok(result.includes(4)); assert.ok(result.includes(7) || result.includes(8)); }
});

test("breaks a tie below the requested ranks", () => {
  assert.deepEqual(topKFrequent([4,4,4,1,2],1), [4]);
});

test("handles one input value", () => {
  assert.deepEqual(topKFrequent([0],1), [0]);
});
