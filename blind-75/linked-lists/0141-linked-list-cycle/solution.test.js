import assert from 'node:assert/strict';
import test from 'node:test';
import { hasCycle } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(hasCycle({ val: 1, next: null }), false);
});

test('matches practice example 2', () => {
  { const node = { val: 1, next: null }; node.next = node; assert.equal(hasCycle(node), true); }
});

test("handles an empty list", () => {
  assert.equal(hasCycle(null), false);
});

test("does not mistake equal values for the same node", () => {
  assert.equal(hasCycle({ val: 1, next: { val: 1, next: null } }), false);
});

test("detects a cycle that begins after the head", () => {
  { const tail = { val: 3, next: null }; const middle = { val: 2, next: tail }; const head = { val: 1, next: middle }; tail.next = middle; assert.equal(hasCycle(head), true); }
});

test("returns false for a single node ending at null", () => {
  assert.equal(hasCycle({val:7,next:null}), false);
});

test("detects a cycle back to the head", () => {
  { const head = { val: 1, next: null }; const tail = { val: 2, next: head }; head.next = tail; assert.equal(hasCycle(head),true); }
});
