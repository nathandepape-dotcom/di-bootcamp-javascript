// 🌟 Exercise 5 : Kg and grams

// Function declaration
function kgToGrams(weight) {
    return weight * 1000;
}
console.log(kgToGrams(1)); // 1000

// Function expression
const kgToGramsExpression = function (weight) {
    return weight * 1000;
};
console.log(kgToGramsExpression(2)); // 2000

// A function declaration is hoisted, so it can be called before it is defined; a function expression can only be called after the line where it is defined.

// One line arrow function
const kgToGramsArrow = (weight) => weight * 1000;
console.log(kgToGramsArrow(3)); // 3000
