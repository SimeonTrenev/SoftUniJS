function cutAndReverse(string){

    let indexOfFirstHalfOfString = string.length / 2;
    let firstHalfOfString = string.substring(0,indexOfFirstHalfOfString).split('').reverse().join('')
    let secondHalfOfString = string.substring(indexOfFirstHalfOfString).split('').reverse().join('')
    let wordOfFirstHalf = '';
    let wordOfSecondHalf = '';
    console.log(firstHalfOfString)
    console.log(secondHalfOfString)
    // for(let i = firstHalfOfString.length - 1; i >= 0; i--){
    //     let currentChar = firstHalfOfString[i]
    //     wordOfFirstHalf += currentChar
    // }
    
    // for(let i = secondHalfOfString.length - 1;i >= 0;i--){
    //     let currentChar = secondHalfOfString[i]
    //     wordOfSecondHalf += currentChar
    // }
    // console.log(wordOfFirstHalf)
    // console.log(wordOfSecondHalf)

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')