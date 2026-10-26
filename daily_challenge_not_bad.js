// ============================================================
//  DAILY CHALLENGE : NOT BAD
//  Lancer :  node daily_challenge_not_bad.js
// ============================================================

// CONSIGNE :
//  - Crée une variable `sentence` contenant les mots "not" et "bad"
//    (ex. "The movie is not that bad, I like it")
//  - `wordNot` = position de "not" (avec indexOf)
//  - `wordBad` = position de "bad" (avec indexOf)
//  - Si "bad" vient APRÈS "not" → remplace "not...bad" par "good"
//  - Sinon (ou si les mots sont absents) → affiche la phrase d'origine

// 1. Déclare ta phrase (sentence)
// ...

// 2. Trouve la position de "not" et stocke-la dans wordNot
// ...

// 3. Trouve la position de "bad" et stocke-la dans wordBad
// ...

// 4. Compare les positions et affiche le bon résultat
// ...
sentence = "The movie is not that bad, I like it"



let wordNot =sentence.indexOf("not");   
let wordBad =sentence.indexOf("bad");
let wordGood = "good"
if(wordBad > wordNot && wordNot !== -1 && wordBad !== -1){
    
    console.log(sentence.substring(0, wordNot)  +  "good"  +  sentence.substring(wordBad + 3))
}else{

    console.log(sentence)

}



    


