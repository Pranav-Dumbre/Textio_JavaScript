//this refers to the context where a piece of code is executed.

// in a browser
console.log(this);
// Window {https// ... } - object of window

// in Node.js
console.log(this);
// {}

// normal 
console.log(typeof this); //object

// "use strict"
console.log(typeof this); //undefined   

//Inside a standard method or a constructor, this refers to the object the method is called on.
const myObject = {
  message: "Hello, World!",
  myMethod() {
    console.log(this);
    console.log(this.message);
  },
};
myObject.myMethod();
// {"message":"Hello, World!"}
// Hello, World!