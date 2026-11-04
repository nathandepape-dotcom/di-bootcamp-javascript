// 🌟 Exercise 5 : Star Wars
// Lancer : node exercise5.js
// Méthode : reformule l'énoncé, écris tes étapes en commentaires, puis code.

// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(sentence); // "a long time ago in a galaxy far far away"
// No initial value: acc starts with the first word, so there is no extra space at the beginning.
