// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// Note: These are primitive types - and therefore are not linked.

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
// Instead, they store a REFERENCE to the array

let nums = [ 2, 4, 6, 8 ];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push('BOO!');

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]

// Since arrays store references, you can define them as const but still change their elements.  
