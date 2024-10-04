/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo 
se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
 */
    

//l'utente sceglie pari o dispari e inserisce un numero
//controllo sulla scelta
let userChoice=prompt("Scegli tra 'pari' o 'dispari' ");
while(userChoice != "pari" && userChoice != "dispari") {
    alert("il messaggio non è valido!");
    userChoice=prompt("Scegli tra 'pari' o 'dispari' ");
}

let num1=Number(prompt("inserisci un numero tra 1 e 5"));
//controllo sul numero inserito
while (num1<1 || num1>5 ) {
    alert("il numero non è valido");
    num1=Number(prompt("inserisci un numero tra 1 e 5");
}
//facciamo generare un numero random dal pc
let num2=Math.floor(Math.random() * 5) + 1;

// funzione 

//sommiamo i due numeri 


// domma pari o dispari


//dichiarazione del vincitore in base al risultato