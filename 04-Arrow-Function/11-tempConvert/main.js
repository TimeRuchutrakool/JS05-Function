const farenheitToCelsius = (farenheit) =>
  `${((farenheit - 32) / 1.8).toFixed(2)}°C`;

console.log(farenheitToCelsius(100));
