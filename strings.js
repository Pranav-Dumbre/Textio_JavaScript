const email = "stoob@gmail.com";

const myName = new String(' Pranav  Dumbre ');
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.indexOf("r"));
console.log(myName.charAt(4));
console.log(myName.trim());
console.log(myName.replace("a","@"));
console.log(myName.includes("v"));
console.log(myName.split(" "));


console.log('************************');
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

/**
string methods
[[Prototype]]: String
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
 */