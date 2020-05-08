function reverseAnStrings(elements){
    let myString = []
    for(let i = 0; i < elements.length;i++){
        myString.push(elements[i])
    }
    let result = ''
    for(let i = myString.length - 1;i >= 0; i--){
        result += myString[i] + ' '
    }
    console.log(result)
}
reverseAnStrings(['a', 'b', 'c', 'd', 'e'])