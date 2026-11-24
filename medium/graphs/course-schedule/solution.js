import { runSolution } from '../../../run-solution.js';

/**
 * Course Schedule (Medium)
 *
 * There are numCourses courses labeled 0 through numCourses - 1. Each pair
 * [course, prerequisite] means you must finish prerequisite before taking
 * course. Determine whether there is an order in which you can finish every
 * course. A course may have multiple prerequisites.
 *
 * Worked example
 * With prerequisites = [[1, 0], [2, 1]], course 0 can be taken first, then 1,
 * then 2. Return true. If [0, 2] is added, course 0 must wait for 2, which
 * already depends on 0 through 1. Return false.
 *
 * Function: canFinish(numCourses, prerequisites)
 * Returns: true if every course can be finished, otherwise false.
 *
 * Expected time complexity: O(V + E), where V = numCourses and E = prerequisites.length.
 *
 * Constraints:
 * - 0 <= numCourses <= 100,000
 * - 0 <= prerequisites.length <= 100,000
 * - Every pair contains valid course labels. Repeated pairs represent the same requirement.
 *
 * Examples are available as commented assertions below.
 */
export function canFinish(numCourses, prerequisites) {

	const preMap = new Map();
	for (let i = 0; i < numCourses; i++) {
		preMap.set(i, []);
	}
	for (let [crs, pre] of prerequisites) {
		preMap.get(crs).push(pre);
	}

	// Store all courses along the current DFS path
	const visiting = new Set();

	const dfs = (crs) => {
		if (visiting.has(crs)) {
			// Cycle detected
			return false;
		}
		if (preMap.get(crs).length === 0) {
			return true;
		}

		visiting.add(crs);
		for (let pre of preMap.get(crs)) {
			if (!dfs(pre)) {
				return false;
			}
		}
		visiting.delete(crs);
		preMap.set(crs, []);
		return true;
	};

	for (let c = 0; c < numCourses; c++) {
		if (!dfs(c)) {
			return false;
		}
	}
	return true;

}

runSolution(import.meta.url, canFinish, {
	examples(assert) {
		// Uncomment any line and run this file without arguments.
		assert.equal(canFinish(4, [[1, 0], [2, 1], [3, 2]]), true);
		// assert.equal(canFinish(2, [[1, 0], [0, 1]]), false);
		// assert.equal(canFinish(0, []), true);
		// assert.equal(canFinish(4, []), true);
		// assert.equal(canFinish(1, [[0, 0]]), false);
		// assert.equal(canFinish(3, [[1, 0], [2, 1], [0, 2]]), false);
		// assert.equal(canFinish(5, [[1, 0], [3, 2], [4, 3], [2, 4]]), false);
		// assert.equal(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]]), true);
		// assert.equal(canFinish(3, [[1, 0], [1, 0], [2, 1]]), true);
		// assert.equal(canFinish(6, [[1, 0], [3, 2], [4, 3]]), true);
		// assert.equal(canFinish(5, [[4,2],[4,3],[2,1],[3,1],[1,0]]), true);
		// assert.equal(canFinish(5, [[0,1],[1,2],[2,3],[3,2]]), false);
		// assert.equal(canFinish(4, [[1,0],[1,0],[2,1],[0,2]]), false);
		// assert.equal(canFinish(4,[[0,1],[1,2],[2,3]]), true);
		// assert.equal(canFinish(4,[[0,2],[2,1],[1,0]]), false);
	},
});
