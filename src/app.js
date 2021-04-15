/*Problema 7:
Realice un programa en el cual se le proporcionara dos cadenas, y su trabajo consistirá en encontrar el número de caracteres similares que tiene entre ellos, incluyendo los repetidos.*/
var str1 = 'zzzz';
var str2 = 'zzzzzzz';
var z = new Map();
for (var i = 0; i < str1.length; i++) {
    if (!z.get(str1[i])) {
        z.set(str1[i], 1);
    }
    else {
        z.set(str1[i], z.get(str1[i]) + 1);
    }
    //console.log(z.get(str1[i]))
}
var cnt = 0;
for (var i = 0; i < str2.length; i++) {
    if (z.get(str2[i]) && z.get(str2[i]) > 0) {
        z.set(str2[i], z.get(str2[i]) - 1);
        cnt = cnt + 1;
    }
}
console.log(cnt);
