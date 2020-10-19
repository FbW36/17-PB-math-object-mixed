// 1
let countries = "Germany Spain Italy USA";
let value = countries.split(" ");
let pickCountry = value[Math.floor(Math.random() * 4)];
console.log("picking random country ==>", pickCountry);

// 2
let names = "Alex Max Tommy";
let person = names.split(" ");
let pickName = person[Math.floor(Math.random() * 3)];
console.log(`Hallo ${pickName}`);

// 3
let numbers = "-1 7 -33 -8 9";
let sep = numbers.split(" ");
let pickNumber = sep[Math.floor(Math.random() * 5)];
console.log("picking a number ==>", Math.abs(pickNumber));
