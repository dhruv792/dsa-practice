import { runSolution } from '../../../run-solution.js';

/**
 * Count Reachable Vertices (Easy)
 *
 * Given an undirected graph with vertices labeled 0 through n - 1, count
 * how many distinct vertices you can reach from source by following edges.
 * Each pair [u, v] represents an edge you can traverse in either direction.
 * Count source itself, even when it has no neighbors. A vertex reached
 * along multiple routes still counts once.
 *
 * Worked example
 * For n = 5, edges = [[0, 1], [1, 2], [3, 4]], and source = 0, return 3.
 * Start by counting 0 itself, then follow edges to 1 and 2. Neither 3 nor 4
 * is reachable from 0.
 *
 * Function: countReachable(n, edges, source)
 * Returns: The number of vertices in the connected component of source.
 *
 * Expected time complexity: O(V + E), where V = n and E = edges.length.
 *
 * Constraints:
 * - 1 <= n <= 100,000
 * - 0 <= edges.length <= 100,000
 * - Edge endpoints and source are valid vertex labels.
 * - Edges may include duplicates and self-loops.
 *
 * Examples are available as commented assertions below.
 *
 * The first three queries use the same graph with components
 * {0, 1, 2, 3}, {4, 5, 6}, and {7}.
 */
export function countReachable(n, edges, source) {
	let res = 0
	const graph = Array.from({ length: n }, () => [])

	for (const [u, v] of edges) {
		graph[u].push(v)
		graph[v].push(u)
	}

	const visited = new Array(n)
	const stack = [source]
	visited[source] = 1

	while (stack.length > 0) {
		const node = stack.pop()
		res++
		for (const neighbour of graph[node]) {
			if (visited[neighbour]) continue
			visited[neighbour] = 1
			stack.push(neighbour)
		}






	}

	return res



}

runSolution(import.meta.url, countReachable, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4]], 0), 4);
    assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4]], 6), 3);
    assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4]], 7), 1);
    assert.equal(countReachable(1, [], 0), 1);
    assert.equal(countReachable(5, [], 3), 1);
    assert.equal(countReachable(5, [[1, 0], [2, 1], [3, 2], [4, 3]], 0), 5);
    assert.equal(countReachable(7, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4], [5, 6]], 1), 5);
    assert.equal(countReachable(4, [[0, 0], [0, 1], [0, 1], [1, 2], [2, 2]], 0), 3);
    assert.equal(countReachable(5, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 3]], 2), 5);
    assert.equal(countReachable(8, [[4, 5], [2, 1], [0, 2], [5, 6], [1, 3], [6, 4], [3, 4]], 0), 7);
    // assert.equal(countReachable(6, [[0,1],[1,2],[2,0],[0,3],[1,3],[4,5]], 2), 4);
    // assert.equal(countReachable(4, [[0,1],[3,3]],3), 1);
    // assert.equal(countReachable(6, [[1,5],[4,2],[0,1]],5), 3);
    // assert.equal(countReachable(7,[[2,0],[2,1],[5,3],[5,4],[1,5]],4), 6);
    // assert.equal(countReachable(4,[[0,2],[0,2],[0,2],[1,3]],2), 2);
  },
});
