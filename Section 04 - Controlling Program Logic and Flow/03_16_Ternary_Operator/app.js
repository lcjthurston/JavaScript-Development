// ==============
// OVERVIEW
// ==============
// 1. Ternary operator in JS allows us to condense if-else logic into single line of code.
// 2. Called ternary operator because three arguments, as opposed to binary (2 arguments).
// 3. Syntax: "condition ? expIfTrue : expIfFalse"

// ==============
// EXAMPLE 1
// ==============
let num = 7;

// Without Ternary Operator...
// if (num === 7) {
// 	console.log('lucky!');
// }
// else {
// 	console.log('BAD!');
// }

// Same thing written with Ternary Operator...
num === 7 ? console.log('lucky!') : console.log('BAD!');

// ==============
// EXAMPLE 2
// ==============

let state = 'offline';

// Without ternary operator
// let color;
// if (status === 'offline') {
// 	color = 'red';
// }
// else {
// 	color = 'green';
// }

// One-liner using Ternary Operator...
let color = state === 'offline' ? 'red' : 'green';
console.log(color);
