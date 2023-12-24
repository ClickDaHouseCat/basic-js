const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  // Initialize an array to store the count of each character in s1
  const countArray = Array(26).fill(0);

  // Count the occurrences of each character in s1
  for (let char of s1) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    countArray[index]++;
  }

  // Initialize a variable to store the count of common characters
  let commonCount = 0;

  // Check the occurrences of each character in s2
  for (let char of s2) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // If the character is common and has occurrences in s1, increment the count
    if (countArray[index] > 0) {
      commonCount++;
      countArray[index]--;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
