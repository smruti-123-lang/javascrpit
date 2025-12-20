// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// let createdDate = new Date(2023, 0, 23, 5, 3,46, 0);
// console.log(createdDate.toString());
// console.log(createdDate.toLocaleString());

let createdDate = new Date("2023-01-14");
console.log(createdDate.toString());
console.log(createdDate.toLocaleString());


console.log(createdDate.getDate());
console.log(createdDate.getMonth() + 1); // months are zero based
console.log(createdDate.getFullYear());
console.log(createdDate.getHours());
console.log(createdDate.getMinutes());
console.log(createdDate.getSeconds());
console.log(createdDate.getMilliseconds());


let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp / 1000) ); // seconds since epoch
// console.log(myTimeStamp);

// console.log(createdDate.getTime());


// // now i can compare the two timestamps
// if (myTimeStamp > createdDate.getTime()) {
//     console.log("myDate is later than createdDate");
// } else {
//     console.log("createdDate is later than myDate by " + (createdDate.getTime() - myTimeStamp) + " milliseconds");
// }


