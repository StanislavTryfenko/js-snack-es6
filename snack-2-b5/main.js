/* snack-2-b5
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

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
    {varietà: '8', peso: 143, lunghezza: 10,},
    {varietà: '9', peso: 235, lunghezza: 12,},
]
//creo array zucchine lunghe
const zucchineLunghe = zucchine.filter(zucchina => zucchina.lunghezza > 15);

// creo array zucchine corte
const zucchineCorte = zucchine.filter(zucchina => zucchina.lunghezza < 15);

//quelle di 15 cm non le mettiamo :P

console.log(zucchineLunghe, zucchineCorte);