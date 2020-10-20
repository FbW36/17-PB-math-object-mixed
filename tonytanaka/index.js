// 1
let countries = "Germany Spain Italy USA";
countries = countries.split(" ");
indice = Math.floor(Math.random() * countries.length);
console.log(countries[indice]);

// 2
let names = "Alex Max Tommy";
names = names.split(" ");
a = Math.floor(Math.random() * names.length);
console.log("Hallo", names[a]);

// 3
let numbers = "-1 7 -33 -8 9";
numbers = numbers.split(" ");
b = Math.floor(Math.random() * numbers.length);
console.log(Math.abs(numbers[b]));
