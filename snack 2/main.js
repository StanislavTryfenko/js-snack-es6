
/* snack 2
crea un array
ordina il caps delle parole */

const randomCaps = ['Pippo', 'PLUTO', 'PaPeRiNo']

const orderCaps = randomCaps.map(string => string.charAt(0).toUpperCase() + string.toLowerCase().slice(1))


/* FORMA LUNGA
const orderCaps = randomCaps.map(ordering)

function ordering(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1)
} */

console.log(randomCaps);
console.log(orderCaps);