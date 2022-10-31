// In modern JavaScript, there are two types of numbers:

// Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”.
// BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1)



// MORE WAYS TO WRITE A NUMBER
let billion = 1000000000
console.log(billion); // 1000000000

let billions = 2_000_000_000
console.log(billions); // 2000000000

// Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

// In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.

let billionExOne = 1e9
console.log(billionExOne); // 1000000000 = 1 billion, literally: 1 and 9 zeroes

console.log(7.3e9); //// 7300000000 = 7.3 billions (same as 7300000000 or 7_300_000_000)

console.log(1e3 === 1 * 1000) // // e3 means *1000
console.log(1.23e6 === 1.23 * 1000000) // e6 means *1000000

// let mcs = 0.000001;
let mcs = 1e-6; // 0.000001 five zeroes to the left from 1
console.log(mcs);

// a negative number after "e" means a division by 1 with the given number of zeroes
console.log(1e-3 === 1 / 1000); // 0.001 - -3 divides by 1 with 3 zeros

// -6 divides by 1 with 6 zeroes
let a = 1.23e-6
console.log(a); // 0.00000123
let b = 1.23 / 1_000_000
console.log(b);
console.log(a === b); // 0.00000123

// an example with a bigger number
let x = 1234e-2
console.log(x); // 12.34
let y = 1234 / 100
console.log(y);
console.log( x === y ) // 12.34, decimal point moves 2 times



// HEX, BINARY AND OCTAL NUMBERS

// HEXADECIMAL - colors, encode characters altele
// So naturally, there exists a shorter way to write them: 0x and then the number.
console.log(0xff); // 255
console.log(0xFF); // 255

// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes
let p = 0b11111111; // binary form of 255
console.log(p);
let r = 0o377; // octal form of 255
console.log(r);
console.log( p === r ); // true, the same number 255 at both sides




// toString(base)
// the method num.toString(base) returns a string representation of 'num' in the numeral system with the given 'base'

let num = 255
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111
console.log(num.toString(3)); // 100110
// console.log(num.toString(1)); //  toString() radix argument must be between 2 and 36 at Number.toString (<anonymous)
console.log(num.toString(34)); // 7h
console.log(num.toString(24)); // af
console.log(num.toString(11)); // 212

// The base can vary from 2 to 36. By default it’s 10.
// Common use cases for this are:
// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:
console.log(123456..toString(36)); // 2n9c
// console.log(123456.toString(36)); // SyntaxError

// Two dots to call a method
// Please note that two dots in 123456..toString(36) is not a typo. 
// If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.

// If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.

// Also could write (123456).toString(36).




// ROUNDING

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
let mathFloor = 3.1
console.log(mathFloor) // 3.1
mathFloor = Math.floor(mathFloor)
console.log(mathFloor); // 3

// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
let mathCeil = 3.1
console.log(mathCeil); // 3.1
mathCeil = Math.ceil(mathCeil)
console.log(mathCeil); // 4

let mathCeilSec = 1.1
console.log(mathCeilSec); // 1.1
mathCeilSec = Math.ceil(mathCeilSec)
console.log(mathCeilSec); // 2


// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
let mathRound = 3.1
console.log(mathRound); // 3.1
mathRound = Math.round(mathRound)
console.log(mathRound); // 3

let mathRoundSec = 3.6
console.log(mathRoundSec); // 3.6
mathRoundSec = Math.round(mathRoundSec)
console.log(mathRoundSec); // 4

let mathRoundThird = 3.5
console.log(mathRoundThird); // 3.5
mathRoundThird = Math.round(mathRoundThird)
console.log(mathRoundThird); // 4

// Math.trunc (not supported by Internet Explorer)
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
mathTrunc = 3.1
console.log(mathTrunc); // 3.1
mathTrunc = Math.trunc(mathTrunc)
console.log(mathTrunc); // 3

mathTrunc = -1.1
console.log(mathTrunc); // -1.1
mathTrunc = Math.trunc(mathTrunc)
console.log(mathTrunc); // -1




// But what if we’d like to round the number to n-th digit after the decimal?
// For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.

// a
// Multiply and divide
// For example, to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.
let number = 1.234556
console.log(Math.round(num * 100) / 100); // 1.23
// Math.round(1.23456 * 100) / 100
// Math.round(123.456) / 100
// 123 / 100
// 1.23

// b
// The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
let numberSec = 12.34
// numberSec = numberSec.toFixed(1)
// console.log(numberSec); // 12.3
// console.log(typeof(numberSec)); // string

numberSec = numberSec.toFixed(5)
console.log(numberSec); // 12.34000
console.log(typeof(numberSec)); // string

// convert to number with Number()
// numberSec = Number(numberSec)
// console.log(numberSec); // 12.34
// console.log(typeof(numberSec)); // number

