const fs = require("fs");

function multipliziereDenParameter(zahl) {
    return new Promise((resolve, reject) => {
        if (isNaN(zahl)){
            reject("Du bist zu dumm, um eine Zahl einzugeben")
        } else {
            const multipliziereZahl = zahl * zahl;
            resolve(multipliziereZahl)
        }
    })
}
function callMultipliziereDenParameter(weitereZahlAMK) {
    multipliziereDenParameter(weitereZahlAMK)
    .then((ergebnis) => {
        console.log("Erster Aufruf mit then: ", ergebnis)
        return multipliziereDenParameter(ergebnis)
    })
    .then((ergebnis) => {
        console.log("Zweiter Aufruf mit then: ", ergebnis)
        return multipliziereDenParameter(ergebnis)
    })
    .then((ergebnis) => {
        console.log("Dritter Aufruf mit then: ", ergebnis)
        return multipliziereDenParameter(ergebnis)
    })
}

callMultipliziereDenParameter(2)