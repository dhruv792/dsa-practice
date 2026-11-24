import { runSolution } from '../../../run-solution.js';

/**
 * 323. Number of Connected Components in an Undirected Graph (Medium)
 *
 * Count connected components in an undirected graph with vertices 0 through n -
 * 1. Each edge is [u, v]. An isolated vertex is its own component.
 *
 * The graph may have zero vertices, in which case it has zero connected
 * components.
 *
 * Worked example
 * For n = 6 and edges = [[0, 1], [1, 2], [3, 4]], return 3. The components
 * are {0, 1, 2}, {3, 4}, and {5}. A vertex with no edges still counts as a
 * component.
 *
 * Function: countComponents(n, edges)
 * Expected complexity: O(V + E), where V = n and E = edges.length.
 */
export function countComponents(n, edges) {
  throw new Error('Implement countComponents');
}

runSolution(import.meta.url, countComponents, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.equal(countComponents(6, [[0,1],[1,2],[3,4]]), 3);
    // assert.equal(countComponents(4, []), 4);
    // assert.equal(countComponents(0, []), 0);
    // assert.equal(countComponents(5, [[0,1],[2,3],[3,4],[1,4]]), 1);
    // assert.equal(countComponents(4,[[0,1],[1,2],[2,0]]), 2);
    // assert.equal(countComponents(4,[[1,0],[3,2],[2,0]]), 1);
  },
});
