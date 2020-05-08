function solve(text){

    let firstHalf = text.substr(0,text.length / 2).split('').reverse().join('')
    let secondHalf = text.substr(text.length / 2).split('').reverse().join('')
    
    console.log(firstHalf)
    console.log(secondHalf)


}
solve('tluciffiDsIsihTgnizamAoSsIsihT')