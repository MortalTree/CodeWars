function songDecoder(song){
    // /g switch indicates "global" as in, replace all the matches
    let newArr = song.replace(/WUB/g, ' ').split(' ')
    
    let songName = ''

    for (i=0; i<newArr.length; i++) {
        // console.log(newArr[i]);

        if (newArr[i].trim() != '') {
            songName = songName + newArr[i] + ' '
        }
    }
    return songName.trim()
}

// console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'))

// =============================================================================
// GOD LEVEL
function songDecoder1(song){
    return song.replace(/(WUB)+/g," ").trim()
}
console.log(songDecoder1('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'))