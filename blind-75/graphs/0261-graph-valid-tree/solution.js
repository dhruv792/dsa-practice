import { runSolution } from '../../../run-solution.js';

/**
 * 261. Graph Valid Tree (Medium)
 *
 * Given n >= 1 vertices labeled 0 through n - 1 and undirected edges [u, v],
 * return whether the graph is connected and acyclic.
 *
 * There is at least one vertex. Edge endpoints are valid labels and the input
 * represents a simple undirected graph.
 *
 * Worked example
 * For n = 4 and edges = [[0, 1], [1, 2], [2, 0]], return false. Vertices 0,
 * 1, and 2 form a cycle, and vertex 3 is isolated. A valid tree must satisfy
 * both the connectivity and acyclicity requirements.
 *
 * Function: validTree(n, edges)
 * Expected complexity: O(V + E), where V = n and E = edges.length.
 */
export function validTree(n, edges) {
  throw new Error('Implement validTree');
}

runSolution(import.meta.url, validTree, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(validTree(5, [[0,1],[0,2],[0,3],[1,4]]), true);
    // assert.equal(validTree(1, []), true);
    // assert.equal(validTree(4, [[0,1],[1,2],[2,0]]), false);
    // assert.equal(validTree(4, [[0,1],[2,3]]), false);
    // assert.equal(validTree(5,[[4,2],[1,3],[0,4],[4,1]]), true);
    // assert.equal(validTree(2,[]), false);
  },
});
