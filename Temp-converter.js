// This is just declaring the temp value
var kelvin = 0;
let celsius = 273-kelvin;
// subtracts the celsuis from the temp and stores in celsius var
let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(`The temp is now ${newton} deggres.`);
