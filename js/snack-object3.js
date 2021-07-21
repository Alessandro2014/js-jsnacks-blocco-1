/**Creiamo un array di oggetti contenente 3 squadre di calcio
 *con proprietà "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML
 */

var squadre = [
    {
        nome : "Juventus",
        citta : "Torino",
        punti : "7",
    },
    {
        nome : "Milan",
        citta : "Milano",
        punti : "10",
    },
    {
        nome : "Verona",
        citta : "Verona",
        punti : "4",
    },
];

//FUNZIONE CHE PERMETTE DI ORDINARE PER PUNTEGGIO
squadre.sort(function (a, b){
    return b.punti - a.punti;
});

//STAMPA IN TABELLA
var tableBody = document.querySelector("#table tbody");
var tableContent = " ";
for (var i = 0; i < squadre.length; i++) {
    currentTeam = squadre[i];
    tableContent += "<tr>";
    tableContent += "<td>" + currentTeam.nome + "</td>";
    tableContent += "<td>" + currentTeam.citta + "</td>";
    tableContent += "<td>" + currentTeam.punti + "</td>";
    tableContent += "</tr>";
}

tableBody.innerHTML = tableContent;