

const convertToCelsius = function(fahrenheitIn) {
  let celsiusOut = 0;
  let celsiusTemp = 0;
  celsiusTemp = (((fahrenheitIn - 32) * 5) / 9)
  celsiusOut = (Math.round(celsiusTemp * 10) / 10)
  return Number(celsiusOut);
};

const convertToFahrenheit = function(celsiusIn) {
  let fahrenheitOut = 0;
  let fahrenheitTemp = 0;
  fahrenheitTemp = (((celsiusIn * 9) / 5) + 32)
  fahrenheitOut = (Math.round(fahrenheitTemp * 10) / 10)
  return Number(fahrenheitOut);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
