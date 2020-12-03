function countBits(n) {
    // Convert int to binary
    const binVal = n.toString(2)

    // remove zeroes from the array
    const gapArray = binVal.split("0");
    
    // reducer function
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;    
    // return gapArray.reduce(reducer).toString().length

    // more readable to me now than an arrow function
    // const ones = gapArray.reduce(function (a, b) {
    //     return a + b
    // })
    // return ones.toString().length

    // could use join instead of the reduce function
    return gapArray.join('').length
}

console.log(countBits(1234))

// NEXT LEVEL ONE
// countBits2 = n => n.toString(2).split('0').join('').length;
// console.log(countBits2(1234))