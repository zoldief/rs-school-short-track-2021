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
  let result = '';
  const cash = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (cash.indexOf(arr[i]) === -1) {
      cash.shift();
    }
    if (cash.indexOf(arr[i]) !== -1) {
      result += '';
    } else {
      cash.push(arr[i]);
      let counter = 0;
      if (arr[i] === arr[i + 1] && cash.indexOf(arr[i]) !== -1) {
        const temp = arr[i];
        for (let j = i; j < arr.length; j++) {
          if (arr[j] !== temp) {
            break;
          }
          counter++;
        }
      }
      if (counter === 0) {
        counter = '';
      }
      result += `${counter}${arr[i]}`;
    }
  }
  return result;
}

module.exports = encodeLine;
