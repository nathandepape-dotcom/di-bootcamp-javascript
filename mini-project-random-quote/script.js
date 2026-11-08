// Mini project : Random Quote Generator

// Part 1 : array of quotes (id starts at 0) + likes key for Part 2
const quotes = [
  { id: 0, author: "Steve Jobs", quote: "Stay hungry, stay foolish.", likes: 0 },
  { id: 1, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
  { id: 2, author: "Linus Torvalds", quote: "Talk is cheap. Show me the code.", likes: 0 },
  { id: 3, author: "Albert Einstein", quote: "Imagination is more important than knowledge.", likes: 0 },
  { id: 4, author: "Nelson Mandela", quote: "It always seems impossible until it's done.", likes: 0 },
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteInfo = document.getElementById("quoteInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let current = null;      // the quote currently displayed
let filtered = [];       // quotes of the filtered author (Part 3)
let filteredIndex = 0;

function displayQuote(quoteObj) {
  current = quoteObj;
  quoteText.textContent = `"${quoteObj.quote}"`;
  quoteAuthor.textContent = `— ${quoteObj.author}`;
  quoteInfo.textContent = `Likes: ${quoteObj.likes}`;
}

// Random quote, never the same one twice in a row
document.getElementById("generateBtn").addEventListener("click", () => {
  let random;
  do {
    random = quotes[Math.floor(Math.random() * quotes.length)];
  } while (quotes.length > 1 && random === current);
  displayQuote(random);
});

// Part 2 : add a new quote with the next id
document.getElementById("addForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const quote = document.getElementById("newQuote").value.trim();
  const author = document.getElementById("newAuthor").value.trim();
  const newId = quotes.length === 0 ? 0 : Math.max(...quotes.map(q => q.id)) + 1;
  quotes.push({ id: newId, author, quote, likes: 0 });
  event.target.reset();
  quoteInfo.textContent = `Quote #${newId} added!`;
});

// Part 2 : counting buttons (they need a displayed quote)
const withCurrent = (callback) => () => {
  if (!current) {
    quoteInfo.textContent = "Generate a quote first";
    return;
  }
  callback(current);
};

document.getElementById("charsWithSpaces").addEventListener("click", withCurrent(q => {
  quoteInfo.textContent = `Characters (with spaces): ${q.quote.length}`;
}));

document.getElementById("charsWithoutSpaces").addEventListener("click", withCurrent(q => {
  quoteInfo.textContent = `Characters (without spaces): ${q.quote.replaceAll(" ", "").length}`;
}));

document.getElementById("wordsCount").addEventListener("click", withCurrent(q => {
  const words = q.quote.split(" ").filter(word => word !== "");
  quoteInfo.textContent = `Words: ${words.length}`;
}));

document.getElementById("likeBtn").addEventListener("click", withCurrent(q => {
  q.likes++;
  quoteInfo.textContent = `Likes: ${q.likes}`;
}));

// Part 3 : filter by author, one quote at a time with Previous / Next
document.getElementById("filterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const search = document.getElementById("authorSearch").value.trim().toLowerCase();
  filtered = quotes.filter(q => q.author.toLowerCase().includes(search));
  filteredIndex = 0;

  if (filtered.length === 0) {
    quoteText.textContent = "No quote from this author";
    quoteAuthor.textContent = "";
    quoteInfo.textContent = "";
    current = null;
  } else {
    displayQuote(filtered[0]);
  }
  updateNavButtons();
});

function updateNavButtons() {
  prevBtn.disabled = filteredIndex <= 0;
  nextBtn.disabled = filteredIndex >= filtered.length - 1;
}

prevBtn.addEventListener("click", () => {
  filteredIndex--;
  displayQuote(filtered[filteredIndex]);
  updateNavButtons();
});

nextBtn.addEventListener("click", () => {
  filteredIndex++;
  displayQuote(filtered[filteredIndex]);
  updateNavButtons();
});
