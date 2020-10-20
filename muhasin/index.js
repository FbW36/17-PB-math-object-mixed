// 1. picking random country from countries
let countries = "Germany Spain Italy USA";
let random = countries.split(/\s+/);

let randomCountry = random[Math.floor(Math.random() * random.length)]; // select random word
console.log("randomCountry ==>", randomCountry);

// 2. print random name
let names = "Alex Max Tommy";
let name = names.split(/\s+/);

let randomName = name[Math.floor(Math.random() * name.length)]; // select random word
console.log("randomName ==>", randomName);

// 3
let numbers = "-1 7 -33 -8 9";
let sep = numbers.split(" ");
let pickNumber = sep[Math.floor(Math.random() * 5)];
console.log("picking a number ==>", Math.abs(pickNumber));
