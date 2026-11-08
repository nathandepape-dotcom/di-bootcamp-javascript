// 🌟 Exercise 3 : JSON Mario
// 1. Convert this JS object into a JSON object. What happens to the nested objects?
// 2. Convert AND pretty print this JS object into a JSON object.
// 3. Use your web inspector to add a breakpoint and check the values in the debugger.
//    (open exercise3.html in the browser -> DevTools -> Sources)

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

// 1. JS object -> JSON string.
// The nested objects are converted too: everything becomes ONE string, on one line,
// with all keys in double quotes.
const marioJSON = JSON.stringify(marioGame);
console.log(marioJSON);

// 2. Pretty print: 3rd argument = number of spaces for the indentation
const marioPretty = JSON.stringify(marioGame, null, 2);
console.log(marioPretty);

// 3. Breakpoint: open exercise3.html, DevTools > Sources > exercise3.js,
//    click on the line number below to add a breakpoint, reload,
//    then hover marioJSON / marioPretty to inspect their values.
debugger;
