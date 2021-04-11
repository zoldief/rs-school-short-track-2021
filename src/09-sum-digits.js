/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n.toString(10);
  while (result.toString(10).length > 1) {
    result = result
      .toString(10)
      .split('')
      .map((item) => +item)
      .reduce((a, b) => a + b);
  }
  return result;
}

module.exports = getSumOfDigits;
