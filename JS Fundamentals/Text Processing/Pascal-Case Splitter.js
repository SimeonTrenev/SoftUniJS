function pascalCaseSplitter(string){

let splittedWords = '';

let stringetSplitter = string.split('')
for(let chars of stringetSplitter){
    let asciiChars = chars.charCodeAt(0)
    if(asciiChars >= 65 && asciiChars <= 90){
        splittedWords += `, ${chars}`
    }else{
        splittedWords += chars
    }
}
    if(splittedWords.startsWith(',')){
        let myWords = splittedWords.substring(2)
        console.log(myWords)
    }

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')