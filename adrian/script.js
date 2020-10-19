let countries = 'Germany Spain Italy USA';
let names = 'Alex Max Tommy';
let numbers = '-1 7 -33 -8 9';

function randomFromSpacedString(string) {
  let arrayFromString = string.split(' ');
  let randomSelector = Math.floor(Math.random() * arrayFromString.length);
  let randomElement = arrayFromString[randomSelector];

  return Object.is(Number(randomElement), NaN)
    ? randomElement
    : Math.abs(randomElement);
}

console.log(randomFromSpacedString(names));

//1. Write program to picking random country from countries.
let countriesArray = countries.split(' ');
let randomForCountries = Math.floor(Math.random() * countriesArray.length);
// console.log(countriesArray[randomForCountries]);

//2 Write program to print random name from names in the following format 'Hallo ' and the random name.
let namesArray = names.split(' ');
let randomForNames = Math.floor(Math.random() * namesArray.length);
// console.log(`Hallo ${namesArray[randomForNames]}`);

//3. Write program to picking number name from numbers. The output Should be absolute (not negative numbers).
let arrayNumbers = numbers.split(' ');
let randomForNumbers = Math.floor(Math.random() * arrayNumbers.length);
// console.log(Math.abs(arrayNumbers[randomForNumbers]));
