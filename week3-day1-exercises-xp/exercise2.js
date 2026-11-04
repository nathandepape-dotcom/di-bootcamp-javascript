// 🌟 Exercise 2 : Colors #2
// Lancer : node exercise2.js
// Méthode : reformule l'énoncé, écris tes étapes en commentaires, puis code.

// Display: "1st choice is Blue." "2nd choice is Green." "3rd choice is Red." etc.
// Hint: use the array methods taught in class and the ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

let colorFirst =1

colors.forEach((e) =>{
    const suffix = ((colorFirst<=3?ordinal[colorFirst]:ordinal[0]));
    console.log(`${colorFirst}${suffix} choice is ${e}.`)
    colorFirst++

});