// convert to number with + '+num.toFixed(5)'
numberSec = +numberSec
console.log(numberSec);
console.log(typeof(numberSec));




// IMPRECISE CALCULATION
// If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity
console.log(1e500); //Infinity

// What may be a little less obvious, but happens quite often, is the loss of precision.
// Consider this (falsy!) equality test:
let exOne = 0.1 + 0.2
console.log(exOne); // 0.30000000000000004
let exTwo = 0.3
console.log(exTwo); // 0.3
console.log(exOne === exTwo); // false
console.log(exOne == exTwo); // false
// wrong

let calc = 0.1 + 0.2
console.log(calc); // 0.30000000000000004
console.log(calc.toFixed(2)); // 0.30
console.log(typeof(calc.toFixed(2))); // string
// Please note that toFixed always returns a string. 
// It ensures that it has 2 digits after the decimal point. That’s actually convenient if we have an e-shopping and need to show $0.30. 
// For other cases, we can use the unary plus to coerce it into a number
console.log(+calc.toFixed(2)); // 0.3
console.log(typeof(+calc.toFixed(2))); // number




// TESTS: isFinite and isNaN
// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.
// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:

// isNaN(value) - converts its argument to a number and then tests it for being NaN
console.log(isNaN(NaN)); // true
console.log(isNaN('str')); // true
console.log(NaN === NaN); // false
// wrong

// isFinite(value) - converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity

console.log(isFinite('15')); // true
console.log(isFinite('str')); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity


// isFinite(value) - used to validate whether a string value is a regular number
// let check = +prompt('Enter a number', '')
// console.log(isFinite(check));
// a space-only string or empty string are treated as zero/0


// Number.isNaN() method determines whether the passed value is NaN and its type is Number
// returns true if the argument belongs to the number type and it is NaN. In any other case it returns false.
console.log( Number.isNaN(NaN) ); // true
console.log( Number.isNaN("str" / 2) ); // true

// Note the difference:
console.log( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
console.log( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion


// Number.isFinite() method determines whether the passed value is a finite number
// it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.
// returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity. In any other case it returns false.
console.log( Number.isFinite(123) ); // true
console.log( Number.isFinite(Infinity) ); // false
console.log( Number.isFinite(2 / 0) ); // false

// Note the difference:
console.log( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
console.log( isFinite("123") ); // true, because isFinite converts string "123" into a number 123


// Comparison with Object.is
// There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:

// It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
// Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s correct, because internally the number has a sign bit that may be different even if all other bits are zeroes.
// In all other cases, Object.is(a, b) is the same as a === b.

// We mention Object.is here, because it’s often used in JavaScript specification. When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is (internally called SameValue).



// parseInt - returns an integer and parseFloat - returns a floating-point number
console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, only the integer part is returned
console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

console.log( parseInt('a123') ); // NaN, the first symbol stops the process

// The second argument of parseInt(str, radix)
// The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:

console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255, without 0x also works

console.log( parseInt('2n9c', 36) ); // 123456


// OTHER MATH FUNCTIONS
console.log(Math.random());
console.log(Math.max(3, 5, -10, 0, 7)); // 7
console.log(Math.min(3, 5, -10, 0, 7)); // -10
console.log(Math.pow(2, 10)); // 2 la puterea 10 = 1024



// SUMMARY
// To write numbers with many zeroes:

// Append "e" with the zeroes count to the number. Like: 123e6 is the same as 123 with 6 zeroes 123000000.
// A negative number after "e" causes the number to be divided by 1 with given zeroes. E.g. 123e-6 means 0.000123 (123 millionths).
// For different numeral systems:

// Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
// parseInt(str, base) parses the string str into an integer in numeral system with given base, 2 ≤ base ≤ 36.
// num.toString(base) converts a number to a string in the numeral system with the given base.
// For regular number tests:

// isNaN(value) converts its argument to a number and then tests it for being NaN
// Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
// isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
// Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity
// For converting values like 12pt and 100px to a number:

// Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
// For fractions:

// Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
// Make sure to remember there’s a loss of precision when working with fractions.



// TASKS
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// let aExample = +prompt('The aExample number', '')
// let bExample = +prompt('The bExample number', '')
// console.log(aExample + bExample);
// Note the unary plus + before prompt. It immediately converts the value to a number.


// let firstExample = prompt('The first number', '')
// let secondExample = prompt('The second number', '')
// console.log(firstExample + secondExample);




// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it is null or undefined. Otherwise it returns the second
let nameS = null;
let textS = "missing";
let resultS = nameS ?? textS;
document.querySelector(".demo").innerHTML = "The name is " + resultS; 
console.log('The name is ' + resultS); // The name is missing