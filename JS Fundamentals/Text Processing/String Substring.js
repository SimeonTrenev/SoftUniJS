function stringSubstring(word, text){

    word = word.toLowerCase();
    let isFound = false;

    text.split(' ').forEach(words => {
        let currentWord = words.toLowerCase()
        if(currentWord === word){
            console.log(word)
            isFound = true;
            return;
        }
    });

    if(!isFound){
        console.log(`${word} not found!`)
    }

}
stringSubstring('javascript',
'JavaScript is the best programming language'
)