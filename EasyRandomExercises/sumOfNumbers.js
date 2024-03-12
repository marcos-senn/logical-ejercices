//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//Your function should only return a number, not the explanation about how you get that number.
//Note: a and b are not ordered!

function getSum(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    let numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    let sum = numbers.reduce((acc, value) => (acc += value));

    return sum;
}

console.log(getSum(-5, 7)); //should return 13
console.log(getSum(2, 2)); //should return -1
console.log(getSum(0, 1)); //should return 1
console.log(getSum(0, -1)); //should return -1
console.log(getSum(7, -4)); //should return 18
