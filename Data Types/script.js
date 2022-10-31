// A value in JS is always of a certain type

// 8 basic data types in JavaScript

// no error
// 'dynamically typed' - meaning that there exist data types, but variables are no bound to any of them
let message = 'hello'
message = 123456


// 1
// NUMBER
// integer
// floating point number
let n = 123
n = 12.345


// 'SPECIAL NUMERIC VALUES'
// Infinite
console.log(1 / 0) // Infinite
console.log(Infinity); // Infinite

// Minus Infinite


// NaN
// represents a computational error
// It is a result of an incorrect or an undefined mathematical operation
console.log('not a number' / 2); // NaN
// If there's a Nan somewhere in a mathematical expression, it propagates to the whole result, with one exception
// NaN to the power of 0
console.log(NaN ** 0); // 1


// 2
// BigInt
// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
// BigInt type was recently added to the language to represent integers of arbitrary length.
// A BigInt value is created by appending n to the end of an integer

const bigInt = 1234567890123456789012345678901234567890n; // the "n" at the end means it's a BigInt


// 3
// STRING
let str = "Hello" // simple quotes
let str2 = 'Single quotes are ok too' // simple quotes
let phrase = `can embed another ${str}` // backticks are 'extended functionality' quotes. They allow us to embed variables and expressions into a string

// ex:
let name = 'John'
// embed a variable
console.log(`Hello, ${name}!`) // Hello, John!
// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3


// 4
// BOOLEAN (logical type)
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1
console.log(isGreater) // true (the comparison result is "yes")


// 5
// THE 'null' VALUE
let age = null
console.log(age) // null
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”
// The code above states that age is unknown.


// 6
// THE 'undefined' VALUE
// The meaning of undefined is 'value is not assigned'
// If a variable is 'declared', but 'not assigned', then its value is 'undefined'
let meters
console.log(meters); // undefined

let inches = 100
console.log(inches) // 100
inches = undefined
console.log(inches) // undefined - Not good practice
// Technically, it is possible to explicitly assign 'undefined' to a variable but it's not recommended.
// Normally one uses 'null' to assign an 'empty' or 'unknown' value to a variable.
// 'undefined' is reserved as a default initial value for unassigned things


// 7
// OBJECTS AND SYMBOLS
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.


// 8
// THE typeof operator
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)
// The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
typeof alert // "function"  (3)
// The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.




// SUMMARY
// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.
// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.
// In the next chapters, we’ll concentrate on primitive values and once we’re familiar with them, we’ll move on to objects.