function getMatrixElementsSum(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  let rows = [];
  let columns = [];
  for (let c = 0; c < width; c++) {
    for (let r = 0; r < height; r++) {
      rows.push(matrix[r][c]);
    }
    columns.push(rows);
    rows = [];
  }
  const result = columns.reduce((acc, val) => {
    return acc +
      val.reduce((subAcc, subVal, idx, arr) => {
        if (idx === 0) {
          subAcc += subVal;
        } else if (arr[idx - 1] !== 0) {
          subAcc += subVal;
        }
        return subAcc;
      }, 0);
  }, 0);
  return result;
  // console.log(`${rows} - ${columns}`);

  // return matrix.flat().reduce((acc, val) => acc + val, 0);
}

matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
console.log(getMatrixElementsSum(matrix));
