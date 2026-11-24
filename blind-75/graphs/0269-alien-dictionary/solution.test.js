import assert from 'node:assert/strict';
import test from 'node:test';
import { alienOrder } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]), "wertf");
});

test("rejects an invalid prefix order", () => {
  assert.equal(alienOrder(["abc","ab"]), "");
});

test("rejects cyclic character precedence", () => {
  assert.equal(alienOrder(["z","x","z"]), "");
});

test("includes every known letter when the order is unconstrained", () => {
  assert.deepEqual(alienOrder(["abc"]).split("").sort(), ["a","b","c"]);
});

test("accepts the shorter word before its own extension", () => {
  assert.deepEqual(alienOrder(["ab","abc"]).split("").sort(), ["a","b","c"]);
});

test("finds the forced letter order", () => {
  assert.equal(alienOrder(["c","b","a"]), "cba");
});
