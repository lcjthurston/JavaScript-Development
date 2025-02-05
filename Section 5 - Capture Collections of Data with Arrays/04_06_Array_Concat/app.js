let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'brussel sprouts' ];
let meats = [ 'steak', 'chicken breast' ];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

// concat multiple arrays to end of first array
let allFoods = fruits.concat(veggies, meats);
