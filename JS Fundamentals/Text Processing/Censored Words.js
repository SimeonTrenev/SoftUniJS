function censoredWords(text, word){

    let starsLength = '*'.repeat(word.length)
    
    while(text.includes(word)){
        text = text.replace(word,starsLength)
    }
    console.log(text)
}
censoredWords("A small sentence with some words", "small")