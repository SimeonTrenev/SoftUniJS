function printAndSum(a, b){
let sum = 0
let numbers = ''
for(let i = a; i <= b;i++){
    numbers += `${i} `
    sum += i
}
console.log(numbers)
console.log(`Sum: ${sum}`)
}
printAndSum(5, 10)