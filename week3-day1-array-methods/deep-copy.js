// Exercice : Deep copy
// Create a deep copy of the array below using any suitable method.
// Your solution should work for arrays nested to any depth.
// Check your solution by changing a value in a nested array in your copy
// and confirming that the original array stays unchanged.
// Lancer : node deep-copy.js

const myArray = [1, 2, 3, [100, [-10, -20], 200], 10, [0, 1], 1000];
const myArrayCopy = structuredClone(myArray)
myArrayCopy[3][1][1]=-30
console.log(myArray)
console.log(myArrayCopy)
const myArrayDeepCopy = (arr) => arr.map(e => Array.isArray(e) ? myArrayDeepCopy(e) : e);
console.log(myArray)
const copie = (myArrayDeepCopy(myArray))
console.log(copie)

// ---- Niveau 1 : méthode intégrée ----


// ---- Niveau 2 : ta propre fonction récursive deepCopy ----

