const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition =
    options.addition === null || options.addition === false
      ? String(options.addition)
      : options.addition || "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";
  const innerString = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);
  const outerString = Array(repeatTimes)
    .fill(`${str}${innerString}`)
    .join(separator);
  return outerString;
}

module.exports = {
  repeater,
};
