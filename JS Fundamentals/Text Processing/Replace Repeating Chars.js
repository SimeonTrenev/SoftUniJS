function replaceRepeatingChars(string){

    let currentString = string.split('')
    let singleChars = ''
    for(let i = 0; i < currentString.length;i++){
        let currentChar = currentString[i]
        if(currentChar !== currentString[i + 1]){
            singleChars += currentChar
        }
    }
    console.log(singleChars)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')