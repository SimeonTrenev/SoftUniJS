function solve(word, text){

    let count = 0
    let caseInSensitive = text.toLowerCase().split(' ').forEach(element => {
        if(word === element){
            console.log(word)
            count++
        }
    });
    if(count === 0){
        console.log(`${word} not found!`)
    }
    

}
solve('python',
'JavaScript is the best programming language'

)