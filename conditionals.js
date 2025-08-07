if (height > 6) {
  console.log("You are super tall!");
} else if (height > 4) {
  console.log("You are tall enough!");
} else {
  console.log("You are not tall enough!");
}


let messageLen = 10;
let maxMessageLen = 20;
console.log(
  "Trying to send a message of length:",
  messageLen,
  "and a max length of:",
  maxMessageLen,
);

// don't touch above this line

if (messageLen < maxMessageLen) {
  console.log("Message sent");
} else {
  console.log("Message not sent");
}
/*
comparison operators :
=== equal to
!== not equal to
< less than
> greater than
<= less than or equal to
>= greater than or equal to
*/

5 < 6; // evaluates to true
5 > 6; // evaluates to false
5 >= 6; // evaluates to false
5 <= 6; // evaluates to true

//Strict equality and inequality
5 === 6; // evaluates to false
5 !== 6; // evaluates to true

// normal equality and inequality
5 == 6; // evaluates to false
5 == "5"; // evaluates to true

5 != 6; // evaluates to true
5 != "5"; // evaluates to false

"1" == 1; // true convert string to number
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false Object: return true only if both operands reference the same object.

