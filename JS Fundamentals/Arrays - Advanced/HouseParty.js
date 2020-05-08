function houseParty(array = []){

    let guestList = []
    

    for(let i = 0; i < array.length;i++){
        let line = array[i].split(' ')
        let name = line[0]
        let comand = line[2]
        if(comand !== 'not'){
            if(guestList.includes(name)){
                console.log(`${name} is already in the list!`);
                continue
            }
            guestList.push(name)
        }else{
            if(!guestList.includes(name)){
                console.log(`${name} is not in the list!`)
                continue
            }
            guestList = guestList.filter(x => x != name);
        }

    }
    console.log(guestList.join('\n'))

}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)