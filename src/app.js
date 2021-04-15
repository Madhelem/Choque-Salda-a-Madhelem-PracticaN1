/*Problema 5:
A Pieck le entregaron un montón de estatuas de diferentes tamaños, Pieck quiere ordenarlas de la más pequeña a las mas grande sin embargo también desea que cada estatua sea mas grande que la anterior solo por 1 de diferencia por lo que también ve pertinente adquirir nuevas estatuas. Ayúdala a determinar cuántas estatuas MAS debe adquirir para lograr su cometido.*/
var arrays = new Array;
var arrays1 = new Array;
arrays1 = [];
arrays = [6, 2, 3, 8];
var men = arrays[0];
var may = arrays[0];
for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] < men) {
        men = arrays[i];
    }
    else {
        if (arrays[i] > may) {
            may = arrays[i];
        }
    }
}
while (men <= may) {
    arrays1.push(men);
    men++;
}
var l1 = arrays.length;
var l2 = arrays1.length;
console.log(l2 - l1);
