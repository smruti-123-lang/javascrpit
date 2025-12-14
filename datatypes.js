// number => 2 to the power 53
// BigInt => 2 to the power 100
// string =>"Hello, World!"
// boolean => true/false
// null => null
// undefined => undefined
// symbol => unique identifier

console.log(typeof 9007199254740992); // number
console.log(typeof 9007199254740993n); // BigInt
console.log(typeof "Hello, World!"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol