import { runSolution } from '../../../run-solution.js';

/**
 * 133. Clone Graph (Medium)
 *
 * Given a node in a connected undirected graph, return the corresponding node
 * in a deep copy. Each node has `val` and a `neighbors` array. Preserve edges
 * and sharing, with no references to original nodes. Return null for null
 * input.
 *
 * For CLI input, pass an adjacency list with 1-based labels. The runner prints
 * the copied adjacency list.
 *
 * Each reachable node has a distinct integer label. Self-loops are allowed and
 * must be copied.
 *
 * Worked example
 * Suppose node A has B as a neighbor and B has A as a neighbor. Return A′,
 * whose neighbor is B′. B′ must point back to the same A′ object, and neither
 * copied node may point into the original graph.
 *
 * Function: cloneGraph(node)
 * Expected complexity: O(V + E) for cloneGraph, where V and E are the vertex
 * and edge counts of the graph reachable from node.
 */
export function cloneGraph(node) {
  throw new Error('Implement cloneGraph');
}

function cloneGraphAdjacency(adjacency) {
  if (adjacency.length === 0) return cloneGraph(null) === null ? [] : null;

  const nodes = adjacency.map((_, index) => ({ val: index + 1, neighbors: [] }));
  adjacency.forEach((neighbors, index) => {
    nodes[index].neighbors = neighbors.map(label => nodes[label - 1]);
  });

  const copy = cloneGraph(nodes[0]);
  const result = Array.from({ length: nodes.length }, () => []);
  const seen = new Set();
  const stack = [copy];

  while (stack.length > 0) {
    const current = stack.pop();
    if (seen.has(current)) continue;
    seen.add(current);
    result[current.val - 1] = current.neighbors.map(neighbor => neighbor.val).sort((a, b) => a - b);
    stack.push(...current.neighbors);
  }

  return result;
}

runSolution(import.meta.url, cloneGraphAdjacency, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(cloneGraph(null), null);
    // { const a = { val: 1, neighbors: [] }; const b = { val: 2, neighbors: [a] }; a.neighbors.push(b); const copy = cloneGraph(a); assert.notEqual(copy, a); assert.notEqual(copy.neighbors[0], b); assert.equal(copy.neighbors[0].neighbors[0], copy); }
    // { const node = { val: 7, neighbors: [] }; const copy = cloneGraph(node); assert.notEqual(copy, node); assert.deepEqual(structuredClone(copy), { val: 7, neighbors: [] }); }
    // { const end = { val: 4, neighbors: [] }; const a = { val: 2, neighbors: [end] }; const b = { val: 3, neighbors: [end] }; const start = { val: 1, neighbors: [a,b] }; a.neighbors.push(start); b.neighbors.push(start); end.neighbors.push(a,b); const copy = cloneGraph(start); const branches = copy.neighbors.slice().sort((x,y) => x.val-y.val); const endFromA = branches[0].neighbors.find(node => node.val === 4); const endFromB = branches[1].neighbors.find(node => node.val === 4); assert.ok(endFromA); assert.notEqual(endFromA, end); assert.equal(endFromA, endFromB); }
    // { const node = { val: 1, neighbors: [] }; node.neighbors.push(node); const copy = cloneGraph(node); assert.notEqual(copy, node); assert.equal(copy.neighbors[0], copy); }
    // { const node = { val: 3, neighbors: [] }; assert.notEqual(cloneGraph(node), cloneGraph(node)); }
    // { const a = { val: 7, neighbors: [] }; const b = { val: 9, neighbors: [a] }; a.neighbors.push(b); const copy = cloneGraph(a); assert.equal(copy.val,7); assert.equal(copy.neighbors.length,1); assert.equal(copy.neighbors[0].val,9); }
  },
});
