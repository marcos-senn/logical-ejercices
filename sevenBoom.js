// Seven Boom! Problem
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
// Otherwise, return "there is no 7 in the array".


let array1 = [1, 2, 3, 4,45,1,2,44,6537]
// let array2 = [1, 2, 3, 4, 5, 6, 7]
// let array3 = [8, 6, 33, 100]
// let array4 = [2, 55, 60, 97, 86]
let string1 = `Boom!`
let string2 = "There's no 7 in the array!"

const validator = (array) =>{
  for(let i = 0; i<array.length; i++){
    let num = array[i]
  for(let j=0; j<num.toString().length;j++){
    //console.log(num.toString()[j])
    if(num.toString()[j]==='7'){
       return string1
    }
  }
}
  return string2
}

validator(array1)

//----------------WITH ARRAY METHODS------------------//
//also you can use array methods like .includes(), .join() and .split() to check if the array includes 7 or not
//but i wanted to do it with for loops for practice only

//there is the way with array methods

const validator2 = (array) =>{
    let checkSeven = array.join("").split("").includes("7")
    //console.log(checkSeven)
    if(checkSeven){
      return string1}
    else return string2
}

console.log(validator2(array1))