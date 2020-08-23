function repeatString(string, count){

    let stringet = '';
    for(let i = 0; i < count;i++){
        stringet += string
    }
    return stringet;

}
console.log(repeatString('abc', 3))
