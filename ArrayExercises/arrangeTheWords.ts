/*A sentence is defined as a string  of space-separated words thats staarts with a capital letter followed by lowercase letrters ands spaces, and ends with a period. Rearrange the words in a sentence while respectging the following conditions:
1.Each wortd is ordered by length, ascending.
2.Words of equal length must appear in the same order as in the original sentence.
3.The rearranged sentence must be formatted to satisfy the expression ^[A-Z][a-z]^\.$

Example: sentence = "The lines are printed in reverse order."
Output: "In the are lines order printed reverse."

*/

let input: String = "The lines are printed in reverse order.";
let transform = (input: String): String => {
    let splittedInput: String[] = input.split(" ");
    let sortedInput: String[] = splittedInput
        .sort((a, b) => a.length - b.length)
        .map((element) => element.toLowerCase().replace(".", ""));
    sortedInput[0] =
        sortedInput[0].charAt(0).toLocaleUpperCase() + sortedInput[0].slice(1);
    sortedInput[sortedInput.length - 1] =
        sortedInput[sortedInput.length - 1] + ".";
    let output: String = sortedInput.join(" ");
    return output;
};

transform(input);
