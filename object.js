// creation of an object
// the name should be capitalised
const JsUser ={
    name: "John",
    "full name": "John Doe",
    age: 30,
    // for symbols
    [mySym]: "myValue",
    city: "New York",
    email:"john@example.com",
    isLoggedIn: true,
    skills: ["JavaScript", "React", "Node.js"]
}

console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.email);
console.log(JsUser["isLoggedIn"]);
console.log(JsUser[mySym]);


