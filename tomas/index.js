// Write program to picking random country from countries
let countries = 'Germany Spain Italy USA';
let countriesSplitted = countries.split(' ')
console.log(countriesSplitted[Math.floor(Math.random() * countriesSplitted.length)])

// Write program to print random name from names in the following format 'Hallo ' and the random name
let names = 'Alex Max Tommy';
let namesSplitted = names.split(' ');
console.log('Hallo', namesSplitted[Math.floor(Math.random() * namesSplitted.length)])

// Write program to picking number name from numbers. The output Should be absolute (not negative numbers)
let numbers = '-1 7 -33 -8 9';
let splitNumbers = numbers.split(' ');
console.log('random absolute number:', Math.abs(splitNumbers[Math.floor(Math.random() * splitNumbers.length)]))