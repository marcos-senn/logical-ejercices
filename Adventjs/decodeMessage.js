/*
In the santa workshop some of the christmas letters has been wrote in a strange way. The leter inside the parenthesis are reversed! Help santa to decode the message.
Write a functiion that will recibe a string and that will reverse the words inside the parenthesis. The final string should not contain any parenthesis.
The initial string may contain nested parenthesis, so you need to revert the message in the correct order.
Example:
'hola (odnum)' must return 'hola mundo'
'(olleh) (dlrow)!' must return 'hello world!'
'sa(u(cla)atn)s' must return 'santaclaus'

so, the steps in the final case must be:
1. Reverse the nested parenthesis -> 'sa(ualcatn)s'
2. Reverse the only parenthesis left -> 'santaclaus'

notes:
- The initial strings allways will have correct pair of parenthesis, you dont need validate them.
-The final outpu will not contain any parenthesis.
-The max level of nested parenthesis is 2.
*/

function decode(message) {
    let result = ""; // Result will be the output string
    let stack = []; //Stack will be used to store temporarily the substrings inside the parenthesis

    for (let char of message) {
        if (char === "(") {
            stack.push(result);
            result = "";
        } else if (char === ")") {
            let reversed = result.split("").reverse().join("");
            result = stack.pop() + reversed;
        } else {
            result += char;
        }
    }

    return result;
}

console.log(decode("sa(u(cla)atn)s"));
