// Exercise 1 : Timer
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');

// Part I : après 2 secondes, une alerte "Hello World"
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II : après 2 secondes, ajouter <p>Hello World</p> dans le container
setTimeout(() => {
    const paragraph = document.createElement('p');
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);

// Part III : toutes les 2 secondes, ajouter un paragraphe.
// L'intervalle s'arrête au clic sur le bouton, ou dès qu'il y a 5 paragraphes.
const intervalId = setInterval(() => {
    const paragraph = document.createElement('p');
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);

    if (container.querySelectorAll('p').length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

clearButton.addEventListener('click', () => {
    clearInterval(intervalId);
});
