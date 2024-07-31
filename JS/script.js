//Raccolta de dati della pag
const messagePrice = document.getElementById('info')

/*--------------------------
       RACCOLTA DATI
--------------------------*/
//Chiedi all'utente quanti km vuole percorrere
const totalKm = prompt('Quanti KM vuoi percorrere?', 16);
console.log(totalKm);

//Chiedi all'utente la sua età
const age = parseInt(prompt('Quanti anni hai?', 31));
console.log(age, typeof age);

/*---------------------------
      FASI DI ELABORAZIONE
----------------------------*/
//Preparo della variabile PREZZO per Km
const priceKm = 0.89;
console.log (priceKm, typeof priceKm);


//Prezzo del biglietto

const ticketPrice = parseFloat((totalKm * priceKm).toFixed(2));

let message = "Il prezzo del tuo biglietto è €"+ ticketPrice;

if (age < 18) {
  const minAge = parseFloat((ticketPrice - (ticketPrice * 0.2)).toFixed(2));
  message = "Il prezzo del tuo biglietto è €" + minAge;
} else if (age > 65){
  const maxAge = parseFloat((ticketPrice - (ticketPrice * 0.4)).toFixed(2));
  message = "Il prezzo del tuo biglietto è €" + maxAge;
} 

console.log (message)








