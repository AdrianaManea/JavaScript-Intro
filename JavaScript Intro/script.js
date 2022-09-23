// let message;
// message = 'Hello';

let message = 'Hello';
console.log(message);

// Multiple variables in one line - not recommended
// let user = 'Adina', age = 39, greeting = 'Hello';
// console.log(user, age, greeting);

// let user = 'Adina'
// let age = 39
// let greeting = 'Hello'
// console.log(user, age, greeting);

// Multiple variables in multiline style
let user = 'Adina'
    age = 39
    greeting = 'Hello'
console.log(user, age, greeting);

// A real life analogy
// Imagine a 'variable' being a 'box' for data, with a uniquely-named sticker on it
// We can put any value in the box

let messageTwo;
messageTwo = 'Hello'
messageTwo = 'World!' // value changed
console.log(messageTwo);

// Declare two variables
let hello = 'Hello world!'
let messageThree
// copy 'Hello World' from hello into message
messageThree = hello
// now two variables hold the same data
console.log(hello);
console.log(messageThree);


// Variable naming
let camelCase = 'camel case in commonly used'
console.log(camelCase);

// '$' and '_' can also be used in names. They are regular symbols, just like letters, without any special meaning
let $ = 1
let _ = 2
console.log($);
console.log(_);
console.log($ + _);

// Ex of incorrect variable names
let incorrectVariableNames = 'incorrect variable Names - 1a my-name'
console.log(incorrectVariableNames);

// Note
let apple = 'apple'
let APPLE = 'another variable APPLE'
console.log(apple);
console.log(APPLE);

// non-latin letters are allowed but not recommended as an international convention
let имя = 'non-latin letters are allowed but not recommended ';
let 我 = 'as an international convention';
console.log(имя + 我);

// Reserved names
let reservedNames = 'let, const, class, return, function are reserved names'
console.log(reservedNames);

// An assignment without 'Use strict'
// num = 5
// console.log(num);

// "use strict";
// num = 5
// console.log(num);


// CONSTANTS
// Constants cannot be reassigned
const myBirthday = '27.05.1983'
// myBirthday = '01.01.2001'

// Constants for colors in hexadecimal format
const COLOR_RED = '#F00'
const COLOR_GREEN = '#0F0'
const COLOR_BLUE = '#00F'
const COLOR_ORANGE = '#FF7F00'

let color = COLOR_GREEN
console.log(color);

// there are constants that are known prior to execution
// and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment


// Tasks 
// Working with variables
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin, nameAdmin
nameAdmin = 'Steven'
admin = nameAdmin
console.log(admin);

// Giving the right name
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let ourPlanetName = 'Earth'
let currentUserName = 'Steven'
console.log(ourPlanetName);
console.log(currentUserName);


// const birth = '06.07.1986'
// const aging = someCode(birth)
// console.log(aging);
// const BIRTH = '06.07.1986'
// const AGING = someCode(BIRTH)
// console.log(AGING);


const ages = [3, 10, 18, 20]

function checkAdult(age) {
  return age > 18
}

document.getElementById("demo").innerHTML = ages.some(checkAdult)

console.log(ages.some(checkAdult));
