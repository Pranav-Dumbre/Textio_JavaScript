// // declaring a function without a variable
// function add(x, y) {
//   return x + y;
// }

// // declaring a function with a variable
// const add1 = function (x, y) {
//   return x + y;
// };

// // using the fat arrow syntax
// const add2 = (x, y) => {
//   return x + y;
// };

// // arrow function should be strictly declared with variable, normal function may or may not be declared with variable 
// //Inherits this from the enclosing (lexical) scope , regular fun has its own this
// //cannot be used as constructors unlike regular functions - They lack an internal [[Construct]] method: Regular functions have an internal [[Construct]] method that enables them to be called with the new keyword to create instances and set up this for the new object.
// const Person = (name) => { this.name = name; };
// //const p = new Person('Alice'); // TypeError: Person is not a constructor


// //Assignment
// /**
//  * Convert isSpamMessage to the fat arrow function syntax, but don't change its internal behavior.
//  */
// let isSpamMessage = (message) =>{
//   if (message.toLowerCase().includes("offer")) {
//     return true;
//   }
//   if (message.toLowerCase().includes("free")) {
//     return true;
//   }
//    return false;
// }

// // don't touch below this line

// function isFunctionType(f) {
//   return f.hasOwnProperty("prototype");
// }

// function test(msg) {
//   const isSpam = isSpamMessage(msg);
//   console.log(`'${msg}' is spam: ${isSpam}`);
// }

// test("Get an offer now!");
// test("Free beer in your local area");
// test("Hey mom, sorry I couldn't make it to your birthday...");
// console.log("========================");
// if (isFunctionType(isSpamMessage)) {
//   console.log("isSpamMessage is a classic function");
// } else {
//   console.log("isSpamMessage is a fat arrow function");
// }

// //One reason to choose an arrow function over a regular function or method is to preserve the this context
// const author = {
//   firstName: "Lane",
//   lastName: "Wagner",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(author.getName());
// // Prints: Lane Wagner
// const authorNew = {
//   firstName: "Lane",
//   lastName: "Wagner",
//   getName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(authorNew.getName());
// // Prints: undefined undefined
// // because `this` still refers to the global object
// // and `firstName` and `lastName` are not defined globally
const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage: () => {
    campaign.sentMessages++;
  },
};

console.log(campaign.sentMessages);
campaign.sendMessage();
console.log(campaign.sentMessages);
