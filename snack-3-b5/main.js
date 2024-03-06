/* snack3-b5
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

function reverseString(string){
    return string.split("").reverse().join("");
}

//testing
console.log(reverseString('ciao'));