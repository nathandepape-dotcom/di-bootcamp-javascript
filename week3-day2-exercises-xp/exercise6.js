// 🌟 Exercise 6 : Challenges

// Part 1 — True or False? Why?
// [2] === [2]   -> false : two different arrays = two different references (addresses)
// {} === {}     -> false : same reason, === compares references, not contents

// Part 2 — Value of number for each object, and why?
// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };
// object1.number = 4;
// console.log(object2.number) -> 4 : object2 points to the SAME object as object1
// console.log(object3.number) -> 4 : object3 = object2 = object1, same reference
// console.log(object4.number) -> 5 : object4 is a separate object, not affected

// Part 3
// - Create a class Animal with the attributes name, type and color.
// - Create a class Mammal that extends Animal, with a method sound(sound)
//   that returns the details of the animal (name, type, color) and the sound it makes.
// - Create a farmerCow object, instance of Mammal, and call sound():
//   "Moooo I'm a cow, named Lily and I'm brown and white"

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo")); // Moooo I'm a cow, named Lily and I'm brown and white
