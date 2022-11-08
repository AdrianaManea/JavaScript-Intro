function sum(a, b) {
  return a + b
}
console.log(`1 + 2 = ${sum(1, 2)}.`);
console.log(typeof(`1 + 2 = ${sum(1, 2)}.`));

// Nesting of template literals
// const classes = `header ${
//   isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
// }`;


// Example - [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
// property access - provide access to an object's properties by using the dot notation or the bracket notation
// object.propertyName
// object[expression]


const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.


// Example
console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []



// Example
// Tag functions don't even need to return a string
function template(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"
console.log(t1Closure("Y", "A")); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", { foo: "World" }); // "Hello World!"
console.log(t2Closure("Hello", { foo: "World" })); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
console.log(t3Closure("foo", { name: "MDN", age: 30 })); // "I'm MDN. I'm almost 30 years old."
t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
console.log(t3Closure({ name: "MDN", age: 30 })); // "I'm MDN. I'm almost 30 years old."



// Example
const callHistory = [];

function tag(strings, ...values) {
  callHistory.push(strings);
  // Return a freshly made object
  return {};
}

function evaluateLiteral() {
  return tag`Hello, ${"world"}!`;
}


console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array


// Example
let guestList = `Guests:
* Maria
* Irina
* Petru
`
console.log(guestList);


// Example
// let guestLists = "Guests:
// * Maria
// ""
// console.log(guestLists); // Unexpected token


// Example
let guests = 'Guests:\n * Maria\n * John\n * Peter'
console.log(guests); // a multiple list of guests


// Ex
let str1 = 'Hello\nWorld'
console.log(str1);
let str2 = `Hello
World`
console.log(str2);
console.log(str1 === str2);

// | Character     | Description      |
// | ------------- | ---------------- |
// | \n            | New line         |
// | \r            | In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n. |
// | \', \", \`    | Quotes           |
// | \\            | Backslash        |
// | \t            | Tab              |
// | \b, \f, \v    | Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now). |
// | \             | Escape Character |


console.log(`The backslash: \\`); // The backslash: \
console.log('I\'m the Walrus!'); // I'm the Walrus!
console.log("I\'m the Walrus!"); // I'm the Walrus!




// STRING LENGTH
console.log(`My\n`.length); // 3
// Note that str.length is a numeric property, not a function. There is no need to add parenthesis after it. Not /length(), but .length



// ACCESSING CHARACTERS
// string.prototype.at()

// Example:
// Return the last character of a string
// A function that returns the last character of a given string
function returnLast(arr) {
  return arr.at(-1)
}
let invoiceRef = 'myInvoice01'
console.log(returnLast(invoiceRef));
console.log(typeof(returnLast(invoiceRef)));

invoiceRef = 'myInvoice02'
console.log(returnLast(invoiceRef));

invoiceRef = 'myInvoice08'
console.log(returnLast(invoiceRef));


// Example:
// Comparing methods
const myString = 'Every green bus drives fast.'
// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2)
console.log(lengthWay);
console.log(myString.length);
console.log(myString.length - 2);
console.log(myString.charAt(myString.length - 10));
// Using slice method
const sliceWay = myString.slice(-2, -1)
console.log(sliceWay);
// Using at() method
const atWay = myString.at(-2)
console.log(atWay);


// Example with charAt() method
// charAt() method returns a new string consisting of the single UTF-16 code unit located at the specific offset into the string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"


// Example with method slice()
// extract a section of a string and returns it as a new string, without modifying the original string
const str = 'The quick brown fox jumps over the lazy dog.'
console.log(str.slice(31)); // the lazy dog.
console.log(str.slice(3, 20)); // ' quick brown fox '
console.log(str.slice(-4)); // 'dog.'
console.log(str.slice(-9, -5)); // 'lazy'


// Example
let strSecond = `Hello`
// the first character
console.log(strSecond[0]); // H
console.log(strSecond[3]); // l
console.log(strSecond.at(0)); // H
console.log(strSecond.at(3)); // l

// the last character
console.log(strSecond[strSecond.length - 1]); // o
console.log(strSecond.at(- 1)); // o

console.log(strSecond[-2]); // undefined
console.log(strSecond.at(-2)); // l

// iterate over characters using 'for..of'
for (let char of "Hello") {
  console.log(char); // H, e, l, l, o
}



// STRINGS ARE IMMUTABLE
// immutable = unchanging over time or unable to be changed

// Strings can't be changed in js. It is impossible to change a character

let strThird = 'Hi'
strThird[0] = 'h'
console.log(strThird[0]); // doesn't work

// Usual workaround is to create a whole new string and assign it to 'strFourth' instead of the old one

let strFourth = 'Hi'
strFourth = 'h' + strFourth[1] // replaces the string
console.log(strFourth);



//CHANGING THE CASE
console.log( 'Body cream'.toUpperCase() ); // BODY CREAM
console.log( 'Body cream'.toLowerCase() ); // body cream

console.log( 'Body cream'[0].toLowerCase() ); // b



// Searching for a substring

// str.indexOf(substr, pos)
let strFifth = 'Widget with id'
console.log(strFifth.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(strFifth.indexOf('widget')); // -1, not found, the search is case-sensitive
console.log(strFifth.indexOf('id')); // 1, "id" is found at the position 1 (..idget with id)
console.log(strFifth.indexOf('ge')); // 3

// the first occurrence of 'id' is at position 1
console.log(strFifth.indexOf('id', 2)); // 12


// if interested in all occurrences, we can run indexOf in a loop
// every new call is made with the position after the previous match
let strSixth = 'As sly as a fox, as strong as an ox'
let target = 'as'
let pos = 0
while (true) {
  let foundPos = strSixth.indexOf(target, pos)
  if (foundPos == -1) break
  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1
}

// same example but simpler
let strSeventh = "As sly as a fox, as strong as an ox";
let targetOne = "as";

let posOne = -1;
while ((posOne = strSeventh.indexOf(targetOne, posOne + 1)) != -1) {
  console.log( posOne );
}

// The alert in the example above doesn’t show because str.indexOf("Widget") returns 0 (meaning that it found the match at the starting position). 
// Right, but 'if' considers 0 to be false.
let strEight = "Widget with id";
if (strEight.indexOf("Widget")) {
    console.log("We found it"); // doesn't work!
}


// So, we should actually check for -1
let strNinth = "Widget with id";

if (strNinth.indexOf("Widget") !== -1) {
    console.log("We found it"); // works now!
}


// includes, startsWith, endsWith
// str.includes(substr, pos)
// returns true / false depending on whether 'str' contains 'substr' within

// The right choice if we need to test for the natch, but don't need it's position

console.log( 'Widget with id'.includes('Widget') ) // true
console.log('Hello'.includes('world')); // false

console.log('Widget'.includes('id')); // true
console.log('Widget'.includes('et')); // true
console.log('Widget'.includes('add')); // false
console.log('Widget'.includes('id', 3)); // false, from position 3 there is no 'id'

// str.startsWith
console.log('Widget'.startsWith('Wid')); // true
console.log('Widget'.startsWith('wid')); // false

// str.endsWith
console.log('Widget'.endsWith('get')); // true
console.log('Widget'.endsWith('get')); // true




// GETTING A SUBSTRING / SEARCHING FOR A SUBSTRING
// three methods: 'substring', 'substr', 'slice'

// str.slice(start [, end])
// returns the part of the string from 'start' to (but not including) 'end'
let strString = 'stringify'
console.log(strString.slice(0, 5)); // 'strin' - the substring from 0 to 5 (not included)
console.log(strString.slice(0, 1)); // 's'

console.log(strString.slice(2)); // 'ringify' - from the second position till the end

console.log(strString.slice(-4, -1)); // 'gif' - start at the 4th position from the right, end at the 1st from the right


// str.substring(start [, end])
// returns the part of the string between 'start' and 'end' (not including end)
// almost the same as 'slice', but it allows 'start to be greater that 'end' (in this case it simply swaps 'start' and 'end' values)

let stringStr = 'stringify'
// these are same for substring
console.log( stringStr.substring(2, 6) ); // "ring"
console.log( stringStr.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log( stringStr.slice(2, 6) ); // "ring" (the same)
console.log( stringStr.slice(6, 2) ); // "" (an empty string)


// str.substr(start [, length])
// returns the part of the string from 'start', with the given 'length'
// Allows us to specify the 'length' instead of the ending position

let subString = 'stringify'
console.log(strString.substr(-4, 2)); // 'gi', from the 4th position get 2 characters


// | method                | selects…                                  | negatives              |
// | --------------------- | ----------------------------------------- | -----------------------|
// | slice(start, end)     | from start to end (not including end)     | allows negatives       |
// | substring(start, end) | between start and end (not including end) | negative values mean 0 |
// | substr(start, length) | from start get length characters          | allows negative start  |

// for practice use it's enough to remember only slice




// COMPARING STRINGS

// 1 - a lower case is always greater than the uppercase
console.log( 'a' > 'Z' ); // true

// 2 - letters with diacritical marks are 'out of order'
console.log('Österreich' > 'Zealand'); // true



// Strings in JavaScript are encoded using UTF-16 meaning that each character has a corresponding numeric code
// Methods that allow us to get the character for the code and back:

// str.codePointAt(pos)
// returns a decimal number representing the code for the character at position 'pos' 
// different case letters have different codes
console.log( "Z".codePointAt(0) ); // 90
console.log( "z".codePointAt(0) ); // 122
console.log( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)


// String.fromCodePoint(code)
console.log(String.fromCodePoint(90)); // Z
console.log(String.fromCodePoint(0x5a)); // Z - we can also use a hex value as an argument


let strExOne = ''
for (let i = 65; i <= 220; i++) {
   strExOne += String.fromCodePoint(i)
}
console.log(strExOne); // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


// The characters are compared by their numeric code
// The greater code means that the characters and symbols near the end of the output



// CORRECT COMPARISON

console.log( 'Österreich'.localeCompare('Zealand') ); // -1




// TASKS

// test 1
// Uppercase the first character
// Write a function ucFirst(str) that returns the string str with the uppercase first character, for instance:
// ucFirst('john') == 'John'

// resolve:
// we can't replace the first character because strings in JavaScript are immutable

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log( ucFirst("john") ); // John


// test 2
// check for spam
// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam () {
  let lowerStr = str.toLowerCase()

  return lowerStr.includes('viagra' || lowerStr.includes('xxx'))
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))


// test 3
// truncate the text
// ??

function truncate(str, maxLength) {
  return (str.length > maxLength) ? 
    str.slice(0, maxLength - 1) + '…' : str;
}

// test 4
// extract the money
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));