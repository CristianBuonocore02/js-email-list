

//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.



// Steps:
// apri postman e crea una nuova collection black (vuota)
// nella collection crea una nuova request cliccando sui tre pallini affianco al nome
// copia il link del campo della request
// clicca save e send per inviare la chiamata http tramite postman

// Ora implementa la richiesta usando l'esempio nelle slide tramite javascript fetch

// Stampa il risultato della singola mail in console per confermare che la chiamata sia andata a buon fine e siano presenti i risultati
// Adesso PENSA: devo fare la stessa cosa per 10 volte :faccia_pensosa: che strumento mi permette di ripetere qualcosa usando un contatore?
// Aggiorna la DOM inserendo gli indirizzi generati in una lista


const ulEl = document.getElementById("listMail");
const botton = document.getElementById("generateBtn")

const mailRandom = "https://flynn.boolean.careers/exercises/api/random/mail";

botton.addEventListener("click", generaEmail)

function generaEmail() {
    // Puliamo la lista prima di generare nuove email
    ulEl.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        fetch(mailRandom)
            .then(response => response.json())
            .then(data => {
                const liEl = document.createElement("li");
                liEl.innerHTML = data.response;
                ulEl.appendChild(liEl);
            });
    }
}
