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
  const [numOne, numTwo] = numStrs.split(',');

  // Parse the numbers
  const parsedNumOne = parseInt(numOne);
  const parsedNumTwo = parseInt(numTwo);

  // If there is no second value return the first value
  if (isNaN(parsedNumTwo)) {
    return parsedNumOne;
  }

  return parsedNumOne + parsedNumTwo;
}

module.exports = {
  add
};
