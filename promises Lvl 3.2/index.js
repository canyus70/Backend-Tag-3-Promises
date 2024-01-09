const fs = require("fs");

function setTimeoutZeit(zeitspanne_ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(zeitspanne_ms)) {
                reject("Ungültige Eingabe: Bitte übergebe eine Zahl");
            } else {
                const zufallsZahl = Math.floor(Math.random()* 1000) +1;
                resolve(zufallsZahl);
            }
        }, zeitspanne_ms);
    })
}

// Möglichkeit 1

const zeitspanne = [ 2000, 1000 , 3000]
const promises = zeitspanne.map((zeit) => setTimeoutZeit(zeit));
Promise.all(promises)
.then((ergebnis) => {
    console.log("Ergebnis: " , ergebnis)
})
.catch((err) => {
    console.error("Fehler ", err)
})

// Möglichkeit 2

const promise1 = 3000;
const promise2 = 2000;
const promise3 = 1000;

Promise.all([promise1, promise2, promise3])
.then((ergebnis) => {
    console.log(ergebnis)
})
.catch((err) => {
    console.error("Fehler ", err)
})

// Möglichkeit 3

const promise11 = setTimeoutZeit(2000); 
const promise22 = setTimeoutZeit(3000);
const promise33 = setTimeoutZeit(3000);

Promise.all([promise11, promise22, promise33])
.then((ergebnis) => {
    console.log("Ergebnis: " , ergebnis)
})
.catch((err) => {
    console.error("Fehler: ", err)
})
