function partyTime(array){

    let regularGuests = [];
    let vipGuests = [];
    let countForGuest = 0;

    for(let i = 0; i < array.length;i++){
        let splitted = array[i].split('')
        let command = array[i]
        let partyIndex = array.indexOf('PARTY')
        if(command !== 'PARTY' && i < partyIndex){
            if(!isNaN(splitted[0])){
                vipGuests.push(command)
            }else{
                regularGuests.push(command)
            }
            countForGuest++;
        }else if(i > partyIndex){
            if(!isNaN(splitted[0])){
                if(vipGuests.includes(command)){
                    let indexOfCommand = vipGuests.indexOf(command)
                    vipGuests.splice(indexOfCommand,1)
                    countForGuest--;
                }
            }else{
                if(regularGuests.includes(command)){
                    let indexOfCommand = regularGuests.indexOf(command)
                    regularGuests.splice(indexOfCommand,1)
                    countForGuest--;
                }
            }
        }
    }
    let output = vipGuests.concat(regularGuests)
    console.log(countForGuest)
    console.log(output.join('\n'))

}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)