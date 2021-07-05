 /*
 Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/



// INITIAL VARIABLES
var priceMessage = 'Il costo del biglietto è: ';
var discountMessage = 'Hai ricevuto uno sconto del: ';
var priceDisplay = document.getElementById('total');

// Collect info
var age = parseInt(prompt("Qual'è la tua età?"));
var kms = parseInt(prompt('Quanti KM vorresti percorrere?'));

console.log('age: ', age);
console.log('kms: ', kms);

// Validation
if (isNaN(age) || isNaN(kms) || age < 1 || kms < 1) {
  alert('Non hai inserito i dati correttamente');
} else {
  // Price calculation
  var price = kms * 0.21;
  

  // Discount logic
  var hasDiscount = false;

  if (age > 65) {
    price *= 0.6;
    discountMessage += '40%';
    hasDiscount = true;
  }

  if (age < 18) {
    price *= 0.8;
    discountMessage += '20%';
    hasDiscount = true;
  }

  if (hasDiscount) {
    var discountDisplay = document.getElementById('discount');
    discountDisplay.innerText = discountMessage;
  }

  // Print ticket price
  priceDisplay.innerHTML =
    priceMessage + '<strong>' + price.toFixed(2) + '</strong>';
}




// if(ageUser < 18){
//     parseInt(console.log('Sconto minorenni', kmUser * kmPrice / 100 * 20)).toFixed(2);
//     discountMessage = discountMessage + '20%';
//     parseInt(console.log(discountMessage)).toFixed(2);
// } else if (ageUser > 65){
//     parseInt(console.log('Sconto Over', kmUser * kmPrice / 100 * 40)).toFixed(2);
//     discountMessage = discountMessage + '40%';
//     parseInt(console.log(discountMessage)).toFixed(2);
// } else{
//     parseInt(console.log('Prezzo al dettaglio', kmUser * kmPrice)).toFixed(2);
// }

// priceDisplay.innerHTML = priceMessage + '<strong>' + kmPrice + '</strong>';

// }
