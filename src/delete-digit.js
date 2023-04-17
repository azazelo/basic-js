const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( n ) {
  const lan = String(n).split('');
  const minimum = Math.min(...lan);
  const mina = lan.filter((a) => a === minimum);
  const mid = mina.join();
  return Number(mid);
}

module.exports = {
  deleteDigit
};
