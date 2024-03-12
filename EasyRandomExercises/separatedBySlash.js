// this function takes an array of numbers in string format, this numbers are separated by a slash, so, you neet to procees tht string in order to obtain 
// those number as individual numeric values in an array
let input = "1,2,3/3,2,1"

function separateBySlash(input) {
    let output = input.split("").filter((element)=>element !== "/" && element !== ",").map((element)=> Number(element))
    return output
}

console.log(separateBySlash(input))