// 🌟 Exercise 1 : Colors
// Lancer : node exercise1.js
// Méthode : reformule l'énoncé, écris tes étapes en commentaires, puis code.

// 1. Display: "1# choice is Blue." "2# choice is Green." "3# choice is Red." etc.
// 2. Check if at least one element is equal to "Violet".
//    If yes console.log("Yeah"), else console.log("No...")
// Hint: use the array methods taught in class.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// je vais faire une boucle qui récupere chaque 

let colorFirst =1
colors.forEach((e) =>{
    console.log(`${colorFirst}# choice is ${e}.`)
    colorFirst++

});
console.log(colors.some(e => e === 'Violet') ? "Yeah": "No...");




