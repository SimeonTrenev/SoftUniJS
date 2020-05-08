function gramaphone(band, album, songName){

    let plateRound = 2.5;
    let time = band.length * album.length * songName.length/2
    
    let roundTime = 1;
    while(time > plateRound){
        roundTime++;
        plateRound+=2.5
    }
    roundTime = parseInt(roundTime);
    console.log(`The plate was rotated ${roundTime} times.`)
}
gramaphone('Black Sabbath', 'Paranoid', 'War Pigs')