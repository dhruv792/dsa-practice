import { runSolution } from '../../../run-solution.js';

/**
 * Flood Fill (Easy)
 *
 * Starting at row sr and column sc, recolor the connected region whose
 * pixels have the same original color as image[sr][sc]. Pixels are connected
 * through shared sides (up, down, left, right). Diagonal contact alone does
 * not connect pixels. Leave every pixel outside that region unchanged.
 *
 * Worked example
 * With image = [[1, 0], [0, 1]], start at row 0, column 0 and fill with color
 * 2. Return [[2, 0], [0, 1]]. The other 1 shares only a corner with the
 * starting cell and stays unchanged.
 *
 * Function: floodFill(image, sr, sc, color)
 * Returns: The resulting image. You may modify the input image.
 *
 * Expected complexity: O(rows × cols) worst case, where rows and cols are the
 * dimensions of image.
 *
 * Constraints:
 * - 1 <= rows, cols <= 250
 * - The image is rectangular and sr, sc identify an existing pixel.
 * - Pixel colors and color are integers from 0 through 255.
 *
 * Examples are available as commented assertions below.
 */
export function floodFill(image, sr, sc, color) {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  const rows = image.length;
  const columns = image[0].length;
  const stack = [];

  function recolorAndPush(row, column) {
    if (row < 0 || row >= rows || column < 0 || column >= columns) return;
    if (image[row][column] !== originalColor) return;

    image[row][column] = color;
    stack.push([row, column]);
  }

  recolorAndPush(sr, sc);

  while (stack.length > 0) {
    const [row, column] = stack.pop();
    recolorAndPush(row + 1, column);
    recolorAndPush(row - 1, column);
    recolorAndPush(row, column + 1);
    recolorAndPush(row, column - 1);
  }

  return image;
}

runSolution(import.meta.url, floodFill, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    assert.deepEqual(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2), [[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
    assert.deepEqual(floodFill([[1, 1], [1, 0]], 0, 0, 1), [[1, 1], [1, 0]]);
    assert.deepEqual(floodFill([[3]], 0, 0, 0), [[0]]);
    assert.deepEqual(floodFill([[1, 0], [0, 1]], 0, 0, 2), [[2, 0], [0, 1]]);
    assert.deepEqual(floodFill([[1, 1, 0, 1]], 0, 1, 2), [[2, 2, 0, 1]]);
    assert.deepEqual(floodFill([[1], [1], [0], [0]], 3, 0, 2), [[1], [1], [2], [2]]);
    assert.deepEqual(floodFill([[7, 7, 7], [7, 7, 7]], 1, 2, 8), [[8, 8, 8], [8, 8, 8]]);
    assert.deepEqual(floodFill([[1, 5, 1], [1, 5, 1]], 0, 0, 2), [[2, 5, 1], [2, 5, 1]]);
    assert.deepEqual(floodFill([[1, 2, 1]], 0, 0, 2), [[2, 2, 1]]);
    assert.deepEqual(floodFill([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 2, 2, 9), [[9, 9, 9], [9, 1, 9], [9, 9, 9]]);
    // assert.deepEqual(floodFill([[1,1,0],[0,1,0],[0,1,1]],0,0,3), [[3, 3, 0], [0, 3, 0], [0, 3, 3]]);
    // assert.deepEqual(floodFill([[255,0,255]],0,2,1), [[255, 0, 1]]);
    // assert.deepEqual(floodFill([[1,2,1],[1,2,1]],1,0,2), [[2, 2, 1], [2, 2, 1]]);
    // assert.deepEqual(floodFill([[9,9,9],[9,0,9],[9,9,9]],1,1,2), [[9, 9, 9], [9, 2, 9], [9, 9, 9]]);
    // assert.deepEqual(floodFill([[7,0,7]],0,2,7), [[7, 0, 7]]);
  },
});
