// Daily challenge : Anagram
// Normalize a string: lowercase, remove whitespace, sort the letters.
const normalize = (str) => str.toLowerCase().replaceAll(" ", "").split("").sort().join("");

const isAnagram = (str1, str2) => normalize(str1) === normalize(str2);

console.log(isAnagram("Astronomer", "Moon starer"));         // true
console.log(isAnagram("School master", "The classroom"));    // true
console.log(isAnagram("The Morse Code", "Here come dots"));  // true
console.log(isAnagram("Hello", "World"));                    // false
