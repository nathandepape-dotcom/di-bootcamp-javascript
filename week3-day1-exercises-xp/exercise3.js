// 🌟 Exercise 3 : Analyzing
// Lancer : node exercise3.js
// Méthode : reformule l'énoncé, écris tes étapes en commentaires, puis code.

// Analyze these pieces of code BEFORE executing them. What will be the outputs?
// Write your predictions as comments, then uncomment and run to check.

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// My prediction: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// Each ...array is replaced by its elements, in place -> one flat array of 6 elements.

// ------2------
// const country = "USA";
// console.log([...country]);
// My prediction: ['U', 'S', 'A']
// A string behaves like a list of letters: the spread puts each letter in the new array.

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// My prediction: [undefined, undefined]
// [,,] has 2 empty slots (a trailing comma doesn't add a slot);
// the spread copies each empty slot as undefined.
