function isPalindrome(inputWord) {
    
    //valore da restituire
    let validate= true;

    //invertire la parola
    let reversedWord=inputWord.split("").reverse().join("")

    //controllare che le due parole siano uguali
    if (inputWord !== resversedWord) {
        validate=false
    }
    return validate;
}
