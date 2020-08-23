function charactersInRange(firstChar, secondChar){

    let charCodeOne = firstChar.charCodeAt(0)
    let charCodeTwo = secondChar.charCodeAt(0)

    let str = '';
    if(charCodeOne < charCodeTwo){
    for(let i = charCodeOne + 1 ; i < charCodeTwo;i++){
        str += String.fromCharCode(i) + ' '
        
    }
}else{
    for(let i = charCodeTwo + 1; i < charCodeOne;i++){
        str += String.fromCharCode(i) + ' '
    }
}
   return str;
}
console.log(charactersInRange('C',
'#'


))