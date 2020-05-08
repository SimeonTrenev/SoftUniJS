function sumFirstAndLast(array = []){

    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop())
    let sum = firstElement + lastElement
    return sum;
}
let result = sumFirstAndLast(['20', '30', '40'])
console.log(result)