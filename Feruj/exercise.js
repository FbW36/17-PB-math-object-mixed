// 1
let countries = "Germany Spain Italy USA";
let counValue = countries.split(" ");
let randomCountry = counValue[Math.floor(Math.random() * 4)];
console.log("Random country ==>", randomCountry);
// 2

let names = "Alex Max Tommy";
let name1 = names.split(" ");
let randomName = name1[Math.floor(Math.random() * 3)];
console.log("Random Names==>", "Hallo " + randomName); // or
console.log("Random Names==>", `Hello ${randomName}`);

// 3
let numbers = "-1 7 -33 -8 9";
let sepNum = numbers.split(" ");
let finalNum = sepNum[Math.floor(Math.random() * 5)];
console.log("chosen Number ==> ", Math.abs(finalNum));
