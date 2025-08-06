const email = "stoob@gmail.com";
//In JavaScript, a (non-template) string can be written with either single or double quotes.
// print the first character in the string here
console.log(email[0]);
// print the last character in the string here
console.log(email[email.length-1]);
// print the entire string here
console.log(email);


// Template literals - interpolate dynamic values into string

//Template literals must start and end with a backtick(`...`), 
//and anything inside of the dollar-sign bracket (${...}) enclosure is automatically
// cast to a string.

const name = "Saul Goodman";
const openRate = 30.5;

// ?
let msg = `Hi ${name}, your open rate is ${openRate} percent`;
// don't touch below this line

console.log(msg);

/*
n JavaScript, strings consist of UTF-16 code units - which basically means
that most characters are represented by a 16-bit number (2 bytes). This allows
for more than just the 128 ASCII characters, but also characters from 
non-English languages and other symbols.
*/

let name1 = "🐻";
console.log(`constant 'name' UTF-16 unit length: ${name1.length}`);//2
console.log(`constant 'name' character length: ${[...name1].length}`);//1
console.log("=====================================");
console.log(`Hi ${name}, welcome to Textio!`);

/**
camelCase - Preferred by JS community
snake_case
PascalCase
SCREAMING_SNAKE_CASE
 */