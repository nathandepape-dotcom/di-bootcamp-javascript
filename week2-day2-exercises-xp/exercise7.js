// Exercise 7 : My Book List
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/isbn/9780747532699-M.jpg",
    alreadyRead: true
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image: "https://covers.openlibrary.org/b/isbn/9780156012195-M.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");

  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    details.style.color = "red";
  }

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  bookDiv.appendChild(details);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
});
