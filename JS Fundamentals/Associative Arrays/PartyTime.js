function party(input){

function createList(guestsArr){
    let guests = {
        vip: [],
        regular: []
    }

    guestsArr.forEach(element => {
        if(isNaN(Number(element[0]))){
            guests.regular.push(element)
        }else{
            guests.vip.push(element)
        }
    });

    return guests
}

function removeGuests(array,guestObj){
    array.forEach(guest=> {
        if(guestObj.vip.includes(guest)){
            let index = guestObj.vip.indexOf(guest);
            guestObj.vip.splice(index,1)
        }
        if(guestObj.regular.includes(guest)){
            let index = guestObj.regular.indexOf(guest);
            guestObj.regular.splice(index,1)
        }
    })
    
    return guestObj
}

function createOutputArray(guests){
    // let output = [];

    // guests.vip.forEach((vip)=>output.push(vip));
    // guests.regular.forEach((regular)=>output.push(regular));


    // return output;
    let output = guests.vip.concat(guests.regular)
    return output.length + '\n' + output.join('\n')
}

let partyIndex = input.indexOf('PARTY')
let guestList = createList(input.slice(0,partyIndex));
let removeList = removeGuests(input.slice(partyIndex + 1),guestList)
return createOutputArray(removeList)

}
console.log(party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
))