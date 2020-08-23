function modernTime(string){

    string = string.split(' ')
    let words = ''

    string.forEach(word => {
        if(word.startsWith('#') && word.length > 1){
            word = word.substring(1)
            words += `${word} `
        }
        
        return words
    });
    
    words = words.split(' ')

    words.forEach(word => {
        let charedWord = word.charCodeAt(0)
        if(charedWord >= 65 && charedWord <= 90){
            console.log(word)
        }else if(charedWord >= 97 && charedWord <= 122){
            console.log(word)
        }
    })
}
modernTime('Nowadays everyone uses # to tag a #special word in #socialMedia')