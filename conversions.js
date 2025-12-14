let score = 85
let score2 = "85abc"


let mark = "45"

let ValueinNumber = Number(mark)
//converts string to number
let ValueinNumber2 = Number(score2)//converts string to number

console.log("ValueinNumber:", ValueinNumber)
console.log(typeof(mark));
console.log(typeof(score));
console.log(typeof(ValueinNumber));
console.log("ValueinNumber2:", ValueinNumber2)
console.log(typeof(ValueinNumber2))

//"33" => 33
//"33abc" => NaN
//"abc33" => NaN
//" " => 0
//false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

//1 => true
//0 => false
//"abc" => true
//"" => false

let someNumber = 33

let stringNumber = String(someNumber)

console.log(typeof(stringNumber))
console.log(stringNumber)

