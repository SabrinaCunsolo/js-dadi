// Esercitazione 2: Gioco dei dadi
// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.


// Genero un numero casuale tra 1 e 6 "lancio1"
document.getElementById("lancio1").innerHTML =
Math.floor(Math.random() * 6) + 1;

// Genero un numero casuale tra 1 e 6 "lancio2"
document.getElementById("lancio2").innerHTML =
Math.floor(Math.random() * 6) + 1;
