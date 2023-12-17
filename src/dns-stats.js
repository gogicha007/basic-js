const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(domains.length === 0) return {};
  const dnsArr = domains.map((val) => val.split(".").reverse()).sort((a,b) => a.length - b.length);
  const dnsObj = {};
  dnsObj[`.${dnsArr[0][0]}`] = domains.length > 1 ? domains.length : 1;
  dnsObj[`.${dnsArr[0][0]}.${dnsArr[0][1]}`] =
    domains.length > 1 ? domains.length : 1;
  dnsArr.map((val) => {
    if (val.length > 2)
      dnsObj[`.${val.join('.')}`] = domains.length > 1 ? 1 : domains.length;
  });
  return dnsObj;
}

module.exports = {
  getDNSStats
};
