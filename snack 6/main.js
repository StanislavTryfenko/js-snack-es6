/* *SNACK 6*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
e stampiamo tutto in console. 
*BONUS*
Stampare in pagina oltre che in console!*/


//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadreCalcistiche = [
    {nome: '0', goal: 0, falliPresi: 0,},
    {nome: '1', goal: 0, falliPresi: 0,},
    {nome: '2', goal: 0, falliPresi: 0,},
    {nome: '3', goal: 0, falliPresi: 0,},
    {nome: '4', goal: 0, falliPresi: 0,},
    {nome: '5', goal: 0, falliPresi: 0,},
    {nome: '6', goal: 0, falliPresi: 0,},
    {nome: '7', goal: 0, falliPresi: 0,},
    {nome: '8', goal: 0, falliPresi: 0,},
    {nome: '9', goal: 0, falliPresi: 0,},

]

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// dopo qualche tentativo e ricerca solo per rendere il codice assolutamente illeggibile
squadreCalcistiche.forEach(squadra => (squadra.goal = Math.ceil(Math.random() * 10), squadra.falliPresi = Math.ceil(Math.random() * 10)))

// VERSIONE LEGGIBILE
//squadreCalcistiche.forEach(squadra => squadra.goal = Math.ceil(Math.random() * 10))
//squadreCalcistiche.forEach(squadra => squadra.falliPresi = Math.ceil(Math.random() * 10))

// check
console.log(squadreCalcistiche);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
const {nome, goal, falliPresi} = squadreCalcistiche;

const squadreCalcisticheSoloFalli = squadreCalcistiche.map(squadra => ({nome: squadra.nome, falliPresi: squadra.falliPresi }))

console.log(squadreCalcisticheSoloFalli);