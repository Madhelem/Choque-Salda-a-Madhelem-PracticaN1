/*Problema 8:
Dado un numero N encontrar los N primeros números primos*/
let c:number = 9;

let aux:number = 2;
let cont:number=0;

 while(aux>=2)
 {
       let numero=primo(aux);
      if(numero)
      {
            console.log(aux);
            cont=cont+1;


      }
      if(cont==c)
      {
        break;
      }
      aux=aux+1;
 }


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



