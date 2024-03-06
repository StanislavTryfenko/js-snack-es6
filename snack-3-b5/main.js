/* snack3-b5
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

function inverter(string){
    return string.split("").reverse().join("");
}