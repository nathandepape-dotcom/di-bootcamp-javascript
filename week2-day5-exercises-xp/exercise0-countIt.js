// Échauffement : closure compteur
// Lancer : node exercise0-countIt.js

function countIt() {
    let compteur = 0

    function counter() {
        compteur++
        console.log(compteur)
    }
    return counter;
}

const myCounter = countIt();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
