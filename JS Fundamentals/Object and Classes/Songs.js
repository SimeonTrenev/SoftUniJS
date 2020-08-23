function songClasses(array){

    let songArray = [];
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time
        }
       
    }
    let numberOfSongs = array.shift();
    let wishList = array.pop();

    for(let i = 0; i < numberOfSongs;i++){
        let [typeList,name,time] = array[i].split('_')
       let song = new Song(typeList,name,time)
       songArray.push(song)
    }
    
    if(wishList === 'all'){
        songArray.forEach((i) => console.log(i.name))
    }else{
        let filtered = songArray.filter((i) => i.typeList === wishList)
        filtered.forEach((i) => console.log(i.name))
    }
    

}
songClasses([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )