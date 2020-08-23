function rightPlace(word, missingPart, matchedWord){

    let rightWord = word.replace('_',missingPart)
    
    if(rightWord === matchedWord){
        console.log('Matched')
    }else{
        console.log('Not Matched')
    }
    
    }
rightPlace('Str_ng', 'i', 'String')