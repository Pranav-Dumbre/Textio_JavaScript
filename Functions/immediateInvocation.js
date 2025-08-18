/**
 * Immediately invoked function expression
 * 
 */
//example 1
(function () {
  console.log("JavaScript: at least it's not Java");
})();
// JavaScript: at least it's not Java

//example 2
const result = (function (a, b) { //They can also return values and take arguments:
  return a + b;
})(1, 2);

console.log(result);// 3

//examole 3
const total = (function (numMessages, bytesPerMessage) {
  return numMessages * bytesPerMessage;
})(100,24);

// don't touch below this line

console.log("Total message cost:", total);