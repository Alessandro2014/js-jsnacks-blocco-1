/*SNACK  Creare un array di oggetti: ogni oggetto descriverà
una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */
var display = document.getElementById("exsercise");

var biciclette = [
    {
        Marca : "Wilier",
        Peso : 3,
    },
    {
        Marca : "Bianchi",
        Peso : 14,
    },
    {
        Marca : "Atala",
        Peso : 13,
    },
];

var biciclettaLeggera = biciclette[0];

//FUNZIONE CHE PERMETTE DI ORDINARE PER PUNTEGGIO
var biciContent = " ";
for (var i = 1; i < biciclette.length; i++) {
    var currentBici = biciclette[i];
    if(currentBici.Peso < biciclettaLeggera.Peso) {
        biciclettaLeggera = currentBici;
    }
}

display.innerHTML= "<li>Marca:</li>" + biciclettaLeggera.Marca + "<li>Peso:</li>" + biciclettaLeggera.Peso;