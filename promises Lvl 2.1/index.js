const fs = require("fs");

function randomNumber0_10() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() *10) +1;

        if (randomNumber < 6) {
            reject(randomNumber);
        } else {
            resolve(randomNumber);
        }
    })
}

randomNumber0_10()
.then((ergebnis) => {
    console.log("Generierte Zufallszahl (resolved): ", ergebnis)
})
.catch((error) => {
    console.log("Generierte Zufallszahl (rejected): ", error)
})