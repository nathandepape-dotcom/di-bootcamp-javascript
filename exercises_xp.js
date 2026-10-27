// ============================================================
//  EXERCISES XP (Module 1)
//  Lancer :  node exercises_xp.js
// ============================================================

// ============================================================
//  🌟 EXERCICE 1 : List of people
// ============================================================
const people = ["Greg", "Mary", "Devon", "James"];
people[3]="Jason";
people.shift("Greg");


people.push("Nathan");
console.log(people)
let maryPos = console.log(people.indexOf("Mary"))
let copy = people.slice(1,3)
console.log(copy)
people.indexOf("Foo")
console.log(people.indexOf("Foo")) //Foo est utilisé pour vérifier si une entité existe, quand ca n'existe pas javascript renvoie "-1"
let last = people[people.length-1];
console.log(last)

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Boucle 2 : s'arrêter après Devon
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
      break;
  }
}
// --- Part I : Review about arrays ---
// 1. Retirer "Greg" du tableau people
// ...

// 2. Remplacer "James" par "Jason"
// ...

// 3. Ajouter TON prénom à la fin du tableau
// ...

// 4. console.log de l'index de "Mary"  (méthode indexOf)
// ...

// 5. Faire une COPIE du tableau avec slice(),
//    SANS "Mary" ni ton prénom
//    (rappel : maintenant people = ["Mary", "Devon", "Jason", "TonPrénom"])
// ...

// 6. console.log de l'index de "Foo"  → pourquoi ça renvoie -1 ?
// ...

// 7. Créer une variable `last` = le DERNIER élément du tableau
//    (indice : lien entre l'index du dernier élément et la longueur)
// ...

// --- Part II : Loops ---
// 1. Boucle qui console.log chaque personne du tableau
// ...

// 2. Boucle qui s'ARRÊTE après avoir affiché "Devon"  (mot-clé break)
// ...


// ============================================================
//  🌟 EXERCICE 2 : Your favorite colors
// ============================================================
let colors = ["Bleu","Orange","Rouge","Vert","Noir"]
for(let i=0;i < colors.length;i++){
  let colorRank = [i+1]
  console.log(`My #${colorRank} choice is ${colors[i]}`);
}
// 1. Créer un tableau `colors` avec TES 5 couleurs préférées
// ...

// 2. Boucle qui affiche : "My #1 choice is blue", "My #2 choice is red"...
// ...

// 3. BONUS : afficher "My 1st choice", "My 2nd choice", "My 3rd choice"...
//    (indice : créer un tableau de suffixes ["st","nd","rd","th"...])
// ...


// ============================================================
//  🌟 EXERCICE 3 : Repeat the question
// ============================================================
// Exercice 3 : à tester dans le navigateur (index.html), prompt n'existe pas dans Node.
let answer;

do {
    answer = Number(prompt("Give me a number"));
    console.log(typeof answer);
} while (answer < 10);

console.log("Merci, ton nombre est " + answer);
// 1. Demander un nombre à l'utilisateur (prompt) — vérifier le type (typeof)
// ...

// 2. TANT QUE le nombre est < 10, redemander  (quelle boucle while ?)
// ...


// ============================================================
//  🌟 EXERCICE 4 : Building Management
// ============================================================
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// 1. console.log du nombre d'étages
console.log(building.numberOfFloors)
// ...

// 2. console.log du nombre d'appartements aux étages 1 et 3
// 
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor) // 12

// 3. console.log du nom du 2e locataire + son nombre de pièces
// ...
console.log(building.nameOfTenants[1],building.numberOfRoomsAndRent.dan[0])
// 4. Si (loyer Sarah + loyer David) > loyer Dan  →  loyer Dan = 1200
// ...
if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1])
  building.numberOfRoomsAndRent.dan[1] = 1200
console.log(building.numberOfRoomsAndRent.dan[1]) // 1200

// ============================================================
//  🌟 EXERCICE 5 : Family
// ============================================================
// 1. Créer un objet `family` avec quelques paires clé/valeur
const family = {
  father: "David",
  mother: "Sarah",
  brother: "Yonathan",
  sister: "Noa",
};

// 2. Boucle `for...in` → afficher les CLÉS
for (let key in family) {
  console.log(key);
}

// 3. Boucle `for...in` → afficher les VALEURS
for (let key in family) {
  console.log(family[key]);
}


// ============================================================
//  🌟 EXERCICE 6 : Rudolf
// ============================================================
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

// Avec une boucle `for`, afficher : "my name is Rudolf the reindeer"
let sentence = "";
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim()); // my name is Rudolf the reindeer


// ============================================================
//  🌟 EXERCICE 7 : Secret Group
// ============================================================
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Le nom de la société secrète = la 1ère lettre de chaque prénom,
// triées par ordre alphabétique.
// (indice : une string est un tableau de lettres)
// Résultat attendu : "ABJKPS"
let letters = [];
for (let i = 0; i < names.length; i++) {
  letters.push(names[i][0]);
}
letters.sort();
console.log(letters.join("")); // ABJKPS
