// Daily Challenge : True or False
// ...args collects all the parameters into an array; every() checks that all are truthy.
const allTruthy = (...args) => args.every(value => Boolean(value));

console.log(allTruthy(true, true, true));      // true
console.log(allTruthy(true, false, true));     // false
console.log(allTruthy(5, 4, 3, 2, 1, 0));      // false
