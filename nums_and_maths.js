// const balance = new Number(100); // new means creating an object instance of the Number type
// console.log(balance);
// console.log(typeof balance); // object

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Output: 100.00

// const otherNumber = 43452.56789;

// console.log(otherNumber.toPrecision(2)); // Output: 4.3e+4
// console.log(otherNumber.toPrecision(4)); // Output: 43450
// console.log(otherNumber.toPrecision(6)); // Output: 43452.6

// const hundereds = 1000000;
// console.log(hundereds.toLocaleString('en-IN'));

//+++++==========================maths========================+++++

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.4));
// console.log(Math.ceil(4.4));

// console.log(Math.min(4, 5, 1, 9, -4, 6));
// console.log(Math.max(4, 5, 1, 9, -4, 6));

console.log(Math.random()); // generates random number between 0 and 1

// to generate random number between a range

const randomNumber = Math.floor(Math.random() * 10) + 1; // generates random number between 1 and 10
console.log(randomNumber);

const min = 10;
const max = 20;

const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange); // generates random number between 10 and 20