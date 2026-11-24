import assert from 'node:assert/strict';
import test from 'node:test';
import { maxArea } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(maxArea([1,8,6,2,5,4,8,3,7]), 49);
});

test("minimum number of lines", () => {
  assert.equal(maxArea([1,1]), 1);
});

test("zero-height lines yield no water", () => {
  assert.equal(maxArea([0,0,0]), 0);
});

test("best pair skips both boundary lines", () => {
  assert.equal(maxArea([1,5,2,5,1]), 10);
});

test("distant walls can beat two taller interior walls", () => {
  assert.equal(maxArea([5,9,9,1,1,1,5]), 30);
});

test("area uses index distance instead of number of interior lines", () => {
  assert.equal(maxArea([7,7]), 7);
});

test("a zero wall can be discarded while finding a positive area", () => {
  assert.equal(maxArea([0,6,0,5,0]), 10);
});

test("finds a wider pair below the maximum height", () => {
  assert.equal(maxArea([1,2,3,4,5,6]), 9);
});

test("handles the same heights in reverse order", () => {
  assert.equal(maxArea([6,5,4,3,2,1]), 9);
});

test("handles a long row of equal walls", () => {
  assert.equal(maxArea(new Array(10000).fill(4)), 39996);
});
