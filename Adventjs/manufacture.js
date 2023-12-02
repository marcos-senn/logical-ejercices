/*
In the santa's factory, the elfs have a list of gifts that they wish to manufacture but they have a limited amount of materials.
The gifts are string and the materials are characters.
You have to return a list of gifts that can be manufactured with the materials.
A gift can be manufactured if it contains all the characters of the material.
For example:
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa
manufacture(gifts, materials)
-> ['tren', 'oso']

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'
manufacture(gifts, materials)
-> ['puzzle']

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials)
-> []
*/

function manufacture(gifts, materials) {
   let output = []
  for(let i = 0; i<gifts.length;i++){
   let flag = true;
   for(let j=0;j<gifts[i].length;j++){
     if(materials.includes(gifts[i][j])){
       if(j == gifts[i].length-1 && flag){
         output.push(gifts[i])
       }
      continue;
     }
     else{
       flag=false
       break}
   }
  }
     return output
  }

  //console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa'))

  //OTHER SOLUTION CAN BE:

  function manufacture(gifts, materials) {
   return gifts.filter(gift => {
       for (let char of gift) {
           if (!materials.includes(char)) {
               return false;
           }
       }
       return true;
   });
}
