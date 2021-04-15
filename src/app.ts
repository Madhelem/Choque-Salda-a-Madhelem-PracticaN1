/*
Problema 9:
En el instituto de Sakurajima hay una cantidad de n de estudiantes para el primer curso de secundaria,
y solo hay dos ambientes en los cuales se los puede distribuir. Como en cualquier institución existen
estudiantes cuyos nombres tienen la misma inicial por lo que tienden a ser muy habladores entre ellos 
(porque tiene demasiado en común). La directora quiere minimizar lo más posible este tipo de comportamientos 
por lo que te pide realizar un programa que le permita determinar la CANTIDAD MINIMA DE PARES de estudiantes 
charladores que se puedan obtener distribuyéndolos en los dos ambientes. Es posible dejar un ambiente completamente
vacío.*/




let cat1:String[] = ["kambei","gorobei","shichiroji","kyuzo","heihachi","katsushiro","kikuchiyo"];

let b:String = cat1[0];
let z:string = b[0];
let cont=0;
let cad2:String[] = new Array;
for(let j= 0; j < cat1.length; j++)
{
   let w = cat1[j]; 
   let a=w.length;
   for(let k= 0; k < a; k++)
   {
         cad2.push(w[k]);
         break;
        
   }
}

let cad3:number[] = new Array;
let abc:number = 0;
let l:String = "a";
for(let i=0; i < cad2.length; i++){
      cont=0;
      
      let u:String= compro(cad2[i],i);
      if(u=="si")
      {
           for(let j=i; j < cad2.length; j++)
            {
            if(cad2[i] == cad2[j]){
               cont= cont + 1;
            }
            
         
            }
            l=cad2[i];
            cad3.push(cont); 
      }
}



function compro(leg:String,nmr:number):String {
  for (let i = 0; i <nmr; i++) {
    if (leg==cad2[i]) {
      return "no";
    }

  }
  return "si";
  
}







let total=0;
for(let i=0; i < cad3.length; i++)
{     
      let p:number= (cad3[i]);
      let contar=0;
      if(p%2 == 0)
      {
             
             
            for(let h=2;h<=p;h++)
            {     
                  if(p==h)
                  {
                        contar=contar+1;
                        
                        
                  }
                  else
                  {
                        contar=contar+1;
                        h=h+1
                  }

            }
           
            


      }
      else{
            if(p>1)
            {
                         for(let h=2;h<=p;h++)
                        {     
                               if(p==h)
                              {
                                     contar=contar+1;
                        
                        
                              }
                              else
                              {
                                    contar=contar+1;
                                    h=h+1
                              }

                        }          
            }
      }
      total=total+contar;
      
     

}
 console.log(total);




//juan,jorge,oscar,pepe,david   ------>  1
//juan,jorge,oscar,jerry     --------->  1

      
         
