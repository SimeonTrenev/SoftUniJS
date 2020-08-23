function revealWords(words,text){

    
    let splitedWords = words.split(', ')

    splitedWords.forEach(word => {
        let asteriks = '*'.repeat(word.length)

        text = text.replace(asteriks,word)
        return text;
    })
    console.log(text)
    
    // for(let i = 0; i < splitedWords.length;i++){
    //     let stars = '*'.repeat(splitedWords[i].length)

    //     if(text.includes(stars)){
    //         text = text.replace(stars,splitedWords[i])
    //     }
    // }
    // console.log(text)
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'

)