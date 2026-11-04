// 🌟 Exercise 3 : User & id
// 1. Using methods taught in class, turn the users object into an array:
//    Expected: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// 2. Modify the outcome of part 1 by multiplying the user's ID by 2:
//    Expected: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1. Object -> array of [key, value] pairs
const usersArray = Object.entries(users);
console.log(usersArray); // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// 2. Multiply each ID by 2 (destructuring the pair in map)
const doubledIds = usersArray.map(([user, id]) => [user, id * 2]);
console.log(doubledIds); // [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
