let x = 10

// 1
console.log(23 + 97);
// 2
console.log(23 + 97 + 3 + 12 + 78 + 32);
// 3
let i = (4 + 6 + 9) / 77
console.log(i.toFixed(5));
console.log(typeof(i));

// 4
console.log(x);
console.log(9 * x);
let y = 7 * x
console.log(y);

// 5
const max = 57
console.log(max);
const actual = max - 13
console.log(actual);
const percentage = actual / max
console.log(percentage);
console.log(percentage.toFixed(4));
console.log(typeof(percentage));

// console.log() = return statement

// console.log(let y = 7 * x)
// you cannot declare and assign a value to a variable and read its value in the same line.




// == comparing values
// === comparing object equality

// != are the 2 values not the same
// !== are the two things not the same object


let a, b, obj1, obj2, copy1, copy2, html1, html2;
a = 5
b = 5

// Primitives
if(a == b) {
  console.log('a b are double equal'); // yes
} else {
  console.log('a b are not double equal');
}

if(a === b) {
  console.log('a b are triple equal'); // yes
} else {
  console.log('a b are not triple equal');
}



// Comparing objects
obj1 = {prop: 'value'}
obj2 = {prop: 'value'}

if(obj1 == obj2) {
  console.log('obj1 obj2 are double equal');
} else {
  console.log('obj1 obj2 are not double equal'); // yes
}

if(obj1 === obj2) {
  console.log('obj1 obj2 are triple equal');
} else {
  console.log('obj1 obj2 are not triple equal'); // yes
}

// Although they are set to something that looks the same, they are two different object, therefore they are not the same



// Comparing 2 copies of the same object
copy1 = obj1
copy2 = obj1

if(copy1 == copy2) {
  console.log('copy1 copy2 are double equal'); // yes
} else {
  console.log('copy1 copy2 are not double equal');
}

if(copy1 === copy2) {
  console.log('copy1 copy2 are triple equal'); // yes
} else {
  console.log('copy1 copy2 are not triple equal');
}




// Extracting two pieces of html
html1 = document.querySelector('h1')
html2 = document.querySelector('h1')

if(html1 == html2) {
  console.log('html1 html2 are double equal'); // yes
} else {
  console.log('html1 html2 are not double equal');
}

if(html1 === html2) {
  console.log('html1 html2 are triple equal'); // yes
} else {
  console.log('html1 html2 are not triple equal');
}




// ALWAYS USE ===

// console.log(1 == 1); // true
// console.log(1 === 1); // true


// console.log(1 == '1'); // true
// it should be false because a number is not equal to a string
// double equal signs takes the type of the object and converts it so that both are the same
// so this number one and the string are going to be both converted to be equal to a number
// it checks one the number and converts the strings to a number
// console.log(typeof(1), typeof('1')); // number string


// console.log(1 === '1'); // false

// console.log(0 == ''); // true
// it's not true. There is no way a number would equal an empty string
// it converts the types of these objects before it's equating them to each other

// console.log(0 === ''); // false

// console.log(0 == false); // true
// but 0 does not equal to false
// console.log(0 === false); // false


// THERE IS ONE USE CASE WHEN YOU WANT TO USE == SOMETIMES
// when you compare null for different objects
// you want to see if that object is null
// console.log(null == null); // true
// console.log(null === null); // true

console.log(null === undefined); // false
// Sometimes you have a null object that is undefined instead of null
console.log(null == undefined); // true
// Null and undefined are both considered the same




// What does unary plus operator do to string representations of integers?
// It transforms them to numbers
let apples = '2'
let oranges = '3'
console.log(apples + oranges); // '23' - the binary plus concatenates strings
console.log(+apples + +oranges); // '5' - both values converted to numbers before the binary plus
console.log(Number(apples) + Number(oranges) ); // '5'