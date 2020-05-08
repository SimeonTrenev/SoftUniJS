function palindromeIntegers(array){

    function isPalidrom(text){
        let len = text.length;
        let isPalindromBoolean = true;
        for(let i = 0; i < Math.floor(len / 2);i++){
            if(text[i] !== text[len - 1 - i]){
                isPalindromBoolean = false;
                break;
            }
            
        }
        return isPalindromBoolean
    }
    for(num of array){
        console.log(isPalidrom(num.toString()));
    }
}
palindromeIntegers([123,323,421,121])