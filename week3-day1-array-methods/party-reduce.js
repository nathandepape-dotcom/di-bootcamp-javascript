// Exercice en classe : reduce()
// Use the reduce() method to sum up all the calories of every desert, except Apple Pie.
const party = [
  { desert: 'Chocolate Mousse', calories: 30 },
  { desert: 'Apple Pie', calories: 15 },
  { desert: 'Croissant', calories: 50 },
  { desert: 'Strawberry Icecream', calories: 5 },
];

const total = party.reduce((acc, item) => item.desert === 'Apple Pie' ? acc : acc + item.calories, 0);
console.log(total); // 85
