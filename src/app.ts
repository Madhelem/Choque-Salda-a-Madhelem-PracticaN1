/*Problema 3:
Dada una cadena comprobar si es palíndromo*/
let palabra: string = 'this is a sample string';
console.log(esPalindromo(palabra));

function esPalindromo(palabra: string)
{
    palabra = palabra.toLowerCase();
    let j = palabra.length -1;
    for (let i = 0,j = palabra.length -1; i <= j; i++, j--)
    {
        if(palabra.charAt(i) != palabra.charAt(j))
        {
          return false;
        }
    }
    return true;
}
