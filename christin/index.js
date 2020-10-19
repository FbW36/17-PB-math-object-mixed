let countries = "Germany Spain Italy USA";
let countryArray = countries.split(" ");

console.log(countryArray[Math.floor(Math.random() * countryArray.length)]);

// 1. Write program to picking random country from countries.

// ----------------########------------------

let names = "Alex Max Tommy";

let namesArray = names.split(" ");

console.log(
  "Hallo ",
  namesArray[Math.floor(Math.random() * namesArray.length)]
);

// 2. Write program to print random name from names in the following format 'Hallo ' and the random name.

// ------#######----------------

let numbers = "-1 7 -33 -8 9";

let numbersArray = numbers.split(" ");

console.log(
  Math.abs(numbersArray[Math.floor(Math.random() * numbersArray.length)])
);

//3. Write program to picking number name from numbers.The output Should be absolute(not negative numbers).
