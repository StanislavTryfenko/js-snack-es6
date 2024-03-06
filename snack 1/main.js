/* snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, 
nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

 const automobili = [
{
    marca: '0',
    modello: 'q',
    alimentazione: 'benzina',
},
{
    marca: '1',
    modello: 'w',
    alimentazione: 'gpl',
},
{
    marca: '2',
    modello: 'e',
    alimentazione: 'metano',
},
{
    marca: '3',
    modello: 'r',
    alimentazione: 'benzina',
},
{
    marca: '4',
    modello: 't',
    alimentazione: 'elettrica',
},
{
    marca: '5',
    modello: 'y',
    alimentazione: 'metano',
},
{
    marca: '6',
    modello: 'u',
    alimentazione: 'elettrica',
},
{
    marca: '7',
    modello: 'i',
    alimentazione: 'diesel',
},
{
    marca: '8',
    modello: 'o',
    alimentazione: 'gpl',
},
{
    marca: '9',
    modello: 'p',
    alimentazione: 'diesel',
},
]


const benzina = automobili.filter((automobile) => automobile.alimentazione === 'benzina');

const diesel = automobili.filter((automobile) => automobile.alimentazione === 'diesel');

const altro = automobili.filter((automobile) => automobile.alimentazione !== 'diesel' && automobile.alimentazione !== 'benzina');

console.log(benzina);
console.log(diesel);
console.log(altro); 