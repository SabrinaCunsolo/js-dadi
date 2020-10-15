// Esercitazione 2: Gioco dei dadi
// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

// Genero un numero casuale tra 1 e 6 "lancio1"
var lancio1 = Math.floor(Math.random() * 6) + 1;
console.log("giocata 1 = " + lancio1);

// Genero un numero casuale tra 1 e 6 "lancio2"
var lancio2 = Math.floor(Math.random() * 6) + 1;
console.log("giocata 2 = " + lancio2);

// Adesso devo comunicare chi ha vinto e chi non ha vinto e se pareggiano

if (lancio1 > lancio2) {
    console.log("Vince il primo giocatore");
} else if (lancio2 > lancio1) {
    console.log("Vince il secondo giocatore");
} else {
    console.log("Avete ottenuto un pareggio!");
}
