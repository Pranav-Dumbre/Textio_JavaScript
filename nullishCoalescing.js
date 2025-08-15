//If the value on the left of ?? is null or undefined,
//the value on the right is returned. Otherwise,
//the value on the left is returned. It's a way to set sane defaults
//for variables that might be empty.
let myName = null;
console.log(myName ?? "Anonymous"); // "Anonymous"

myName = "Lane";
console.log(myName ?? "Anonymous"); // "Lane"

/*Certain users in the Textio database don't have a subscriptionType,
by default customers who aren't subscribed are considered a "Guest".
Use a nullish coalescing operator to fix the code .
*/
const name = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const subscriptionType = null;

// don't touch above this line

console.log(
  `Creating ${subscriptionType} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);
//solution
console.log(
  `Creating ${(subscriptionType??"Guest")} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);
