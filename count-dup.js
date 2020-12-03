/* 
-------------------------------------------------
GOD LEVEL
-------------------------------------------------
*/ 
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
    // return text.toLowerCase().split('')
        // creates an array of the string
    // return text.toLowerCase().split('').sort()
        // sorts the array
    // return text.toLowerCase().split('').sort().join('')
        // converts it back to a string
    // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g)
        // ok they lost me here                              _      _
            // but it returns an array of duplicated letters  \_D:_/   - god level indeed
    // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
console.log(duplicateCount('Indivisibilities'))


/*
-------------------------------------------------
REALLY COOL ONE
-------------------------------------------------
*/
function duppyCounty(text){
    var lower = text.toLowerCase();
    var count = 0;
    var used = [];
    
    // forEach in the array resulting from the split
    lower.split('').forEach(function(letter) {
        // this is how you check if something is in an array
        
        // BREAKDOWN OF IF STATEMENT BELOW
        // console.log(!used.includes(letter))        
            // check if letter is in the 'used' array
            
        // console.log(lower.split(letter).length - 1)
            //  length of the array -1, split on the string, must be > 1 to increment the counter
            // [ '', 'nd', 'v', 's', 'b', 'l', 't', 'es' ]
            // [ 'i', 'divisibilities' ]
            // [ 'in', 'ivisibilities' ]
            // [ '', 'nd', 'v', 's', 'b', 'l', 't', 'es' ]
            // [ 'indi', 'isibilities' ]
            // [ '', 'nd', 'v', 's', 'b', 'l', 't', 'es' ]
            // [ 'indivi', 'ibilitie', '' ]
            // [ '', 'nd', 'v', 's', 'b', 'l', 't', 'es' ]
            // [ 'indivisi', 'ilities' ]
            // [ '', 'nd', 'v', 's', 'b', 'l', 't', 'es' ]
            // [ 'indivisibi', 'ities' ]
            // [ '', 'nd', 'v', 's', 'b', 'l', 't', 'es' ]
            // [ 'indivisibili', 'ies' ]
            // [ '', 'nd', 'v', 's', 'b', 'l', 't', 'es' ]
            // [ 'indivisibiliti', 's' ]
            // [ 'indivi', 'ibilitie', '' ]

        if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
            count++;
            used.push(letter);
        }
    });
    
    return count;
}

  console.log(duppyCounty('Indivisibilities'))
/*
-------------------------------------------------
my attempt (after Googling)
-------------------------------------------------
*/

function getFrequency(string) {
    let freq = {};
    let dupCnt = 0

    // build an object of each character
    for (let i=0; i<string.length;i++) {
        let character = string.charAt(i).toLowerCase();
        // console.log(character);
        // if exists in object freq, increment else add to object and add 1
        // if you add counter here, it will increment regardless of distinction
        if (freq[character]) {
            freq[character]++;            
        } else {            
            freq[character] = 1;
        }
    }    
    
    // find any object with property > 1, increment counter
    for (const property in freq) {
        // console.log(`${property}: ${freq[property]}`);

        if (freq[property] > 1) {            
            dupCnt++
        }
    }

    return dupCnt
};

console.log(getFrequency('Indivisibilities'))