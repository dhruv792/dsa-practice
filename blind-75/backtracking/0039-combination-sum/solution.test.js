import assert from 'node:assert/strict';
import test from 'node:test';
import { combinationSum } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(combinationSum([2,3,6,7], 7).map(group => group.sort((a,b) => a-b)).sort(), [[2,2,3],[7]]);
});

test("can use a candidate more than twice", () => {
  assert.deepEqual(combinationSum([3,5], 9), [[3, 3, 3]]);
});

test("has no solution when every candidate exceeds target", () => {
  assert.deepEqual(combinationSum([4,8], 3), []);
});

test("allows distinct combinations of the same target", () => {
  assert.deepEqual(combinationSum([2,4], 8).map(group => [...group].sort((a,b) => a-b)).sort(), [[2,2,2,2],[2,2,4],[4,4]]);
});

test("returns no combinations for an empty candidate list", () => {
  assert.deepEqual(combinationSum([],5), []);
});

test("allows a combination of exactly one candidate", () => {
  assert.deepEqual(combinationSum([5,9],5), [[5]]);
});
