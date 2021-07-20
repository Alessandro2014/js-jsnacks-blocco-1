/*SNACK 2: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione 
Invece di modificare il peso con un prompt, proviamo a farlo con un input.*/

var display = document.getElementById("display");
var inputPeso = document.getElementById("wheight");
var button = document.getElementById("button");

var palla = {
    nome : "pallone",
    peso : 10
};
printObject(palla, display);
 
//BOTTONE PER INSERIMENTO NUOVO DATO
button.addEventListener("click", function(){
    var nuovoPeso = inputPeso.value;
    if(!nuovoPeso || isNaN(nuovoPeso) || nuovoPeso.trim() === " ") {
        alert("Il peso inserito non è valido");
        return;
    }
    palla.peso = parseInt(nuovoPeso);
    printObject(palla, display);
});

//FUNZIONE DI STAMPA
function printObject(obj, targetElement){
    var content = " ";
    for (var key in obj) {
        content += key + ": " + obj[key] + "<br> ";
    }
    targetElement.innerHTML = content;
} 