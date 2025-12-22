// // creation of an object
// // the name should be capitalised
// const mySym = Symbol("mySym");

// const JsUser ={
//     name: "John",
//     "full name": "John Doe",
//     age: 30,
//     // for symbols
//     [mySym]: "myValue",
//     city: "New York",
//     email:"john@example.com",
//     isLoggedIn: true,
//     skills: ["JavaScript", "React", "Node.js"]
// }

// // console.log(JsUser["email"]);
// // console.log(JsUser["full name"]);
// // console.log(JsUser.email);
// // console.log(JsUser["isLoggedIn"]);
// // console.log(JsUser[mySym]);


// // change vales in object
// // JsUser.email ="john.doe@example.com";
// // console.log(JsUser.email);

// //freeze the object
// // Object.freeze(JsUser);
// // JsUser.email ="john.withfreezedoe@example.com";
// // console.log(JsUser.email); // will not change

// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log(`Hello, my name is ${this.name}`);
// }

// console.log(JsUser.greeting());

// destructuring of object
const company ={
    name:"SM groupe of technologies",
    location :"bhubaneswar",
    established:2030,
    ceo:"Mrs Smrutishree Mihir Misra",
    employees:50000,
    cfo:"Mr Mihir kumar behera"

}
const {established : estd} = company;
console.log(estd);

