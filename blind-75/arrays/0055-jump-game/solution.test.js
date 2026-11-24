import assert from 'node:assert/strict';
import test from 'node:test';
import { canJump } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(canJump([3,2,1,0,4]), false);
});

test("a single index is already the destination", () => {
  assert.equal(canJump([0]), true);
});

test("a zero at the starting index blocks progress", () => {
  assert.equal(canJump([0,1]), false);
});

test("can skip zero-valued indices", () => {
  assert.equal(canJump([2,0,2,0,1]), true);
});

test("one long jump clears a blocked middle", () => {
  assert.equal(canJump([5,0,0,0]), true);
});

test("reaches a nonterminal zero with no way around it", () => {
  assert.equal(canJump([1,1,0,2]), false);
});
