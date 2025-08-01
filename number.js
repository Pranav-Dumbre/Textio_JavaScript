/*In Python, numbers without a decimal part are called Integers and fractions are Floats.
Contrast this to JavaScript where all numbers are just a Number type.
*/

let x = 2; // this is a number
x = 5.69; // this is also a number
x = -5.42; // still a number
//example :
const promoMessages = 12;
const reminderMessages = 15;
const welcomeMessages = 8;
const supportMessages = 5;

// don't touch above this line

let totalMessagesSent = promoMessages+reminderMessages+welcomeMessages+supportMessages;
let averageMessagesSent = totalMessagesSent / 4;
// don't touch below this line

console.log("Total messages:", totalMessagesSent);//Total messages: 40

console.log("Average messages:", averageMessagesSent);//Average messages: 10
