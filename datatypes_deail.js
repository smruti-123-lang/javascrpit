// primitive type of datatypes:
// where we copy the values directly.

// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// reference type of datatypes:
// where we copy the reference/address.

// object
// array
// function

const Id  =Symbol('123')
const anotherId  =Symbol('123')
console.log(Id === anotherId); // false

//representation of bigint
const bigNumber = 9007199254741991n

// non primitive data types

const heroes = ["thar","captain america","ironman"]

let myObject = {
    name: "tony",
    age: 45,
    isAvenger: true,
    movies: ["ironman","avengers"]
}

function greet(){
    console.log("hello world");
}

console.log(typeof greet);