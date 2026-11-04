// 🌟 Exercise 2 : Display Student Info
// Destructure the parameter inside the function and return a string:
// output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser){
    //destructuring
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'})); // Your full name is Elie Schoppik
