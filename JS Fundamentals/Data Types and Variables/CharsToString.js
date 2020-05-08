function charsToString(firstChar, secondChar, thirdChar){

    let char1 = firstChar.split(',')
    let char2 = secondChar.split(',')
    let char3 = thirdChar.split(',')
    let allChars = char1.join(',') + char2.join(',') + char3.join(',')
    console.log(allChars)
}
charsToString('1',
'5',
'p'
)