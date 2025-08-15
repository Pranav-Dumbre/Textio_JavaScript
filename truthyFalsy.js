//A "truthy" value is a value that is considered true 
// when encountered in a Boolean context.
//  In JavaScript, you don't need to explicitly convert a value to a
//  Boolean before using it in a conditional

if ("hello") {
  console.log("hello is truthy");
}
if (42) {
  console.log("42 is truthy");
}
// hello is truthy
// 42 is truthy

// Common truthy values include:
// true
// 42 (any number that isn't 0)
// "hello" (any non-empty string)
// [] (an empty array)
// {} (an empty object)
// function() {} (an empty function)

if (0) {
  console.log("0 is falsy");
}
if (null) {
  console.log("null is falsy");
}
if (undefined) {
  console.log("undefined is falsy");
}

// Common falsy values include:
// false
// 0
// "" (an empty string)
// null
// undefined
// NaN (Not a Number)