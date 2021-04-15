/*
Problema 9:
En el instituto de Sakurajima hay una cantidad de n de estudiantes para el primer curso de secundaria,
y solo hay dos ambientes en los cuales se los puede distribuir. Como en cualquier institución existen
estudiantes cuyos nombres tienen la misma inicial por lo que tienden a ser muy habladores entre ellos
(porque tiene demasiado en común). La directora quiere minimizar lo más posible este tipo de comportamientos
por lo que te pide realizar un programa que le permita determinar la CANTIDAD MINIMA DE PARES de estudiantes
charladores que se puedan obtener distribuyéndolos en los dos ambientes. Es posible dejar un ambiente completamente
vacío.*/
var cat1 = ["kambei", "gorobei", "shichiroji", "kyuzo", "heihachi", "katsushiro", "kikuchiyo"];
var b = cat1[0];
var z = b[0];
var cont = 0;
var cad2 = new Array;
for (var j = 0; j < cat1.length; j++) {
    var w = cat1[j];
    var a = w.length;
    for (var k = 0; k < a; k++) {
        cad2.push(w[k]);
        break;
    }
}
var cad3 = new Array;
var abc = 0;
var l = "a";
for (var i = 0; i < cad2.length; i++) {
    cont = 0;
    var u = compro(cad2[i], i);
    if (u == "si") {
        for (var j = i; j < cad2.length; j++) {
            if (cad2[i] == cad2[j]) {
                cont = cont + 1;
            }
        }
        l = cad2[i];
        cad3.push(cont);
    }
}
function compro(leg, nmr) {
    for (var i = 0; i < nmr; i++) {
        if (leg == cad2[i]) {
            return "no";
        }
    }
    return "si";
}
var total = 0;
for (var i = 0; i < cad3.length; i++) {
    var p = (cad3[i]);
    var contar = 0;
    if (p % 2 == 0) {
        for (var h = 2; h <= p; h++) {
            if (p == h) {
                contar = contar + 1;
            }
            else {
                contar = contar + 1;
                h = h + 1;
            }
        }
    }
    else {
        if (p > 1) {
            for (var h = 2; h <= p; h++) {
                if (p == h) {
                    contar = contar + 1;
                }
                else {
                    contar = contar + 1;
                    h = h + 1;
                }
            }
        }
    }
    total = total + contar;
}
console.log(total);
//juan,jorge,oscar,pepe,david   ------>  1
//juan,jorge,oscar,jerry     --------->  1
