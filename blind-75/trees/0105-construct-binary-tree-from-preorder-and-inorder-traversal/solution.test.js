import assert from 'node:assert/strict';
import test from 'node:test';
import { buildTree } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(structuredClone(buildTree([2, 1, 3], [1, 2, 3])), { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } });
});

test("handles empty traversals", () => {
  assert.equal(buildTree([],[]), null);
});

test("handles a right-skewed tree", () => {
  assert.deepEqual(structuredClone(buildTree([1,2,3],[1,2,3])), {"val": 1, "left": null, "right": {"val": 2, "left": null, "right": {"val": 3, "left": null, "right": null}}});
});

test("handles a left-skewed tree", () => {
  assert.deepEqual(structuredClone(buildTree([3,2,1],[1,2,3])), {"val": 3, "left": {"val": 2, "left": {"val": 1, "left": null, "right": null}, "right": null}, "right": null});
});

test("constructs the only node", () => {
  assert.deepEqual(structuredClone(buildTree([-5],[-5])), {"val": -5, "left": null, "right": null});
});

test("reconstructs unequal subtrees", () => {
  assert.deepEqual(structuredClone(buildTree([3,1,2,4],[1,2,3,4])), {"val": 3, "left": {"val": 1, "left": null, "right": {"val": 2, "left": null, "right": null}}, "right": {"val": 4, "left": null, "right": null}});
});
