// 🌟 Exercise 6 : Employees #2
// Lancer : node exercise6.js
// Méthode : reformule l'énoncé, écris tes étapes en commentaires, puis code.

// 1. Using filter(), create a new array containing the students that passed the course.
// 2. Bonus: chain filter() with forEach() to congratulate them:
//    "Good job Jenner, you passed the course in Information Technology", etc.

const students = [{name: "Ray", course: "Computer Science", isPassed: true},
               {name: "Liam", course: "Computer Science", isPassed: false},
               {name: "Jenner", course: "Information Technology", isPassed: true},
               {name: "Marco", course: "Robotics", isPassed: true},
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
               {name: "Jamie", course: "Big Data", isPassed: false}];

// 1. Students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// 2. Bonus: chain filter() with forEach()
students
    .filter(student => student.isPassed)
    .forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`));
