const author = {
  firstName: "Lane",
  lastName: "Wagner",
  getName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(author.getName());
// Prints: Lane Wagner

//With a fat-arrow function, the this keyword refers to the same context as its parent. 
// In essence, fat arrow functions "preserve" the this context. 
// That's why  this.firstName and this.lastName are undefined in this example:
const authorNew = {
    firstName: "Lane",
    lastName: "Wagner",
    getName: () => {
      return `${this.firstName} ${this.lastName}`;
    },
  };
console.log(authorNew.getName());
// Prints: undefined undefined
// because `this` still refers to the global object