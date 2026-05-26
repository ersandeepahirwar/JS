// Write a JavaScript program to convert temperature from Fahrenheit to Celsius.

const temperatureF = 98.6;

const temperatureC = ((temperatureF - 32) * (5 / 9)).toFixed(1);
console.log(`${temperatureF}°F = ${temperatureC}°C`);
