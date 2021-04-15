

/*Los StrawhatPirates llegaron a un hotel el cual tiene la peculiaridad de que tiene habitaciones con 0 costo, la razón es que están embrujadas, dado que los invitados son bastante supersticiosos se niegan a ocupar una de esas habitaciones o CUALQUIERA DE LAS HABITACIONES que se encuentren por debajo de ellas.
Ellos piden tu ayuda para determinar el costo total de las habitaciones que si pueden ocupar.
Example*/

let matrix:number[][] = 
[[0,1,1,2],
[0,5,0,0],
[2,0,3,3]
                        
    
];
let sum = 0;
let max=matrix.length;
for (var i = 0; i < matrix.length; i++)
{
   for (var y = 0; y <matrix[i].length; y++)
   {
            if(matrix[i][y] != 0){
                  
                  if (i!=matrix.length-1)
                  {
                        if(matrix[i+1][y] != 0){
                            sum = sum + matrix[i][y];
                        }
                  }
                  else 
                  {
                         sum = sum + matrix[i][y];
                  }
            }


   }  
}
console.log(sum);
