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
  // To be implemented
}

module.exports = {
  add
};
