const fs = require("fs");

function gibZahlZurück(zahl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(zahl)) {
                reject("Ungültige Eingabe: Bitte übergeb eine Zahl");
            } else {
                const verdoppelDieZahl = zahl * 2;
                resolve(verdoppelDieZahl);
            }
        }, 2000);
    })
}

gibZahlZurück(12)
.then((ergebnis) => {
    console.log("Das verdopplete Ergebnis ist: ", ergebnis)
})
.catch((error) => {
    console.error("Fehler: ", error)
})