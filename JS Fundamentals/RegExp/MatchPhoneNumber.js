function solve(text){

    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g
    let validName = []
    while((validNames = regex.exec(text)) !== null){
        validName.push(validNames[0])
    }
    console.log(validName.join(', '))
    // let trueee = text.match(regex)
    // console.log(trueee.join(', '))
}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")