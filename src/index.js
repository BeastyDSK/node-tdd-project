/*
  function to sum comma separated numbers in a string and return it
*/
const add = (numStrs) => {
  // Provided input is not of type string.
  if (typeof numStrs !== 'string') {
    return 0;
  }

  // Handle both empty and undefined values
  if (!numStrs) {
    return 0;
  }

  // Handle two numbers in a comma sep string

  // Split the input by comma to get the numbers as an array
  const numberArray = numStrs.split(',');

  // Parse the string values to numbers and filter only the numbers
  const parsedNumberArray = numberArray
  .map((num) => parseInt(num))
  .filter((num) => Number.isInteger(num));

  // calculate the sum
  const sum = parsedNumberArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  // Return the sum
  return sum;
}

module.exports = {
  add
};
