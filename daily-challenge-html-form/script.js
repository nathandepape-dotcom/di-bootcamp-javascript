// Daily challenge : HTML Form
const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stay on the page instead of reloading

  const data = {
    name: document.getElementById("firstName").value,
    lastname: document.getElementById("lastName").value,
  };

  output.textContent = JSON.stringify(data); // {"name":"...","lastname":"..."}
});
