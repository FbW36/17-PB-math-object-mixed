let countries = 'Germany Spain Italy USA';
let splitCountries = countries.split(' ');
let randomCountry = Math.floor(Math.random()* splitCountries.length);

console.log(splitCountries[randomCountry])


let names = 'Alex Max Tommy'
let splitNames = names.split(' ');
let randomNames = Math.floor(Math.random()* splitNames.length);

console.log('Hello, '+ splitNames[randomNames])


let numbers = '-1 7 -33 -8 9'
let splitNumbers = numbers.split(' ');
let randomNumbers = Math.floor(Math.random()* splitNumbers.length);

console.log(Math.abs(splitNumbers[randomNumbers]));

console.log(splitNumbers);

console.log(splitNumbers[randomNumbers]);
