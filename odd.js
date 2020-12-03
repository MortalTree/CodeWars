function findOdd(A) {
    A.sort()
    let cnt = 0
    let prev = 'X_X'

    A.forEach(function(element) {
        if (A[element] === prev) {
            cnt++
        } else {
            if (cnt % 2 > 0) {
                return prev
            } else {
                cnt = 0
                prev = A[element]
            }
        }
    })
    return 0
}

console.log(findOdd([1, 3, 5, 7, 9, 1, 4, 7, 4, 5, 5, 3, 9]));