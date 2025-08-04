const mySkillIssues1 = 42;
mySkillIssues1 = 43; // TypeError: Assignment to constant variable.

if (true) {
  let mySkillIssues = 42;
  const myConstSkillIssues = 43;
}
console.log(mySkillIssues); // ReferenceError: mySkillIssues is not defined
console.log(myConstSkillIssues); // ReferenceError: myConstSkillIssues is not defined

// var mySkillIssues isn't scoped to its block (the if body), as most developers would expect.
// Instead, it's scoped to the function that contains it (or the global scope if it's not in a function).
// The let and const keywords are block-scoped:

var messageText = "Welcome to Textio!";
var isBirthday = true;

if (isBirthday) {
  const messageText = "Happy Birthday!";

  console.log("sending birthday message..."); // sending birthday message...

  console.log("messageText: ", messageText); // messageText:  Happy Birthday!

}

// don't touch below this line

console.log("sending welcome message...");// sending welcome message...

console.log("messageText: ", messageText);// messageText:  Welcome to Textio!

