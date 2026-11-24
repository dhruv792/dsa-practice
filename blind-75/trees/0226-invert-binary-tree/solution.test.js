import assert from 'node:assert/strict';
import test from 'node:test';
import { invertTree } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(structuredClone(invertTree({ val: 1, left: { val: 2, left: null, right: null }, right: null })), { val: 1, left: null, right: { val: 2, left: null, right: null } });
});

test("leaves an empty tree empty", () => {
  assert.equal(invertTree(null), null);
});

test("mirrors a chain at every level", () => {
  assert.deepEqual(structuredClone(invertTree({val:1,left:null,right:{val:2,left:null,right:{val:3,left:null,right:null}}})), {"val": 1, "left": {"val": 2, "left": {"val": 3, "left": null, "right": null}, "right": null}, "right": null});
});

test("keeps a leaf unchanged", () => {
  assert.deepEqual(structuredClone(invertTree({val:0,left:null,right:null})), {"val": 0, "left": null, "right": null});
});

test("mirrors both children under the root", () => {
  assert.deepEqual(structuredClone(invertTree({val:7,left:{val:2,left:null,right:null},right:{val:9,left:null,right:null}})), {"val": 7, "left": {"val": 9, "left": null, "right": null}, "right": {"val": 2, "left": null, "right": null}});
});

test("mirrors a left-only chain", () => {
  assert.deepEqual(structuredClone(invertTree({val:1,left:{val:0,left:{val:-1,left:null,right:null},right:null},right:null})), {"val": 1, "left": null, "right": {"val": 0, "left": null, "right": {"val": -1, "left": null, "right": null}}});
});
