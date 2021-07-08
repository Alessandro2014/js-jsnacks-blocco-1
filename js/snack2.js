/*Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

var exsercise = document.getElementById("exsercise");
// dichiaro variabile che parte da 0

var number = 0;

//richiesta numero
do {
    number = parseInt(prompt("Inserisci un numero"));
} while (isNaN(number) || number <= 0);

//divisione del numero per un numero pari e stampa risultato
if (number % 2 === 0) {
    exsercise.innerHTML = "Il numero è: " + number;
}   else {
    var sum = number + 1;
    exsercise.innerHTML = "Il numero pari successivo al tuo è: " + sum;
}