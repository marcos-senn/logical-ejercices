/*A sentence is defined as a string  of space-separated words thats staarts with a capital letter followed by lowercase letrters ands spaces, and ends with a period. Rearrange the words in a sentence while respectging the following conditions:
1.Each wortd is ordered by length, ascending.
2.Words of equal length must appear in the same order as in the original sentence.
3.The rearranged sentence must be formatted to satisfy the expression ^[A-Z][a-z]^\.$

Example: sentence = "The lines are printed in reverse order."
Output: "In the are lines order printed reverse."

*/

//We are going to simulate the input
let input: String = "The lines are printed in reverse order.";
let transform = (input: String): String => {
    let splittedInput: String[] = input.split(" "); //We transform the input into an array
    let sortedInput: String[] = splittedInput //We sort the array by length
        .sort((a, b) => a.length - b.length) 
        .map((element) => element.toLowerCase().replace(".", "")); //We transform the array to lowercase and remove the period
    sortedInput[0] =
        sortedInput[0].charAt(0).toLocaleUpperCase() + sortedInput[0].slice(1); //We capitalize the first letter of the first word
    sortedInput[sortedInput.length - 1] =
        sortedInput[sortedInput.length - 1] + "."; //We add the period to the last word
    let output: String = sortedInput.join(" "); //We join the array into a string
    return output; //return the final string
};

transform(input);
