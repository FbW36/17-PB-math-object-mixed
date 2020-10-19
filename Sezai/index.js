// 1.
let countries = "Germany Spain Italy USA";
let value = countries.split(" ");
let chooseCountry = value[Math.floor(Math.random() * 4)];
console.log("chosen Country ==>", chooseCountry);

// 2.
let names = 'Alex Max Tommy'
let value2 = names.split(" ");
let chooseName = value2[Math.floor(Math.random() * 3)];
console.log("Hallo ==> ", chooseName);

//3. 
let numbers = '-1 7 -33 -8 9'
let value3 = numbers.split(" ");
let chooseNumbers = value3[Math.floor(Math.random()*5)];
console.log("chosen Number ==> ", Math.abs(chooseNumbers));
