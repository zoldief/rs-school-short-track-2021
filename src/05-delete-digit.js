/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n.toString(10);
  let max = Number(string.slice(0, 1));
  for (let i = 0; i < string.length; i++) {
    let temp = string.split('');
    temp.splice(i, 1);
    temp = +temp.join('');
    if (temp > max) max = temp;
  }
  return max;
}

module.exports = deleteDigit;
