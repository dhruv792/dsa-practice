import { runSolution } from '../../../run-solution.js';

/**
 * Shortest Path in an Unweighted Graph (Medium)
 *
 * Given an undirected graph with vertices labeled 0 through n - 1, find the
 * fewest edges needed to reach destination from source. Each pair [u, v]
 * is an edge you can traverse in either direction. Every edge costs one step.
 *
 * Worked example
 * With edges = [[0, 1], [1, 2], [0, 2]], the shortest path from 0 to 2 uses
 * the edge [0, 2]. Return 1. The route through 1 uses two edges and is
 * longer.
 *
 * Function: shortestPath(n, edges, source, destination)
 * Returns: The minimum number of edges, 0 when source equals destination, or -1 if unreachable.
 *
 * Expected time complexity: O(V + E), where V = n and E = edges.length.
 *
 * Constraints:
 * - 1 <= n <= 100,000
 * - 0 <= edges.length <= 100,000
 * - All edge endpoints, source, and destination are valid vertex labels.
 *
 * Examples are available as commented assertions below.
 */
export function shortestPath(n, edges, source, destination) {
  throw new Error('Implement shortestPath');
}

runSolution(import.meta.url, shortestPath, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(shortestPath(6, [[0, 1], [1, 2], [2, 3], [3, 5], [0, 4], [4, 5]], 0, 5), 2);
    // assert.equal(shortestPath(3, [[0, 1], [1, 2], [0, 2]], 0, 2), 1);
    // assert.equal(shortestPath(1, [], 0, 0), 0);
    // assert.equal(shortestPath(4, [[0, 1], [2, 3]], 0, 3), -1);
    // assert.equal(shortestPath(2, [], 0, 1), -1);
    // assert.equal(shortestPath(3, [[0, 1], [1, 2]], 2, 0), 2);
    // assert.equal(shortestPath(5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 4), 4);
    // assert.equal(shortestPath(3, [[0, 0], [0, 1], [0, 1], [1, 2]], 0, 2), 2);
    // assert.equal(shortestPath(4, [[0, 1], [1, 2], [2, 0]], 0, 3), -1);
    // assert.equal(shortestPath(4, [[0, 1], [0, 2], [1, 3], [2, 3]], 0, 3), 2);
    // assert.equal(shortestPath(6, [[0,1],[1,2],[2,3],[3,4],[0,5],[5,4],[2,4]], 0, 4), 2);
    // assert.equal(shortestPath(6, [[0,1],[1,2],[3,4],[4,5]],2,4), -1);
    // assert.equal(shortestPath(7, [[0,1],[1,2],[1,3],[3,4],[4,5],[4,6]],2,6), 4);
    // assert.equal(shortestPath(5,[[0,4],[3,4],[0,1],[1,2],[2,3]],4,3), 1);
    // assert.equal(shortestPath(3,[[0,1],[1,2]],1,1), 0);
  },
});
