/*Problema 5:
A Pieck le entregaron un montón de estatuas de diferentes tamaños, Pieck quiere ordenarlas de la más pequeña a las mas grande sin embargo también desea que cada estatua sea mas grande que la anterior solo por 1 de diferencia por lo que también ve pertinente adquirir nuevas estatuas. Ayúdala a determinar cuántas estatuas MAS debe adquirir para lograr su cometido.*/
let arrays:number[] = new Array;
let arrays1:number[] = new Array;
arrays1 = [];
arrays=[6, 2, 3, 8];
let men:number=arrays[0];
let may:number=arrays[0];
for(let i = 0;i < arrays.length;i++) { 
   if(arrays[i] < men){
      men = arrays[i];
   }else{
      if(arrays[i] > may){
         may = arrays[i];
      }
   }
}
while(men <= may){
      arrays1.push(men);
      men ++;
   }

let l1:number=arrays.length;
let l2:number=arrays1.length;

console.log(l2-l1);

