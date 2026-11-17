// Daily Challenge: Letters
// The input only keeps letters: numbers and special characters are removed.

const lettersInput = document.querySelector("#lettersInput");

// "input" fires on every change (typing, pasting, autocomplete)
lettersInput.addEventListener("input", () => {
    // Regex: [^a-zA-Z] = any character that is NOT a letter, g = all of them
    lettersInput.value = lettersInput.value.replace(/[^a-zA-Z]/g, "");
});
