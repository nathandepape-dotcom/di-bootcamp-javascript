// 🌟 Exercise 7 : Welcome
(function (userName) {
    const navigationId = document.querySelector("#Navigation");
    const divCreation = document.createElement("div");
    const imgCreation = document.createElement("img");
    imgCreation.src = "https://i.pravatar.cc/40";
    divCreation.textContent = `Welcome, ${userName}`;
    divCreation.appendChild(imgCreation);
    navigationId.appendChild(divCreation);
})("John");
