import assert from 'node:assert/strict';
import test from 'node:test';
import { reorderList } from './solution.js';

test('matches practice example 1', () => {
  { const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } }; reorderList(head); assert.deepEqual(head, { val: 1, next: { val: 3, next: { val: 2, next: null } } }); }
});

test("handles an empty list", () => {
  { assert.doesNotThrow(() => reorderList(null)); }
});

test("keeps a two-node list in the same order", () => {
  { const head = { val: 1, next: { val: 2, next: null } }; reorderList(head); assert.deepEqual(head, { val: 1, next: { val: 2, next: null } }); }
});

test("relinks original nodes without swapping values", () => {
  { const d = { val: 4, next: null }; const c = { val: 3, next: d }; const b = { val: 2, next: c }; const a = { val: 1, next: b }; reorderList(a); assert.equal(a.next, d); assert.equal(d.next, b); assert.equal(b.next, c); assert.equal(c.next, null); assert.deepEqual([a.val,b.val,c.val,d.val], [1,2,3,4]); }
});

test("terminates a reordered odd-length list", () => {
  { const head = {val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:null}}}}}; reorderList(head); assert.deepEqual(head,{val:1,next:{val:5,next:{val:2,next:{val:4,next:{val:3,next:null}}}}}); }
});

test("keeps a single original node", () => {
  { const head = {val:9,next:null}; reorderList(head); assert.deepEqual(head,{val:9,next:null}); }
});
