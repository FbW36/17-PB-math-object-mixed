// # 17-PB-math-object-mixed
// 1)
let countries = "Germany Spain Italy USA";
// Write program to picking random country from countries.
// let countries2 = countries.split(" ");
console.log(countries.split(" ")[Math.floor(Math.random() * 4)]);

// 2)
let names = "Alex Max Tommy";
// Write program to print random name from names in the following format 'Hallo ' and the random name.
console.log(`Hallo ${names.split(" ")[Math.floor(Math.random() * 3)]}`);

// 3)
let numbers = "-1 7 -33 -8 9";
// Write program to picking number name from numbers. The output Should be absolute (not negative numbers).
console.log(Math.abs(numbers.split(" ")[Math.floor(Math.random() * 5)]));
