// Importa il modulo Express per creare un server web.
import express from "express";

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Definisce la gestione della richiesta GET all'URL di root ('/').
app.get("/", (req, res) => {
  // Ottiene la data corrente.
  const today = new Date();


  // Ottiene il giorno della settimana (0 per Domenica, 1 per Lunedì, ..., 6 per Sabato).
  const day = today.getDay();

  // Inizializza delle variabili per contenere il tipo di giorno e il consiglio.
  let type = "a weekday";
  let adv = "it's time to work hard";

  // Se il giorno è Domenica (0) o Sabato (6), imposta le variabili in base al fine settimana.
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  // Renderizza il template "index.ejs" e passa i dati da visualizzare nella pagina.
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

/*
In sintesi, questo codice crea un server web utilizzando Express e 
definisce una rotta per gestire le richieste GET all'URL di root ('/'). 
Quando un cliente fa una richiesta GET a questa rotta, il server calcola il giorno della settimana e 
quindi visualizza una pagina HTML dinamicamente generata utilizzando il motore di visualizzazione EJS. 
La pagina mostrerà se oggi è un giorno feriale o il fine settimana e fornirà un consiglio in base a ciò.
*/