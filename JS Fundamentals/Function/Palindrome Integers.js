function solve(array){

    function reversed(number){
        let str = '';
        while(number > 0){
            let currentNumber = number % 10;
            str += currentNumber
            number = parseInt(number / 10);
        }
        return str;
    }
    
    let arr = [];
    for(let i = 0; i < array.length;i++){
        if(array[i] == reversed(array[i])){
            arr.push(true);
        }else{
            arr.push(false);
        }
    }
    return arr.join('\n');


}
console.log(solve([123,323,421,121]))


