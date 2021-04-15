/*Problema 4:
Dado un array de enteros, encontrar un par de elementos adyacentes tales que tengan el producto más grande*/
var arrays = new Array();
arrays = [3, 6, -2, -5, 7, 3];
var sum = 0;
var may = 0;
for (var i = 0; i < arrays.length; i++) {
    for (var j = i; j <= i; j++) {
        sum = arrays[i] * arrays[j + 1];
        //console.log(sum);
    }
    //console.log(sum);
    if (sum > may) {
        may = sum;
    }
}
console.log(may);
