// In JS a primitive value, primitive data type is a data that is not an object nad has no methods or properties
// 7 primitive data types:
// - string, number, bigint, boolean, undefined, symbol, null

const previouslyMaxSafeInteger = 9007199254740991n
console.log(previouslyMaxSafeInteger);

const alsoHuge = BigInt(9007199254740991)
// 9007199254740991n

console.log(alsoHuge);
const hugeString = BigInt("9007199254740991")
// 9007199254740991n
console.log(hugeString);

const hugeHex = BigInt("0x1fffffffffffff")
// 9007199254740991n
console.log(hugeHex);

const hugeOctal = BigInt("0o377777777777777777")
// 9007199254740991n
console.log(hugeOctal);

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// 9007199254740991n
console.log(hugeBin);

console.log(typeof 1n === 'bigint') // true
console.log(typeof BigInt('1') === 'bigint') // true

// A bigInt value can be wrapped in an Object
console.log(typeof Object(1n) === 'object') // true




// OPERATORS
// + * - % **
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER)
// 9007199254740991n
console.log(previousMaxSafe)

const maxPlusOne = previousMaxSafe + 1n
// 9007199254740992n
console.log(maxPlusOne);

const theFuture = previousMaxSafe + 2n
// 9007199254740993n, this works now!
console.log(theFuture);

const multi = previousMaxSafe * 2n
// 18014398509481982n
console.log(multi);

const substr = multi - 10n
// 18014398509481972n
console.log(substr);

const mod = multi % 10n
// 2n
console.log(mod);

const bigN = 2n ** 54n
// 18014398509481984n
console.log(bigN);

bigN * -1n
// -18014398509481984n
console.log(bigN * -1n);


// The / operator also works as experted with whole numbers - but operations with a fractional result will be truncated when used with BigInt value -- they won't return any fractional digits

const expectedNum = 4n / 2n // 2n
console.log(expectedNum);

const truncatedNum = 5n / 2n
console.log(truncatedNum); // 2n, not 2.5n




// COMPARISONS
// A BigInt value is not strictly equal to a Number value, but it is loosely so:
console.log(0n === 0) // false
console.log(0n == 0); // true

// A Number value nad a BigInt value may be compared as usual
console.log(1n < 2); // true
console.log(2n > 1) // true
console.log(2 > 2) // false
console.log(2n > 2) // false
console.log(2n >= 2) // true

// BigInt values and Number values may be mixed in arrays and sorted:
const mixed = [4n, 6, -12n, 10, 4, 0, 0n]

console.log(mixed.sort()) 
// [ -12n, 0, 0n, 10, 4n, 4, 6 ] -- default sorting behavior

// console.log(mixed.sort((q, b) => q - b)); 
// script.js:99 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//  won't work since subtraction will not work with mixed types

console.log(mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0)));
// (7) [-12n, 0, 0n, 4n, 4, 6, 10]

// with Objects - wrapped BigInt value act as with other objects, only indicating equality when the same object instance is compared:
console.log(Object(0n) === 0n) // false
console.log(Object(0n) === Object(0n)) // false

const o = Object(0n)
console.log(o === o) // true




// CONDITIONALS
// A BigInt value follows the same conversion rules as Numbers when:

// it is converted to a Boolean: via the Boolean function;
// when used with logical operators ||, &&, and !; or
// within a conditional test like an if statement.

if (0n) {
  console.log('Hello from the if!')
} else {
  console.log('Hello from the else!')
}
// Hello from the else!

console.log(0n || 12n)
// 12n

console.log(0n && 12n)
// 0n

console.log(Boolean(0n))
// false

console.log(Boolean(12n))
// true

console.log(!12n)
// false

console.log(!0n)
// true




// CONSTRUCTOR
//  BigInt()
// Creates a new BigInt value




// Use within JSON
// Using JSON.stringify() with any BigInt value will raise a TypeError, as BigInt values aren't serialized in JSON by default. However, JSON.stringify() specifically leaves a backdoor for BigInt values: it would try to call the BigInt's toJSON() method. (It doesn't do so for any other primitive values.) Therefore, you can implement your own toJSON() method (which is one of the few cases where patching built-in objects is not explicitly discouraged):
BigInt.prototype.toJSON = function () {
  return this.toString();
};
console.log(JSON.stringify({ a: 1n }));
// {"a":"1"}


const replacer = (key, value) => key === "big" ? value.toString() : value;
const data = {
  number: 1,
  big: 18014398509481982n,
};
const stringified = JSON.stringify(data, replacer);
console.log(stringified);
// {"number":1,"big":"18014398509481982"}
console.log(typeof(stringified));


const reviver = (key, value) => key === "big" ? BigInt(value) : value;
const payload = '{"number":1,"big":"18014398509481982"}';
const parsed = JSON.parse(payload, reviver);
console.log(parsed);
// { number: 1, big: 18014398509481982n }
console.log(typeof(parsed));




// CALCULATING PRIME
// Returns true if the passed BigInt value is a prime number
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true
}

// Takes a BigInt value as an argument, returns nth prime number as a BigInt value
function nthPrime(nth) {
  let maybePrime = 2n
  let prime = 0n

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--
      prime = maybePrime
    }
    maybePrime++
  }

  return prime
}
console.log(nthPrime(20n))
// 73n