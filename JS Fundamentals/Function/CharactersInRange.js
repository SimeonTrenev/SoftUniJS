function characterInRange(firstChar, secondChar){

    let start = firstChar.charCodeAt(0);
    let end = secondChar.charCodeAt(0);
    let temp = end
    if(start > end){
        end = start;
        start = temp;
    }
    let result = '';
    for(let i = start + 1; i < end;i++){
        result += String.fromCharCode(i) + ' '
    }
    return result
}
let result = characterInRange('C',
'#'
)
console.log(result)
