function solve(word, text){

    while(text.indexOf(word) >= 0){
        text = text.replace(word, "")
    }
console.log(text)

}
solve("ice",
    "kicegiciceeb"
    )