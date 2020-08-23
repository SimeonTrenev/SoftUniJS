function reversedChars(firstChar, secondChar, thirdChar){

    let concated = firstChar + ' ' + secondChar + ' ' + thirdChar
    let reversed = concated.split('').reverse().join('')
    console.log(reversed)

}
reversedChars('A',
'B',
'C'
)