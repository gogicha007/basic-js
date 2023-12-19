const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let tmpArr = []
    const result = arr.flatMap((val, idx, arr) => {
      tmpArr = []
      tmpArr.push(val)
      if (arr[idx - 1] === "--discard-next") return [];
      if (arr[idx - 1] === "--double-next") tmpArr.push(val);
      if (arr[idx + 1] === "--discard-prev") tmpArr.pop();
      if (arr[idx + 1] === "--double-prev") tmpArr.push(val);

      if (val.toString().startsWith("--discard")) return [];
      if (val.toString().startsWith("--double")) return [];

      return tmpArr;
    });
    return result;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
