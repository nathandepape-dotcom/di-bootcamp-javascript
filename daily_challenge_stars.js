// ============================================================
//  DAILY CHALLENGE : STARS
//  Lancer :  node daily_challenge_stars.js
// ============================================================

// CONSIGNE : recrée ce motif (triangle d'étoiles) :
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

// ===== MÉTHODE 1 : avec UNE SEULE boucle =====
let line = "";
for (let i = 0; i < 6; i++) {
  line += "* ";
  console.log(line);
}

console.log(""); // ligne vide de séparation

// ===== MÉTHODE 2 : avec DEUX boucles imbriquées (une dans l'autre) =====
for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}
