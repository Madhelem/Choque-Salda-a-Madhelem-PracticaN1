/*Problema 7:
Realice un programa en el cual se le proporcionara dos cadenas, y su trabajo consistirá en encontrar el número de caracteres similares que tiene entre ellos, incluyendo los repetidos.*/
let str1 = 'zzzz'
let str2 = 'zzzzzzz'
let z = new Map()

for(let i=0; i < str1.length;i++){
   if(!z.get(str1[i])){
      z.set(str1[i], 1)
   }else{
      z.set(str1[i], z.get(str1[i])+1)
   }
   //console.log(z.get(str1[i]))
}

let cnt = 0;

for(let i=0; i < str2.length;i++){
   if(z.get(str2[i]) && z.get(str2[i]) > 0){
      z.set(str2[i], z.get(str2[i])-1)
      cnt = cnt +1;
   }
}
console.log(cnt);



