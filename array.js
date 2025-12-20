// const myArray = [1, 2, 3, 4, 5];

// console.log(myArray.push(6));
// console.log(myArray);

// console.log(myArray.pop());
// console.log(myArray);

// console.log(myArray.shift());
// console.log(myArray);

// console.log(myArray.unshift(0));
// console.log(myArray);

// console.log(myArray.slice(1, 4));
// console.log("A" + myArray);

// console.log(myArray.splice(1,4));
// console.log("B" + myArray);

// console.log(myArray.indexOf(3));
// console.log(myArray.includes(4));
// console.log(myArray.join('-'));
// console.log(myArray.reverse());



const marvelHeroes = ["Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America"];
const dcHeroes = ["Batman", "Superman", "flash", "Wonder"]

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

//spread operator
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes);

const another_array =[1,2,[3,4],[6,7,[8,9]]];
console.log(another_array.flat(Infinity));

console.log(Array.isArray(another_array));
console.log(Array.from("smruti"));

let score1 = 200;
let score2 = 400;
let score3 = 600;

//use of of Array.of
const scores = Array.of(score1, score2, score3);
console.log(scores);
