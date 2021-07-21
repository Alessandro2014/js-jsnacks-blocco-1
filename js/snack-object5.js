/**SNACK Creare un array di oggetti di giocatori di basket.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti
 */

var display = document.getElementById("exsercise");

var giocatori = [
    {
        nome : "Ale",
        punti : 0,
        falli : 0,
    },
    {
        nome : "Bianchi",
        punti : 0,
        falli : 0,
    },
    {
        nome : "Abigail",
        punti : 0,
        falli : 0,
    },
];



for (var i = 0; i < giocatori.length; i++) {
    giocatoriContent = giocatori[i];
    giocatoriContent.punti = getRandomNumber(1, 50);
    giocatoriContent.falli = getRandomNumber(1, 50);

}


console.table(giocatori);

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}