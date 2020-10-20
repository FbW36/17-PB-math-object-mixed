
let countries = 'Germany Spain Italy USA'
let countriesVar = countries.split(" ");

// Write program to picking random country from countries.

console.log(countriesVar[Math.floor(Math.random() * 4)]);

// ----------------########------------------

let names = 'Alex Max Tommy'
let namesVar = names.split(" ");

// Write program to print random name from names in the following format 'Hallo ' and the random name.
console.log("Hallo " + namesVar[Math.floor(Math.random() * 3)]);

// ------#######----------------

let numbers = '-1 7 -33 -8 9'
let numbersVar = numbers.split(" ");
let randomNumber = numbersVar[Math.floor(Math.random() * 5)];
console.log(randomNumber);
console.log(Math.abs(randomNumber));

// Write program to picking number name from numbers. The output Should be absolute (not negative numbers).