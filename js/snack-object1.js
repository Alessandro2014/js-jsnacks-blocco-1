/*
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione */

var exsercise = document.getElementById("exsercise");

var palla = { name : "pallone", peso : 10 };
 
var nuovoPeso = prompt("scegli il peso della palla");
while (!nuovoPeso || isNaN(nuovoPeso) || nuovoPeso.trim() === " ") {
    var nuovoPeso = prompt("scegli il peso della palla");
}

palla["peso"] = parseInt(nuovoPeso);

printObject(palla, exsercise);
console.table(palla);


function printObject(obj, targetElement){
    var content = " ";
    for (var key in obj) {
        content += key + ": " + obj[key];
    }
    targetElement.innerHTML = content;
} 