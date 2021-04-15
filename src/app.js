/*Problema 8:
Dado un numero N encontrar los N primeros números primos*/
var c = 9;
var aux = 2;
var cont = 0;
while (aux >= 2) {
    var numero = primo(aux);
    if (numero) {
        console.log(aux);
        cont = cont + 1;
    }
    if (cont == c) {
        break;
    }
    aux = aux + 1;
}
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
