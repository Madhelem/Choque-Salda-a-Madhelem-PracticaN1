/*Problema 1:
Dado un numero n determinar si es primo o no*/

//let n:number = prompt("Introdusca un valor a calcular");
let j: number = 21;
console.log(primo(j));
//console.log(primo(n));

function primo(numero:number):boolean {
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }

  }
  if(numero < 2){
      return false;
  }else{
    return true;
  }
  
}