import { runSolution } from '../../../run-solution.js';

/**
 * 297. Serialize and Deserialize Binary Tree (Hard)
 *
 * Implement serialize(root) and deserialize(data) so a binary tree round-trips
 * through one string. Nodes have `val`, `left`, and `right` fields, with null
 * children. You choose the format. The runner calls roundTrip(root).
 *
 * Node values are signed 32-bit integers. serialize must return a string and
 * deserialize must reconstruct the values and the placement of null children.
 *
 * Serialization converts a tree into a string. Deserialization uses that
 * string to build a tree with the same shape and values.
 *
 * Worked example
 * Start with a tree whose root is 1 and whose only child is a right child
 * with value -2. After serializing to one string and reading it back, the
 * root must still have no left child and a right child of -2. The stored
 * representation must preserve both shape and values.
 *
 * Function: roundTrip(root)
 * Expected complexity: O(n) for serialization and deserialization with a
 * linear-size encoding of fixed-width integers, where n is the number of tree
 * nodes.
 */
export function serialize(root) {
  throw new Error('Implement serialize');
}

export function deserialize(data) {
  throw new Error('Implement deserialize');
}

export function roundTrip(root) {
  return deserialize(serialize(root));
}

runSolution(import.meta.url, roundTrip, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(structuredClone(roundTrip({ val: 1, left: null, right: { val: -2, left: null, right: null } })), { val: 1, left: null, right: { val: -2, left: null, right: null } });
    // assert.equal(roundTrip(null), null);
    // assert.deepEqual(structuredClone(roundTrip({val:2,left:{val:2,left:null,right:null},right:{val:2,left:null,right:null}})), {"val": 2, "left": {"val": 2, "left": null, "right": null}, "right": {"val": 2, "left": null, "right": null}});
    // { const root = { val: 1, left: { val: -4, left: null, right: null }, right: null }; const data = serialize(root); assert.equal(typeof data, "string"); assert.deepEqual(structuredClone(deserialize(data)), root); }
    // assert.deepEqual(structuredClone(roundTrip({val:0,left:null,right:null})), {"val": 0, "left": null, "right": null});
    // assert.deepEqual(structuredClone(roundTrip({val:3,left:{val:2,left:null,right:{val:1,left:null,right:null}},right:null})), {"val": 3, "left": {"val": 2, "left": null, "right": {"val": 1, "left": null, "right": null}}, "right": null});
  },
});
