/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

function isPalindrome(inputWord) {
    
    //valore da restituire
    let validate= true;

    //invertire la parola
    let reversedWord=inputWord.split("").reverse().join("")

    //controllare che le due parole siano uguali
    if (inputWord !== reversedWord) {
        validate=false
    }
    return validate;
}
//chiedere all'utente
let message=prompt("Inserisci una parola");
let result=isPalindrome(message);
console.log(result);


