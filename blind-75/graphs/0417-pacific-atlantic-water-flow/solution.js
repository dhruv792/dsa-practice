import { runSolution } from '../../../run-solution.js';

/**
 * 417. Pacific Atlantic Water Flow (Medium)
 *
 * In a rectangular height grid, water moves to side-adjacent cells of equal or
 * lower height. The Pacific borders the top and left, and the Atlantic borders
 * the bottom and right. Return all [row, col] cells from which water can reach
 * both, in any order.
 *
 * The grid is rectangular and coordinates are zero-based. Each qualifying
 * coordinate should appear once.
 *
 * Worked example
 * In heights = [[5, 5, 5], [5, 1, 5], [5, 5, 5]], return all eight border
 * cells. Water can flow around the edge through cells of equal height to
 * reach both oceans. The center is surrounded by taller cells, so water from
 * it cannot reach either ocean.
 *
 * Function: pacificAtlantic(heights)
 * Expected complexity: O(rows × cols) for a nonempty grid, where rows and cols
 * are the dimensions of heights.
 */
export function pacificAtlantic(heights) {
  throw new Error('Implement pacificAtlantic');
}

runSolution(import.meta.url, pacificAtlantic, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(pacificAtlantic([[1,2],[4,3]]).sort(), [[0,1],[1,0],[1,1]]);
    // assert.deepEqual(pacificAtlantic([[3,1,2]]).sort(), [[0, 0], [0, 1], [0, 2]]);
    // assert.deepEqual(pacificAtlantic([[2,2],[2,2]]).sort(), [[0,0],[0,1],[1,0],[1,1]]);
    // assert.deepEqual(pacificAtlantic([[5,5,5],[5,1,5],[5,5,5]]).sort(), [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);
    // assert.deepEqual(pacificAtlantic([[1,1,1],[1,9,1],[1,1,1]]).sort(), [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]);
    // assert.deepEqual(pacificAtlantic([[7]]), [[0, 0]]);
  },
});
