// Exercise 2 : Move the box
// Au clic, la boîte rouge avance d'1px vers la droite toutes les millisecondes,
// jusqu'au bord droit du container.
function myMove() {
    const box = document.querySelector('#animate');
    const container = document.querySelector('#container');
    const maxPosition = container.clientWidth - box.clientWidth; // 400 - 50 = 350
    let position = 0;

    const intervalId = setInterval(() => {
        if (position >= maxPosition) {
            clearInterval(intervalId); // la boîte est au bord : on arrête
        } else {
            position++;
            box.style.left = position + 'px';
        }
    }, 1);
}
