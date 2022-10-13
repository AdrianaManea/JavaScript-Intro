// An operator is unary if it has a single operand
// Ex: the unary negations - reverses the sign of a number
// let x = 3
// x = -x
// console.log(x);
// document.getElementById("demo").innerHTML = x


// An operator is binary if it has two operands
// let x = 1, y= 3
// console.log(y - x);
// document.getElementById("demo").innerHTML = (y - x)



// REMAINDER %
console.log(5 % 2);
console.log(8 % 3);



// EXPONENTIATION **
// a ** b raises the a to the power of b
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);

// The exponentiation operator is defined for non-integer numbers as well
console.log(4 ** (1/2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1/3)); // 2 (power of 1/2 is the same as a cubic root)



// STRING CONCATENATION WITH BINARY
// if the binary + is applied to strings, it merges
let s = 'my' + ' string'
console.log(s);
document.getElementById('demo').innerHTML = s

// If any of the operands is a string, then the other one is converted to a string too
console.log('1' + 2); // 12
console.log(typeof('1' + 2));

console.log(3 + '1'); // 31
console.log(typeof(3 + '1'));

console.log(2 + 2 + '1'); // 41 and not 221
console.log(typeof(2 + 2 + '1'));

console.log('1' + 2 + 2); // 122 and not 14
console.log(typeof('1' + 2 + 2));
// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

console.log( 6 - '2' ); // 4, converts '2' to a number
console.log(typeof(6 - '2')); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers
console.log(typeof('6' / '2')); // 3, converts both operands to numbers



// NUMERIC CONVERSION, UNARY +

// No effect on numbers
let z = 1
console.log(+z); // 1
document.getElementById('demo').innerHTML = +z

let q = -2
console.log(+q); // -2
document.getElementById('demo').innerHTML = -q

// Converts non-numbers
console.log(+true); // 1
console.log(+''); // 0
// I does the same as Number(...)

// Ex: If we are getting values from HTML form fields, they are usually strings. What if we want to sum them?
let apples = '2'
let oranges = '3'
console.log(apples + oranges); // '23', the binary plus concatenates strings
console.log(+apples + +oranges); // '5', both values converted to numbers before the binary
console.log(Number(apples) + Number(oranges)); // 5, the long variant of the option from above

// Unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up



// CHAINING ASSIGNMENTS
// evaluate from right to left
// not recommended
let a, b, c
a = b = c = 2 + 2
console.log(a);
console.log(b);
console.log(c);



// MODIFY-IN-PLACE
// let n = 2;
// n = n + 5;
// n = n * 2;
// this notation can be shortened using hte operators += ans *=

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log( n ); // 14


let m = 2;
m *= 3 + 5; // right part evaluated first, same as n *= 8
console.log(m); // 16




// INCREMENT / DECREMENT
// Increment ++ increases a variable by 1
// Only on variables
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3
// Decrement -- decreases a variable by 1:

let counterTwo = 2;
counterTwo--; // works the same as counter = counter - 1, but is shorter
console.log(counterTwo); // 1


// POSTFIX FORM = counter++
// PREFIX FORM = ++counter


// If the result of increment/decrement is NOT USED, there is no difference in which form to use:
let counterSummarizeOne = 0;
counterSummarizeOne++;
++counterSummarizeOne;
console.log(counterSummarizeOne); // 2, the lines above did the same

// If we’d like to increase a value and immediately use the result of the operator, we need the PREFIX FORM:
let counterSummarizeTwo = 0;
console.log(++counterSummarizeTwo); // 1

// If we’d like to increment a value but use its previous value, we need the postfix form:
let counterSummarizeThree = 0;
console.log(counterSummarizeThree++); // 0


// example
let counterTestOne = 1;
console.log( 2 * ++counterTestOne ); // 4

// Compare with:

let counterTestTwo = 1;
console.log( 2 * counterTestTwo++ ); // 2, because counter++ returns the "old" value

// Advise style = one line - one action
let advise = 1
console.log(2 * advise);
advise++
console.log(advise);



// COMMA
// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

let d = (1 + 2, 3 + 4);

console.log(d);; // 7 (the result of 3 + 4)




// TEST
let e = 1, f = 1;

let g = ++e; // 2, prefix form returns the new value
console.log(g);
let h = f++; // 1, postfix form returns the old value - it's previous value
console.log(h);


// TEST TWO
console.log("" + 1 + 0); // 10
console.log(typeof("" + 1 + 0)); // string

console.log("" - 1 + 0); // -1
console.log(typeof("" - 1 + 0)); // number

console.log(true + false); // 1
console.log(typeof(true + false)); // number

console.log(6 / "3"); // 2
console.log(typeof(6 / "3")); // number

console.log("2" * "3"); // 6
console.log(typeof("2" * "3")); // number

console.log(4 + 5 + "px"); // 9px
console.log(typeof(4 + 5 + "px")); // string

console.log("$" + 4 + 5); // %45
console.log(typeof("$" + 4 + 5)); // string

console.log("4" - 2); // 2
console.log(typeof("4" - 2)); // number

console.log("4px" - 2); // NaN
console.log(typeof("4px" - 2)); // number

console.log("  -9  " + 5); // -9 5
console.log(typeof("  -9  " + 5)); // string

console.log("  -9  " - 5); // -14
console.log(typeof("  -9  " - 5)); // number

console.log(null + 1); // 1
console.log(typeof(null + 1)); // number

console.log(undefined + 1); // Nan
console.log(typeof(undefined + 1)); // number

console.log(" \t \n" - 2); // -2
console.log(typeof(" \t \n" - 2)); // number



// test Three
// let v = prompt("First number?", 1);
// let w = prompt("Second number?", 2);
// console.log(v + w); // 12

// Best
// let v = +prompt("First number?", 1);
// let w = +prompt("Second number?", 2);
// console.log(v + w); // 3

let v = prompt("First number?", 1);
let w = prompt("Second number?", 2);
console.log(+v + +w); // 3