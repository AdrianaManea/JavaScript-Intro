const demo =  document.getElementById('demo')
const demoSecond =  document.getElementById('demo-second')

// let x = 100 + 50
// console.log(x);

// takes two variables and produces a new number
// let a = 100
// let b = 50
// let x = a + b
// console.log(x);
// demo.innerHTML = x

// takes two numbers (or expressions) and produces a new number
// let a = 3
// let x = (100 + 50) * a
// console.log(x);
// demo.innerHTML = x


// the + Operator
// let x = 5
// let y = 2
// let z = x + y
// console.log(z);
// demo.innerHTML = z

// the - Operator
// let x = 5
// let y = 2
// let z = x - y
// console.log(z);
// demo.innerHTML = z

// the * Operator - multiply
// let x = 5
// let y = 2
// let z = x * y
// console.log(z);
// demo.innerHTML = z

// the / Operator - division
// let x = 5
// let y = 2
// let z = x / y
// console.log(z);
// demo.innerHTML = z

// the % Operator - remainder
// let x = 5
// let y = 2
// let z = x % y
// console.log(z);
// demo.innerHTML = z

// Increment - ++
// let x = 5
// x++
// let z = x
// console.log(z);
// demo.innerHTML = z

// Decrement - --
// let x = 5
// console.log(x);
// demo.innerHTML = x
// x--
// x--
// let z = x
// console.log(z);
// demo.innerHTML = x

// Exponentiation - ** 
// raises the first operand to the power of the second operand
// let x = 5
// let z = x ** 2
// console.log(z);
// demo.innerHTML = z

// let x = 5
// let y = 2
// console.log(Math.pow(x, y));
// demo.innerHTML = Math.pow(x, y)

// Multiplication has precedence over addition
// console.log(100 + 50 * 3);
// demo.innerHTML = 100 + 50 * 3

// console.log((100 + 50) * 3);
// demo.innerHTML = (100 + 50) * 3

// console.log(100 + 50 - 3)
// demo.innerHTML = 100 + 50 - 3

// +=
// x = 10
// y = 5
// console.log(x);
// demo.innerHTML = x
// x += y
// console.log(x);
// demo.innerHTML = x

// *=
x = 10
y = 5
// console.log(x);
// demo.innerHTML = x
x *= y
// console.log(x);
// demo.innerHTML = x

// let length = 16;          // number

// let lastName = "Johnson"; // string

// const x = {
//   firstName: "John",
//   lastName: "Doe"
// };                        // object



// JAVASCRIPT NUMBERS

// numbers with/without decimals
// let a = 3.14
// let b = 3
// demoSecond.innerHTML = a + '<br>' + b

// Extra large or extra small numbers can be written with scientific (exponent) notation
// let a = 123e5
// let b = 123e-5
// demoSecond.innerHTML = a + '<br>' + b


// Integers (numbers without a period or exponent notation) are accurate up to 15 digits
// the maximum number of decimals is 17
// let a = 999999999999999
// let b = 9999999999999999
// console.log(a, b);
// demoSecond.innerHTML = a + '<br>' + b

// Floating point arithmetic is not always 100% accurate
// let a = 0.1 + 0.2
// console.log(a);
// demoSecond.innerHTML = '0.1 + 0.2 = ' + a

// to solve the problem above it helps to multiply and divide
// let a = (0.2 * 10 + 0.1 * 10) / 10
// console.log(a);
// demoSecond.innerHTML = '0.1 + 0.2 = ' + a


// Adding Numbers
// let a = 10
// let b = 20
// let c = a + b
// console.log(c);
// demoSecond.innerHTML = c

// Concatenating Strings
// let a = '10'
// let b = '20'
// let c = a + b
// console.log(c);
// demoSecond.innerHTML = c

// Add a number and a string - the result will be a concatenated string
// let a = 10
// let b = '20'
// let c = a + b
// console.log(c);
// demoSecond.innerHTML = c

// Common mistake - to expect this result to be 30
// let a = 10
// let b = 20
// demoSecond.innerHTML = 'The result is: ' + a + b

// Common mistake
// JS interpreter works from left to right
// first 10 + 20 is added because a and b are both numbers
// Then 30 + '30' is concatenated because c is a string
// let a = 10
// let b = 20
// let c = '30'
// demoSecond.innerHTML = a + b + c
// console.log(a + b + c);



// NUMERIC STRINGS

// JavaScript will try to convert strings to numbers in all numeric operations
// this will work
// let a = '100'
// let b = '10'
// let c = a / b
// console.log(c);
// demoSecond.innerHTML = c

// this too will work
// let a = '100'
// let b = '10'
// let c = a * b
// console.log(c);
// demoSecond.innerHTML = c

// this again will work
// let a = '100'
// let b = '10'
// let c = a - b
// console.log(c);
// demoSecond.innerHTML = c

// But this will not work - it will concatenate the strings
// let a = '100'
// let b = '10'
// let c = a + b
// console.log(c);
// demoSecond.innerHTML = c



// NaN - Not a number
// demoSecond.innerHTML = 100 / 'Apple'
// console.log(100 / 'Apple');

// A number divided by a numeric string becomes a number
// demoSecond.innerHTML = 100 / '10'
// console.log(100 / '10');

// Use the global JavaScript function isNaN() to find out if a value is not a number
// let m = 100 / 'Apple'
// console.log(isNaN(m));
// demoSecond.innerHTML = isNaN(m)

// If using a NaN in a mathematical operation, the result will also be NaN
// let m = NaN
// let n = 5
// demoSecond.innerHTML = m + n
// console.log(m + n);

// Or the result might be a concatenation like NaN5
// let m = NaN
// let n = '5'
// demoSecond.innerHTML = m + n
// console.log(m + n);

// The typeof NaN is number
// let m = NaN
// demoSecond.innerHTML = typeof m
// console.log(typeof m);


// INFINITY
// Infinity is returned if you calculate a number outside the largest possible number
// let myNumber = 2
// let txt = ''
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber
//   txt = txt + myNumber + '<br>'
// }
// demoSecond.innerHTML = txt
// console.log(txt);

// The typeof Infinity
// demoSecond.innerHTML = typeof Infinity

// toString() can output numbers from base 2 to 36
// let myNumber = 32;
// demoSecond.innerHTML =
// "Decimal 32 = " + "<br><br>" + 

// "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
// "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
// "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
// "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
// "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
// "Octal (base 8): " + myNumber.toString(8) + "<br>" +
// "Binary (base 2): " + myNumber.toString(2);


// JavaScript Numbers as Objects
// numbers can also be defined as objects with the keyword 'new'
// let q = 123
// let w = new Number(123)
// console.log(q, w);

// Do not create Number objects
// The new keyword complicates the code and slows down execution speed
// Number Objects can produce unexpected results

// Numbers and Number Objects cannot be safely compared
// q is a number
let q = 500

// w is an object
let w = new Number(500)

// demoSecond.innerHTML = (q==w)
demoSecond.innerHTML = (q===w)
