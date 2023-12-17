const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const regex = /([a-zA-Z\d])\1*/g;
  const matches = str.match(regex) || [];
  return result = matches.reduce((acc,val) => {
    return acc  + `${val.length>1?val.length:''}${val[0]}`
  },'')
}

module.exports = {
  encodeLine,
};
