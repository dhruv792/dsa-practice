import assert from 'node:assert/strict';
import test from 'node:test';
import { rob } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(rob([2, 3, 2]), 3);
});

test("does not combine the two endpoints of a circle", () => {
  assert.equal(rob([8,1,1,9]), 10);
});

test("handles an empty circle", () => {
  assert.equal(rob([]), 0);
});

test("handles one house without excluding it", () => {
  assert.equal(rob([8]), 8);
});

test("chooses one of two houses", () => {
  assert.equal(rob([7,4]), 7);
});

test("uses two nonadjacent houses in a circle", () => {
  assert.equal(rob([1,2,3,1]), 4);
});
