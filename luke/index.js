// Write program to picking random country from countries.

let countries = "Germany Spain Italy USA";

splitCountries = countries.split(" ");
pickCountry = Math.floor(Math.random() * splitCountries.length);
console.log(splitCountries[pickCountry]);

// Write program to print random name from names in the following format 'Hallo ' and the random name.
let names = "Alex Max Tommy";

let splitNames = names.split(" ");
pickName = Math.floor(Math.random() * splitNames.length);
console.log(`Hello ${splitNames[pickName]}`);

// Write program to picking number name from numbers.The output Should be absolute(not negative numbers).
let numbers = "-1 7 -33 -8 9";

let splitNumbers = numbers.split(" ");
pickNumber = Math.floor(Math.random() * splitNumbers.length);
console.log(Math.abs(splitNumbers[pickNumber]));
