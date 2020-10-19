//1. Write program to picking random country from countries.
let countries = 'Germany Spain Italy USA'
let countries2 = countries.split(" ", 4)
console.log(countries2[Math.floor(Math.random() * countries2.length)])


//2. Write program to print random name from names in the following format 'Hallo ' and the random name.
let names = 'Alex Max Tommy'
let names2 = names.split(" ", 3)
console.log("Hello", names2[Math.floor(Math.random() * names2.length)]+"!")

//3. Write program to picking number name from numbers. The output Should be absolute (not negative numbers).
let numbers = '-1 7 -33 -8 9'
let numbers2 = numbers.split(" ", 5)
let numbers3 = (numbers2[(Math.floor(Math.random() * numbers2.length))])
console.log(Math.abs(numbers3))