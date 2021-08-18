/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */

        //  FOR

var exsercise = document.getElementById("exsercise");

var sum = 0;
        // richiedere per 5 volte un numero
/*
 for (var i = 0; i < 5; i++) {
    var number = parseInt(prompt("Inserisci un numero","1"));
    if (!isNaN(number)) {
    //somma dei numeri inseriti 
        sum += number;
    }  else {
        alert("non hai inserito dei numeri");
    }
}
*/


        //  WHILE
        var sum = 0;
        var i = 0;
        while(i < 5){
            var number = parseInt(prompt("Inserisci un numero","1"));
            if (!isNaN(number)) {
            //somma dei numeri inseriti 
                sum += number;
            }  else {
                alert("non hai inserito dei numeri");
            }
            i++;
        }

//STAMPA SU HTML
exsercise.innerHTML = "La somma dei numeri da te inseriti e: " + sum;
