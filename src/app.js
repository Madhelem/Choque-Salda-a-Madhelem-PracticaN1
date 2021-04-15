/*Problema 10:
Lea la documentación sobre la estructura de una dirección IPv4.
Posteriormente realice un programa para determinar si una dirección determinada (dado como un string) cumple con todas las reglas de las direcciones IPv4.*/
//-----10------------
var browserType = '18.18.40.14';
var num = browserType.length;
var inicial = 0;
var punt = 0;
if (num <= 15 && num >= 7) {
    for (var i = 0; i <= num; i++) {
        var variable = browserType[i];
        var obj = ".";
        if (variable == obj) {
            punt = punt + 1;
            if (punt > 3) {
                console.log("tiene mas de tres puntos no es una direccion ip");
                break;
            }
            else {
                var final = i;
                var letra = browserType.substring(inicial, final);
                var numero = parseInt(letra);
                if (numero <= 255 && numero >= 0) {
                    inicial = final + 1;
                }
                else {
                    console.log(false);
                    break;
                }
            }
        }
        if (i == num) {
            var letra = browserType.substring(inicial, i);
            var numero = parseInt(letra);
            if (numero <= 255 && numero >= 0) {
                if (punt < 3) {
                    console.log(false);
                }
                else {
                    console.log(true);
                }
            }
            else {
                console.log(false);
            }
        }
    }
}
