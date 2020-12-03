function createPhoneNumber(numbers){
    let output = '('
    
    for (let cnt = 0; cnt < numbers.length; cnt++) {
        
        output = output + numbers[cnt]
        if (cnt === 2) {
            output = output + ') '
        } else if (cnt === 5) {
            output = output + '-'
        }
    }
    return output
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))