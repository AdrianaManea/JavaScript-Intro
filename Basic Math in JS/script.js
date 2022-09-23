const demo =  document.getElementById('demo')
/****** Types of numbers ******/
//  - integers - floating-point numbers without a fraction. They can be positive or negative - 10, 400, -5 
//  - floating point numbers (floats) have decimal points and decimal places 12.5, 56.1246543456
// - doubles - are a specific type of floating point number that have greater precision than standard floating point numbers


// We even have different types of number systems! Decimal is base 10 (meaning it uses 0–9 in each column), but we also have things like:
// - Binary — The lowest level language of computers; 0s and 1s.
// - Octal — Base 8, uses 0–7 in each column.
// - Hexadecimal — Base 16, uses 0–9 and then a–f in each column. You may have encountered these numbers before when setting colors in CSS.


// https://www.youtube.com/watch?v=PZRI1IfStY0&t=1s&ab_channel=Computerphile

// https://www.youtube.com/watch?v=8afbTaA-gOQ&ab_channel=AbishaliniSivaraman

// Floating point number are essentially scientific notation
// the two main advantages of floating points are speed and efficiency

// 32-bit computers only store 23 significant digits
// they also store where the decimal point is - they basically do scientific notation in base 2 - that's what floating point is

// base 2 = binary = what computer store
// ex: 0.1 in binary is 0.0011 and that 0011 is recurring all the way to the infinite 0.00110011001100110011...

// scientific notation = 650.000.000 can be written in scientific notation as 6.5 * 10^8(zece la puterea opt)
// looses precision
// doesn't understand recursion

// binary = 0 1 2 4 8 16 32 

// 56 digits on 64-bit computers

// it cuts, doesn't understand recurring, which means that floating point looks at 1/10(0.1) + 2/10(0.2) ans it says that it does not quite = 3/10(0.3)

// in most cases you don't need more than 23 binary digits precision

// Solution
// decimal type in more advanced programming languages
// or just store everything as an integer(a whole number, a number which is not a fraction) and then divide by 100 at the end

// let a = 0.1
// let b = 0.2
// let c = a + b
// console.log(c);
// demo.innerHTML = c


// let a = 1
// let b = 2
// let c = (1 + 2) / 10
// console.log(c);
// demo.innerHTML = c

// let a = 0.5
// let b = -0.5
// let c = a + b
// console.log(c);
// demo.innerHTML = c

// let a = 0.5
// let b = -0.3
// let c = a + b
// console.log(c);
// demo.innerHTML = c

// const myInt =  5
// const myFLoat = 6.667
// console.log(myInt); 
// console.log(myFLoat);
// console.log(typeof myInt); 
// console.log(typeof myFLoat);



/****** USEFUL NUMBER METHODS ******/
// to round your number to a fixed number - toFixed()

// const lotsOfDecimal = 1.7644599459949349
// console.log(lotsOfDecimal)
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2)
// console.log(twoDecimalPlaces);


/****** CONVERTING TO NUMBER DATA TYPES ******/
// let myNumber = '74'
// myNumber += 3
// console.log(myNumber);
// console.log(typeof myNumber);



/****** OPERAND / OPERATOR ******/
// - When you add two numbers, the numbers are the operand
// - And the '+' is the operator


// Math.pow()
// Math.pow(7, 3)
// Also equivalent to 7**3 
// 7 is the base and 3 is the exponent - sapte la puterea trei


// const a = Math.pow(7, 3)
// demo.innerHTML = a
// console.log(a);



/****** ARITHMETIC OPERATORS ******/
// const a = 10 + 7
// const b = 9 * 8
// const c = 60 % 3
// console.log(a, b, c);
// demo.innerHTML = c


// const num1 = 10;
// const num2 = 50;
// 9 * num1;
// // demo.innerHTML = num1 ** 3;
// console.log(num1 ** 3);

// // demo.innerHTML = num2 / num1;
// console.log(num2 / num1);

// const num3 = 5 + 10 * 3;
// const num4 = num2 % 9 * num1;
// const num6 = num1 / 8
// const num5 = num2 + num1 / 8 + 2;

// console.log(num3);
// console.log(num4);
// console.log(num6);
// console.log(num5);


/****** OPERATOR PRECEDENCE ******/
// if you want to override operator precedence, you can parentheses around parts that you want to be explicitly dealt first

// const num7 = (num2 + num1) / (8 + 2)
// const num8 = (num2 + num1) / 8 + 2
// console.log(num7);
// console.log(num8);



/****** INCREMENT AND DECREMENT OPERATOR ******/
// can't apply it directly to a number
// console.log(3++); 

// let num9 = 4
// num9++
// console.log(num9);
// num9++
// console.log(num9);
// num9--
// console.log(num9);
// num9--
// console.log(num9);


// let num10 = 2
// console.log(num10);
// console.log(++num10);
// console.log(++num10);
// console.log(++num10);

// console.log(--num10);
// console.log(--num10);
// console.log(--num10);



/****** ASSIGNMENT OPERATORS ******/
// let x = 3    // contains value 3
// let y = 4    // contains value 4
// console.log(x = y); // x contains the same value as y


// console.log(x += y);
// console.log(x -= y);
// console.log(x *= y);
// console.log(x /= y);


// let a = 4
// a *= 50 // = a * 50
// console.log('value of a is: ' + a);

// Modulus an assign
// let c = 80
// c %= 50
// console.log(c);

// Exponential and assign
// let c = 80
// c **= 2
// console.log(c);


/****** ACTIVE LEARNING - SIZING A CANVAS BOX ******/
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// x
// Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.
// let x = 47 + 3
// console.log(x);

// Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.
// let x = 750 % 500

// Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
let x = 4
x *= 50
console.log(x);


// y
// Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.
// let y = 25 * 3
// console.log(y);

// Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.
// let y = (302 - 2) / 2
// console.log(y);

// Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.
let y = 50 * 3
y += 50
console.log(y);


ctx.fillStyle = "#a0eade"
ctx.fillRect(10, 10, x, y)
// .fillRect() method - places its top-left corner at (10, 10) / - and gives it size 50(x) width and 50(y) height



/****** COMPARISON OPERATORS ******/
// strict equal