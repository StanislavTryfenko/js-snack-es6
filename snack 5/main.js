/* *SNACK 5*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal 
*BONUS*
Stampare in pagina oltre che in console!*/


const bikes = [
    {name: '1', weight: 49,},
    {name: '2', weight: 32,},
    {name: '3', weight: 54,},
    {name: '4', weight: 65,},
    {name: '5', weight: 23,},
]
//testing
//console.log( Math.min(...bikes.map(bike => bike.weight)));

// cerco la bici col peso minore
const lightBike = bikes.filter(bike => bike.weight === Math.min(...bikes.map(bike => bike.weight)));

//verifivo in console
//console.log(lightBike);

// risultato
console.log(`La bici più leggera è la ${lightBike[0].name}`)

//BONUS stampalo in pagina (modalità le righe di codice le pago in oro)
document.querySelector('body').innerHTML = `La bici più leggera è la ${lightBike[0].name}`