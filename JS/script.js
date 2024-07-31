//Raccolta de dati della pag
const messagePrice = document.getElementById('info')

/*--------------------------
       RACCOLTA DATI
--------------------------*/
//Chiedi all'utente quanti km vuole percorrere
const totalKm = prompt('Quanti KM vuoi percorrere?', 100);
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

const ticketPrice = totalKm * priceKm;

let message = "Il prezzo del tuo biglietto è € "+ ticketPrice;

if (age < 18) {
  const minAge = ticketPrice - (ticketPrice * 0.2);
  message = "Il prezzo del tuo biglietto è € " + minAge;
} else if (age > 65){
  const maxAge = ticketPrice - (ticketPrice * 0.4);
  message = "Il prezzo del tuo biglietto è € " + maxAge;
} 

console.log (message)

/*---------------------------
      FASI DI OUTPUT
----------------------------*/
//Mostro in pagina
messagePrice.innerHTML = (message)








