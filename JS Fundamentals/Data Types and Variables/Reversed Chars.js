function reversedChars(firsChar, secondChar, thirdChar){
    let charOne = firsChar.split(',')
    let charTwo = secondChar.split(',')
    let charThree = thirdChar.split(',')
    let allChars = `${thirdChar} ${secondChar} ${firsChar}`
    console.log(allChars)
}
reversedChars('1',
'L',
'&'
)