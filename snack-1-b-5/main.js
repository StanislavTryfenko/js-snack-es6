/* Snack 1 blocco 5
nome-repo: la stessa di ieri
nome-cartella: snack-1-b5
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {varietà: '0', peso: 100, lunghezza: 20,},
    {varietà: '1', peso: 255, lunghezza: 14,},
    {varietà: '2', peso: 135, lunghezza: 25,},
    {varietà: '3', peso: 346, lunghezza: 43,},
    {varietà: '4', peso: 252, lunghezza: 23,},
    {varietà: '5', peso: 436, lunghezza: 46,},
    {varietà: '5', peso: 243, lunghezza: 23,},
    {varietà: '6', peso: 753, lunghezza: 23,},
    {varietà: '7', peso: 234, lunghezza: 25,},
    {varietà: '8', peso: 143, lunghezza: 25,},
    {varietà: '9', peso: 235, lunghezza: 25,},
]
// variabile su cui sovrascrivere i pesi parziali
let pesoParziale

// per ogni peso in zucchine sommiamo a peso parziale ogni peso zucchina
const pesoZucchine = zucchine.forEach(zucchina => pesoParziale += zucchina.peso);

console.log(pesoZucchine);