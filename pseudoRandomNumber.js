
// Create a pseudo-random number generator between 0 and 100.
// You cannot use any "random" (or similar) function of the selected programming language.

// A pseudorandom variable is one that has been created through a deterministic procedure (typically a computer program or subroutine) that takes truly random digits as input. The resulting pseudorandom sequence is often longer than the original random sequence but is less random, meaning it has less entropy.

const date = Date.now()

const pseudoRandomNumber = (date) => {
    const random = date.toString().split('').reverse().join('').slice(0,3)
    return Math.round(Number((random)/10))
}


console.log(pseudoRandomNumber(date))