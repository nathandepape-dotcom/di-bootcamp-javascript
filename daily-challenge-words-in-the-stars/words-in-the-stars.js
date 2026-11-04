// Daily Challenge : Words in the stars (open index.html: prompt only works in the browser)

function frameWords(input) {
  const words = input.split(",").map(word => word.trim());
  const longest = Math.max(...words.map(word => word.length));
  const border = "*".repeat(longest + 4);

  console.log(border);
  words.forEach(word => {
    console.log(`* ${word.padEnd(longest)} *`);
  });
  console.log(border);
}

const answer = prompt("Give me several words separated by commas", "Hello, World, in, a, frame");
frameWords(answer);
