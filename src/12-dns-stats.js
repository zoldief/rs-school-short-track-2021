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
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const temp = domains[i].split('.').reverse();
    temp[0] = '.'.concat(temp[0]);
    for (let j = 0; j < temp.length; j++) {
      if (temp[j + 1]) {
        temp[j + 1] = temp[j].concat('.', temp[j + 1]);
      }
      if (Object.prototype.hasOwnProperty.call(result, temp[j])) {
        result[temp[j]] += 1;
      } else {
        result[temp[j]] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
