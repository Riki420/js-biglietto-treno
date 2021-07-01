// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



var kmUser =  prompt('Quanti KM vorresti percorrere?');
var ageUser = prompt('Inserisci la tua età');
var kmPrice = '0.21'

console.log(kmUser);
console.log(ageUser);

console.log(kmUser * kmPrice);

if(ageUser < 18){
    
}