function houseParty(array){

    let guestList = [];
    for(let i = 0; i < array.length;i++){
        let comand = array[i].split(' ')
        let name = comand[0]
        if(comand.length === 3){
        if(!guestList.includes(name)){
            guestList.push(name)
        }else{
            console.log(`${name} is already in the list!`)
        }
    }else if(comand.length === 4){
        if(guestList.includes(name)){
            let currentIndex = guestList.indexOf(name)
            guestList.splice(currentIndex,1)
        }else{
            console.log(`${name} is not in the list!`)
        }
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