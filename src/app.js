/*Problema 3:
Dada una cadena comprobar si es palíndromo*/
var palabra = 'this is a sample string';
console.log(esPalindromo(palabra));
function esPalindromo(palabra) {
    palabra = palabra.toLowerCase();
    var j = palabra.length - 1;
    for (var i = 0, j_1 = palabra.length - 1; i <= j_1; i++, j_1--) {
        if (palabra.charAt(i) != palabra.charAt(j_1)) {
            return false;
        }
    }
    return true;
}
