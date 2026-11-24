import assert from 'node:assert/strict';
import test from 'node:test';
import { climbStairs } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(climbStairs(5), 8);
});

test("counts one way to climb one stair", () => {
  assert.equal(climbStairs(1), 1);
});

test("counts both ways to climb two stairs", () => {
  assert.equal(climbStairs(2), 2);
});

test("handles the largest allowed n", () => {
  assert.equal(climbStairs(45), 1836311903);
});

test("counts ways to reach stair three", () => {
  assert.equal(climbStairs(3), 3);
});

test("counts ordered routes to stair four", () => {
  assert.equal(climbStairs(4), 5);
});
