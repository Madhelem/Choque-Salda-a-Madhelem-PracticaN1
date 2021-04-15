/*Problema 2:
Dada una cadena mostrarla invertida*/

let cadena:string = 'this is a sample string';
let cadenarevertida:string = "";
   
for(let i = cadena.length-1; i>=0; i--)
{
  cadenarevertida += cadena[i];
}
console.log(cadenarevertida);