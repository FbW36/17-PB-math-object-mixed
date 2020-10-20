// # 17-PB-math-object-mixed

// *1)Write program to picking random country from countries.

let countries = "Germany Spain Italy USA";
let countriesSplit = countries.split(" ");

let random = Math.floor(Math.random() * 4);
let randomCountries = countriesSplit[random];

console.log("randomCountries ==>", randomCountries);

// *2)Write program to print random name from names in the following format 'Hallo ' and the random name.

let names = "Alex Max Tommy";
let namesSplit = names.split(" ");

let random1 = Math.floor(Math.random() * 3);
let randomNames = namesSplit[random1];

console.log("randomNames ==>",  "Hallo " + randomNames);

// *3)Write program to picking number name from numbers. The output Should be absolute (not negative numbers).

let numbers = "-1 7 -33 -8 9";

let numberSplit = numbers.split(" ");

let random2 = Math.floor(Math.random() * 5);

let randomNumbers = numberSplit[random2];

let absoluteRandomNumbers = Math.abs(randomNumbers);

console.log("absoluteRandomNumbers ==>", absoluteRandomNumbers);
