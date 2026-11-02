// 🌟 Exercise 8 : Juice Bar

// Part I
function makeJuice(size) {
    function addIngredients(first, second, third) {
        const sentence = document.createElement("p");
        sentence.textContent = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
        document.body.appendChild(sentence);
    }

    addIngredients("apple", "carrot", "ginger");
}

makeJuice("medium");

// Part II
function makeJuice2(size) {
    const ingredients = [];

    function addIngredients(first, second, third) {
        ingredients.push(first, second, third);
    }

    function displayJuice() {
        const sentence = document.createElement("p");
        sentence.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
        document.body.appendChild(sentence);
    }

    addIngredients("apple", "carrot", "ginger");
    addIngredients("orange", "mango", "mint");
    displayJuice();
}

makeJuice2("large");
