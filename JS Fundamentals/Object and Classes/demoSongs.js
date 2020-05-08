function listen(arr){

    class Song{
        constructor(list,song,time){
            this.list = list
            this.song = song
            this.time = time
        }
    }

    let numberOfSongs = arr.shift();
    let mySongs = []
    let wantedList = arr.pop()

    for(let i = 0; i < numberOfSongs;i++){
        let songet = arr.shift()
        let [listed,name,times] = songet.split('_')
        let song = new Song(listed,name,times)
        mySongs.push(song)
        
    }
    for(let song of mySongs){
        if(song.list === wantedList){
            console.log(song.song)
        }else if(wantedList === 'all'){
            console.log(song.song)
        }
    }


}
listen([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    
    
    )