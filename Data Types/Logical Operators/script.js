// - || - OR - In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are 'true', it returns 'true', otherwise it returns false
// - || - OR - finds the first truthy value
// ---

// - && - AND - In classical programming, AND returns 'true' if both operands are truthy and 'false'
// - && - AND - finds the first falsy value
// ---

// OR - truthy / AND - falsy
// ---

// The PRECEDENCE of AND && operator is higher than OR || operator
// So the code
// a && b || c && d
// is the same as if
// (a && b) || (c && d)
// ---

// - ! - NOT
// 1 - converts the operand to boolean type: true/false
// 2 - returns the inverse value
// ---

// - !! - DOUBLE NOT
// is sometimes used for converting a value to boolean type
// a little more verbose way to do the same thing - a built-in Boolean function:
console.log(Boolean('non-empty string')); // true
console.log(Boolean(null)); // false

// - ?? - NULISH COALESCING


// || - OR
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

// ex:
if(1 || 0) {
  console.log('truthy');
}
// truthy

// ex:
if ( undefined || 21) {
  console.log('falsy big');
} else {
  console.log('falsy small');
}
// falsy big

// ex:
if ( undefined || null || 0) {
  console.log('falsy big');
} else {
  console.log('falsy small');
}
// falsy small

// ex:
// let hour = 9
// if(hour < 10 || hour > 18) {
//   console.log('The office is closed');
// }

//ex:
// let hour = 12
// let isWeekend = true
// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log('The office is closed');
// }



// - || OR finds the first truthy value
// The || OR operator does the following:
// - evaluates operands from left to right
// - for each operand, converts it to boolean. If the result is 'true', stops and returns the original value of the operand
// if all operands have been evaluated (i.e. all were 'false'), returns the last operand

// A value is returned in its original value, without the conversion
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found


console.log(1 || 0); // 1 - 1 is truthy
console.log(null || 1); // 1 - 1 is the first truthy value
console.log( null || 0 || 1); // 1 - 1 is the first truthy value
console.log(undefined || null || 0); // 0 - all falsy, returns the last value
console.log(undefined || 0 || null); // null - all falsy, returns the last value
console.log(undefined || 1 || null); // 1 - the first truthy value
console.log(21 || 1 || null || undefined); // 21 - the first truthy value
console.log(0 || null || undefined); // 21 // undefined - all falsy, returns the last value

// ex: one
// getting the first truthy value from a list of variables or expressions
let firstName = ""
let lastName = ""
let nickName = "TestSuperCode"
console.log(firstName || lastName || nickName); // TestSuperCOde

// ex: two
// short-circuit evaluation
// it means that || processes its arguments until the first truthy value is reached, and the value is returned immediately, without even touching the other argument
// the importance of this feature becomes obvious if an operand isn't a value, but an expression with a side effect, such as a variable assignment or a function call

true || console.log("not printed");
false || console.log("printed");
// printed
// the || OR operator stops the evaluation immediately upon seeing 'true', so the 'alert' isn't run
// Sometimes people use this feature to execute commands only if the condition of the left part is falsy



// && AND
// In classic programming, AND returns true if both operands are truthy and false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// ex:
let hourr = 12
let minutee = 30
if(hourr == 12 && minutee == 30) {
  console.log('the time is 12:30');
}
// the time is 12:30


// Just as OR, any value is allowed as an operand of AND


// ex:
if(1 && 0) { // evaluated as true && false
  console.log('will not work because the result is falsy');
}
// 


// - && AND finds the first falsy value
// - evaluates operands from left to right
// - for each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand
// - if all operands have been evaluated (i.e. all were truthy), returns the last operand

// In other words, AND returns the first falsy value or the last value if none were found

// ex:
// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(21 && 0); // 0

// ex:
// if the first operand is falsy
// AND return it. The second operand is ignored
console.log(null && 5); // null
console.log(null || 5); // 5

console.log(0 && 'no matter what'); // 0
console.log(0 || 'no matter what'); // no matter what

console.log(undefined && 1); // undefined
console.log(undefined || 1); // 1

console.log(null && 0); // null
console.log(null || 0); // 0


// ex:
console.log(1 && 2 && 3); // 3, the last one

// ex:
console.log(1 && 2 && null && 3); // null
console.log(1 && 2 && null && undefined); // null
console.log(1 && undefined && null && 3); // undefined


// The precedence of AND && operator is higher than OR ||
// So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d)


// NOTE: Don't replace if with || or &&
let x = 1
// (x > 0) && alert('Greater than zero!')
if(x > 0) console.log('Greater than zero!') // Greater than zero!



// !(NOT)
// converts the operand to boolean type
// returns the inverse value
// result = !value

console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!2); // false
console.log(!null); // true
console.log(!undefined); // true
console.log(!'empty string'); // false



// !!(DOUBLE NOT)
// IS SOMETIMES USED for converting a value to boolean type
console.log(!!"non-empty string"); // true
console.log(!!null); // false

// the first NOT converts the value to boolean and returns the inverse
// the second NOT inverses it again
// In the end we have a plain value-to-boolean conversion

// a little more verbose way to do the SAME THING - a built-in Boolean function:
console.log(Boolean('non-empty string')); // true
console.log(Boolean(null)); // false


// TASKS
console.log(null || 2 || undefined); // 2

console.log( console.log(1) || 2 || console.log(3) );
// 1
// 2
console.log( console.log(3) || 4 || console.log(1) );
// 3
// 4
console.log( console.log(3) || console.log(1) );
// 3
// 1
// undefined
console.log( console.log(3) || 0 || console.log(1) );
// 3
// 1
// undefined
console.log( console.log(0) || 2 || console.log(1) );
// 0
// 2
console.log( console.log(null) || 2 || console.log(1) );
// null
// 2
console.log( console.log(null || 3 ) || 2 || console.log(1) );
// 3
// 2
console.log( console.log(null && 3 ) || 2 || console.log(1) );
// null
// 2

console.log( 1 && null && 2 );
// null
console.log( null && undefined && 2 );
// null
console.log( undefined && null && 2 );
// undefined
console.log( 1 && 0 && 2 );
// 0

let a = 1 && 0
let b = 1 || 0
console.log(a);
// 0
console.log(b);
// 1
console.log(a || 2);
// 2
console.log(a && 2);
// 0
console.log(b || 2);
// 1
console.log(b && 2);


console.log( console.log(1) && console.log(2) );
// undefined
// the answer is 1, and then undefined

console.log( null || 2 && 3 || 4 );
// 3


// Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
function test(age) {
  if(age >= 14 && age <= 90) {
    console.log('Happy life!');
  } else {
    console.log('Sad life!');
  }
}
test(2)
test(12)
test(87)


// Write an if condition to check that age is NOT between 14 and 90 inclusively
// Create two variants: the first one using NOT !, the second one – without it
// if (age < 14 || age > 90)
// or
// if (age < 14 || age > 90)
function maturity(age) {
  if (!(age >= 0 && age <= 25)) {
    console.log('Adult!');
  } else {
    console.log('Child!');
  }
}
maturity(2)
maturity(12)
maturity(87)
maturity(45)


if (-1 || 0) console.log( 'first' ); 
// Runs.
// The result of -1 || 0 = -1, truthy

if (-1 && 0) console.log( 'second' );
// Doesn't run
// -1 && 0 = 0, falsy

if (null || -1 && 1) console.log( 'third' );
// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1


// last Task - check the login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}