// ============================================================
//  EXERCISES XP NINJA — Module 1 (JavaScript Day 1)
//  Lancer :  node exercises_xp_ninja.js
// ============================================================

// ===== Exercise 1 : Checking the BMI =====
let person1 = {
  fullName: "John",
  mass: 78,
  height: 1.69,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};

let person2 = {
  fullName: "Mark",
  mass: 92,
  height: 1.95,
  bmi: function () {
    return this.mass / (this.height * this.height);
  },
};

function compareBMI(personA, personB) {
  if (personA.bmi() > personB.bmi()) {
    console.log(personA.fullName);
  } else if (personB.bmi() > personA.bmi()) {
    console.log(personB.fullName);
  } else {
    console.log("Same BMI");
  }
}

compareBMI(person1, person2);

// ===== Exercise 2 : Grade Average =====
// Bonus : split into two functions, one calls the other.
function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  return sum / gradesList.length;
}

function findAvg(gradesList) {
  let avg = calculateAverage(gradesList);
  console.log(avg);

  if (avg > 65) {
    console.log("You passed!");
  } else {
    console.log("You failed and must repeat the course.");
  }
}

// Exemple d'appel :
findAvg([80, 90, 70, 60, 75]);
findAvg([40, 50, 55, 30, 60]);
