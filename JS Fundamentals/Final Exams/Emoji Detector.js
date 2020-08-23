function emojiDetector(input){

    let pattern = /(?<separator>:{2}|\*{2})(?<emojiWord>[A-Z][a-z]{2,})\1/g
    let digitPattern = /[\d]/g
    let words = []
    let digits = []
    let signOfEmoji = []

    for(let text of input){
        let match = pattern.exec(text)
        let digitMatch = digitPattern.exec(text)

        while(match){
            let word = match.groups.emojiWord
            signOfEmoji.push(match[0])
            words.push(word)
            match = pattern.exec(text)
        }

        while(digitMatch){
            digits.push(digitMatch[0])
            digitMatch = digitPattern.exec(text)
        }

    }
    
    let thereshold = 1;

    for(let numbers of digits){
        numbers = Number(numbers)
        thereshold *= numbers
    }
    console.log(`Cool threshold: ${thereshold}`)
    console.log(`${words.length} emojis found in the text. The cool ones are:`)
    
    for(let i = 0; i < words.length;i++){
        let currentEmoji = words[i].split('')
        let sumOfAsciiDigits = 0;
        for(let chars of currentEmoji){
            let asciiChars = chars.charCodeAt(0)
            sumOfAsciiDigits += asciiChars
        }
        if(sumOfAsciiDigits > thereshold){
            console.log(signOfEmoji[i])
        }
    }
}
emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])



// function emojiDetector(array){

//     let wordPattern = /(\:{2}|\*{2})[A-Z][a-z]{2,}\1/g
//     let digitsPattern = /[\d]/g
//     let digits = '';
//     let words = ''


//     for(let elements of array){
//         words += elements.match(wordPattern)
//         digits += elements.match(digitsPattern)
//     }

//     digits = digits.split(',')
//     words = words.split(',')
    
//     let sum = 1;
//     for(let i = 0; i < digits.length;i++){
//         let currentDigit = Number(digits[i])
//         sum *= currentDigit
//     }
//     console.log(`Cool threshold: ${sum}`)
//     let realWords = '';
//     let patternForWords = /[A-Z][a-z]+/g

//     for(let i = 0; i < words.length;i++){
//         let currentWord = words[i]
//         if(i === words.length - 1){
//             realWords += currentWord.match(patternForWords)
//         }else{
//             realWords += currentWord.match(patternForWords) + ' '
//         }
//     }
//     realWords = realWords.split(' ')
//     let countOfEmojies = realWords.length;
//     if(countOfEmojies > 0){
//         console.log(`${countOfEmojies} emojis found in the text. The cool ones are:`)
//     for(let i = 0 ; i < realWords.length;i++){
//         let currentChar = realWords[i]
//         let splitted = currentChar.split('')
//         let sumOfChars = 0;
//         for(let elements of splitted){
//             let numberOfAscii = elements.charCodeAt(0)
//             sumOfChars += numberOfAscii
//         }
        
//         if(sumOfChars > sum){
//             console.log(words[i])
//         }
//     }
// }

    
// }