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
// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')

// x
// Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.
// let x = 47 + 3
// console.log(x);

// Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.
// let x = 750 % 500

// Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
// let x = 4
// x *= 50
// console.log(x);


// y
// Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.
// let y = 25 * 3
// console.log(y);

// Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.
// let y = (302 - 2) / 2
// console.log(y);

// Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.
// let y = 50 * 3
// y += 50
// console.log(y);


// ctx.fillStyle = "#a0eade"
// ctx.fillRect(10, 10, x, y)
// .fillRect() method - places its top-left corner at (10, 10) / - and gives it size 50(x) width and 50(y) height



/****** COMPARISON OPERATORS ******/
// strict equal - ===
// let a = 5 === 2 + 4
// console.log(a);

// strict non-equal
// let a = 5 !== 2 + 4
// console.log(a);

// less than - <
// let a = 10
// let b = 5
// console.log(a < b);
// demo.innerHTML = a < b


// greater than - >
// console.log(10 > 20)


// less than or equal to - <=
// let a = 3
// let b = 2
// console.log(3 <= 2);
// demo.innerHTML = 3 <= 2


// greater than or equal to - >=
// let a = 3
// let b = 2
// console.log(3 >= 2);
// demo.innerHTML = 3 >= 2

// strict versions === !== test the equality of both the values and their datatypes
// The strict versions tend to result in fewer errors, so it's recommended to use these




// Booleans
// === in this case we are testing weather the text content of a button contains a certain string
// but it is the same principal at work
// such a control that swaps between two states is a referred as a toggle
// const btn = document.querySelector('button')
// const txt = document.querySelector('p')

// btn.addEventListener('click', updateBtn)

// function updateBtn() {
//   if(btn.textContent === 'Start machine') {
//     btn.textContent = 'Stop Machine'
//     txt.textContent = 'The machine has started!'
//   } else {
//     btn.textContent = 'Start Machine'
//     txt.textContent = 'The machine is stopped.'
//   }
// }



// TEST MATH SKILLS

// Math 1
// let finalResult;

// let evenOddResult;

// // Add your code here

// const section = document.querySelector('section')

// const firstNum = 12
// const secondNum = 12
// const thirdNum = -1
// const fourthNum = 1

// const addFirstSecond = firstNum + secondNum
// console.log(addFirstSecond);

// const subFourthFromThird = fourthNum - thirdNum
// console.log(subFourthFromThird);

// finalResult = addFirstSecond * subFourthFromThird
// console.log(finalResult);

// evenOddResult = finalResult % 2 === 0
// console.log(evenOddResult);

// // Don't edit the code below here!

// section.innerHTML = ' ';
// const para1 = document.createElement('p');
// const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
// para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
// const para2 = document.createElement('p');
// const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
// para2.textContent = evenOddResultCheck;

// section.appendChild(para1);
// section.appendChild(para2);



// Math 2
// Final result should be 10.42

// Add/update your code here
// const section = document.querySelector('section')

// let result = 7 + 13 / 9 + 7;
// console.log(result);

// let result2 = 100 / 2 * 6;
// console.log(result2);

// // result = result * result2
// // console.log(result);

// result *= result2
// console.log(result);

// finalResult = result
// // console.log(finalResult);

// finalResult %= finalResult - 10.42
// console.log(finalResult);
// console.log(typeof(finalResult));


// finalResult = finalResult.toFixed(2)
// console.log(finalResult);
// console.log(typeof(finalResult));


// const finalNumber = Number(finalResult);
// console.log(finalNumber);
// console.log(typeof(finalNumber));


// // Don't edit the code below here!

// section.innerHTML = ' ';
// const para1 = document.createElement('p');
// para1.textContent = `Your finalResult is ${ finalResult }`;
// const para2 = document.createElement('p');
// const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
// para2.textContent = finalNumberCheck;

// section.appendChild(para1);
// section.appendChild(para2);



// Math 3


// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

// Add your code here
const section = document.querySelector('section')

const weightComparison = eleWeight <= mouseWeight
console.log(weightComparison);

const heightComparison = duckHeight <= ostrichHeight
console.log(heightComparison);

const pwdMatch = pwd1 === pwd2
console.log(pwdMatch);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

const weightTest = weightComparison ? 'True — elephants weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
