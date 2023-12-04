/*
In the santa workshopp a naughty elf has played in the manufacturing chain
adding or deleting steps in the process of creating gifts.
You have the original sequence of steps and the modified sequence.

This modified sequence can have one added step or one deleted step..

You need to fin the step that was added or deleted. So, write a function
that identifies this step. If there no diferences between the two sequences
you should return an empty string ''. But if there are differences you should
return the step that was added or deleted.
*/


function findNaughtyStep (original, modified) {
   for (let i = 0; i <= modified.length; i++) {
     if (modified[i] !== original[i]) {
       return original.length > modified.length ? original[i] : modified[i]
     }
   }
 
   return ''
 }