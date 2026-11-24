import { truncate } from 'node:fs';
import { runSolution } from '../../../run-solution.js';

/**
 * Find if a Path Exists in a Graph (Easy)
 *
 * Given an undirected graph with vertices labeled 0 through n - 1,
 * determine whether you can reach destination from source by following edges.
 * Each pair [u, v] is an edge you can traverse in either direction. A vertex
 * is reachable from itself, even if it has no edges.
 *
 * Worked example
 * With n = 6 and edges = [[0, 1], [1, 2], [3, 4], [4, 5]], a query from 0 to
 * 5 returns false. Both endpoints appear in edges, but they belong to
 * different components. A query from 0 to 2 returns true via 0 → 1 → 2.
 *
 * Function: validPath(n, edges, source, destination)
 * Returns: true if a path exists, otherwise false.
 *
 * Expected time complexity: O(V + E), where V = n and E = edges.length.
 *
 * Constraints:
 * - 1 <= n <= 100,000
 * - 0 <= edges.length <= 100,000
 * - All edge endpoints, source, and destination are valid vertex labels.
 *
 * Examples are available as commented assertions below.
 *
 * The first three queries use the same graph. It has a chain containing
 * {0, 1, 2, 3, 4}, a chain containing {5, 6, 7}, a cycle on {8, 9, 10},
 * and an isolated vertex 11. The fourth query adds a bridge [4, 6].
 */
export function validPath(n, edges, source, destination) {

	if (source === destination) return true

	const graph = Array.from({ length: n }, () => [])

	for (const [u, v] of edges) {
		graph[u].push(v)
		graph[v].push(u)
	}

	const stack = [source]
	const visited = new Array(n)
	visited[source] = 1

	while (stack.length>0){
		const node = stack.pop()

		if(node == destination) return true

		for(const v of graph[node]){
			if (visited[v]) continue
			visited[v] = 1
			stack.push(v)
		}
	}

	return false
}

runSolution(import.meta.url, validPath, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8]], 2, 3), true);
    // assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8]], 2, 7), false);
    // assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8]], 3, 10), false);
    // assert.equal(validPath(12, [[8, 9], [2, 0], [6, 5], [4, 1], [9, 10], [1, 3], [5, 7], [0, 4], [10, 8], [4, 6]], 2, 7), true);
    // assert.equal(validPath(12, [[5, 8], [2, 0], [9, 6], [6, 7], [3, 1], [8, 4], [2, 3], [6, 10], [4, 9]], 5, 10), true);
    // assert.equal(validPath(12, [[5, 8], [2, 0], [9, 6], [6, 7], [3, 1], [8, 4], [2, 3], [6, 10], [4, 9]], 11, 10), false);
    // assert.equal(validPath(1, [], 0, 0), true);
    // assert.equal(validPath(12, [[5, 8], [2, 0], [9, 6], [6, 7], [3, 1], [8, 4], [2, 3], [6, 10], [4, 9]], 5, 4), true);
    // assert.equal(validPath(5, [[0,1],[1,2],[2,0],[3,4]],2,2), true);
    // assert.equal(validPath(4, [[0,0],[0,1],[3,3],[2,3]],0,3), false);
    // assert.equal(validPath(7, [[1,2],[5,6],[3,1],[4,1],[2,0]],4,0), true);
    // assert.equal(validPath(4,[[3,2],[2,1],[1,0]],0,3), true);
    // assert.equal(validPath(5,[[1,2],[2,3],[3,4]],0,3), false);
  },
});
