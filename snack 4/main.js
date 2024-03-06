/* :barretta_cioccolato: SNACK 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Confermate lettura come al solito e buon divertimento :baby-yoda: :barretta_cioccolato:
:baby-yoda:
6 */

const persone = [
    { nome: 'marco', cognome: 'rossi', età: '12', },
    { nome: 'luca', cognome: 'bianchi', età: '46', },
    { nome: 'luigi', cognome: 'negri', età: '23', },
    { nome: 'mario', cognome: 'fumagalli', età: '78', },
    { nome: 'mirko', cognome: 'pallo', età: '54', },
    { nome: 'antonio', cognome: 'ramses', età: '34', },
    { nome: 'asdrubale', cognome: 'esposito', età: '17', },
]

//PRIMO RISULTATO
 const personeMaggiorenni = persone.filter(persona => persona.età >= 18);

const personeGuidanti = personeMaggiorenni.map(persona => {
    
    persona.guidante = 'si';
    
    return persona;
}); 


//metodo figo ma non ricorderò mai il "...persona"
//const personeGuidanti = persone.filter(persona => persona.età >= 18).map(persona => ({ ...persona, guidante: 'si',}))
console.log(personeGuidanti);


