/*Problema 2:
Dada una cadena mostrarla invertida*/
var cadena = 'this is a sample string';
var cadenarevertida = "";
for (var i = cadena.length - 1; i >= 0; i--) {
    cadenarevertida += cadena[i];
}
console.log(cadenarevertida);
