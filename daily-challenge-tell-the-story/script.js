// Daily challenge : Tell the story (Mad Libs)
const form = document.querySelector('#libform');
const storySpan = document.querySelector('#story');
const shuffleButton = document.querySelector('#shuffle-button');

// Les mots choisis par l'utilisateur, gardés pour le bouton Shuffle
let words = null;

// Trois modèles d'histoire qui utilisent les cinq mots
function createStories(w) {
    return [
        `${w.person} found a ${w.adjective} ${w.noun} in ${w.place} and decided to ${w.verb} all day long.`,
        `In ${w.place}, nobody could ${w.verb} like ${w.person}, until a ${w.adjective} ${w.noun} showed up.`,
        `Every morning, ${w.person} takes a ${w.adjective} ${w.noun} to ${w.place} just to ${w.verb} in peace.`
    ];
}

function showRandomStory() {
    const stories = createStories(words);
    const randomIndex = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[randomIndex];
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    const values = {
        noun: document.querySelector('#noun').value.trim(),
        adjective: document.querySelector('#adjective').value.trim(),
        person: document.querySelector('#person').value.trim(),
        verb: document.querySelector('#verb').value.trim(),
        place: document.querySelector('#place').value.trim()
    };

    // Vérifier qu'aucun champ n'est vide
    for (const key in values) {
        if (values[key] === "") {
            storySpan.textContent = "Please fill in all the fields.";
            return;
        }
    }

    words = values;
    showRandomStory();
});

// Bonus : une nouvelle histoire avec les mêmes mots
shuffleButton.addEventListener('click', () => {
    if (words !== null) {
        showRandomStory();
    }
});
