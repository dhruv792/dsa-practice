import assert from 'node:assert/strict';
import test from 'node:test';
import { isPalindromeValues } from './solution.js';

test('accepts an empty list', () => {
  assert.equal(isPalindromeValues([]), true);
});

test('accepts a single node', () => {
  assert.equal(isPalindromeValues([7]), true);
});

test('accepts an equal pair', () => {
  assert.equal(isPalindromeValues([2, 2]), true);
});

test('rejects an unequal pair', () => {
  assert.equal(isPalindromeValues([2, 3]), false);
});

test('accepts an even palindrome', () => {
  assert.equal(isPalindromeValues([1, 2, 2, 1]), true);
});

test('accepts an odd palindrome', () => {
  assert.equal(isPalindromeValues([1, 2, 3, 2, 1]), true);
});

test('rejects an odd list with matching ends and unequal inner values', () => {
  assert.equal(isPalindromeValues([1, 2, 3, 4, 1]), false);
});

test('rejects an even list with matching ends and unequal inner values', () => {
  assert.equal(isPalindromeValues([1, 2, 3, 1]), false);
});

test('accepts repeated negative values around the middle', () => {
  assert.equal(isPalindromeValues([-1, -1, 0, -1, -1]), true);
});

test('accepts a list of identical values', () => {
  assert.equal(isPalindromeValues([4, 4, 4, 4, 4, 4]), true);
});
