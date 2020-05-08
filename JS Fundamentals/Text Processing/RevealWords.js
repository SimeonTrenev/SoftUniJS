function solve(words, text){

    let separatedWords = words.split(', ')
    text.split(' ').forEach(word => {
        let asterisk = '*'.repeat(word.length)
        if(word === asterisk){
            text = text.replace(word, separatedWords.find((w) => w.length === asterisk.length));
        }
    });
    console.log(text)
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)