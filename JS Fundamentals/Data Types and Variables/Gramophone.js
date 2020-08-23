function gramophone(band, album, songName){

    let timeForSong = Number((album.length * band.length) * songName.length / 2)
    let fullRotation = 2.5;
    let numberOfRotations = Math.ceil(timeForSong / fullRotation)
    console.log(`The plate was rotated ${numberOfRotations} times.`)

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')