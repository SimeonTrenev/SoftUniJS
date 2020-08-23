function mirrorWords(array){

    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g
    
    let matchPairs = ''

    for(let chars of array){
        matchPairs += chars.match(pattern)
        
    }
    matchPairs = matchPairs.split(',')
    
    if(matchPairs.length === 0 || matchPairs[0] === 'null'){
        console.log(`No word pairs found!`)
        console.log('No mirror words!')
        return;
    }else{
        console.log(`${matchPairs.length} word pairs found!`)
    }

    let wordPatter = /[A-Za-z]+/g
    let count = 0;
    let secondArray = []

    for(let char of matchPairs){
       let words = char.match(wordPatter)
       let firstWord = words[0]
       let secondWord = words[1]
       
       if(firstWord.split('').reverse().join('') === secondWord.split('').join('') && firstWord.split('').join('') === secondWord.split('').reverse().join('')){
        secondArray.push(firstWord,secondWord)
        count++;
       }
    }

        let mirroredWords = ''
    if(count > 0){
        console.log(`The mirror words are:`)
        for(let i = 0; i < secondArray.length;i+=2){
            if(i === secondArray.length - 2){
            mirroredWords += `${secondArray[i]} <=> ${secondArray[i+1]}`
            }else{
            mirroredWords += `${secondArray[i]} <=> ${secondArray[i+1]}, `
            }
        }
        console.log(mirroredWords)
    }else{
        console.log('No mirror words!')
    }
    


}
mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
  ])