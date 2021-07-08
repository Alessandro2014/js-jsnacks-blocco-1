/* Generatore di “nomi cognomi” casuali:
   prendendo una lista di nomi e una lista di cognomi,
   Gatsby vuole generare una falsa lista di 3 invitati. */

var exsercise = document.getElementById("exsercise");

// creare 2 array con nomi e cognomi + una vuota
var lastName = ["Alessandro", "Luca", "Fabiana", "Lisa", "Giovanni"];
var firstName = ["Merenda", "Bianchi", "De Rossi", "Verdi"];
var randomList = [];

// metto tutto in un contatore che esegua finchè non arrivo a 3 invitati
while(randomList.length < 3) {

    // generare un numero random da 0 alla lunghezza massima dell'array,
    // mettendo "lenght" genero sulla lunghezza dell'arrey e non da 0 a 100
    var randomNumber1 = Math.floor(Math.random() * lastName.length);
    var randomNumber2 = Math.floor(Math.random() * firstName.length);

    // creo variabile che associ il numero ad un nome e cognome
    var randomFirstName = firstName[randomNumber1];
    var randomLastName = lastName[randomNumber2];

    // unisco il numero random1(nome) al numero random2(cognome)
    var fullName = randomFirstName + " " + randomLastName;
    console.log("la scelta random è: ", fullName);

    // verificare che nella lista non ci sia due volte lo stesso nome o cogmome
    if (!randomList.includes(fullName)) {
        console.log("inserisco nella lista", fullName);
        randomList.push(fullName);
    }
}

exsercise.innerHTML = "La lista degli invitati è la seguente: " + randomList;