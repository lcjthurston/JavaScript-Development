let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

// The first arg of slice is the starting index and the second arg is the number of array elements.
let swimmers = animals.slice(0, 3);

let mammals = animals.slice(2, 4);

//One option:
// let reptiles = animals.slice(4, 6);

// Other options:
// Go to end of array starting at index 4.
let reptiles = animals.slice(4);

// Start at end of array and count backwards three elements.
let quadruped = animals.slice(-3);
