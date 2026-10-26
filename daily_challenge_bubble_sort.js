// ============================================================
//  DAILY CHALLENGE GOLD : BUBBLE SORT
//  Lancer :  node daily_challenge_bubble_sort.js
// ============================================================

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
console.log(numbers.toString());   // → "5,0,9,1,7,4,2,6,3,8"
console.log(numbers.join(" "));    // → "5+0+9+1+7+4+2+6+3+8"

for (let i =0; i < numbers.length; i++){
    for (let j = 0; j < numbers.length - 1; j++) {  // interne : parcourt les voisins
        if (numbers[j] < numbers[j+1] ) {                                 // condition : mal rangé ?
            let temp = numbers[j]
            numbers[j] = numbers[j+1]
            numbers[j+1] = temp
        
        }
    }
}
console.log(numbers);   // affiche le tableau trié
    





// 1. Convertir en string avec .toString()  (c'est une MÉTHODE : parenthèses !)
//    → "5,0,9,1,7,4,2,6,3,8"
// ...

// 2. Convertir avec .join() en testant "+" , " " , ""
// ...

// 3. BONUS : Bubble Sort (trier en décroissant, SANS .sort())
//
// Boucle EXTERNE : balayer le tableau autant de fois qu'il a d'éléments
//    for (let i = 0; i < numbers.length; i++) {
//
//       Boucle INTERNE : comparer chaque paire de voisins
//       for (let j = 0; j < numbers.length - 1; j++) {
//
//          SI l'élément de gauche est PLUS PETIT que celui de droite
//          → échanger les deux avec une variable temporaire
//
//       }
//    }
//
// console.log(numbers);   // attendu : [9,8,7,6,5,4,3,2,1,0]
