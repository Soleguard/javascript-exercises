const convertToCelsius = function(temperature) {

  // Declare and initialize result
  let result = 0;

  // Calculate conversion
  result = ((temperature) - 32) * (5 / 9);

  // Round to one decimal
  result = result.toFixed(1);

  // Convert to number
  result = Number(result)

  // Return result
  return result;

};

const convertToFahrenheit = function(temperature) {

  // Declare and initialize result
  let result = 0;

  // Calculate conversion
  result = ((temperature) * (9 / 5)) + 32;

  // Round to one decimal
  result = result.toFixed(1);

  // Convert to number
  result = Number(result)

  // Return result
  return result;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
