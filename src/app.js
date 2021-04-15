/*Problema 1:
Dado un numero n determinar si es primo o no*/
//let n:number = prompt("Introdusca un valor a calcular");
var j = 21;
console.log(primo(j));
//console.log(primo(n));
function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    if (numero < 2) {
        return false;
    }
    else {
        return true;
    }
}
