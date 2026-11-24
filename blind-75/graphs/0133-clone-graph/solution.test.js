import assert from 'node:assert/strict';
import test from 'node:test';
import { cloneGraph } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(cloneGraph(null), null);
});

test('matches practice example 2', () => {
  { const a = { val: 1, neighbors: [] }; const b = { val: 2, neighbors: [a] }; a.neighbors.push(b); const copy = cloneGraph(a); assert.notEqual(copy, a); assert.notEqual(copy.neighbors[0], b); assert.equal(copy.neighbors[0].neighbors[0], copy); }
});

test("copies an isolated node", () => {
  { const node = { val: 7, neighbors: [] }; const copy = cloneGraph(node); assert.notEqual(copy, node); assert.deepEqual(structuredClone(copy), { val: 7, neighbors: [] }); }
});

test("preserves sharing in a reachable diamond", () => {
  { const end = { val: 4, neighbors: [] }; const a = { val: 2, neighbors: [end] }; const b = { val: 3, neighbors: [end] }; const start = { val: 1, neighbors: [a,b] }; a.neighbors.push(start); b.neighbors.push(start); end.neighbors.push(a,b); const copy = cloneGraph(start); const branches = copy.neighbors.slice().sort((x,y) => x.val-y.val); const endFromA = branches[0].neighbors.find(node => node.val === 4); const endFromB = branches[1].neighbors.find(node => node.val === 4); assert.ok(endFromA); assert.notEqual(endFromA, end); assert.equal(endFromA, endFromB); }
});

test("retains a self-loop in the copied node", () => {
  { const node = { val: 1, neighbors: [] }; node.neighbors.push(node); const copy = cloneGraph(node); assert.notEqual(copy, node); assert.equal(copy.neighbors[0], copy); }
});

test("makes separate copies on separate calls", () => {
  { const node = { val: 3, neighbors: [] }; assert.notEqual(cloneGraph(node), cloneGraph(node)); }
});

test("preserves neighbor labels on an undirected edge", () => {
  { const a = { val: 7, neighbors: [] }; const b = { val: 9, neighbors: [a] }; a.neighbors.push(b); const copy = cloneGraph(a); assert.equal(copy.val,7); assert.equal(copy.neighbors.length,1); assert.equal(copy.neighbors[0].val,9); }
});
