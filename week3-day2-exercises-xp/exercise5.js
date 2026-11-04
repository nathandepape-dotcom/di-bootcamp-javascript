// 🌟 Exercise 5 : Dog class
// Which constructor will successfully extend the Dog class? Explain why.

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

// // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };

// // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

// // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// My answer: option 2.
// 1 -> error: in a child class, super() must be called before using "this".
// 2 -> correct: super(name) runs the Dog constructor (sets this.name), then this.size is added.
// 3 -> super(name) is called, but "name" is not a parameter of the constructor: the name is lost.
// 4 -> error: "this" is used without calling super() first.
