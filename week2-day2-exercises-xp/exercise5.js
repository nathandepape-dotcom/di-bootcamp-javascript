// 🌟 Exercise 5 : Users
const div = document.getElementById("container");
console.log(div);

const lists = document.querySelectorAll(".list");
const firstUl = lists[0];
const secondUl = lists[1];

// Change "Pete" to "Richard"
firstUl.children[1].textContent = "Richard";

// Delete the second <li> of the second <ul> (Sarah)
secondUl.children[1].remove();

// Change the first <li> of each <ul> to my name
lists.forEach(ul => {
  ul.firstElementChild.textContent = "Nathan";
});

// Classes
lists.forEach(ul => ul.classList.add("student_list"));
firstUl.classList.add("university", "attendance");

// Styles
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Hide the <li> "Dan" (now the last <li> of the second <ul>)
secondUl.lastElementChild.style.display = "none";

// Border on "Richard"
firstUl.children[1].style.border = "2px solid black";

// Font size of the body
document.body.style.fontSize = "20px";

// Bonus
if (div.style.backgroundColor === "lightblue") {
  const names = [...firstUl.children].map(li => li.textContent);
  alert(`Hello ${names[0]} and ${names[1]}`);
}
