/*
  function to parse and retrieve the delimited charater if the input has it
*/
const retrieveDelimiter = (str) => {
  const match = str.match(/^\/\/(.)\n/);

  return match ? match[1] : ',';
}

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
  
  // Create regex to split by the provided delimiter
  const delimiter = retrieveDelimiter(numStrs);

  // In case of delimiter being a special char in the regex pattern escape it
  const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`[${escapedDelimiter}\n]`, 'g');

  // Split the input by comma and newline charater to get the numbers as an array
  const numberArray = numStrs.split(regex);

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
