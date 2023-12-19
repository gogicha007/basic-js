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
    const result = arr.flatMap((val, idx, arr) => {
      if (arr[idx + 1] === "--discard-prev") return [];
      if (arr[idx - 1] === "--discard-next") return [];
      if (arr[idx - 1] === "--double-next") return [val, val];
      if (arr[idx + 1] === "--double-prev") return [val, val];

      if (val.toString().startsWith("--d")) return [];

      return val;
    });
    return result;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
