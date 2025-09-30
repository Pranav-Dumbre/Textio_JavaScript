// in js methods are not bound to objects
// using method as callback loses its this context
// to solve this we use method binding
const animal = {
  sound: "Roar",
  speak() {
    console.log(this.sound);
  },
};
animal.speak(); // Roar
const speakFunction = animal.speak;
console.log(speakFunction);
//speakFunction(); // undefined because this is lost here

const boundSpeakFunction = animal.speak.bind(animal);
boundSpeakFunction(); // Roar because this is bound to animal