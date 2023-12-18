const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const cols = matrix[0].length;
  const rows = matrix.length;
  const arr = [];
  let row = [];
  let eVal = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i > 0) {
        eVal = !!matrix[i - 1][j] ? 1 : 0; // top
      }
      if (i > 0 && j + 1 < cols) {
        eVal += !!matrix[i - 1][j + 1] ? 1 : 0; // top right
      }
      if (j + 1 < cols) {
        eVal += !!matrix[i][j + 1] ? 1 : 0; // right
      }
      if (i + 1 < rows && j + 1 < cols) {
        eVal += !!matrix[i + 1][j + 1] ? 1 : 0; // right under
      }
      if (i + 1 < rows) {
        eVal += !!matrix[i + 1][j] ? 1 : 0; // under
      }
      if (i + 1 < rows && j > 0) {
        eVal += !!matrix[i + 1][j - 1] ? 1 : 0; // left under
      }
      if (j > 0) {
        eVal += !!matrix[i][j - 1] ? 1 : 0; // left
      }
      if (i > 0 && j > 0) {
        eVal += !!matrix[i - 1][j - 1] ? 1 : 0; // left top
      }
      row.push(eVal);
      eVal = 0;
    }
    arr.push(row);
    row = [];
  }
  return arr;
}

module.exports = {
  minesweeper,
};
