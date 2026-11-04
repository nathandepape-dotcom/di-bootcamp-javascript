// 🌟 Exercise 4 : Employees
// Lancer : node exercise4.js
// Méthode : reformule l'énoncé, écris tes étapes en commentaires, puis code.

// 1. Using map(), create a new array with a welcome message for each first name:
//    ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
// 2. Using filter(), create a new array containing only the Full Stack Residents.
// 3. Bonus: chain filter() with map() to return only the lastName of the Full Stack Residents.

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(user =>`Hello ${user.firstName}`)
console.log(welcomeStudents)
// 2. Full Stack Residents (full objects)
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// 3. Bonus: only their lastName
const residentsLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
console.log(residentsLastNames); // ['Bouley', 'Alnaji', 'Hajek']
