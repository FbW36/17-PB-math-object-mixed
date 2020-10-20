// 1. picking random country from countries
let countries = "Germany Spain Italy USA";
let random = countries.split(/\s+/)

let randomCountry = random[Math.floor(Math.random() * random.length)]; // select random word
console.log("randomCountry ==>", randomCountry);

// 2. print random name 
let names = "Alex Max Tommy"
let name = names.split(/\s+/)

let randomName = name[Math.floor(Math.random() * name.length)]; // select random word
console.log("randomName ==>", randomName);

/* let numbers = "-1 7 -33 -8 9"
let notNegative = ;
console.log(notNegative) */