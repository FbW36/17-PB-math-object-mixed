// 1
let countries = 'Germany Spain Italy USA'
let separatedCountries = countries.split(' ');
console.log("1==>",separatedCountries[Math.floor(Math.random()*4)]);

//2
let names = 'Alex Max Tommy';
let separatedNames = names.split(' ');
console.log("Hallo",separatedNames[Math.floor(Math.random()*3)]);

//3
let numbers = '-1 7 -33 -8 9';
let separatedNumbers = numbers.split(' ');
let randomNumbers = separatedNumbers[Math.floor(Math.random()*5)]
console.log(Math.abs(randomNumbers));