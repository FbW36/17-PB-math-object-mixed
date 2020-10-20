// 1. Write program to picking random country from countries.
let country = 'Germany Spain Italy USA' ;
let splitCountry = country.split(' ') ;
let randomCountry = splitCountry[Math.floor(Math.random() * 4)] ; // 
console.log('randomCountry ==>', randomCountry) ; // 

// 2. Write program to print random name from names in the following format 'Hallo ' and the random name.
let names = 'Alex Max Tommy' ;
let splitName = names.split(' ') ;
let randomName = splitName[Math.floor(Math.random() * 3)] ; // 
console.log('randomName ==>', randomName ); //
console.log('message ==>', 'Hello', `${randomName}`) ; // 

// 3. Write program to picking number name from numbers. The output Should be absolute (not negative numbers).
let number = '-1 7 -33 -8 9' ;
let splitNumber = number.split(' ') ;
console.log('length of number ==>', splitNumber.length) ; // 5
let randomNumber = splitNumber[Math.floor(Math.random() * 5)]; //
console.log('randomNumber ==>', Math.abs(randomNumber)); // 

  
