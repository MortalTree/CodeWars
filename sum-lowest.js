function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function(a, b) {
        if (a < b) {
            return -1
        } else if (b < a) {
            return 1
        } else {
            return 0
        }
    })
    
    let int1 = numbers.shift()
    let int2 = numbers.shift()

    return int1 + int2
}

console.log(sumTwoSmallestNumbers([8, 12, 19, 5, 22]))