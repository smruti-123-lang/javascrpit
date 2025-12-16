const gameName = new String('adventureQuest');
// console.log(gameName[0]); // Output: [String: 'adventureQuest']
// console.log(typeof gameName); // Output: object
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.length);
// console.log(gameName.includes('Quest'));
// console.log(gameName.indexOf('e'));



const newstring = gameName.substring(0,4);
console.log(newstring); // Output: adve
const anotherGameName = gameName.slice(-3,4); // Output: adve
console.log(anotherGameName);

console.log(gameName.split('e')); // Output: [ 'adv', 'ntur', 'Qu', 'st' ]

const trimmedString = new String('   Hello World!   ').trim();
console.log(trimmedString); // Output: 'Hello World!'

const replacedString = gameName.replace('adventure', 'quest');
console.log(replacedString); // Output: 'questQuest'