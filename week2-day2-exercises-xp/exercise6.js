// 🌟 Exercise 6 : Change the navbar
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const ul = navDiv.querySelector("ul");

// New <li> with a text node "Logout"
const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);
ul.appendChild(newLi);

// First and last <li>
console.log(ul.firstElementChild.textContent); // Profile
console.log(ul.lastElementChild.textContent);  // Logout
