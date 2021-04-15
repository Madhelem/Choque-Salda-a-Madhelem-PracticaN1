/*Problema 4:
Dado un array de enteros, encontrar un par de elementos adyacentes tales que tengan el producto más grande*/
let arrays:number[] = new Array();

arrays=[3,6,-2,-5,7,3];
let sum=0;
let may=0;
for(let i = 0;i < arrays.length;i++) { 
   for(let j = i ; j<=i ;j++){
      sum=arrays[i]*arrays[j+1];
      //console.log(sum);
   }
   //console.log(sum);
   if(sum > may){
      may=sum;
   }
}
console.log(may) ;