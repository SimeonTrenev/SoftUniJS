function solve(text, word){
    let count = 0
    let splittedText = text.split(' ')
    
    for(let el of splittedText){
        if(el === word){
            count++;
        }
    }
   console.log(count)
}
solve("This is a word and it also is a sentence",
"is"
)