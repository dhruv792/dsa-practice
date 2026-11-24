import assert from 'node:assert/strict';
import test from 'node:test';
import { serialize, deserialize, roundTrip } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(structuredClone(roundTrip({ val: 1, left: null, right: { val: -2, left: null, right: null } })), { val: 1, left: null, right: { val: -2, left: null, right: null } });
});

test("round-trips an empty tree", () => {
  assert.equal(roundTrip(null), null);
});

test("preserves repeated node values", () => {
  assert.deepEqual(structuredClone(roundTrip({val:2,left:{val:2,left:null,right:null},right:{val:2,left:null,right:null}})), {"val": 2, "left": {"val": 2, "left": null, "right": null}, "right": {"val": 2, "left": null, "right": null}});
});

test("preserves the side of a single child", () => {
  { const root = { val: 1, left: { val: -4, left: null, right: null }, right: null }; const data = serialize(root); assert.equal(typeof data, "string"); assert.deepEqual(structuredClone(deserialize(data)), root); }
});

test("preserves a value of zero as a real node", () => {
  assert.deepEqual(structuredClone(roundTrip({val:0,left:null,right:null})), {"val": 0, "left": null, "right": null});
});

test("distinguishes missing children at multiple levels", () => {
  assert.deepEqual(structuredClone(roundTrip({val:3,left:{val:2,left:null,right:{val:1,left:null,right:null}},right:null})), {"val": 3, "left": {"val": 2, "left": null, "right": {"val": 1, "left": null, "right": null}}, "right": null});
});
