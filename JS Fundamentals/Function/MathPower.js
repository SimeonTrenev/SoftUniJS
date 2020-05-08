function mathPower(number, raising){

    let sum = 1;

    for(let i = 0; i < raising;i++){
        sum = sum * number
        
    }
    return sum
}
let result = mathPower(2, 8)
console.log(result)