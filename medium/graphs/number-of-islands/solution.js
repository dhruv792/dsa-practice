import { runSolution } from '../../../run-solution.js';

/**
 * Number of Islands (Medium)
 *
 * Given a rectangular grid of strings, "1" represents land and "0" represents
 * water. Count the islands. An island is a connected component of land cells
 * joined through shared sides (up, down, left, right). Diagonal contact alone
 * does not connect land.
 *
 * Worked example
 * For grid = [["1", "0"], ["0", "1"]], return 2. Each land cell forms its own
 * island because the two cells touch only diagonally.
 *
 * Function: numIslands(grid)
 * Returns: The number of islands. You may modify the input grid.
 *
 * Expected complexity: O(rows × cols) for a nonempty grid, where rows and cols
 * are the grid dimensions.
 *
 * Constraints:
 * - 0 <= rows, cols <= 300
 * - The grid is rectangular and contains only "0" and "1".
 * - Return 0 for a grid with no rows or no columns.
 *
 * Examples are available as commented assertions below.
 */
export function numIslands(grid) {
  if (!grid?.[0]?.length) return 0;

  const rows = grid.length;
  const columns = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const stack = [];
  let totalIslands = 0;

  function markAndPush(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= columns) return false;
    if (grid[row][col] !== '1') return false;

    grid[row][col] = '0';
    stack.push([row, col]);
    return true;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (!markAndPush(row, col)) continue;
      totalIslands++;

      while (stack.length > 0) {
        const [currentRow, currentCol] = stack.pop();
        for (const [dr, dc] of directions) {
          markAndPush(currentRow + dr, currentCol + dc);
        }
      }
    }
  }

  return totalIslands;
}

runSolution(import.meta.url, numIslands, {
	examples(assert) {
		// Uncomment any line and run this file without arguments.
		assert.equal(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]), 3);
		assert.equal(numIslands([["1", "1", "1"], ["1", "0", "1"], ["1", "1", "1"]]), 1);
		assert.equal(numIslands([]), 0);
		assert.equal(numIslands([[], []]), 0);
		assert.equal(numIslands([["0", "0", "0"], ["0", "0", "0"]]), 0);
		assert.equal(numIslands([["1"]]), 1);
		assert.equal(numIslands([["1", "0"], ["0", "1"]]), 2);
		assert.equal(numIslands([["1", "1", "0", "1", "0", "1", "1"]]), 3);
		assert.equal(numIslands([["1"], ["1"], ["0"], ["1"]]), 2);
		assert.equal(numIslands([["1", "1", "1", "1", "1"], ["1", "0", "0", "0", "1"], ["1", "0", "1", "0", "1"], ["1", "0", "0", "0", "1"], ["1", "1", "1", "1", "1"]]), 2);
		// assert.equal(numIslands([["1","0","1"],["0","1","0"],["1","0","1"]]), 5);
		// assert.equal(numIslands([["1","1","1"],["0","0","1"],["1","1","1"]]), 1);
		// assert.equal(numIslands([["1","1"],["0","0"],["1","1"]]), 2);
		// assert.equal(numIslands([["1","1","1","1","1"],["1","0","0","0","1"],["1","0","1","0","1"],["1","0","0","0","1"],["1","1","1","1","1"]]), 2);
		// assert.equal(numIslands([["1"],["0"],["1"],["0"],["1"]]), 3);
	},
});
