
// 1-
let countries = 'Germany Spain Italy USA';
let countriesSplited = countries.split(' ');
console.log(countriesSplited);
l = countriesSplited.length;
randomCountry = Math.floor(Math.random() * l);
console.log(countriesSplited[randomCountry]);

// 2-
let names = 'Alex Max Tommy';
let namesSplited = names.split(' ');
l = namesSplited.length;
randomNames = Math.floor(Math.random() * l);
console.log(`Hello ${namesSplited[randomNames]}`);

// 3-
let numbers = '-1 7 -33 -8 9';
let numbersSplited = numbers.split(' ');
console.log(numbersSplited);
l = numbersSplited.length;
randomNumbers = Math.floor(Math.random() * l);
selectedRandomNumbers = Math.abs(parseInt(numbersSplited[randomNumbers]));
console.log(selectedRandomNumbers);