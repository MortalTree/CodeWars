/*
-----------------------------------------
My Attempt
-----------------------------------------
*/

function hilo (string) {   
    
    let arr = string.split(' ')    
    return Math.max(...arr) + ' ' + Math.min(...arr)

    /*
    I DID ALL THIS BECAUSE
    I forgot to use ... when I used min and max on the string array
    Conversion of each thing to a number is completely unneccessary
    */

    // let arr2 = []
    // for (let i = 0; i < arr.length; i++) {
    //     arr2.push(Number(arr[i]))
    // }
    // console.log(arr2);
    // return Math.max(...arr2) + ' ' + Math.min(...arr2)
}   

console.log(hilo('1 501 2 3 4 500'))
console.log(hilo("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))