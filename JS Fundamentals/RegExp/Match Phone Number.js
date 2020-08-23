function matchPhoneNumber(array){

    let pattern = /\+359([ -])2\1(\d{3})\1(\d{4})\b/g
    
    let myArr = [];

    for(let i = 0 ;i < array.length;i++){
        let currentElement = array[i].split(', ')
        let match = pattern.exec(currentElement)
        while(match !== null){
            myArr.push(match[0])
            match = pattern.exec(currentElement)
        }
    }
    console.log(myArr.join(', '))
    

    // let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g
    // let validName = []
    // while((validNames = regex.exec(array)) !== null){
    //     validName.push(validNames[0])
    // }
    // console.log(validName.join(', '))

    // let trueee = array.match(pattern)
    // console.log(trueee.join(', '))
}
matchPhoneNumber([
    '+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222, +359-2-222-2222'
  ])