/*
In a north pole facrory, each toy have a unique ID. However, for a mistake in the production line, some of the IDS are duplicated.
Fint the first ID that is repeated. Where the second ocurrence has the lowest index.
In other word, if there are more than one ID that is repeated, return the one with the lowest index.
If there aren't repeated ID, return -1.

For example:
[2, 1, 3, 5, 3, 2] -> 3
[1, 2, 3, 4] -> -1
[5, 1, 5, 1] -> 5
*/

function findFirstRepeated(gifts) {
   let seenNumbers = new Set();
   for (let i = 0; i < gifts.length; i++) {
     let number = gifts[i];
     if (seenNumbers.has(number)) {
       return number; 
     }
     seenNumbers.add(number);
   }
   return -1; 
 }

 //console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))