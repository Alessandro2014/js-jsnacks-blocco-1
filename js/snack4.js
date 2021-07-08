/* Crea due array che hanno un numero di elementi diversi.
   Aggiungi elementi casuali all’array che ha meno elementi,
   fino a quando ne avrà tanti quanti l’altro. 

    1 creare array di lunghezza differente
    2 creare un ciclo "fin tanto che"
    3 verificare che le liste non siano uguali
    4 generare dei contenuti random da pushare nella lista più corta
    5 far inserire nella lista più corta i contenuti
    6 stampa */ 

   var exsercise = document.getElementById("exsercise");

   // creo array con contenuto di diversa lunghezza
var list1 = [1, 2, 3, 4, 5, 6, 7]
var list2 = [10, 11, 12]

   /* verifico che la lunghezza dei due array non sia uguale
      con while dico "fin tanto che la lunghezza non sia uguale esegui.."*/
while(list1.length != list2.length) {

    // genero numero random da inserire nella lista più corta
    var randomNumber = Math.floor(Math.random() * 50) + 1;

    //se la lunghezza non è uguale inserisco numero random
    if (list1.length > list2.length) {
        list2.push(randomNumber);
    }   else {
        list1.push(randomNumber);
    }
}
console.table(list1);
console.table(list2);

    //stampo il numero di elementi presenti per lista
exsercise.innerHTML = "La lista 1 ha " + list1.length + " elementi" + "<hr>" + "La lista 2 ha  " + list2.length + " elementi";