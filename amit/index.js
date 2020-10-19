let countries = "Germany Spain Italy USA";
let separet = countries.split(" ");
console.log(separet[Math.floor(Math.random() * separet.length)]);

// 2
let names = "Alex Max Tommy";
let separet2 = names.split(" ");
console.log("Hello", separet2[Math.floor(Math.random() * separet2.length)]);

// 3
let numbers = "-1 7 -33 -8 9";
let separet3 = numbers.split(" ");
console.log(Math.abs(separet3[Math.floor(Math.random() * separet3.length)]));
